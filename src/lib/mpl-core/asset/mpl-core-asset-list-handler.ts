import { deserializeAssetV1, getAssetV1GpaBuilder, Key, updateAuthority } from '@metaplex-foundation/mpl-core'
import { publicKey } from '@metaplex-foundation/umi'

import { getSamuiContext } from "../../get-samui-context.js";
import { SamuiConfig } from "../../parse-solana-config.js";

export async function mplCoreAssetListHandler(collection: string, options: SamuiConfig) {
  const {explorerUrl, umi} = await getSamuiContext(options)

  try {
    const assets = await getAssetV1GpaBuilder(umi)
      .whereField('updateAuthority', updateAuthority('Collection', [publicKey(collection)]))
      .whereField('key', Key.AssetV1)
      .get()

    if (assets.length === 0) {
      console.log(`No assets found in collection ${collection}`)
      return
    }

    const items = assets.map((account) => {
      try {
        return deserializeAssetV1(account)
      } catch (error) {
        console.error(`Error deserializing asset: ${error}`)
        return null
      }
    })

    for (const item of items) {
      if (!item) {
        continue
      }

      console.log(`Asset: ${item.name} ${item.publicKey} `)
      console.log(` => Explorer ${explorerUrl(item.publicKey)}`)
      console.log(` => Metadata ${item.uri}`)
    }
  } catch (error) {
    console.error(`Error fetching collection: ${error}`)
  }
}
