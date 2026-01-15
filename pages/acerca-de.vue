<template>
  <div class="min-h-screen pt-20">
    <!-- Breadcrumbs -->
    <div class="container mx-auto px-4 pt-6">
      <Breadcrumbs :breadcrumbs="[
        { label: 'Inicio', path: '/' },
        { label: 'Acerca de', path: null }
      ]" />
    </div>

    <!-- Hero Section -->
    <section class="relative py-32 bg-gradient-to-br from-bg-primary via-accent/5 to-neon-pink/5 overflow-hidden mask-image-fade-section-top-bottom">
      <!-- Efectos de fondo -->
      <div class="absolute inset-0 opacity-10 mask-y-soft">
        <div class="absolute w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-3xl top-20 left-10 animate-pulse"></div>
        <div class="absolute w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl bottom-20 right-10"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center hero-content">
          <h1 class="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Acerca <span class="bg-gradient-to-r from-accent via-neon-pink to-neon-cyan bg-clip-text text-transparent">de Nosotros</span>
          </h1>
          <p class="text-xl text-text-secondary leading-relaxed mb-4">
            Empoderando profesionales médicos mediante la tecnología
          </p>
          <p class="text-lg text-accent font-semibold italic">
            "El futuro de la medicina también se construye en línea."
          </p>
        </div>
      </div>
    </section>

    <!-- Lorenzo Arellano Section -->
    <section class="relative py-20 bg-gradient-to-br from-bg-primary via-neon-pink/5 to-accent/5 overflow-hidden mask-image-fade-section-top-bottom">
      <!-- Efectos de fondo decorativos -->
      <div class="absolute inset-0 opacity-20 pointer-events-none">
        <div class="absolute w-64 h-64 border-4 border-neon-pink rounded-full top-10 right-10 animate-pulse"></div>
        <div class="absolute w-48 h-48 border-4 border-accent rounded-full bottom-20 right-20"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center founder-section">
            <!-- Imagen Lorenzo Arellano -->
            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-br from-accent/20 to-neon-pink/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div class="relative bg-gradient-to-br from-accent/10 to-neon-pink/10 rounded-3xl p-4 border-2 border-accent/30 hover:border-accent transition-all duration-500 overflow-hidden">
                <img 
                  src="/acerca-de-1.webp" 
                  alt="Lorenzo Arellano - Fundador de DoctorDigital.mx, especialista en marketing digital médico con más de 6 años de experiencia"
                  class="w-full h-auto rounded-2xl mask-y-soft"
                  loading="lazy"
                  width="600"
                  height="800"
                />
              </div>
            </div>

            <!-- Contenido -->
            <div class="founder-content">
              <h2 class="text-4xl font-bold text-text-primary mb-6">
                Lorenzo <span class="text-accent">Arellano</span>
              </h2>
              <p class="text-text-secondary leading-relaxed mb-6">
                Desde 2017 me he dedicado a construir y liderar proyectos tecnológicos con un único objetivo: 
                <span class="text-accent font-semibold">empoderar profesionales mediante la tecnología</span>. 
                Hoy coordino DoctorDigital.mx, una agencia enfocada en transformar la presencia digital de médicos 
                y especialistas en México con una estética futurista, profesional y efectiva.
              </p>
              
              <div class="bg-dark-surface/30 rounded-xl p-6 border border-accent/20">
                <h3 class="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span class="text-neon-cyan">🚀</span> Experiencia
                </h3>
                <ul class="space-y-3 text-text-secondary">
                  <li class="flex items-start gap-3">
                    <span class="text-accent text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Más de 6 años</span> en tecnología, diseño digital y posicionamiento web</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-accent text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Fundador y CEO</span> de The Capibara Web desde 2017</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-accent text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Emprendimiento salud-digital:</span> Medicynia.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trayectoria Internacional -->
    <section class="relative py-20 bg-gradient-to-br from-bg-primary via-accent/5 to-neon-cyan/5 overflow-hidden mask-image-fade-section-top-bottom">
      <!-- Efectos de fondo -->
      <div class="absolute inset-0 opacity-10 mask-y-soft">
        <div class="absolute w-96 h-96 bg-neon-pink rounded-full mix-blend-screen filter blur-3xl top-20 right-10"></div>
        <div class="absolute w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-3xl bottom-20 left-10 animate-pulse"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center trayectoria-section">
            <!-- Contenido -->
            <div class="order-2 lg:order-1 trayectoria-content">
              <h2 class="text-4xl font-bold text-text-primary mb-6">
                Expansión <span class="bg-gradient-to-r from-neon-cyan to-accent bg-clip-text text-transparent">Internacional</span>
              </h2>
              
              <div class="space-y-6">
                <div class="group bg-gradient-to-br from-neon-cyan/10 to-accent/10 rounded-2xl p-6 border-2 border-neon-cyan/30 hover:border-neon-cyan transition-all duration-300 hover:scale-105">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-neon-cyan to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <span class="text-2xl">🇨🇦</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-text-primary mb-2">JFairs.com</h3>
                      <p class="text-text-secondary">Cofundador de plataforma para ferias y eventos tecnológicos en Canadá</p>
                    </div>
                  </div>
                </div>

                <div class="group bg-gradient-to-br from-accent/10 to-neon-pink/10 rounded-2xl p-6 border-2 border-accent/30 hover:border-accent transition-all duration-300 hover:scale-105">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-accent to-neon-pink rounded-xl flex items-center justify-center flex-shrink-0">
                      <span class="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-text-primary mb-2">EducationCanada.com</h3>
                      <p class="text-text-secondary">Portal educativo conectando estudiantes con instituciones canadienses</p>
                    </div>
                  </div>
                </div>

                <div class="group bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 rounded-2xl p-6 border-2 border-neon-pink/30 hover:border-neon-pink transition-all duration-300 hover:scale-105">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-neon-pink to-neon-cyan rounded-xl flex items-center justify-center flex-shrink-0">
                      <span class="text-2xl">🇺🇸</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-text-primary mb-2">EducationAmerica.us</h3>
                      <p class="text-text-secondary">Enfocado en educación internacional en Estados Unidos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Imagen Alcance Global -->
            <div class="order-1 lg:order-2 relative group">
              <div class="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-accent/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div class="relative bg-gradient-to-br from-neon-cyan/10 to-accent/10 rounded-3xl p-4 border-2 border-neon-cyan/30 hover:border-neon-cyan transition-all duration-500 overflow-hidden">
                <img 
                  src="/acerca-de-2.webp" 
                  alt="Alcance Global de DoctorDigital - Proyectos internacionales en Canadá, Estados Unidos y México incluyendo JFairs.com, EducationCanada.com y EducationAmerica.us"
                  class="w-full h-auto rounded-2xl mask-y-soft"
                  loading="lazy"
                  width="600"
                  height="800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visión DoctorDigital -->
    <section class="relative py-20 bg-gradient-to-br from-bg-primary via-neon-pink/5 to-accent/5 overflow-hidden mask-image-fade-section-top-bottom">
      <!-- Efectos de fondo decorativos -->
      <div class="absolute inset-0 opacity-20 pointer-events-none">
        <div class="absolute w-64 h-64 border-4 border-neon-cyan rounded-full bottom-10 left-10"></div>
        <div class="absolute w-48 h-48 border-4 border-accent rounded-full top-20 left-20 animate-pulse"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center vision-section">
            <!-- Imagen Tecnología Médica -->
            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-br from-accent/20 to-neon-cyan/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div class="relative bg-gradient-to-br from-accent/10 to-neon-cyan/10 rounded-3xl p-4 border-2 border-accent/30 hover:border-accent transition-all duration-500 overflow-hidden">
                <img 
                  src="/acerca-de-3.webp" 
                  alt="Tecnología Médica y Marketing Digital - DoctorDigital.mx especializado en presencia digital para profesionales de la salud en México"
                  class="w-full h-auto rounded-2xl mask-y-soft"
                  loading="lazy"
                  width="600"
                  height="800"
                />
              </div>
            </div>

            <!-- Contenido -->
            <div class="vision-content">
              <h2 class="text-4xl font-bold text-text-primary mb-6">
                La Visión de <span class="text-accent">DoctorDigital.mx</span>
              </h2>
              
              <p class="text-text-secondary leading-relaxed mb-6">
                Nuestros médicos ya no solo necesitan una web bonita: necesitan una 
                <span class="text-accent font-semibold">presencia digital sólida, visible, técnica y humanizada</span>.
              </p>

              <div class="bg-dark-surface/30 rounded-xl p-6 mb-6 border border-accent/20">
                <h3 class="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span class="text-neon-pink">💡</span> ¿Por qué elegirnos?
                </h3>
                <ul class="space-y-3 text-text-secondary">
                  <li class="flex items-start gap-3">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Experiencia comprobada:</span> 6+ años en tecnología y diseño digital</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Sector salud:</span> Entendemos prioridades médicas, ética y regulaciones</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Alcance internacional:</span> Mejores prácticas globales adaptadas a México</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Enfoque híbrido:</span> Estética cyberpunk + SEO + cumplimiento legal (LFPDPPP)</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Resultados reales:</span> Sitios visibles, rápidos y atractivos para pacientes e IA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Misión, Visión y Valores -->
    <section class="relative py-20 bg-gradient-to-br from-bg-primary via-accent/5 to-neon-pink/5 overflow-hidden mask-image-fade-section-top-bottom">
      <!-- Efectos de fondo -->
      <div class="absolute inset-0 opacity-10 mask-y-soft">
        <div class="absolute w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl top-20 left-10"></div>
        <div class="absolute w-96 h-96 bg-neon-pink rounded-full mix-blend-screen filter blur-3xl bottom-20 right-10 animate-pulse"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16 mvv-header">
            <h2 class="text-5xl font-bold text-text-primary mb-4">
              Nuestro <span class="bg-gradient-to-r from-accent via-neon-pink to-neon-cyan bg-clip-text text-transparent">ADN</span>
            </h2>
            <p class="text-xl text-text-secondary">Misión, Visión y Valores que nos guían</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mvv-cards">
            <!-- Misión -->
            <div class="group relative bg-gradient-to-br from-accent/10 to-neon-pink/10 rounded-3xl p-8 border-2 border-accent/30 hover:border-accent transition-all duration-500 hover:transform hover:scale-105 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative z-10">
                <div class="w-16 h-16 bg-gradient-to-br from-accent to-neon-pink rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-text-primary mb-4">Misión</h3>
                <p class="text-text-secondary leading-relaxed">
                  Capacitar a médicos y especialistas para que construyan su marca profesional en línea, 
                  generen confianza digital y atraigan más pacientes, manteniendo los más altos estándares 
                  de ética, estética y tecnología.
                </p>
              </div>
            </div>

            <!-- Visión -->
            <div class="group relative bg-gradient-to-br from-neon-cyan/10 to-accent/10 rounded-3xl p-8 border-2 border-neon-cyan/30 hover:border-neon-cyan transition-all duration-500 hover:transform hover:scale-105 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative z-10">
                <div class="w-16 h-16 bg-gradient-to-br from-neon-cyan to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-text-primary mb-4">Visión</h3>
                <p class="text-text-secondary leading-relaxed">
                  Ser la agencia de referencia en México para médicos que desean trascender en la era digital, 
                  integrando tecnología, visibilidad global y presencia local.
                </p>
              </div>
            </div>

            <!-- Valores -->
            <div class="group relative bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 rounded-3xl p-8 border-2 border-neon-pink/30 hover:border-neon-pink transition-all duration-500 hover:transform hover:scale-105 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative z-10">
                <div class="w-16 h-16 bg-gradient-to-br from-neon-pink to-neon-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-text-primary mb-4">Valores</h3>
                <ul class="space-y-2 text-text-secondary">
                  <li class="flex items-start gap-2">
                    <span class="text-neon-cyan mt-1">•</span>
                    <span><span class="font-semibold text-text-primary">Profesionalismo:</span> Rigor técnico y diseño cuidado</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-neon-cyan mt-1">•</span>
                    <span><span class="font-semibold text-text-primary">Empatía:</span> Entendemos tus retos médicos</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-neon-cyan mt-1">•</span>
                    <span><span class="font-semibold text-text-primary">Innovación:</span> Tecnologías emergentes (IA, SEO)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-neon-cyan mt-1">•</span>
                    <span><span class="font-semibold text-text-primary">Ética:</span> Tecnología al servicio de la humanidad</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <CTASection />
  </div>
</template>

<script setup>
// SEO usando composable
useSEO({
  title: 'Acerca de Nosotros',
  description: 'Lorenzo Arellano y DoctorDigital.mx: Empoderando médicos mediante tecnología desde 2017. Experiencia internacional en diseño web, branding médico, SEO/AEO y transformación digital para profesionales de la salud.',
  image: '/acerca-de-1.webp',
  url: '/acerca-de',
  type: 'profile'
})

onMounted(async () => {
  if (process.client) {
    const gsap = (await import('gsap')).default
    const ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger
    
    gsap.registerPlugin(ScrollTrigger)

    // Hero - entrada simple
    gsap.fromTo('.hero-content', 
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5,
        delay: 0.2
      }
    )

    // Founder section
    gsap.fromTo('.founder-content',
      { 
        opacity: 0, 
        x: -50 
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.founder-section',
          start: 'top 60%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Trayectoria cards con stagger
    gsap.fromTo('.trayectoria-content .group',
      { 
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.trayectoria-section',
          start: 'top 60%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Vision section
    gsap.fromTo('.vision-content',
      { 
        opacity: 0, 
        x: 50 
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.vision-section',
          start: 'top 60%',
          toggleActions: 'play none none none'
        }
      }
    )

    // MVV header
    gsap.fromTo('.mvv-header',
      { 
        opacity: 0, 
        scale: 0.8 
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.mvv-header',
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    )

    // MVV cards
    gsap.fromTo('.mvv-cards > div',
      { 
        opacity: 0, 
        y: 80 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.mvv-cards',
          start: 'top 60%',
          toggleActions: 'play none none none'
        }
      }
    )
  }
})

// Schema Person para Lorenzo Arellano (fundador)
useSchemaOrg([
  {
    '@type': 'Person',
    name: 'Lorenzo Arellano',
    jobTitle: 'Fundador y CEO',
    description: 'Emprendedor tecnológico con más de 6 años de experiencia en diseño digital, desarrollo web y marketing digital. Fundador de DoctorDigital.mx y The Capibara Web.',
    url: 'https://doctordigital.mx/acerca-de',
    image: 'https://doctordigital.mx/acerca-de-1.webp',
    alumniOf: 'Universidad Tecnológica',
    worksFor: {
      '@type': 'Organization',
      name: 'DoctorDigital.mx',
      url: 'https://doctordigital.mx'
    },
    foundingDate: '2017',
    knowsAbout: [
      'Marketing Digital Médico',
      'Diseño Web',
      'SEO/AEO',
      'Branding Médico',
      'Transformación Digital',
      'Google Business Profile',
      'Facebook Ads',
      'Google Ads'
    ],
    sameAs: [
      'https://wa.me/5216181835957'
    ]
  },
  {
    '@type': 'AboutPage',
    name: 'Acerca de DoctorDigital.mx',
    description: 'Historia y trayectoria de Lorenzo Arellano, fundador de DoctorDigital.mx. Experiencia internacional en tecnología, diseño digital y marketing médico.',
    url: 'https://doctordigital.mx/acerca-de',
    mainEntity: {
      '@type': 'Person',
      name: 'Lorenzo Arellano'
    }
  }
])
</script>

<style scoped>
.mask-image-fade-section-top-bottom {
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}
</style>
