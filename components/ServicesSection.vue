<template>
  <section class="relative py-32 bg-gradient-to-br from-bg-primary via-accent/5 to-neon-pink/5 overflow-hidden transition-colors duration-300 mask-image-fade-section-top-bottom">
    <!-- Efectos de fondo -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute w-96 h-96 bg-neon-pink rounded-full mix-blend-screen filter blur-3xl top-20 right-10 animate-pulse"></div>
      <div class="absolute w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl bottom-20 left-10"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Encabezado de sección -->
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-bold text-text-primary mb-6">
          Servicios <span class="bg-gradient-to-r from-accent via-neon-pink to-neon-cyan bg-clip-text text-transparent">Digitales</span>
        </h2>
        <p class="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
          Soluciones digitales completas para médicos y especialistas
        </p>
      </div>

      <!-- Grid de servicios resumido - 3 arriba, 2 abajo -->
      <div class="max-w-7xl mx-auto mb-12">
        <!-- Primera fila: 3 servicios -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          
          <!-- Servicio 1: Diseño Web -->
          <div class="group relative bg-gradient-to-br from-accent/10 to-neon-pink/10 rounded-2xl p-8 border-2 border-accent/30 hover:border-accent transition-all duration-300 hover:transform hover:scale-105">
            <div class="w-16 h-16 bg-gradient-to-br from-accent to-neon-pink rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-text-primary mb-3">Sitio Web Médico</h3>
            <p class="text-text-secondary mb-6">Páginas web profesionales con SEO, diseño responsive y botón de WhatsApp directo.</p>
          </div>

          <!-- Servicio 2: AEO (Nuevo) -->
          <div class="group relative bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 rounded-2xl p-8 border-2 border-neon-pink/30 hover:border-neon-pink transition-all duration-300 hover:transform hover:scale-105">
            <div class="w-16 h-16 bg-gradient-to-br from-neon-pink to-neon-cyan rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-text-primary mb-3">🔍 AEO Médico</h3>
            <p class="text-sm text-neon-pink font-semibold mb-2">(Visibilidad en Google e IA)</p>
            <p class="text-text-secondary mb-6">Posicionamiento en Google y asistentes con inteligencia artificial. Aparece cuando pregunten a ChatGPT o busquen en Google.</p>
          </div>

          <!-- Servicio 3: IA -->
          <div class="group relative bg-gradient-to-br from-accent/10 to-neon-pink/10 rounded-2xl p-8 border-2 border-accent/30 hover:border-accent transition-all duration-300 hover:transform hover:scale-105">
            <div class="w-16 h-16 bg-gradient-to-br from-accent to-neon-pink rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-text-primary mb-3">IA para Médicos</h3>
            <p class="text-text-secondary mb-6">Automatización inteligente con bots de WhatsApp que agendan citas 24/7.</p>
          </div>
        </div>

        <!-- Segunda fila: 2 servicios centrados -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          <!-- Servicio 4: SEO Local -->
          <div class="group relative bg-gradient-to-br from-neon-cyan/10 to-accent/10 rounded-2xl p-8 border-2 border-neon-cyan/30 hover:border-neon-cyan transition-all duration-300 hover:transform hover:scale-105">
            <div class="w-16 h-16 bg-gradient-to-br from-neon-cyan to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-text-primary mb-3">SEO Local</h3>
            <p class="text-text-secondary mb-6">Posicionamiento en Google Maps y búsquedas locales para que te encuentren cerca.</p>
          </div>

          <!-- Servicio 5: Branding y Capacitación -->
          <div class="group relative bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 rounded-2xl p-8 border-2 border-neon-pink/30 hover:border-neon-pink transition-all duration-300 hover:transform hover:scale-105">
            <div class="w-16 h-16 bg-gradient-to-br from-neon-pink to-neon-cyan rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-text-primary mb-3">Branding y Capacitación</h3>
            <p class="text-text-secondary mb-6">Diseño de identidad médica profesional y capacitaciones para dominar las herramientas digitales más potentes.</p>
          </div>
        </div>
      </div>

      <!-- CTA para ver todos los servicios -->
      <div class="text-center">
        <NuxtLink 
          to="/servicios"
          class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent via-neon-pink to-neon-cyan text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110"
        >
          <span>Ver todos los servicios</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
// No se requiere lógica adicional por ahora
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