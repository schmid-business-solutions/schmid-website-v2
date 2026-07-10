// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://ivanschmid.com',
	publicDir: './static-src',
	outDir: './public',
	vite: {
		ssr: {
			external: ['svgo']
		}
	}
});
