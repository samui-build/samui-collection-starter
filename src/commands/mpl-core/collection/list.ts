import { Args } from '@oclif/core'

import { BaseCommand } from "../../../base-command.js";
import { mplCoreCollectionListHandler } from "../../../lib/mpl-core/collection/mpl-core-collection-list-handler.js";

export default class MplCoreCollectionList extends BaseCommand<typeof MplCoreCollectionList> {
  static override args = {
    authority: Args.string({description: 'authority to list collections for, defaults to the signer address'}),
  }
  static override description = 'List collections for a given authority'

  public async run(): Promise<void> {
    const {args} = await this.parse(MplCoreCollectionList)
    const {config, keypair} = this.getSamuiContext()

    const authority = args.authority ?? keypair.publicKey.toBase58()

    await mplCoreCollectionListHandler(authority, config)
  }
}
