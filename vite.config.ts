import { defineConfig } from 'vite';
import { resolve } from 'path';
import pkg from './package.json';
import reactPlugin from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

const pluginsArray = [dts({ insertTypesEntry: true })];
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
                src: resolve(__dirname, 'src'),
                React: resolve('./node_modules/react'),
                ReactDOM: resolve('./node_modules/react-dom')
            }
            // dedupe: [...Object.keys(pkg.peerDependencies)]
        },
        build: {
            commonjsOptions: {
                exclude: /\.stories\.(t|j)sx?$/
            },
            lib: {
                entry: resolve(__dirname, 'src', 'index.ts'),
                formats: ['es', 'cjs'],
                fileName: (ext) => `index.${ext}.js`
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
                }
            },
            target: 'esnext',
            sourcemap: true,
            emptyOutDir: true
        }
    };
});
