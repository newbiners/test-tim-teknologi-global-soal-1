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
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
  modules: ['nuxt-icon', "nuxt-svgo"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        {rel: "stylesheet",  href:"https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"},
      ]
    }
  },
})

