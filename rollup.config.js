import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: "src/index.ts",
    external: ["react"],
    plugins: [
      typescript(),
      babel({
        exclude: "node_modules/**",
      }),
      terser(),
    ],
    output: {
      file: pkg.main,
      format: "umd",
      globals: { react: "React" },
      exports: "named",
      name: "reactRowingBlades",
      esModule: false,
    },
  },
  {
    input: "src/index.ts",
    external: ["react"],
    plugins: [
      typescript(),
      babel({
        exclude: "node_modules/**",
      }),
    ],
    output: {
      file: pkg.module,
      format: "esm",
    },
  },
];
