import { defineConfig } from 'vite';

export default defineConfig({
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
            },
        },
    },
    preview: {
        host: '0.0.0.0',
        port: process.env.PORT ? parseInt(process.env.PORT) : 4173
    }
});