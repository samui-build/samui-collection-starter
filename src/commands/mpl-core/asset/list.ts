import { Args } from '@oclif/core'

import { BaseCommand } from "../../../base-command.js";
import { isSolanaAddress } from "../../../lib/is-solana-address.js";
import { mplCoreAssetListHandler } from "../../../lib/mpl-core/asset/mpl-core-asset-list-handler.js";

export default class MplCoreAssetList extends BaseCommand<typeof MplCoreAssetList> {
  static override args = {
    collection: Args.string({description: 'Collection address', required: true}),
  }
  static override description = 'List assets by collection'


  public async run(): Promise<void> {
    const {args} = await this.parse(MplCoreAssetList)
    const {collection} = args

    if (!collection) {
      throw new Error('Missing collection')
    }

    if (!isSolanaAddress(collection)) {
      throw new Error('Collection must be a valid Solana address')
    }


    const {config} = this.getSamuiContext()
    await mplCoreAssetListHandler(collection, config)
  }
}
