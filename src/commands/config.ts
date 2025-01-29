import { BaseCommand } from "../base-command.js";

export default class Config extends BaseCommand<typeof Config> {
  static override description = 'Show the configuration of the CLI'

  public async run(): Promise<void> {
    this.log(`Configuration:`)
    for (const [flag, value] of Object.entries(this.flags)) {
      this.log(`  => ${flag}: ${value}`)
    }

    const {cluster, explorerUrl, genesisHash, keypair} = this.getSamuiContext()

    this.log(`  => cluster: ${cluster}`)
    this.log(`  => genesisHash: ${genesisHash}`)
    this.log(`  => keypair: ${keypair.publicKey.toBase58()} ${explorerUrl(keypair.publicKey.toBase58())}`)
  }
}
