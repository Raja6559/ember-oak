import { defineConfig } from '@lovable.dev/vite-tanstack-config';

// Match the established demos' TanStack Start / Nitro Cloudflare build pipeline.
export default defineConfig({ vite: { server: { port: 8085, strictPort: true } } });
