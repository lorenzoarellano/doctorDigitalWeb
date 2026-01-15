/**
 * Plugin para Google Analytics 4 con soporte de consentimiento
 * Tracking de eventos y pageviews respetando preferencias de cookies
 */
export default defineNuxtPlugin(() => {
  // Solo ejecutar en cliente
  if (process.client) {
    const config = useRuntimeConfig()
    
    // Inicializar gtag con modo de consentimiento
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag = gtag

    // Configurar consentimiento por defecto (denegado hasta que el usuario acepte)
    gtag('consent', 'default', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'wait_for_update': 500
    })

    // Cargar Google Analytics script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`
    document.head.appendChild(script)

    // Inicializar GA4
    gtag('js', new Date())
    gtag('config', 'G-XXXXXXXXXX', {
      page_path: window.location.pathname,
      anonymize_ip: true
    })

    // Verificar si ya hay consentimiento guardado
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (cookieConsent === 'accepted') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
    }

    // Router hook para tracking de pageviews
    const router = useRouter()
    router.afterEach((to) => {
      if (window.gtag) {
        window.gtag('config', 'G-XXXXXXXXXX', {
          page_path: to.fullPath
        })
      }
    })
  }
})
