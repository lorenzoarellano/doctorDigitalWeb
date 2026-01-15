<template>
  <section ref="pricingRef" class="relative py-32 bg-gradient-to-br from-bg-primary via-accent/5 to-neon-pink/5 overflow-hidden mask-image-fade-section-top-bottom">
    <!-- Efectos de fondo animados -->
    <div class="absolute inset-0 opacity-20">
      <div ref="floatingOrb1" class="absolute w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl"></div>
      <div ref="floatingOrb2" class="absolute w-96 h-96 bg-neon-pink rounded-full mix-blend-screen filter blur-3xl"></div>
      <div ref="floatingOrb3" class="absolute w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Encabezado -->
      <div ref="headerRef" class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-bold text-text-primary mb-6">
          Planes y <span class="bg-gradient-to-r from-accent via-neon-pink to-neon-cyan bg-clip-text text-transparent">Precios</span>
        </h2>
        <p class="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
          El futuro de la medicina también se construye en línea.
        </p>
        <p class="text-text-secondary max-w-2xl mx-auto text-sm">
          Todos los planes incluyen: Dominio, Hosting, SSL, Diseño Responsive, SEO, WhatsApp, Aviso de Privacidad
        </p>
      </div>

      <!-- Grid de planes -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
        
        <!-- Plan Estudiante -->
        <div ref="card1" class="pricing-card group relative bg-gradient-to-br from-accent/10 to-neon-pink/10 rounded-3xl p-8 border-2 border-accent/30 hover:border-accent transition-all duration-500 hover:transform hover:scale-105 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <span class="text-2xl">🧑‍⚕️</span>
              </div>
              <h3 class="text-2xl font-bold text-text-primary">Estudiante</h3>
            </div>
            <p class="text-text-secondary text-sm mb-6">"Tu primera huella digital"</p>
            <div class="mb-6">
              <span class="text-5xl font-black bg-gradient-to-r from-accent to-neon-pink bg-clip-text text-transparent">$2,900</span>
              <span class="text-text-secondary ml-2">MXN/año</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Currículum médico digital</span>
              </li>
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Dominio incluido</span>
              </li>
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>QR profesional</span>
              </li>
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>SEO básico</span>
              </li>
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Upgrade gratis a Residente</span>
              </li>
            </ul>
            <a 
              href="https://wa.me/5216181694187?text=Hola,%20me%20interesa%20el%20Plan%20Estudiante%20($2,900%20MXN/año)"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contratar Plan Estudiante"
              class="block w-full px-6 py-3 bg-gradient-to-r from-accent to-neon-pink text-white rounded-xl font-semibold text-center hover:shadow-xl hover:shadow-accent/50 transition-all duration-300 group-hover:scale-105"
              @click="trackPricingClick('Estudiante')"
            >
              Comenzar ahora
            </a>
          </div>
        </div>

        <!-- Plan Residente -->
        <div ref="card2" class="pricing-card group relative bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 rounded-3xl p-8 border-2 border-neon-pink/30 hover:border-neon-pink transition-all duration-500 hover:transform hover:scale-105 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-neon-pink/20 rounded-xl flex items-center justify-center">
                <span class="text-2xl">🩺</span>
              </div>
              <h3 class="text-2xl font-bold text-text-primary">Residente</h3>
            </div>
            <p class="text-text-secondary text-sm mb-6">"Presencia profesional en formación"</p>
            <div class="mb-6">
              <span class="text-5xl font-black bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">$4,900</span>
              <span class="text-text-secondary ml-2">MXN/año</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sitio 2 secciones</span>
              </li>
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Schema Physician</span>
              </li>
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Diseño Personalizado</span>
              </li>
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>QR personal</span>
              </li>
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>30% OFF a plan profesional</span>
              </li>
            </ul>
            <a 
              href="https://wa.me/5216181694187?text=Hola,%20me%20interesa%20el%20Plan%20Residente%20($4,900%20MXN/año)"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contratar Plan Residente"
              class="block w-full px-6 py-3 bg-gradient-to-r from-neon-pink to-neon-cyan text-white rounded-xl font-semibold text-center hover:shadow-xl hover:shadow-neon-pink/50 transition-all duration-300 group-hover:scale-105"
              @click="trackPricingClick('Residente')"
            >
              Quiero comenzar
            </a>
          </div>
        </div>

        <!-- Plan Profesional (DESTACADO) -->
        <div ref="card3" class="pricing-card group relative bg-gradient-to-br from-neon-cyan/10 to-accent/10 rounded-3xl p-8 border-2 border-neon-cyan hover:border-neon-cyan transition-all duration-500 hover:transform hover:scale-110 overflow-visible shadow-2xl shadow-neon-cyan/20">
          <!-- Badge "Más popular" mejorado -->
          <div class="absolute -top-5 -right-5 bg-gradient-to-r from-neon-cyan via-accent to-neon-pink text-white px-8 py-3 rounded-full text-base font-black rotate-12 shadow-2xl shadow-neon-cyan/50 z-50 animate-pulse-slow border-2 border-white/30">
            ⭐ Más Popular
          </div>
          <div class="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-neon-cyan/20 rounded-xl flex items-center justify-center">
                <span class="text-2xl">⚙️</span>
              </div>
              <h3 class="text-2xl font-bold text-text-primary">Profesional</h3>
            </div>
            <p class="text-text-secondary text-sm mb-6">"Tu marca médica online"</p>
            <div class="mb-6">
              <span class="text-5xl font-black bg-gradient-to-r from-neon-cyan to-accent bg-clip-text text-transparent">$9,000</span>
              <span class="text-text-secondary ml-2">MXN/año</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sitio completo (4 secciones)</span>
              </li>
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Diseño personalizado</span>
              </li>
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>SEO + Google Maps</span>
              </li>
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Analytics + Search Console</span>
              </li>
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Soporte técnico incluido</span>
              </li>
            </ul>
            <a 
              href="https://wa.me/5216181694187?text=Hola,%20me%20interesa%20el%20Plan%20Profesional%20($9,000%20MXN/año)"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contratar Plan Profesional"
              class="block w-full px-6 py-3 bg-gradient-to-r from-neon-cyan to-accent text-white rounded-xl font-semibold text-center hover:shadow-xl hover:shadow-neon-cyan/50 transition-all duration-300 group-hover:scale-105 animate-pulse-slow"
              @click="trackPricingClick('Profesional')"
            >
              ¡Solicitar ahora!
            </a>
          </div>
        </div>

        <!-- Plan Elite -->
        <div ref="card4" class="pricing-card group relative bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 rounded-3xl p-8 border-2 border-neon-pink/30 hover:border-neon-pink transition-all duration-500 hover:transform hover:scale-105 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-neon-pink/20 rounded-xl flex items-center justify-center">
                <span class="text-2xl">🧬</span>
              </div>
              <h3 class="text-2xl font-bold text-text-primary">Elite</h3>
            </div>
            <p class="text-text-secondary text-sm mb-6">"Experiencia digital a medida"</p>
            <div class="mb-6">
              <span class="text-4xl font-black bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">A convenir</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Desarrollo a medida</span>
              </li>
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sistema interno personalizado</span>
              </li>
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>IA avanzada + CRM médico</span>
              </li>
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>SEO + Estrategia de contenidos</span>
              </li>
              <li class="flex items-start gap-2 text-sm text-text-secondary">
                <svg class="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Acompañamiento anual</span>
              </li>
            </ul>
            <a 
              href="https://wa.me/5216181694187?text=Hola,%20me%20interesa%20el%20Plan%20Elite%20personalizado"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar consultoría Plan Elite"
              class="block w-full px-6 py-3 bg-gradient-to-r from-neon-pink to-neon-cyan text-white rounded-xl font-semibold text-center hover:shadow-xl hover:shadow-neon-pink/50 transition-all duration-300 group-hover:scale-105"
              @click="trackPricingClick('Elite')"
            >
              Agenda consultoría gratis
            </a>
          </div>
        </div>
      </div>

      <!-- Mensaje de transición -->
      <div ref="messageRef" class="text-center max-w-3xl mx-auto bg-gradient-to-br from-accent/5 to-neon-cyan/5 p-8 rounded-3xl border border-accent/20 mb-6">
        <p class="text-lg text-text-secondary italic">
          "Comienza tu camino digital como estudiante, crece como residente y consolida tu marca como especialista. <span class="text-accent font-semibold">DoctorDigital.mx</span> te acompaña en cada etapa."
        </p>
      </div>

      <!-- Leyenda de IVA -->
      <div class="text-center">
        <p class="text-sm text-text-secondary/70">
          * Precios + IVA si se requiere factura
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from 'axios'
const { $gsap } = useNuxtApp()

// Refs para animaciones
const pricingRef = ref(null)
const headerRef = ref(null)
const card1 = ref(null)
const card2 = ref(null)
const card3 = ref(null)
const card4 = ref(null)
const messageRef = ref(null)
const floatingOrb1 = ref(null)
const floatingOrb2 = ref(null)
const floatingOrb3 = ref(null)

const trackPricingClick = async (planName) => {
  if (process.client && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'Contact',
      event_label: `Pricing Plan: ${planName}`,
      value: 1
    })
  }

  try {
    const message = `Click en botón de plan: ${planName}`
    await Promise.all([
      axios.post('https://cybertbot.com/masivo', {
        number: "6181835957",
        message: message
      }),
      axios.post('https://cybertbot.com/masivo', {
        number: "6181694187",
        message: message
      })
    ])
  } catch (error) {
    console.error('Error enviando notificaciones:', error)
  }
}

onMounted(() => {
  if (!$gsap) return

  // Animación de los orbes flotantes
  $gsap.to(floatingOrb1.value, {
    x: 100,
    y: -100,
    scale: 1.2,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  $gsap.to(floatingOrb2.value, {
    x: -100,
    y: 100,
    scale: 1.3,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  $gsap.to(floatingOrb3.value, {
    x: 50,
    y: 50,
    scale: 1.1,
    duration: 12,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  // Hover effects individuales en las cards
  const cards = [card1.value, card2.value, card3.value, card4.value]
  
  cards.forEach(card => {
    if (card) {
      card.addEventListener('mouseenter', () => {
        $gsap.to(card, {
          y: -10,
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      card.addEventListener('mouseleave', () => {
        $gsap.to(card, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    }
  })
})
</script>

<style scoped>
@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.pricing-card {
  backdrop-filter: blur(10px);
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
