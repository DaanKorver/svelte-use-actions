import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import { mdSvexOptions } from './mdsvex.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdSvexOptions)],
	kit: {
		adapter: adapter(),
		alias: {
			'@components/*': 'src/components',
			'@/*': 'src'
		}
	}
};

export default config;
