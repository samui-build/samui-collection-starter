import { isSolanaAddress } from "./is-solana-address.js";
import { isSolanaSignature } from "./is-solana-signature.js";

export function getExplorerPath(input: string) {
  if (input.includes('/')) {
    return input;
  }

  if (isSolanaAddress(input)) {
    return `/address/${input}`;
  }

  if (isSolanaSignature(input)) {
    return `/tx/${input}`;
  }

  const parsed = Number.parseInt(input, 10);
  if (!Number.isNaN(parsed)) {
    // Estimate if the number is a block or epoch to avoid making an async request
    if (parsed < 1000) {
      return `/epoch/${parsed}`;
    }

    return `/block/${parsed}`;

  }

  return input;

}
