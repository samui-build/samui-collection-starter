import { Umi } from "./get-umi.js";
import { SamuiConfig } from "./parse-solana-config.js";

export type DetectedSolanaCluster = 'custom' | 'devnet' | 'local' | 'mainnet' | 'testnet';

const clusters: Record<string, DetectedSolanaCluster> = {
  '4uhcVJyU9pJkvQyS88uRDiswHXSCkY3zQawwpjk2NsNY': 'testnet',
  '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc147dw2N9d': 'mainnet',
  EtWTRABZaYq6iMfeYKouRu166VU2xqa1wcaWoxPkrZBG: 'devnet',
};

export async function detectSolanaCluster({config, umi,}: { config: SamuiConfig; umi: Umi; }): Promise<{
  cluster: DetectedSolanaCluster;
  genesisHash: string
}> {
  const genesisHash = await umi.rpc.getGenesisHash()

  if (clusters[genesisHash]) {
    return {cluster: clusters[genesisHash], genesisHash};
  }

  return {cluster: config.rpcUrl.toString().includes('localhost') ? 'local' : 'custom', genesisHash};
}
