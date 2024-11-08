import {defineConfig} from "@solidjs/start/config";
import {nxViteTsPaths} from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';
import {Plugin} from 'vite';

function fixVanillaExtract(): Plugin {
  const basePath = `${process.cwd()}/`;
  return {
    name: 'fix-vanilla-extract',
    renderChunk(code) {
      console.log(process.cwd())
      if (code.includes(basePath)) {
        return code.replaceAll(basePath, '')
      }
      return null;
    },
  };
}
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
      fixVanillaExtract(),
    ],
    optimizeDeps: {
      exclude: [
        '@modular-forms/solid',
      ],
    },
  },
});
