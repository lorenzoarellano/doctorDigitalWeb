<template>
  <Teleport to="body">
    <Transition name="slide-up">
      <div
        v-if="showBanner"
        class="fixed bottom-0 left-0 right-0 z-50 p-4 bg-bg-primary/95 backdrop-blur-md border-t-2 border-accent shadow-lg"
      >
        <div class="container mx-auto max-w-5xl">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex-1 text-sm text-text-secondary">
              <p class="mb-2">
                🍪 <strong class="text-text-primary">Usamos cookies</strong> para mejorar tu experiencia en nuestro sitio web.
              </p>
              <p class="text-xs">
                Al continuar navegando, aceptas nuestra 
                <NuxtLink to="/privacidad" class="text-accent hover:text-neon-cyan underline">Política de Privacidad</NuxtLink>
                y nuestros
                <NuxtLink to="/terminos-condiciones" class="text-accent hover:text-neon-cyan underline">Términos y Condiciones</NuxtLink>.
              </p>
            </div>
            
            <div class="flex gap-3">
              <button
                @click="rejectCookies"
                class="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary border border-text-secondary/30 rounded-lg hover:border-text-primary/50 transition-all duration-300"
              >
                Rechazar
              </button>
              <button
                @click="acceptCookies"
                class="px-6 py-2 text-sm font-bold text-white bg-accent hover:bg-accent/80 rounded-lg shadow-md hover:shadow-accent/50 transition-all duration-300"
              >
                Aceptar Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showBanner = ref(false);

onMounted(() => {
  // Verificar si el usuario ya aceptó o rechazó las cookies
  const cookieConsent = localStorage.getItem('cookieConsent');
  
  if (!cookieConsent) {
    // Si no hay respuesta previa, mostrar el banner después de un pequeño delay
    setTimeout(() => {
      showBanner.value = true;
    }, 1000);
  } else if (cookieConsent === 'accepted') {
    // Si ya aceptó, habilitar analytics
    enableAnalytics();
  }
});

const acceptCookies = () => {
  localStorage.setItem('cookieConsent', 'accepted');
  showBanner.value = false;
  enableAnalytics();
  
  // Track el evento de aceptación
  if (window.gtag) {
    window.gtag('event', 'cookie_consent', {
      event_category: 'engagement',
      event_label: 'accepted'
    });
  }
};

const rejectCookies = () => {
  localStorage.setItem('cookieConsent', 'rejected');
  showBanner.value = false;
  disableAnalytics();
  
  // Track el evento de rechazo (sin datos personales)
  if (window.gtag) {
    window.gtag('event', 'cookie_consent', {
      event_category: 'engagement',
      event_label: 'rejected'
    });
  }
};

const enableAnalytics = () => {
  // Habilitar Google Analytics
  if (window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  }
};

const disableAnalytics = () => {
  // Deshabilitar Google Analytics
  if (window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
  }
};
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
