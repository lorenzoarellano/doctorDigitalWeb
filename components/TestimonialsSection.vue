<template>
  <section ref="testimonialsRef" class="relative py-32 bg-gradient-to-br from-bg-primary via-neon-pink/5 to-accent/5 overflow-hidden transition-colors duration-300 mask-image-fade-section-top-bottom">
    <!-- Efectos de fondo -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-3xl top-20 left-10"></div>
      <div class="absolute w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl bottom-20 right-10"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Encabezado -->
      <div ref="headerRef" class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Lo que dicen <span class="bg-gradient-to-r from-neon-pink to-accent bg-clip-text text-transparent">nuestros clientes</span>
        </h2>
        <p class="text-xl text-text-secondary max-w-2xl mx-auto">
          Historias reales de médicos que transformaron su presencia digital
        </p>
      </div>

      <!-- Carousel Container -->
      <div class="relative max-w-6xl mx-auto">
        <!-- Carousel -->
        <div ref="carouselRef" class="overflow-hidden">
          <div ref="carouselTrack" class="flex transition-transform duration-500 ease-out">
            <div 
              v-for="(testimonial, index) in testimonials" 
              :key="testimonial.id"
              class="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
            >
              <div 
                :class="[
                  'relative p-8 rounded-3xl border-2 transition-all duration-300 hover:scale-105 h-full',
                  testimonial.gradient,
                  testimonial.border
                ]"
              >
                <!-- Comillas decorativas -->
                <div class="absolute top-6 right-6 text-6xl text-accent/20 font-serif">"</div>
                
                <div class="relative z-10">
                  <!-- Estrellas -->
                  <div class="flex gap-1 mb-4">
                    <svg v-for="i in 5" :key="i" class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  <!-- Testimonial -->
                  <p class="text-text-secondary mb-6 italic leading-relaxed text-sm min-h-[120px]">
                    {{ testimonial.text }}
                  </p>

                  <!-- Autor -->
                  <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-accent to-neon-pink rounded-full flex items-center justify-center flex-shrink-0">
                      <span class="text-white font-bold text-lg">{{ testimonial.initial }}</span>
                    </div>
                    <div>
                      <div class="font-semibold text-text-primary">{{ testimonial.name }}</div>
                      <div class="text-sm text-text-secondary">{{ testimonial.specialty }}</div>
                      <div v-if="testimonial.location" class="text-xs text-text-secondary/70">{{ testimonial.location }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button 
          @click="prevSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gradient-to-r from-accent to-neon-pink text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 z-20"
          aria-label="Anterior"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gradient-to-r from-neon-pink to-neon-cyan text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 z-20"
          aria-label="Siguiente"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Dots Indicators -->
        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(testimonial, index) in testimonials"
            :key="`dot-${testimonial.id}`"
            @click="goToSlide(index)"
            :class="[
              'w-2 h-2 rounded-full transition-all duration-300',
              currentSlide === index 
                ? 'bg-gradient-to-r from-accent to-neon-pink w-8' 
                : 'bg-text-secondary/30 hover:bg-text-secondary/50'
            ]"
            :aria-label="`Ir a testimonio ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const testimonialsRef = ref(null)
const headerRef = ref(null)
const carouselRef = ref(null)
const carouselTrack = ref(null)
const currentSlide = ref(0)
let autoplayInterval = null

const testimonials = [
  {
    id: 1,
    text: 'DoctorDigital.mx creó mi sitio web completo con blog integrado donde comparto artículos sobre geriatría. Mi presencia digital en Durango nunca fue tan profesional y mis pacientes encuentran fácilmente la información que necesitan.',
    name: 'Dra. Denise Medina',
    specialty: 'Geriatra',
    location: 'Durango, Dgo.',
    initial: 'DM',
    gradient: 'bg-gradient-to-br from-accent/10 to-neon-pink/10',
    border: 'border-accent/30 hover:border-accent'
  },
  {
    id: 2,
    text: 'Como CEO de Medicynia, entiendo la importancia de la presencia digital. DoctorDigital.mx nos ayudó a crear una plataforma sólida que comunica efectivamente nuestra propuesta de valor: un expediente clínico electrónico inteligente y confiable.',
    name: 'L.I. José Arellano',
    specialty: 'CEO - Medicynia',
    location: 'Expediente Clínico Electrónico',
    initial: 'JA',
    gradient: 'bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10',
    border: 'border-neon-pink/30 hover:border-neon-pink'
  },
  {
    id: 3,
    text: 'Mi sitio web profesional refleja perfectamente mi práctica geriátrica. El robot de WhatsApp que me notifica de cada cita agendada ha revolucionado mi consultorio. El SEO local funcionó increíblemente bien en Durango.',
    name: 'Dra. Saira Rosales',
    specialty: 'Geriatra',
    location: 'Durango, Dgo.',
    initial: 'SR',
    gradient: 'bg-gradient-to-br from-neon-cyan/10 to-accent/10',
    border: 'border-neon-cyan/30 hover:border-neon-cyan'
  },
  {
    id: 4,
    text: 'Mi sitio web de geriatría en Ciudad Juárez es moderno y funcional. Mis pacientes adoran lo fácil que es contactarme y la información clara sobre mis servicios. La visibilidad en Google ha aumentado notablemente.',
    name: 'Dra. Marlene Soto',
    specialty: 'Geriatra',
    location: 'Ciudad Juárez, Chih.',
    initial: 'MS',
    gradient: 'bg-gradient-to-br from-accent/10 to-neon-pink/10',
    border: 'border-accent/30 hover:border-accent'
  },
  {
    id: 5,
    text: 'DoctorDigital.mx construyó mi marca profesional en Aguascalientes con un sitio impecable. Las notificaciones automáticas de WhatsApp cuando hay nuevas citas me mantienen siempre informada. Las referencias han aumentado notablemente.',
    name: 'Dra. Karen Soto',
    specialty: 'Geriatra',
    location: 'Aguascalientes, Ags.',
    initial: 'KS',
    gradient: 'bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10',
    border: 'border-neon-pink/30 hover:border-neon-pink'
  },
  {
    id: 6,
    text: 'La inversión en mi presencia digital fue lo mejor que pude hacer para mi consultorio. El equipo de DoctorDigital.mx entendió perfectamente las necesidades de un cardiólogo y creó una plataforma excepcional.',
    name: 'Dr. Fernando Castillo',
    specialty: 'Cardiólogo',
    location: 'Monterrey, N.L.',
    initial: 'FC',
    gradient: 'bg-gradient-to-br from-neon-cyan/10 to-accent/10',
    border: 'border-neon-cyan/30 hover:border-neon-cyan'
  },
  {
    id: 7,
    text: 'Mi práctica pediátrica ha evolucionado gracias a la presencia online que construimos. Los padres ahora pueden encontrar información valiosa sobre el cuidado de sus hijos antes de la consulta. ¡Excelente trabajo!',
    name: 'Dra. Patricia Morales',
    specialty: 'Pediatra',
    location: 'Querétaro, Qro.',
    initial: 'PM',
    gradient: 'bg-gradient-to-br from-accent/10 to-neon-pink/10',
    border: 'border-accent/30 hover:border-accent'
  },
  {
    id: 8,
    text: 'Como dermatólogo, la imagen lo es todo. DoctorDigital.mx creó un sitio visualmente impactante que refleja la calidad de mis servicios. Las consultas en línea aumentaron un 300% en 6 meses.',
    name: 'Dr. Miguel Ángel Torres',
    specialty: 'Dermatólogo',
    location: 'Puebla, Pue.',
    initial: 'MT',
    gradient: 'bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10',
    border: 'border-neon-pink/30 hover:border-neon-pink'
  },
  {
    id: 9,
    text: 'Llevo 15 años en ginecología y nunca pensé que necesitaría un sitio web. DoctorDigital.mx me demostró lo contrario. Ahora mis pacientes más jóvenes me encuentran fácilmente y aprecian la modernidad de mi práctica.',
    name: 'Dra. Ana Laura Gutiérrez',
    specialty: 'Ginecóloga',
    location: 'Mérida, Yuc.',
    initial: 'AG',
    gradient: 'bg-gradient-to-br from-neon-cyan/10 to-accent/10',
    border: 'border-neon-cyan/30 hover:border-neon-cyan'
  }
]

const nextSlide = () => {
  if (currentSlide.value < testimonials.length - 1) {
    currentSlide.value++
  } else {
    currentSlide.value = 0
  }
  updateCarousel()
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = testimonials.length - 1
  }
  updateCarousel()
}

const goToSlide = (index) => {
  currentSlide.value = index
  updateCarousel()
}

const updateCarousel = () => {
  if (carouselTrack.value) {
    const slideWidth = carouselTrack.value.children[0]?.offsetWidth || 0
    carouselTrack.value.style.transform = `translateX(-${currentSlide.value * slideWidth}px)`
  }
}

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 5000) // Cambia cada 5 segundos
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
}

onMounted(() => {
  startAutoplay()
  
  // Detener autoplay al hacer hover
  if (carouselRef.value) {
    carouselRef.value.addEventListener('mouseenter', stopAutoplay)
    carouselRef.value.addEventListener('mouseleave', startAutoplay)
  }
  
  // Actualizar carousel en resize
  window.addEventListener('resize', updateCarousel)
})

onUnmounted(() => {
  stopAutoplay()
  window.removeEventListener('resize', updateCarousel)
})
</script>

<style scoped>
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(103, 61, 230, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(103, 61, 230, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

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
