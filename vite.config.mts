import { defineConfig } from 'vite';
import { resolve } from 'path';
import pkg from './package.json';
import reactPlugin from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import terser from '@rollup/plugin-terser';

const pluginsArray = [dts({ rollupTypes: true })];
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    return {
        plugins: [
            reactPlugin({
                exclude: /\.stories\.tsx?$/
            }),
            ...pluginsArray
        ],
        publicDir: command === 'build' ? false : 'public',
        resolve: {
            alias: {
                src: resolve(import.meta.dirname, 'src')
            }
        },
        build: {
            commonjsOptions: {
                exclude: /\.stories\.(t|j)sx?$/
            },
            lib: {
                entry: resolve(import.meta.dirname, 'src', 'index.ts'),
                formats: ['es', 'umd'],
                fileName: (ext) => `index.${ext}.js`,
                name: '@bmunozg/react-image-area'
            },
            rollupOptions: {
                external: [
                    ...Object.keys(pkg.peerDependencies),
                    /\.stories\.tsx?$/
                    // add dependecies if exist
                ],
                output: {
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM'
                    }
                },
                plugins: [terser()]
            }
            // target: 'esnext',
            // sourcemap: true,
            // emptyOutDir: true
        }
    };
});
