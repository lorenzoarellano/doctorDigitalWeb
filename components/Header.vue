<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 border-b border-accent/30 transition-all duration-500 bg-gradient-to-br from-dark-surface/80 to-accent/10 backdrop-blur-md"
  >
    <nav class="container mx-auto px-4 py-5 relative z-10">
      <div class="flex items-center justify-between min-h-[60px]">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <img 
            src="/logo.webp" 
            alt="DoctorDigital.mx Logo" 
            class="w-60 h-auto hover:opacity-80 transition-opacity"
            loading="eager"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6" role="navigation" aria-label="Navegación principal">
          <NuxtLink 
            to="/" 
            class="text-white hover:text-accent transition-colors duration-300 font-medium"
            style="text-shadow: 0 2px 4px rgba(0,0,0,0.3)"
            active-class="text-accent"
          >
            Inicio
          </NuxtLink>
          <NuxtLink 
            to="/acerca-de" 
            class="text-white hover:text-accent transition-colors duration-300 font-medium"
            style="text-shadow: 0 2px 4px rgba(0,0,0,0.3)"
            active-class="text-accent"
          >
            Acerca de
          </NuxtLink>
          <NuxtLink 
            to="/servicios" 
            class="text-white hover:text-accent transition-colors duration-300 font-medium"
            style="text-shadow: 0 2px 4px rgba(0,0,0,0.3)"
            active-class="text-accent"
          >
            Servicios
          </NuxtLink>
          <NuxtLink 
            to="/como-ser-visible-online" 
            class="text-white hover:text-accent transition-colors duration-300 font-medium"
            style="text-shadow: 0 2px 4px rgba(0,0,0,0.3)"
            active-class="text-accent"
          >
            Ser Visible Online
          </NuxtLink>
          
          <NuxtLink 
            to="/contacto" 
            class="px-6 py-2 bg-gradient-to-r from-accent to-neon-pink text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
          >
            Contacto
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMenu" 
          class="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-surface rounded-lg p-2 transition-all duration-300"
          style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
          :aria-label="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition name="slide-fade">
        <div 
          v-if="isMenuOpen" 
          id="mobile-menu"
          class="md:hidden mt-4 pb-4 space-y-4"
          role="navigation"
          aria-label="Menú de navegación móvil"
        >
          <NuxtLink 
            to="/" 
            @click="closeMenu"
            class="block text-text-secondary hover:text-text-primary transition-colors duration-300 font-medium"
            active-class="text-accent"
          >
            Inicio
          </NuxtLink>
          <NuxtLink 
            to="/acerca-de" 
            @click="closeMenu"
            class="block text-text-secondary hover:text-text-primary transition-colors duration-300 font-medium"
            active-class="text-accent"
          >
            Acerca de
          </NuxtLink>
          <NuxtLink 
            to="/servicios" 
            @click="closeMenu"
            class="block text-text-secondary hover:text-text-primary transition-colors duration-300 font-medium"
            active-class="text-accent"
          >
            Servicios
          </NuxtLink>
          <NuxtLink 
            to="/como-ser-visible-online" 
            @click="closeMenu"
            class="block text-text-secondary hover:text-text-primary transition-colors duration-300 font-medium"
            active-class="text-accent"
          >
            Ser Visible Online
          </NuxtLink>
          <NuxtLink 
            to="/contacto" 
            @click="closeMenu"
            class="block px-6 py-2 bg-gradient-to-r from-accent to-neon-pink text-text-primary rounded-lg font-semibold text-center"
          >
            Contacto
          </NuxtLink>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false)
const route = useRoute()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Cerrar menú al cambiar de ruta
watch(() => route.path, () => {
  closeMenu()
})
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
