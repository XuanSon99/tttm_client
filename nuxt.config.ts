// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: [
    "vuetify/lib/styles/main.sass",
    "assets/css/main.css",
    "assets/css/responsive.css",
  ],
  plugins: ["~/plugins/axios.js", "~/plugins/socialShare.ts"],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@nuxt/image-edge", "nuxt-simple-sitemap", "nuxt-jsonld"],
  // modules: ["@nuxt/image-edge", "sitemap", "nuxt-jsonld"],
  app: {
    head: {
      title: "Tải tiền trên mạng",
      meta: [
        {
          name: "keywords",
          content:
            "Hệ thống CashBack của TTTM. Hoàn phí tối thiểu 50% mọi giao dịch trên MEXC",
        },
        {
          name: "news_keywords",
          content:
            "Hệ thống CashBack của TTTM. Hoàn phí tối thiểu 50% mọi giao dịch trên MEXC",
        },
        {
          name: "description",
          content:
            "Hệ thống CashBack của TTTM. Hoàn phí tối thiểu 50% mọi giao dịch trên MEXC",
        },
        { hid: "og:title", property: "og:title", content: "Tải Tiền Trên Mạng" },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Hệ thống CashBack của TTTM. Hoàn phí tối thiểu 50% mọi giao dịch trên MEXC",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://taitientrenmang.com/img/thumbnail.jpg",
        },
        { hid: "og:url", property: "og:url", content: "https://taitientrenmang.com" },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Tải Tiền Trên Mạng",
        },
        { hid: "og:image:height", property: "og:image:height", content: "628" },
        { hid: "og:image:width", property: "og:image:width", content: "1200" },
        { hid: "og:type", property: "og:type", content: "article" },
        {
          name: "google-site-verification",
          content: "RVRV7yV3NVcrTJk9zPJLs3isxpN5erzbQk8dT7FDaDc",
        },
        { name: "robots", content: "index,follow,all" },
        { name: "copyright", content: "taitientrenmang" },
        { name: "distribution", content: "Global" },
        { name: "revisit-after", content: "1 days" },
        { name: "GENERATOR", content: "http://taitientrenmang.com" },
        { name: "author", content: "taitientrenmang" },
        { name: "site_path", content: "http://taitientrenmang.com" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Tải Tiền Trên Mạng" },
        { name: "twitter:url", content: "https://taitientrenmang.com" },
        {
          name: "twitter:description",
          content:
            "Hệ thống CashBack của TTTM. Hoàn phí tối thiểu 50% mọi giao dịch trên MEXC",
        },
        { name: "twitter:site", content: "@taitientrenmang" },
        { name: "twitter:creator", content: "@taitientrenmang" },
      ],
      link: [
        { rel: "icon", href: "https://taitientrenmang.com/img/logo.png" },
        { rel: "shortcut icon", href: "https://taitientrenmang.com/img/logo.png" },
        {
          rel: "apple-touch-icon",
          href: "https://taitientrenmang.com/img/logo.png",
          sizes: "114x114",
        },
        { rel: "canonical", href: "https://taitientrenmang.com" },
        { rel: "alternate", href: "https://taitientrenmang.com" },
      ],
      script: [
        {
          hid: "gtm-script1",
          src: "https://www.googletagmanager.com/gtag/js?id=G-VZ17QS1KLX",
          defer: true,
        },
        {
          hid: "gtm-script2",
          innerHTML: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    gtag('js', new Date());
                
                    gtag('config', 'G-VZ17QS1KLX');
                    `,
          type: "text/javascript",
        },
      ],
      htmlAttrs: {
        lang: "vi",
      },
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/feed.xml", "/sitemap.xml"],
    },
  },
  sitemap: {
    siteUrl: "https://taitientrenmang.com",
  },
});
