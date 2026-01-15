<template>
  <div class="min-h-screen pt-20">
    <section class="relative py-32 bg-gradient-to-br from-bg-primary via-dark-surface/50 to-bg-primary mask-y-medium">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Nuestro <span class="bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">Portafolio</span>
          </h1>
          <p class="text-xl text-text-secondary max-w-2xl mx-auto">
            Más de 50 médicos y especialistas confían en nosotros para su presencia digital profesional
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div v-for="project in allProjects" :key="project.id" class="group bg-dark-surface rounded-2xl overflow-hidden border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2">
            <div class="relative h-48 overflow-hidden">
              <NuxtImg 
                :src="project.image"
                :alt="project.name"
                width="400"
                height="300"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                quality="80"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent"></div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="px-3 py-1 text-xs font-medium bg-accent/10 text-accent border border-accent/30 rounded-full">{{ project.specialty }}</span>
              </div>
              <h3 class="text-xl font-bold text-text-primary mb-2">{{ project.name }}</h3>
              <p class="text-text-secondary text-sm mb-4 flex items-center gap-2">
                <svg class="w-4 h-4 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {{ project.city }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in project.tags" :key="tag" class="text-xs text-text-secondary bg-bg-primary/50 px-2 py-1 rounded">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CTASection />
  </div>
</template>

<script setup>
useHead({
  title: 'Portafolio - DoctorDigital.mx',
  meta: [
    { name: 'description', content: 'Portafolio de sitios web médicos desarrollados para doctores y especialistas en Durango, Coahuila y toda la República Mexicana.' },
    { property: 'og:title', content: 'Portafolio - DoctorDigital.mx' },
    { property: 'og:url', content: 'https://doctordigital.mx/portafolio' }
  ]
})

const allProjects = [
  { id: 1, name: 'Dr. Juan Pérez', specialty: 'Cardiólogo', city: 'Durango, DGO', tags: ['SEO', 'WhatsApp', 'Google Maps'], image: '/21554.jpg' },
  { id: 2, name: 'Dra. María González', specialty: 'Pediatra', city: 'Gómez Palacio, DGO', tags: ['Diseño Web', 'Agenda Online', 'SSL'], image: '/5844.jpg' },
  { id: 3, name: 'Dr. Carlos Ramírez', specialty: 'Dermatólogo', city: 'Torreón, COAH', tags: ['Branding', 'SEO Local', 'Chatbot'], image: '/115531.jpg' },
  { id: 4, name: 'Dra. Ana Martínez', specialty: 'Ginecóloga', city: 'Durango, DGO', tags: ['Web Profesional', 'WhatsApp', 'Blog'], image: '/127697.jpg' },
  { id: 5, name: 'Dr. Roberto Sánchez', specialty: 'Traumatólogo', city: 'Gómez Palacio, DGO', tags: ['Dashboard', 'Sistema', 'Reportes'], image: '/28894.jpg' },
  { id: 6, name: 'Dra. Laura Fernández', specialty: 'Nutrióloga', city: 'Durango, DGO', tags: ['Diseño Web', 'SEO', 'Redes Sociales'], image: '/21554.jpg' },
  { id: 7, name: 'Dr. Miguel Ángel Torres', specialty: 'Oftalmólogo', city: 'Torreón, COAH', tags: ['SEO', 'Diseño', 'WhatsApp'], image: '/5844.jpg' },
  { id: 8, name: 'Dra. Patricia Ruiz', specialty: 'Endocrinóloga', city: 'Durango, DGO', tags: ['Web Médica', 'Blog', 'SEO'], image: '/115531.jpg' },
  { id: 9, name: 'Dr. Fernando López', specialty: 'Urólogo', city: 'Gómez Palacio, DGO', tags: ['Diseño Profesional', 'SEO', 'Maps'], image: '/127697.jpg' }
]
</script>
