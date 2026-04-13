import { defineConfig } from 'vite';
import { resolve } from 'path';
import reactPlugin from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        reactPlugin({
            exclude: /\.stories\.tsx?$/
        })
    ],
    resolve: {
        alias: {
            src: resolve(import.meta.dirname, '..', 'src')
        }
    }
});
