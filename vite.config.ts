import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Todo-app/",
  build: {
    outDir: "build", // Optional: if you prefer 'build' instead of 'dist'
  },
  plugins: [react()],
});
