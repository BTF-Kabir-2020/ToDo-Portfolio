// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],

  // Global SEO and Meta Tags
  app: {
    head: {
      title:
        "BTF Kabir - Full-Stack Developer | Nuxt.js & Vue.js Expert",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Professional Full-Stack Developer specializing in Nuxt.js, Vue.js and Tailwind CSS. Building modern, optimized web applications with cutting-edge technologies.",
        },
        {
          name: "keywords",
          content:
            "BTF Kabir, Full-Stack Developer, Nuxt.js, Vue.js, Tailwind CSS, TypeScript, Web Development, Frontend, Backend, JavaScript, SEO, Performance",
        },
        { name: "author", content: "BTF Kabir" },
        { name: "robots", content: "index, follow" },
        { name: "language", content: "en" },

        // Open Graph
        { property: 'og:title', content: 'BTF Kabir - Full-Stack Developer' },
        { property: 'og:description', content: 'Professional Full-Stack Developer specializing in Nuxt.js, Vue.js, and Tailwind CSS.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-image.jpg' },
        { property: 'og:site_name', content: 'BTF Kabir Portfolio' },
        
        // Social Media
        { name: 'github:url', content: 'https://github.com/BTF-Kabir-2020' },
        { name: 'email', content: 'PouyaGH2080@gmail.com' },
        
        // Additional SEO
        { name: 'theme-color', content: '#0ea5e9' },
        { name: 'msapplication-TileColor', content: '#0ea5e9' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
              link: [
          { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
          { rel: "apple-touch-icon", sizes: "180x180", href: "https://github.githubassets.com/apple-touch-icon-180x180.png" },
          { rel: "icon", type: "image/png", sizes: "192x192", href: "https://github.githubassets.com/app-icon-192.png" },
          { rel: "icon", type: "image/png", sizes: "512x512", href: "https://github.githubassets.com/app-icon-512.png" },
          { rel: "manifest", href: "/site.webmanifest" },
        ],
    },
  },

  // Hybrid rendering configuration
  nitro: {
    prerender: {
      routes: ["/", "/about", "/contact", "/todos"],
    },
  },

  // Experimental features for better performance
  experimental: {
    payloadExtraction: true,
  },

  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
});
