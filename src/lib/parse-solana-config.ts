import * as v from 'valibot';

const schema = v.object({
  rpcUrl: v.pipe(v.string(), v.url('The URL must be a valid')),
  rpcUrlSubscriptions: v.pipe(v.string(), v.url('The URL must be a valid')),
  signerSecretKey: v.pipe(v.string(), v.minLength(10, 'The secret is too short')),
});

export type SamuiConfig = v.InferOutput<typeof schema>;

export function parseSamuiConfig(params: Record<string, string>): SamuiConfig {
  return v.parse(schema, params);
}
