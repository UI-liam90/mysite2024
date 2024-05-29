import { loadEnv } from "vite";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
const { PUBLIC_WORDPRESS_API_URL, PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

if (!URL.canParse(PUBLIC_WORDPRESS_API_URL)) {
    throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables PUBLIC_WORDPRESS_API_URL.
  `);
}
const { protocol, hostname, port, pathname } = new URL(`${PUBLIC_WORDPRESS_API_URL}`);

// https://astro.build/config
export default defineConfig({
    site: PUBLIC_SITE_URL,
    integrations: [react(), sitemap()],
    // image: {
    //     domains: [hostname, "secure.gravatar.com"],
    // },
    prefetch: {
        prefetchAll: false,
    },
    output: "hybrid",
    adapter: netlify({
        cacheOnDemandPages: true,
    }),
});
