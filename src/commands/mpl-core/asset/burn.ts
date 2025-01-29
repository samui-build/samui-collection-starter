import { Args } from '@oclif/core'

import { BaseCommand } from "../../../base-command.js";
import { isSolanaAddress } from "../../../lib/is-solana-address.js";
import { mplCoreAssetBurnHandler } from "../../../lib/mpl-core/asset/mpl-core-asset-burn-handler.js";

export default class MplCoreAssetBurn extends BaseCommand<typeof MplCoreAssetBurn> {
  static override args = {
    asset: Args.string({description: 'Asset address', required: true}),
  }
  static override description = 'Burn an asset'

  public async run(): Promise<void> {
    const {args} = await this.parse(MplCoreAssetBurn)

    const {asset} = args
    if (!asset) {
      throw new Error('Missing asset')
    }

    if (!isSolanaAddress(asset)) {
      throw new Error('Asset must be a valid Solana address')
    }


    const {config} = this.getSamuiContext()
    await mplCoreAssetBurnHandler(asset, config)
  }
}
