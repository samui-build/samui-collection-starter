import { Args } from '@oclif/core'

import { BaseCommand } from "../../../base-command.js";
import { mplCoreCollectionCreateHandler } from "../../../lib/mpl-core/collection/mpl-core-collection-create-handler.js";

export default class MplCoreCollectionCreate extends BaseCommand<typeof MplCoreCollectionCreate> {
  static override args = {
    name: Args.string({description: 'Collection name'}),
    uri: Args.string({description: 'Collection Metadata URI'}),
  }
  static override description = 'Create a collection'

  public async run(): Promise<void> {
    const {args} = await this.parse(MplCoreCollectionCreate)

    const {name} = args
    const {uri} = args

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

    await mplCoreCollectionCreateHandler(name, uri, config)
  }
}
