<template>
  <div class="min-h-screen bg-bg-primary dark">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
    <WhatsAppButton />
    <CookieBanner />
  </div>
</template>

<script setup>
// Schema.org para organización base + LocalBusiness + MedicalBusiness
useSchemaOrg([
  // Organization - Información general de la empresa
  {
    '@type': 'Organization',
    name: 'DoctorDigital.mx',
    url: 'https://doctordigital.mx',
    logo: 'https://doctordigital.mx/logo.png',
    description: 'Agencia digital especializada en crear presencia profesional online para médicos y especialistas en México. Branding médico, diseño web, posicionamiento SEO/AEO y capacitación digital.',
    foundingDate: '2017',
    founder: {
      '@type': 'Person',
      name: 'Lorenzo Arellano',
      jobTitle: 'Fundador & CEO'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MX',
      addressLocality: 'Durango',
      addressRegion: 'Durango'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+52-618-183-5957',
      availableLanguage: ['Spanish'],
      areaServed: 'MX'
    },
    sameAs: [
      'https://wa.me/5216181835957'
    ]
  },
  
  // LocalBusiness - Negocio local
  {
    '@type': 'LocalBusiness',
    '@id': 'https://doctordigital.mx',
    name: 'DoctorDigital.mx',
    image: 'https://doctordigital.mx/logo.png',
    url: 'https://doctordigital.mx',
    telephone: '+52-618-183-5957',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Durango',
      addressRegion: 'Durango',
      addressCountry: 'MX'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.0277',
      longitude: '-104.6532'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    }
  },
  
  // MedicalBusiness - Especialización en marketing médico
  {
    '@type': 'MedicalBusiness',
    name: 'DoctorDigital.mx - Marketing Digital Médico',
    description: 'Agencia especializada en posicionamiento digital para profesionales de la salud. Diseño de identidad médica, capacitación en Google Business Profile, Facebook Ads, Google Ads y gestión de reputación online.',
    url: 'https://doctordigital.mx',
    image: 'https://doctordigital.mx/logo.png',
    telephone: '+52-618-183-5957',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Durango',
      addressRegion: 'Durango',
      addressCountry: 'MX'
    },
    serviceType: [
      'Branding Médico',
      'Diseño Web Médico',
      'SEO Médico',
      'Capacitación Digital',
      'Marketing Digital Médico'
    ]
  }
])
</script>
