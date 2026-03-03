<template>
  <footer class="bg-gradient-to-br from-dark-surface/80 to-accent/10 backdrop-blur-md border-t border-accent/20 mt-20 mask-image-fade-section-top">
    <div class="container mx-auto px-4 py-12">
      <!-- Logo y descripción centrados -->
      <div class="text-center mb-8">
        <div class="flex justify-center mb-4">
          <NuxtImg 
            src="/logo-vertical.webp" 
            alt="DoctorDigital.mx" 
            width="160" 
            height="160"
            class="h-32 w-auto"
          />
        </div>
        <p class="text-text-secondary text-sm leading-relaxed mb-6 max-w-2xl mx-auto">
          El futuro de la medicina también se construye en línea. Innovación, diseño y tecnología para profesionales de la salud.
        </p>
        
        <!-- Redes sociales centradas -->
        <div class="flex justify-center space-x-4 mb-8">
          <a href="https://www.facebook.com/profile.php?id=61583877568251" target="_blank" rel="noopener noreferrer" class="text-text-secondary hover:text-neon-cyan transition-colors duration-300" aria-label="Facebook">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/doctordigitalmx/" target="_blank" rel="noopener noreferrer" class="text-text-secondary hover:text-neon-cyan transition-colors duration-300" aria-label="Instagram">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Enlaces en línea horizontal -->
      <div class="text-center mb-8">
        <h3 class="text-text-primary font-semibold mb-4">Enlaces</h3>
        <div class="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          <NuxtLink to="/" class="text-text-secondary hover:text-neon-cyan transition-colors duration-300 text-sm">
            Inicio
          </NuxtLink>
          <span class="text-text-secondary/30">•</span>
          <NuxtLink to="/acerca-de" class="text-text-secondary hover:text-neon-cyan transition-colors duration-300 text-sm">
            Acerca de
          </NuxtLink>
          <span class="text-text-secondary/30">•</span>
          <NuxtLink to="/servicios" class="text-text-secondary hover:text-neon-cyan transition-colors duration-300 text-sm">
            Servicios
          </NuxtLink>
          <span class="text-text-secondary/30">•</span>
          <NuxtLink to="/como-ser-visible-online" class="text-text-secondary hover:text-neon-cyan transition-colors duration-300 text-sm">
            Ser Visible Online
          </NuxtLink>
          <span class="text-text-secondary/30">•</span>
          <NuxtLink to="/contacto" class="text-text-secondary hover:text-neon-cyan transition-colors duration-300 text-sm">
            Contacto
          </NuxtLink>
        </div>
      </div>

      <!-- Legal debajo -->
      <div class="text-center mb-8">
        <h3 class="text-text-primary font-semibold mb-3">Legal</h3>
        <div class="flex justify-center items-center gap-3">
          <NuxtLink to="/privacidad" class="text-text-secondary hover:text-neon-cyan transition-colors duration-300 text-sm">
            Aviso de Privacidad
          </NuxtLink>
          <span class="text-text-secondary/30">•</span>
          <NuxtLink to="/terminos-condiciones" class="text-text-secondary hover:text-neon-cyan transition-colors duration-300 text-sm">
            Términos y Condiciones
          </NuxtLink>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-accent/20 mt-8 pt-8 text-center">
        <p class="text-text-secondary text-sm">
          © {{ currentYear }} DoctorDigital.mx - Todos los derechos reservados
        </p>
        <p class="text-text-secondary text-xs mt-2">
          Innovación, diseño y tecnología para profesionales de la salud
        </p>
        <div class="flex flex-col items-center gap-2 mt-4">
          <p class="text-text-secondary/60 text-xs">Una empresa hermana de:</p>
          <a href="https://thecapibaraweb.com.mx/" target="_blank" rel="noopener noreferrer" aria-label="The Capibara Web">
            <NuxtImg
              src="/capibara-dark.webp"
              alt="The Capibara Web"
              class="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.mask-image-fade-section-top {
  mask-image: linear-gradient(to bottom, transparent 0%, black 20%);
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%);
}
</style>
