// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {path: '~/components',pathPrefix: false,},
    {path: '~/components/base',pathPrefix: false,},
    {path: '~/components/base/buttons',pathPrefix: false,},
    {path: '~/components/base/text-boxs',pathPrefix: false,},
    {path: '~/components/base/image-boxs',pathPrefix: false,},
    {path: '~/components/containers/sliders',pathPrefix: false,},
    {path: '~/components/containers/layouts',pathPrefix: false,},
    {path: '~/assets/icons',pathPrefix: false,},
  ],
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-icon', "nuxt-svgo"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})