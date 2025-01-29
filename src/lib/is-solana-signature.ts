import bs58 from "bs58";

export function isSolanaSignature(input: string): boolean {
  try {
    const decoded = bs58.decode(input);
    return decoded.length === 64; // Solana signatures are 64-byte Ed25519 signatures
  } catch {
    return false;
  }
}