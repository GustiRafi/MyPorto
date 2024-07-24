// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3003
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
      head: {
          link: [
              {
                  rel: 'icon',
                  type: 'image/x-icon',
                  href: '/favicon.png'
              },
              {
                  rel: 'stylesheet',
                  href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'
              },
          ],
          title: 'Rafi Gusti',
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1'
      }
  }
})
