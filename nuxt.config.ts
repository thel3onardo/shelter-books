import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
    ],

    googleFonts: {
        prefetch: true,
        preconnect: true,
        families: {
            Montserrat: true,
        },
        display: 'swap'
    }
})
