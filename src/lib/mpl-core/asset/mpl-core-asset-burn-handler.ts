import { burnV1, collectionAddress, fetchAssetV1 } from '@metaplex-foundation/mpl-core'
import { publicKey } from '@metaplex-foundation/umi'
import { base58 } from '@metaplex-foundation/umi/serializers'

import { getSamuiContext } from "../../get-samui-context.js";
import { SamuiConfig } from "../../parse-solana-config.js";

export async function mplCoreAssetBurnHandler(assetAddress: string, options: SamuiConfig) {
  const {explorerUrl, umi} = await getSamuiContext(options)


  const asset = await fetchAssetV1(umi, publicKey(assetAddress))
  console.log(` => Asset:`, asset)
  console.log(` => View Asset: ${explorerUrl(asset.publicKey)}`)

  try {
    const result = await burnV1(umi, {asset: asset.publicKey, collection: collectionAddress(asset)}).sendAndConfirm(
      umi,
    )
    const [signature] = base58.deserialize(result.signature)
    console.log(` => View Transaction: ${explorerUrl(signature)}`)
  } catch (error) {
    console.error(`Error fetching asset: ${error}`)
  }
}
