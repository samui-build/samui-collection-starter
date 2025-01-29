import {
  type CollectionV1,
  deserializeCollectionV1,
  getCollectionV1GpaBuilder,
  Key,
} from '@metaplex-foundation/mpl-core'
import { publicKey } from '@metaplex-foundation/umi'

import { getSamuiContext } from "../../get-samui-context.js";
import { SamuiConfig } from "../../parse-solana-config.js";


export async function mplCoreCollectionListHandler(authority: string, options: SamuiConfig) {
  const {explorerUrl, keypair, umi} = await getSamuiContext(options)


  authority = authority ?? keypair.publicKey.toBase58()

  try {
    const accounts = await getCollectionV1GpaBuilder(umi)
      .whereField('updateAuthority', publicKey(authority))
      .whereField('key', Key.CollectionV1)
      .get()
    // eslint-disable-next-line no-warning-comments
    // TODO use getDeserialized() instead of the following temporary workaround for devnet breaking changes
    const collections = accounts
      .map((account) => {
        try {
          return deserializeCollectionV1(account)
        } catch {
          return null
        }
      })
      .filter(Boolean) as CollectionV1[]

    for (const item of collections) {
      console.log(`Collection: ${item.name} ${item.publicKey} `)
      console.log(` => Minted ${item.numMinted}`)
      console.log(` => Current Size ${item.currentSize}`)
      console.log(` => Explorer ${explorerUrl(item.publicKey)}`)
      console.log(` => Metadata ${item.uri}`)
    }

    if (collections.length === 0) {
      console.log(`No collections found for authority ${authority}`)
    }
  } catch (error) {
    console.error(`Error fetching collection: ${error}`)
  }
}
