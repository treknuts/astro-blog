import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://nobody-asked.netlify.app",
  image: {
    domains: ["images.unsplash.com", "astro.build"],
    remotePatterns: [{ protocol: "https" }],
    service: {
      entrypoint: "astro/assets/services/noop",
    },
  },
  integrations: [svelte()],
});
