// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
  scopedStyleStrategy: 'class',
  integrations: [
    tailwind(),
    // relativeLinks(),
  ],
  devToolbar: {
    enabled: false,
  },
});
