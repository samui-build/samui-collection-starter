import { Keypair } from "@solana/web3.js";

import { DetectedSolanaCluster, detectSolanaCluster } from "./detect-solana-cluster.js";
import { getExplorerUrl } from "./get-explorer-url.js";
import { getUmi, Umi } from "./get-umi.js";
import { parseSamuiConfig, SamuiConfig } from "./parse-solana-config.js";


export interface SamuiContext {
  cluster: DetectedSolanaCluster;
  config: SamuiConfig;
  explorerUrl: (path: string) => string;
  genesisHash: string;
  keypair: Keypair
  umi: Umi
}

export async function getSamuiContext(options: SamuiConfig): Promise<SamuiContext> {
  const config = parseSamuiConfig(options);
  const keypair = Keypair.fromSecretKey(new Uint8Array(JSON.parse(config.signerSecretKey)))
  const umi = getUmi({config, keypair});
  const {cluster, genesisHash} = await detectSolanaCluster({config, umi});

  return {
    cluster,
    config,
    explorerUrl: (path: string) => getExplorerUrl(path, cluster),
    genesisHash,
    keypair,
    umi,
  };
}
