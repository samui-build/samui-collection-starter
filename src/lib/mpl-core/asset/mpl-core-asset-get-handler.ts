import { collectionAddress, fetchAssetV1, fetchCollectionV1 } from '@metaplex-foundation/mpl-core'
import { publicKey } from '@metaplex-foundation/umi'

import { getSamuiContext } from "../../get-samui-context.js";
import { SamuiConfig } from "../../parse-solana-config.js";

export async function mplCoreAssetGetHandler(assetAddress: string, options: SamuiConfig) {
  const {explorerUrl, umi} = await getSamuiContext(options)

  try {
    const asset = await fetchAssetV1(umi, publicKey(assetAddress))
    // TODO: Make fetching collection optional
    const assetCollectionAddress = collectionAddress(asset)

    if (assetCollectionAddress) {
      const collection = await fetchCollectionV1(umi, assetCollectionAddress)
      console.log(' => Collection:', collection)
      console.log(` => View Collection: ${explorerUrl(collection.publicKey)}`)
    }

    console.log(` => Asset:`, asset)
    console.log(` => View Asset: ${explorerUrl(asset.publicKey)}`)
  } catch (error) {
    console.error(`Error fetching asset: ${error}`)
  }
}
