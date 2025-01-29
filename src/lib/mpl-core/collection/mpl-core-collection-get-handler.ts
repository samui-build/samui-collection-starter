import { fetchCollectionV1 } from '@metaplex-foundation/mpl-core'
import { publicKey } from '@metaplex-foundation/umi'

import { getSamuiContext } from "../../get-samui-context.js";
import { SamuiConfig } from "../../parse-solana-config.js";

export async function mplCoreCollectionGetHandler(collection: string, options: SamuiConfig) {
  const {explorerUrl, umi} = await getSamuiContext(options)


  try {
    const result = await fetchCollectionV1(umi, publicKey(collection))
    console.log(result)
    console.log(` => View Collection: ${explorerUrl(collection)}`)
  } catch (error) {
    console.error(`Error fetching collection: ${error}`)
  }
}
