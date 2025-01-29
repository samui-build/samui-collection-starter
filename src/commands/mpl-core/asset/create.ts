import { Args, Flags } from '@oclif/core'

import { BaseCommand } from "../../../base-command.js";
import { isSolanaAddress } from '../../../lib/is-solana-address.js';
import { mplCoreAssetCreateHandler } from "../../../lib/mpl-core/asset/mpl-core-asset-create-handler.js";

export default class MplCoreAssetCreate extends BaseCommand<typeof MplCoreAssetCreate> {
  static override args = {
    collection: Args.string({description: 'Collection address', required: true}),
  }
  static override description = 'Create an asset in a collection'
  static override flags = {
    name: Flags.string({char: 'n', description: 'Asset name', required: true}),
    uri: Flags.string({char: 'u', description: 'Asset Metadata URI', required: true}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(MplCoreAssetCreate)


    const {collection} = args

    if (!collection) {
      throw new Error('Missing collection')
    }

    if (!isSolanaAddress(collection)) {
      throw new Error('Collection must be a valid Solana address')
    }

    const {name, uri} = flags

    if (!name) {
      throw new Error('Missing name')
    }

    if (!uri) {
      throw new Error('Missing uri')
    }

    if (!uri.startsWith('https://') && !uri.startsWith('http://')) {
      throw new Error('URI must start with https:// or http://')
    }


    const {config} = this.getSamuiContext()
    await mplCoreAssetCreateHandler(collection, {...config, name, uri})

  }
}
