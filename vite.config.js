import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: Set the base to your repo name for GitHub Pages project sites.
// Example: base: "/varshaa-portfolio/"
export default defineConfig({
  plugins: [react()],
  base: "", // <-- change to "/<your-repo>/" after you create the repo
});
