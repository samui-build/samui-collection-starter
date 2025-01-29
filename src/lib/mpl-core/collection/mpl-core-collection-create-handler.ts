import { createCollection } from '@metaplex-foundation/mpl-core'
import { generateSigner } from '@metaplex-foundation/umi'
import { base58 } from '@metaplex-foundation/umi/serializers'

import { getSamuiContext } from "../../get-samui-context.js";
import { SamuiConfig } from "../../parse-solana-config.js";

export async function mplCoreCollectionCreateHandler(name: string, uri: string, options: SamuiConfig) {
  const {explorerUrl, umi} = await getSamuiContext(options)

  const collection = generateSigner(umi)

  console.log(` => Collection: ${name}\n    Uri       : ${uri}\n    Address   : ${collection.publicKey}`)
  console.log(` => Signer    : ${umi.identity.publicKey}`)

  const tx = await createCollection(umi, {collection, name, plugins: [], uri}).sendAndConfirm(umi)

  const signature = base58.deserialize(tx.signature)[0]

  console.log(` => View Transaction: ${explorerUrl(signature)}`)
  console.log(` => View Collection: ${explorerUrl(collection.publicKey)}`)
}
