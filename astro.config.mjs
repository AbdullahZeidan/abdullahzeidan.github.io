import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
    site: 'https://abdullahzeidan.github.io',
    // Enable React to support React JSX components.
    integrations: [react(), tailwind(), compress()],
});
