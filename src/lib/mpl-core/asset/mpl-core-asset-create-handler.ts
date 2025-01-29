import { fetchCollection } from '@metaplex-foundation/mpl-core'
import { generateSigner, publicKey } from '@metaplex-foundation/umi'

import { createAssetHandler } from '../../create-asset-handler.js';
import { getSamuiContext } from "../../get-samui-context.js";
import { SamuiConfig } from "../../parse-solana-config.js";

export async function mplCoreAssetCreateHandler(
  collectionAddress: string,
  options: SamuiConfig & { name?: string; uri?: string },
) {
  const {explorerUrl, umi} = await getSamuiContext(options)

  console.log(`Signer    : ${umi.identity.publicKey}`)
  console.log(`Collection: ${collectionAddress}`)

  const collection = await fetchCollection(umi, publicKey(collectionAddress))

  // Generate the Asset KeyPair
  const asset = generateSigner(umi)
  const assetName = options.name ?? 'My Asset'
  const assetUri = options.uri ?? 'https://example.com'

  const {signature} = await createAssetHandler({asset, assetName, assetUri, collection, umi})

  console.log(`Transaction: ${explorerUrl(signature)}`)
  console.log(`Asset: ${explorerUrl(asset.publicKey)}`)
}
