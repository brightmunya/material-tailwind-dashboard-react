import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/material-tailwind-dashboard-react",
  resolve: {
    alias: [{ find: "@", replacement: ".." }],
  },
  
});
