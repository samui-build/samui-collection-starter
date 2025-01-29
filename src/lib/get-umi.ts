import { createSignerFromKeypair, signerIdentity } from '@metaplex-foundation/umi'
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { Keypair } from "@solana/web3.js";

import { SamuiConfig } from "../base-command.js";

export function getUmi({config}: { config: SamuiConfig }) {
  const umi = createUmi(config.rpcUrl, {commitment: 'confirmed'})
  const keypairBuffer = Keypair.fromSecretKey(new Uint8Array(JSON.parse(config.signerSecretKey))).secretKey
  const signer = createSignerFromKeypair(umi, umi.eddsa.createKeypairFromSecretKey(keypairBuffer))
  umi.use(signerIdentity(signer))
  return umi
}

export type Umi = ReturnType<typeof getUmi>
