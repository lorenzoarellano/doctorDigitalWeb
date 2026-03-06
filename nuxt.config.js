// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-schema-org',
    '@nuxtjs/google-fonts'
  ],

  // Configuración del sitio para Sitemap y Schema
  site: {
    url: 'https://doctordigital.mx',
    name: 'DoctorDigital.mx',
  },

  // Configuración de la app
  app: {
    buildAssetsDir: 'assets',
    head: {
      htmlAttrs: {
        lang: 'es-MX',
        class: 'dark'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'DoctorDigital.mx - Tu presencia médica profesional en el futuro digital',
      meta: [
        { name: 'description', content: 'Agencia digital especializada en crear presencia profesional online para médicos y especialistas en México. Diseño web, SEO médico e inteligencia artificial.' },
        { name: 'keywords', content: 'diseño web médico, páginas web para doctores, SEO salud, inteligencia artificial médica, marketing médico, desarrollo web Durango, presencia digital profesional, consultorios online' },
        { name: 'author', content: 'DoctorDigital.mx' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'DoctorDigital.mx' },
        { property: 'og:locale', content: 'es_MX' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@doctordigitalmx' },
        
        // Theme color
        { name: 'theme-color', content: '#201C2F' },
        { name: 'msapplication-TileColor', content: '#673DE6' }
      ],
      link: [
        // Favicons
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        
        // Manifest
        { rel: 'manifest', href: '/manifest.json' },
        
        // Canonical
        { rel: 'canonical', href: 'https://doctordigital.mx' },
        
        // Preconnect para performance
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
      ],
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-8ZQ6BZPQSP'
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8ZQ6BZPQSP');
            gtag('config', 'AW-16533214470');
          `
        }
      ]
    }
  },

  // Configuración de Google Fonts (Nunito Sans)
  googleFonts: {
    families: {
      'Nunito Sans': [300, 400, 600, 700, 800]
    },
    display: 'swap',
    preload: true,
    prefetch: true,
    preconnect: true
  },

  // Configuración de imágenes
  image: {
    formats: ['webp', 'avif', 'png', 'jpg'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // Configuración del sitio para SEO
  site: {
    url: 'https://doctordigital.mx',
    name: 'DoctorDigital.mx',
    description: 'Presencia médica profesional en el futuro digital. Diseño web, SEO y tecnología para doctores y especialistas en México.',
    defaultLocale: 'es-MX'
  },

  // Configuración de sitemap
  sitemap: {
    hostname: 'https://doctordigital.mx',
    gzip: true,
    routes: [
      '/',
      '/acerca-de',
      '/servicios',
      '/como-ser-visible-online',
      '/contacto',
      '/privacidad',
      '/terminos-condiciones',
      '/la-ola-que-viene'
    ],
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date()
    }
  },

  // Configuración de robots.txt
  robots: {
    allow: '/',
    sitemap: 'https://doctordigital.mx/sitemap.xml'
  },

  // Configuración de Nitro para SSG
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/', '/acerca-de', '/servicios', '/como-ser-visible-online', '/contacto', '/privacidad', '/terminos-condiciones', '/la-ola-que-viene']
    },
    compressPublicAssets: true,
    minify: true,
    // Security headers
    routeRules: {
      '/**': {
        headers: {
          'X-Frame-Options': 'SAMEORIGIN',
          'X-Content-Type-Options': 'nosniff',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
        }
      }
    }
  },
  
  // Optimización de rendimiento
  experimental: {
    payloadExtraction: true,
    viewTransition: true
  },

  // Build optimization
  build: {
    transpile: ['gsap']
  },

  // Router options
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  
  typescript: {
    typeCheck: false,
    strict: false
  }
})
