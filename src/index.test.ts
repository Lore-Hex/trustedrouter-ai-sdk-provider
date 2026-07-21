import { describe, expect, it } from 'vitest';
import { createTrustedRouter, trustedrouter } from './index';

describe('createTrustedRouter', () => {
  it('creates chat models with the trustedrouter provider prefix', () => {
    const provider = createTrustedRouter({ apiKey: 'test-key' });
    const model = provider('trustedrouter/zdr');
    expect(model.modelId).toBe('trustedrouter/zdr');
    expect(model.provider).toContain('trustedrouter');
  });

  it('honors a custom baseURL', () => {
    const provider = createTrustedRouter({
      apiKey: 'test-key',
      baseURL: 'https://example.com/v1',
    });
    const model = provider.chatModel('trustedrouter/auto');
    expect(model.modelId).toBe('trustedrouter/auto');
  });

  it('exports a default instance', () => {
    expect(typeof trustedrouter).toBe('function');
  });
});
