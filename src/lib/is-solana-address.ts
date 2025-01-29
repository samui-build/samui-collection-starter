import { PublicKey } from "@solana/web3.js";

export function isSolanaAddress(input: string): boolean {
  try {
    const publicKey = new PublicKey(input);
    return Boolean(publicKey);
  } catch {
    return false;
  }
}