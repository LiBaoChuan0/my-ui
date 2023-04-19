import baseConfig from './base.config';
import { defineConfig } from 'vite';

export default defineConfig({
  ...baseConfig,
  base: '/MY-Ui',
  build: {
    outDir: 'docs',
  },
});
