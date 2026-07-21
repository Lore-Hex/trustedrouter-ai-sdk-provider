import {
  createOpenAICompatible,
  type OpenAICompatibleProvider,
} from '@ai-sdk/openai-compatible';

export interface TrustedRouterProviderSettings {
  /**
   * TrustedRouter API key. Defaults to the TRUSTEDROUTER_API_KEY
   * environment variable.
   */
  apiKey?: string;
  /**
   * Base URL for API calls. Defaults to https://api.trustedrouter.com/v1.
   */
  baseURL?: string;
  /**
   * Custom headers to include in requests.
   */
  headers?: Record<string, string>;
}

export type TrustedRouterProvider = OpenAICompatibleProvider;

const DEFAULT_BASE_URL = 'https://api.trustedrouter.com/v1';

/**
 * Create a TrustedRouter provider instance.
 */
export function createTrustedRouter(
  options: TrustedRouterProviderSettings = {},
): TrustedRouterProvider {
  return createOpenAICompatible({
    name: 'trustedrouter',
    baseURL: options.baseURL ?? DEFAULT_BASE_URL,
    apiKey:
      options.apiKey ??
      (typeof process !== 'undefined'
        ? process.env.TRUSTEDROUTER_API_KEY
        : undefined),
    headers: options.headers,
  });
}

/**
 * Default TrustedRouter provider instance, configured from
 * TRUSTEDROUTER_API_KEY.
 */
export const trustedrouter = createTrustedRouter();
