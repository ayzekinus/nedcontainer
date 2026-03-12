import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 'cargotrack' yerine GitHub'daki repo adınızı yazın
const REPO_NAME = "nedcontainer";

export default defineConfig({
  plugins: [react()],
  base: `/${REPO_NAME}/`,
  build: {
    outDir: "dist",
  },
});
