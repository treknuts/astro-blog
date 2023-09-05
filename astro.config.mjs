import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://nobody-asked.netlify.app",
  integrations: [svelte()],
});
