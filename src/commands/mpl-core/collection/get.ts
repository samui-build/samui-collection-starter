import { Args } from '@oclif/core'

import { BaseCommand } from "../../../base-command.js";
import { isSolanaAddress } from "../../../lib/is-solana-address.js";
import { mplCoreCollectionGetHandler } from "../../../lib/mpl-core/collection/mpl-core-collection-get-handler.js";

export default class MplCoreCollectionGet extends BaseCommand<typeof MplCoreCollectionGet> {
  static override args = {
    collection: Args.string({description: 'Collection address', required: true}),
  }
  static override description = 'Get a collection'


  public async run(): Promise<void> {
    const {args} = await this.parse(MplCoreCollectionGet)

    const {collection} = args

    if (!collection) {
      throw new Error('Missing collection')
    }

    if (!isSolanaAddress(collection)) {
      throw new Error('Collection must be a valid Solana address')
    }

    const {config} = this.getSamuiContext()

    await mplCoreCollectionGetHandler(collection, config)
  }
}
