import { Args } from '@oclif/core'

import { BaseCommand } from "../../../base-command.js";
import { isSolanaAddress } from "../../../lib/is-solana-address.js";
import { mplCoreAssetGetHandler } from "../../../lib/mpl-core/asset/mpl-core-asset-get-handler.js";

export default class MplCoreAssetGet extends BaseCommand<typeof MplCoreAssetGet> {
  static override args = {
    asset: Args.string({description: 'Asset address', required: true}),
  }
  static override description = 'Get an asset'


  public async run(): Promise<void> {
    const {args, flags} = await this.parse(MplCoreAssetGet)


    const {asset} = args
    if (!asset) {
      throw new Error('Missing asset')
    }

    if (!isSolanaAddress(asset)) {
      throw new Error('Asset must be a valid Solana address')
    }

    const {config} = this.getSamuiContext()
    await mplCoreAssetGetHandler(asset, config)
  }
}
