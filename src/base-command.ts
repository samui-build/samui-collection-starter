import { Command, Flags, Interfaces } from '@oclif/core'
import 'dotenv/config'
import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'

import { getSamuiContext, SamuiContext } from "./lib/get-samui-context.js";
import { SamuiConfig } from "./lib/parse-solana-config.js";


export type Flags<T extends typeof Command> = Interfaces.InferredFlags<(typeof BaseCommand)['baseFlags'] & T['flags']>
export type Args<T extends typeof Command> = Interfaces.InferredArgs<T['args']>

export abstract class BaseCommand<T extends typeof Command> extends Command {
  static baseFlags = {
    'keypair-path': Flags.file({
      aliases: ['k'],
      default: '~/.config/solana/id.json',
      env: 'SAMUI_KEYPAIR_PATH',
      helpGroup: 'GLOBAL',
      summary: 'Specify the Solana keypair path.',
    }),
    'rpc-url': Flags.url({
      aliases: ['u', 'url'],
      default: new URL('https://api.devnet.solana.com'),
      env: 'SAMUI_RPC_URL',
      helpGroup: 'GLOBAL',
      summary: 'Specify the Solana RPC URL.',
    }),
    'rpc-url-ws': Flags.url({
      aliases: ['w', 'ws'],
      env: 'SAMUI_RPC_URL_WS',
      helpGroup: 'GLOBAL',
      optional: true,
      summary: 'Specify the Solana RPC websocket URL, default will be inferred from the RPC URL.',
    }),
  }
  static strict = true
  protected args!: Args<T>
  protected flags!: Flags<T>
  #samui: SamuiContext | undefined

  getSamuiContext(): SamuiContext {
    if (!this.#samui) {
      throw new Error('Missing samui context')
    }

    if (!this.#samui.umi) {
      throw new Error('Missing samui umi client')
    }

    return this.#samui
  }


  async init(): Promise<void> {
    await super.init()
    const {args, flags} = await this.parse({
      args: this.ctor.args,
      baseFlags: (super.ctor as typeof BaseCommand).baseFlags,
      flags: this.ctor.flags,
      strict: this.ctor.strict,
    })
    this.flags = flags as Flags<T>
    this.args = args as Args<T>

    // Make sure we have a keypair path
    this.flags['keypair-path'] = this.flags['keypair-path'] ?? '~/.config/solana/id.json'
    // Normalize the path
    this.flags['keypair-path'] = normalizePath(this.flags['keypair-path'])

    if (!existsSync(this.flags['keypair-path'])) {
      throw new Error(`Keypair file not found: ${this.flags['keypair-path']}`)
    }

    // Read the keypair
    const signerSecretKey = await readFile(this.flags['keypair-path'], 'utf8')

    // Make sure we have an RPC URL for Subscriptions
    this.flags['rpc-url-ws'] =
      // Take the one passed in
      flags['rpc-url-ws'] ??
      // Or replace the http with ws and replace the port for local development
      new URL(flags['rpc-url'].toString().replace('http', 'ws').replace('8899', '8900'))


    const config: SamuiConfig = {
      rpcUrl: this.flags['rpc-url'].toString(),
      rpcUrlSubscriptions: this.flags['rpc-url-ws'].toString(),
      signerSecretKey,
    }
    try {
      this.#samui = await getSamuiContext(config)
    } catch (error) {
      this.logJson({...config, signerSecretKey: 'REDACTED'})
      throw new Error(`Failed to initialize Umi context: ${error}`)
    }
  }

}

function normalizePath(path: string) {
  return path.replace(/^~/, process.env.HOME ?? '')
}

// Patch BigInt so we can log it using JSON.stringify without any errors
;(BigInt.prototype as unknown as { toJSON: () => string }).toJSON = function () {
  return this.toString()
}
