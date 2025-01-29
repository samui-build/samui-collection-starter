import { BaseCommand } from "../base-command.js";

export default class Config extends BaseCommand<typeof Config> {
  static override description = 'Show the configuration of the CLI'

  public async run(): Promise<void> {
    this.log(`Configuration:`)
    for (const [flag, value] of Object.entries(this.flags)) {
      this.log(`  => ${flag}: ${value}`)
    }

    const genesisHash = await this.getUmi().rpc.getGenesisHash()
    this.log(`  => genesisHash: ${genesisHash}`)
  }
}
