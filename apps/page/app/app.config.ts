import {defineConfig} from "@solidjs/start/config";
import {nxViteTsPaths} from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';

export default defineConfig({
  server: {
    prerender: {
      crawlLinks: true,
    },
    fs: {
      allow: ['../../..'],
    },
  },
  vite: {
    plugins: [
      nxViteTsPaths(),
      vanillaExtractPlugin(),
    ],
    optimizeDeps: {
      exclude: [
        '@modular-forms/solid',
      ],
    },
  },
});
