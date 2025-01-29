import { createSignerFromKeypair, signerIdentity } from '@metaplex-foundation/umi'
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { fromWeb3JsKeypair } from '@metaplex-foundation/umi-web3js-adapters';
import { Keypair } from "@solana/web3.js";

import { SamuiConfig } from "./parse-solana-config.js";


export function getUmi({config, keypair}: { config: SamuiConfig, keypair: Keypair }) {
  const umi = createUmi(config.rpcUrl, {commitment: 'confirmed'})
  const signer = createSignerFromKeypair(umi, fromWeb3JsKeypair(keypair))
  umi.use(signerIdentity(signer, true))
  return umi
}

export type Umi = ReturnType<typeof getUmi>
