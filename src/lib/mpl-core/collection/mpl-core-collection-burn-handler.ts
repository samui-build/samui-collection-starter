import { burnCollectionV1, fetchCollectionV1 } from '@metaplex-foundation/mpl-core'
import { publicKey } from '@metaplex-foundation/umi'
import { base58 } from '@metaplex-foundation/umi/serializers'

import { getSamuiContext } from "../../get-samui-context.js";
import { SamuiConfig } from "../../parse-solana-config.js";

export async function mplCoreCollectionBurnHandler(collection: string, options: SamuiConfig) {
  const {explorerUrl, umi} = await getSamuiContext(options)

  const found = await fetchCollectionV1(umi, publicKey(collection))
  console.log(found)

  if (found.numMinted > 0 && found.currentSize > 0) {
    // TODO: Add a confirmation prompt
    console.log(`Collection ${collection} is not empty.`)
    return
  }

  try {
    const result = await burnCollectionV1(umi, {
      collection: publicKey(collection),
      compressionProof: null,
    }).sendAndConfirm(umi)
    const [signature] = base58.deserialize(result.signature)
    console.log(`Collection: ${explorerUrl(collection)}`)

    console.log(` => View Transaction: ${explorerUrl(signature)}`)
  } catch (error) {
    console.error(`Error fetching collection: ${error}`)
  }
}
