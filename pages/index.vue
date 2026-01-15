<template>
  <div>
    <HeroSection />
    <ClientsSection />
    <ServicesSection />
    <PricingSection />
    <SEOBenefitsSection />
    <TestimonialsSection />
    <CTASection />
  </div>
</template>

<script setup>
// SEO para la página principal usando el composable
useSEO({
  title: 'Marketing Digital Médico en Durango',
  description: 'Agencia digital especializada en crear presencia profesional online para médicos y especialistas en México. Diseño de identidad médica, capacitación en Google Business, Facebook Ads, SEO/AEO y gestión de reputación.',
  image: '/og-image.jpg',
  url: '/',
  type: 'website'
})

// Schema WebSite con SearchAction
useSchemaOrg([
  {
    '@type': 'WebSite',
    name: 'DoctorDigital.mx',
    url: 'https://doctordigital.mx',
    description: 'Marketing digital especializado para profesionales de la salud en México',
    inLanguage: 'es-MX',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://doctordigital.mx/buscar?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }
])
</script>
