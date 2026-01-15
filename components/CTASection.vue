<template>
  <section class="relative py-32 bg-gradient-to-br from-accent/10 via-bg-primary to-neon-pink/10 overflow-hidden mask-image-fade-section-top-bottom">
    <!-- Efectos decorativos -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-0 left-1/4 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-pink rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-6xl font-bold text-text-primary mb-6">
          ¿Listo para llevar tu práctica al <span class="bg-gradient-to-r from-accent to-neon-pink bg-clip-text text-transparent">siguiente nivel</span>?
        </h2>
        
        <p class="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
          Únete a los médicos que ya confían en tecnología de vanguardia para hacer crecer su presencia profesional.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <NuxtLink 
            to="/contacto"
            class="group px-10 py-5 bg-gradient-to-r from-accent to-neon-pink text-text-primary rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Solicita tu consulta gratis
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
          
          <a 
            href="https://wa.me/5216181694187?text=Hola,%20me%20interesa%20obtener%20información"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            class="px-10 py-5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
            @click="trackWhatsAppClick"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        <!-- Beneficios rápidos -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div class="flex flex-col items-center p-4">
            <div class="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
              <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p class="text-text-secondary text-sm">Sin costos ocultos</p>
          </div>
          <div class="flex flex-col items-center p-4">
            <div class="w-12 h-12 bg-neon-cyan/20 rounded-full flex items-center justify-center mb-3">
              <svg class="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p class="text-text-secondary text-sm">Soporte 24/7</p>
          </div>
          <div class="flex flex-col items-center p-4">
            <div class="w-12 h-12 bg-neon-pink/20 rounded-full flex items-center justify-center mb-3">
              <svg class="w-6 h-6 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p class="text-text-secondary text-sm">Resultados rápidos</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from 'axios'

const trackWhatsAppClick = async () => {
  if (process.client && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'Contact',
      event_label: 'CTA WhatsApp Click',
      value: 1
    })
  }

  try {
    await Promise.all([
      axios.post('https://cybertbot.com/masivo', {
        number: "6181835957",
        message: "Click en botón WhatsApp de sección CTA"
      }),
      axios.post('https://cybertbot.com/masivo', {
        number: "6181694187",
        message: "Click en botón WhatsApp de sección CTA"
      })
    ])
  } catch (error) {
    console.error('Error enviando notificaciones:', error)
  }
}
</script>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
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
