<template>
  <section class="relative py-32 bg-white dark:bg-bg-primary/50 transition-colors duration-300 mask-y-soft">
    <div class="container mx-auto px-4">
      <!-- Encabezado -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Nuestro <span class="bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">Portafolio</span>
        </h2>
        <p class="text-xl text-text-secondary max-w-2xl mx-auto">
          Proyectos reales de doctores y especialistas que confían en nosotros
        </p>
      </div>

      <!-- Grid de proyectos -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="group relative bg-white dark:bg-dark-surface rounded-2xl overflow-hidden border border-gray-200 dark:border-accent/20 hover:border-accent/50 transition-all duration-300 hover:transform hover:-translate-y-2"
        >
          <!-- Imagen -->
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

          <!-- Contenido -->
          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-3 py-1 text-xs font-medium bg-accent/10 text-accent border border-gray-200 dark:border-accent/30 rounded-full">
                {{ project.specialty }}
              </span>
            </div>

            <h3 class="text-xl font-bold text-text-primary mb-2">
              {{ project.name }}
            </h3>

            <p class="text-text-secondary text-sm mb-4 flex items-center gap-2">
              <svg class="w-4 h-4 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ project.city }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="text-xs text-text-secondary bg-bg-primary/50 px-2 py-1 rounded"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <NuxtLink 
          to="/portafolio"
          class="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-neon-cyan text-text-primary rounded-lg font-semibold text-lg hover:bg-neon-cyan/10 transition-all duration-300 hover:scale-105"
        >
          Ver portafolio completo
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    name: 'Dr. Juan Pérez',
    specialty: 'Cardiólogo',
    city: 'Durango, DGO',
    tags: ['SEO', 'WhatsApp', 'Google Maps'],
    image: '/21554.jpg'
  },
  {
    id: 2,
    name: 'Dra. María González',
    specialty: 'Pediatra',
    city: 'Gómez Palacio, DGO',
    tags: ['Diseño Web', 'Agenda Online', 'SSL'],
    image: '/5844.jpg'
  },
  {
    id: 3,
    name: 'Dr. Carlos Ramírez',
    specialty: 'Dermatólogo',
    city: 'Torreón, COAH',
    tags: ['Branding', 'SEO Local', 'Chatbot'],
    image: '/115531.jpg'
  },
  {
    id: 4,
    name: 'Dra. Ana Martínez',
    specialty: 'Ginecóloga',
    city: 'Durango, DGO',
    tags: ['Web Profesional', 'WhatsApp', 'Blog'],
    image: '/127697.jpg'
  },
  {
    id: 5,
    name: 'Dr. Roberto Sánchez',
    specialty: 'Traumatólogo',
    city: 'Gómez Palacio, DGO',
    tags: ['Dashboard', 'Sistema', 'Reportes'],
    image: '/21554.jpg'
  },
  {
    id: 6,
    name: 'Dra. Laura Fernández',
    specialty: 'Nutrióloga',
    city: 'Durango, DGO',
    tags: ['Diseño Web', 'SEO', 'Redes Sociales'],
    image: '/5844.jpg'
  }
]
</script>
