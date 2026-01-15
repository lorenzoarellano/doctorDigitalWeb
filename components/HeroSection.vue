<template>
  <section ref="heroRef" class="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 -mt-24 pt-48 -mb-20 mask-image-fade-section-bottom">
    <!-- Gradiente de fondo rosa a azul oscuro que cubre también el área del navbar -->
    <div class="absolute inset-0 -top-24 bottom-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-[#8B1A47] dark:via-[#4A2C5C] dark:to-[#1A2B4A]">
      <!-- Overlay adicional para profundidad -->
      <div class="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent dark:from-black/50 dark:via-transparent dark:to-black/30"></div>
      <!-- Grid cyberpunk -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <!-- Scanlines effect (solo en dark mode) -->
      <div class="absolute inset-0 scanlines opacity-0 dark:opacity-3"></div>
    </div>

    <!-- Partículas flotantes animadas -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div ref="particle1" class="absolute w-2 h-2 bg-accent rounded-full shadow-lg shadow-accent/50"></div>
      <div ref="particle2" class="absolute w-3 h-3 bg-neon-pink rounded-full shadow-lg shadow-neon-pink/50"></div>
      <div ref="particle3" class="absolute w-2 h-2 bg-neon-cyan rounded-full shadow-lg shadow-neon-cyan/50"></div>
      <div ref="particle4" class="absolute w-1 h-1 bg-accent rounded-full shadow-lg shadow-accent/50"></div>
      <div ref="particle5" class="absolute w-2 h-2 bg-neon-pink rounded-full shadow-lg shadow-neon-pink/50"></div>
    </div>

    <!-- Efectos de luz neón -->
    <div class="absolute inset-0 overflow-hidden">
      <div ref="glow1" class="absolute top-20 left-10 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl opacity-0"></div>
      <div ref="glow2" class="absolute bottom-20 right-10 w-96 h-96 bg-neon-pink rounded-full mix-blend-screen filter blur-3xl opacity-0"></div>
      <div ref="glow3" class="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-3xl opacity-0"></div>
    </div>

    <div class="container mx-auto px-4 py-20 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <!-- Columna izquierda: Contenido -->
        <div class="text-center md:text-left">
          <!-- Badge animado -->
          <div ref="badgeRef" class="inline-flex items-center px-5 py-2 bg-accent/20 border-2 border-accent/50 rounded-full mb-8 backdrop-blur-md shadow-lg shadow-accent/30">
            <span class="w-2 h-2 bg-neon-cyan rounded-full mr-3 animate-pulse shadow-lg shadow-neon-cyan"></span>
            <span class="text-text-primary text-sm font-bold tracking-wider uppercase">Agencia Digital Médica</span>
          </div>

          <!-- Título principal con efecto glitch -->
          <h1 ref="titleRef" class="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span class="block text-gray-900 dark:text-text-primary drop-shadow-2xl">Tu presencia </span>
            <span class="block relative">
              <span class="bg-gradient-to-r from-accent via-neon-pink to-neon-cyan bg-clip-text text-transparent drop-shadow-glow">
                médica profesional
              </span>
              <span class="absolute inset-0 bg-gradient-to-r from-accent via-neon-pink to-neon-cyan bg-clip-text text-transparent blur-sm opacity-50">
                médica profesional
              </span>
            </span>
            <span class="block text-gray-900 dark:text-text-primary drop-shadow-2xl mt-2">en el </span>
            <span class="block relative">
              <span class="bg-gradient-to-r from-neon-cyan via-accent to-neon-pink bg-clip-text text-transparent drop-shadow-glow animate-pulse">
                futuro digital
              </span>
              <span class="absolute inset-0 bg-gradient-to-r from-neon-cyan via-accent to-neon-pink bg-clip-text text-transparent blur-lg opacity-60 animate-pulse">
                futuro digital
              </span>
            </span>
          </h1>

          <!-- Subtítulo con efecto typing -->
          <p ref="subtitleRef" class="text-lg md:text-xl text-gray-600 dark:text-text-secondary mb-10 leading-relaxed font-light">
            Diseño web, <span class="text-neon-cyan font-semibold">SEO médico</span> e <span class="text-neon-pink font-semibold">inteligencia artificial</span> para doctores en México
          </p>

          <!-- CTAs con efectos cyberpunk -->
          <div ref="ctasRef" class="flex flex-col sm:flex-row items-center md:items-start md:justify-start gap-4 mb-12">
            <button 
              @click="handleWhatsAppClick"
              class="group relative px-8 py-4 bg-gradient-to-r from-accent to-neon-pink text-text-primary rounded-xl font-bold text-base shadow-2xl shadow-accent/50 hover:shadow-accent transition-all duration-300 hover:scale-110 flex items-center gap-3 overflow-hidden cursor-pointer"
            >
              <span class="absolute inset-0 bg-gradient-to-r from-neon-pink to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span class="relative z-10">Solicita tu sitio web</span>
              <svg class="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
            <NuxtLink 
              to="/servicios"
              class="group px-8 py-4 bg-transparent border-2 border-neon-cyan text-text-primary rounded-xl font-bold text-base hover:bg-neon-cyan/20 hover:shadow-2xl hover:shadow-neon-cyan/50 transition-all duration-300 hover:scale-110 relative overflow-hidden"
            >
              <span class="absolute inset-0 border-2 border-neon-cyan animate-pulse rounded-xl"></span>
              <span class="relative z-10">Ver servicios</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Columna derecha: Imagen flotante con animación GSAP -->
        <div ref="imageContainerRef" class="relative hidden md:flex items-center justify-center">
          <!-- Efectos de glow detrás de la imagen -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div ref="imageGlow1" class="absolute w-80 h-80 bg-accent rounded-full mix-blend-screen filter blur-3xl opacity-0"></div>
            <div ref="imageGlow2" class="absolute w-80 h-80 bg-neon-pink rounded-full mix-blend-screen filter blur-3xl opacity-0"></div>
            <div ref="imageGlow3" class="absolute w-80 h-80 bg-neon-cyan rounded-full mix-blend-screen filter blur-3xl opacity-0"></div>
          </div>
          
          <!-- Imagen principal con animación -->
          <div ref="heroImageRef" class="relative z-10 mask-image-fade-bottom">
            <NuxtImg 
              src="/for-hero.webp"
              alt="Doctor Digital - Profesional de la salud"
              width="600"
              height="600"
              class="w-full h-auto drop-shadow-2xl"
              loading="eager"
              quality="95"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator mejorado -->
    <div ref="scrollIndicator" class="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
      <span class="text-text-secondary text-xs uppercase tracking-widest font-semibold">Scroll</span>
      <div class="w-6 h-10 border-2 border-accent/50 rounded-full p-1 animate-pulse">
        <div class="w-1 h-2 bg-accent rounded-full mx-auto animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from 'axios'
const { $gsap } = useNuxtApp()

// Refs para elementos
const heroRef = ref(null)
const badgeRef = ref(null)
const titleRef = ref(null)
const subtitleRef = ref(null)
const ctasRef = ref(null)
const statsRef = ref(null)
const scrollIndicator = ref(null)

// Refs para partículas
const particle1 = ref(null)
const particle2 = ref(null)
const particle3 = ref(null)
const particle4 = ref(null)
const particle5 = ref(null)

// Refs para glows
const glow1 = ref(null)
const glow2 = ref(null)
const glow3 = ref(null)

// Refs para la imagen y sus efectos
const heroImageRef = ref(null)
const imageContainerRef = ref(null)
const imageGlow1 = ref(null)
const imageGlow2 = ref(null)
const imageGlow3 = ref(null)

const handleWhatsAppClick = async () => {
  // Abrir WhatsApp inmediatamente
  window.open('https://wa.me/5216181694187', '_blank')

  // Enviar notificación en segundo plano
  try {
    await axios({
      method: 'post',
      url: 'https://cybertbot.com/masivo',
      data: {
        number: "6181835957",
        message: "Se le ha dado click a tu sitio web"
      }
    })
  } catch (error) {
    console.error('Error sending notification:', error)
  }
}

onMounted(() => {
  if (!$gsap) return

  // Timeline principal
  const tl = $gsap.timeline({ defaults: { ease: 'power3.out' } })

  // Animación de entrada del badge
  tl.from(badgeRef.value, {
    y: -50,
    opacity: 0,
    scale: 0.5,
    duration: 0.8
  })

  // Animación del título con efecto glitch
  tl.from(titleRef.value.children, {
    y: 100,
    opacity: 0,
    rotationX: -90,
    stagger: 0.2,
    duration: 1
  }, '-=0.4')

  // Animación del subtítulo
  tl.from(subtitleRef.value, {
    y: 50,
    opacity: 0,
    duration: 1
  }, '-=0.6')

  // Animación de la imagen del héroe (entrada espectacular)
  if (heroImageRef.value) {
    tl.from(heroImageRef.value, {
      x: 200,
      opacity: 0,
      scale: 0.5,
      rotation: 45,
      duration: 1.5,
      ease: 'power4.out'
    }, '-=1.2')

    // Animación flotante continua de la imagen (muy sutil)
    $gsap.to(heroImageRef.value, {
      y: -10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  }

  // Animación flotante para los botones CTA (misma que la imagen)
  if (ctasRef.value) {
    $gsap.to(ctasRef.value.children, {
      y: -10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.2
    })
  }

  // Animación de los glows detrás de la imagen
  if (imageGlow1.value && imageGlow2.value && imageGlow3.value) {
    $gsap.to([imageGlow1.value, imageGlow2.value, imageGlow3.value], {
      opacity: 0.4,
      scale: 1.3,
      duration: 2.5,
      stagger: 0.4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    // Rotación de los glows
    $gsap.to(imageGlow1.value, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
    })
    $gsap.to(imageGlow2.value, {
      rotation: -360,
      duration: 25,
      repeat: -1,
      ease: 'none'
    })
    $gsap.to(imageGlow3.value, {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: 'none'
    })
  }

  // Animaciones de los glows (luces neón)
  $gsap.to([glow1.value, glow2.value, glow3.value], {
    opacity: 0.3,
    scale: 1.2,
    duration: 2,
    stagger: 0.3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  // Animaciones de partículas flotantes
  const particles = [particle1.value, particle2.value, particle3.value, particle4.value, particle5.value]
  
  particles.forEach((particle, index) => {
    $gsap.set(particle, {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    })

    $gsap.to(particle, {
      x: '+=' + (Math.random() * 400 - 200),
      y: '+=' + (Math.random() * 400 - 200),
      duration: 3 + index,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: index * 0.2
    })

    $gsap.to(particle, {
      opacity: Math.random() * 0.5 + 0.3,
      duration: 1 + index * 0.3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  })

  // Efecto parallax en el mouse
  if (heroRef.value) {
    heroRef.value.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20

      $gsap.to(glow1.value, { x: x * 2, y: y * 2, duration: 2, ease: 'power2.out' })
      $gsap.to(glow2.value, { x: -x * 1.5, y: -y * 1.5, duration: 2, ease: 'power2.out' })
      $gsap.to(glow3.value, { x: x, y: -y, duration: 2, ease: 'power2.out' })
      
      // Parallax en los glows de la imagen (sin mover la imagen principal)
      if (imageGlow1.value && imageGlow2.value && imageGlow3.value) {
        $gsap.to(imageGlow1.value, { x: x * 1.5, y: y * 1.5, duration: 2, ease: 'power2.out' })
        $gsap.to(imageGlow2.value, { x: -x, y: -y, duration: 2.5, ease: 'power2.out' })
        $gsap.to(imageGlow3.value, { x: x * 0.8, y: -y * 0.8, duration: 2.2, ease: 'power2.out' })
      }
    })
  }
})
</script>

<style scoped>
/* Grid cyberpunk pattern */
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(103, 61, 230, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(103, 61, 230, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}

/* Scanlines effect */
.scanlines {
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(255, 255, 255, 0.05) 50%
  );
  background-size: 100% 4px;
  animation: scanlines 10s linear infinite;
}

@keyframes scanlines {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100%;
  }
}

/* Glow effect para texto */
.drop-shadow-glow {
  filter: drop-shadow(0 0 20px currentColor) drop-shadow(0 0 40px currentColor);
}

/* Efecto de pulso en border */
@keyframes border-pulse {
  0%, 100% {
    border-color: rgba(103, 61, 230, 0.5);
    box-shadow: 0 0 20px rgba(103, 61, 230, 0.3);
  }
  50% {
    border-color: rgba(214, 49, 99, 0.8);
    box-shadow: 0 0 40px rgba(214, 49, 99, 0.5);
  }
}

/* Hover effect para stats */
.stat-card {
  position: relative;
  transition: all 0.3s ease;
}

.stat-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  padding: 2px;
  background: linear-gradient(45deg, transparent, currentColor, transparent);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;
  opacity: 0;
  transition: opacity 0.3s;
}

.stat-card:hover::before {
  opacity: 1;
  animation: rotate-gradient 3s linear infinite;
}

@keyframes rotate-gradient {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Glitch effect (opcional para futuras mejoras) */
@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .bg-grid-pattern {
    background-size: 30px 30px;
  }
}

/* Máscara para desvanecer la imagen en la parte inferior */
.mask-image-fade-bottom {
  mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 70%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 70%,
    transparent 100%
  );
}

/* Máscara para desvanecer la sección en la parte inferior */
.mask-image-fade-section-bottom {
  mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 90%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 90%,
    transparent 100%
  );
}
</style>
