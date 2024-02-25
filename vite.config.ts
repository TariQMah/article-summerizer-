import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Specify TypeScript compiler options
    // See: https://vitejs.dev/config/#tsc
    tsc: {
      // Ignore TypeScript errors and emit files
      noEmitOnError: false,
    },
  },
});
