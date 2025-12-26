import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import pkg from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: () => pkg.module,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
  plugins: [dts({ rollupTypes: true })],
});
