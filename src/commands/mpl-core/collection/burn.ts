import { Args } from '@oclif/core'

import { BaseCommand } from "../../../base-command.js";
import { isSolanaAddress } from "../../../lib/is-solana-address.js";
import { mplCoreCollectionBurnHandler } from "../../../lib/mpl-core/collection/mpl-core-collection-burn-handler.js";

export default class MplCoreCollectionBurn extends BaseCommand<typeof MplCoreCollectionBurn> {
  static override args = {
    collection: Args.string({description: 'Collection address', required: true}),
  }
  static override description = 'Burn a collection'

  public async run(): Promise<void> {
    const {args} = await this.parse(MplCoreCollectionBurn)

    const {collection} = args

    if (!collection) {
      throw new Error('Missing collection')
    }

    if (!isSolanaAddress(collection)) {
      throw new Error('Collection must be a valid Solana address')
    }

    const {config} = this.getSamuiContext()


    await mplCoreCollectionBurnHandler(collection, config)
  }
}
