import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx } from '@crxjs/vite-plugin'
import manifest from './src/manifest.json'
import { fileURLToPath, URL } from 'node:url'
import eslintPlugin from 'vite-plugin-eslint'
const isProd = process.env.NODE_ENV === "production"

const crxOptions = {
    manifest: manifest
}

// https://vitejs.dev/config/
export default defineConfig({

    resolve: {
        alias: {
            '~/': fileURLToPath(new URL('./src', import.meta.url)),
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },

        //import不需要加入后缀
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']

    },
    build: {
        outDir: isProd ? `dist/build/` : 'dist/dev',

        sourcemap: true,


        /*    rollupOptions: {
              input: 'src/content-scripts/index.ts'
            },*/

    },



    plugins: [
        vue(),
        crx(crxOptions),
        eslintPlugin({
            include: ['src/**/*.ts', 'src/*.ts']
        })
    ],
})
