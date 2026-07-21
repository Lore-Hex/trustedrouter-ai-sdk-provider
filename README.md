# @trustedrouter/ai-sdk-provider

[TrustedRouter](https://trustedrouter.com) provider for the
[Vercel AI SDK](https://ai-sdk.dev). TrustedRouter is an OpenAI-compatible LLM
router that serves many models behind one endpoint through an open-source,
verifiable attested gateway. It does not log prompts or outputs by default.

## Install

```bash
npm install @trustedrouter/ai-sdk-provider ai
```

## Use

```ts
import { trustedrouter } from '@trustedrouter/ai-sdk-provider';
import { generateText } from 'ai';

// reads TRUSTEDROUTER_API_KEY from the environment
const { text } = await generateText({
  model: trustedrouter('trustedrouter/zdr'),
  prompt: 'Write a haiku about verifiable computing.',
});
```

Or configure explicitly:

```ts
import { createTrustedRouter } from '@trustedrouter/ai-sdk-provider';

const trustedRouter = createTrustedRouter({
  apiKey: process.env.TRUSTEDROUTER_API_KEY,
  // baseURL: 'https://api.trustedrouter.com/v1',
});
```

Routing model ids include `trustedrouter/auto`, `trustedrouter/zdr` (zero data
retention), and `trustedrouter/confidential`, plus individually addressable
models. The live catalog is at `https://trustedrouter.com/v1/models`.

## License

MIT
