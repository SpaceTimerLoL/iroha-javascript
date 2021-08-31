import { defineConfig, RollupOptions } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import path from 'path';
import nodeResolve from '@rollup/plugin-node-resolve';

function defineDefaultCjsEsmDts(params: { packageDir: string; external?: string[] }): RollupOptions[] {
    const { packageDir, external } = params;

    const inputTs = path.resolve(__dirname, `../packages/${packageDir}/src/lib.ts`);
    const inputDts = path.resolve(__dirname, `../.declaration/${packageDir}/src/lib.d.ts`);
    const distDir = path.resolve(__dirname, `../packages/${packageDir}/dist`);

    return [
        {
            input: inputTs,
            external,
            plugins: [esbuild(), nodeResolve()],
            output: [
                {
                    file: path.join(distDir, 'lib.esm.js'),
                    format: 'esm',
                },
                {
                    file: path.join(distDir, 'lib.cjs.js'),
                    format: 'cjs',
                },
            ],
        },
        {
            input: inputDts,
            external,
            plugins: [dts()],
            output: {
                file: path.join(distDir, 'lib.d.ts'),
                format: 'esm',
            },
        },
    ];
}

export default defineConfig([
    ...defineDefaultCjsEsmDts({
        packageDir: 'iroha-client',
        external: ['@iroha2/crypto', '@iroha2/data-model', 'emittery', 'ws', 'axios'],
    }),
    ...defineDefaultCjsEsmDts({
        packageDir: 'iroha-data-model',
        external: ['@scale-codec/enum', '@scale-codec/namespace'],
    }),
]);
