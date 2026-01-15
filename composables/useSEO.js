/**
 * Composable para gestionar SEO meta tags
 * Incluye: title, description, Open Graph, Twitter Cards
 */
export const useSEO = (config) => {
  const {
    title,
    description,
    image = '/og-image.jpg', // Imagen por defecto
    url,
    type = 'website',
    author = 'Lorenzo Arellano',
    siteName = 'DoctorDigital.mx',
    locale = 'es_MX',
  } = config

  const fullTitle = title ? `${title} | DoctorDigital.mx` : 'DoctorDigital.mx - Marketing Digital Médico en Durango'
  const fullUrl = url ? `https://doctordigital.mx${url}` : 'https://doctordigital.mx'

  useHead({
    title: fullTitle,
    meta: [
      // Meta básico
      { name: 'description', content: description },
      { name: 'author', content: author },
      
      // Open Graph (Facebook, LinkedIn)
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: `https://doctordigital.mx${image}` },
      { property: 'og:url', content: fullUrl },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: siteName },
      { property: 'og:locale', content: locale },
      
      // Twitter Cards
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `https://doctordigital.mx${image}` },
      
      // Adicionales
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'canonical', href: fullUrl },
    ],
  })
}
