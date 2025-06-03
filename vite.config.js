import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/material-tailwind-dashboard-react",

  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  
});
// for git-pages deployment, replace the base path with your repository name
//   base: "/material-tailwind-dashboard-react",
  