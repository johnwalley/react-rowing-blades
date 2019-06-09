import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    external: ['react'],
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      terser(),
    ],
    output: {
      file: pkg.main,
      format: 'umd',
      name: 'reactRowingBlades',
      esModule: false,
    },
  },
  {
    input: 'src/index.js',
    external: ['react'],
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
    ],
    output: {
      file: 'esm/index.js',
      format: 'esm',
    },
  },
];
