import type { KeypairSigner } from '@metaplex-foundation/umi'

import { type CollectionV1, create } from '@metaplex-foundation/mpl-core'
import { base58 } from '@metaplex-foundation/umi/serializers'

import type { Umi } from './get-umi.ts'

export async function createAssetHandler({
  asset,
  assetName,
  assetUri,
  collection,
  umi,
}: {
  asset: KeypairSigner
  assetName: string
  assetUri: string
  collection: CollectionV1
  umi: Umi
}): Promise<{
  signature: string
}> {
  const tx = await create(umi, {
    asset,
    collection,
    name: assetName,
    uri: assetUri,
  }).sendAndConfirm(umi)

  const signature = base58.deserialize(tx.signature)[0]

  return { signature }
}
