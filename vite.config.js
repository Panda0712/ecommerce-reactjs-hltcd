import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/assets/styles"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@svg": path.resolve(__dirname, "src/assets/icons/svgs"),
    },
  },
});
