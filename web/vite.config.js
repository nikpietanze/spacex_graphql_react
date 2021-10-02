import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/graphql': 'http://localhost:5000/graphql',
		},
	},
	build: {
		outDir: '../public',
	},
});