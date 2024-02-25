import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // site: "https://loglosslabs.com",
  site: "loglosslabs.github.io",
  integrations: [tailwind()],
});
