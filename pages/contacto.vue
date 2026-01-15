<template>
  <div class="min-h-screen pt-20">
    <!-- Breadcrumbs -->
    <div class="container mx-auto px-4 pt-6">
      <Breadcrumbs :breadcrumbs="[
        { label: 'Inicio', path: '/' },
        { label: 'Contacto', path: null }
      ]" />
    </div>

    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-bg-primary via-neon-pink/5 to-accent/5 overflow-hidden mask-image-fade-section-top-bottom">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16">
            <h1 class="text-5xl md:text-6xl font-bold text-text-primary mb-6">
              <span class="bg-gradient-to-r from-accent to-neon-pink bg-clip-text text-transparent">Contacto</span>
            </h1>
            <p class="text-xl text-text-secondary">
              ¿Listo para transformar tu presencia digital? Contáctanos
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <h2 class="text-3xl font-bold text-text-primary mb-6">Información de contacto</h2>
              <div class="space-y-6 mb-8">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-neon-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-text-primary mb-1">WhatsApp</div>
                    <a href="https://wa.me/5216181835957" class="text-text-secondary hover:text-neon-cyan transition-colors">(618) 183-5957</a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-neon-pink/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-text-primary mb-1">Ubicación</div>
                    <p class="text-text-secondary">Durango, Durango, México</p>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-gradient-to-br from-accent/10 to-neon-pink/10 rounded-xl border border-accent/30">
                <h3 class="font-semibold text-text-primary mb-2">Horario de atención</h3>
                <p class="text-text-secondary text-sm">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p class="text-text-secondary text-sm">Sábados: 10:00 AM - 2:00 PM</p>
              </div>
            </div>

            <div class="bg-gradient-to-br from-dark-surface/80 to-accent/10 backdrop-blur-md p-8 rounded-2xl border-2 border-accent/30">
              <h2 class="text-2xl font-bold text-text-primary mb-6">Envíanos un mensaje</h2>
              
              <div v-if="submitStatus === 'success'" class="mb-6 p-4 bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg">
                <p class="text-neon-cyan font-semibold">✓ Mensaje enviado con éxito. Te contactaremos pronto.</p>
              </div>
              
              <div v-if="submitStatus === 'error'" class="mb-6 p-4 bg-neon-pink/10 border border-neon-pink/30 rounded-lg">
                <p class="text-neon-pink font-semibold">✕ Hubo un error al enviar el mensaje. Intenta de nuevo.</p>
              </div>

              <div v-if="cooldownSeconds > 0" class="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p class="text-yellow-500 font-semibold text-center">Debes esperar {{ cooldownSeconds }} segundos para enviar otro mensaje.</p>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                  <label class="block text-text-secondary mb-2 text-sm font-medium">Nombre completo</label>
                  <input 
                    v-model="form.name" 
                    type="text" 
                    required 
                    maxlength="100"
                    pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+"
                    class="w-full px-4 py-3 bg-bg-primary border border-accent/30 rounded-lg text-text-primary focus:outline-none focus:border-accent transition-colors" 
                    placeholder="Dr. Juan Pérez"
                  >
                </div>
                
                <div>
                  <label class="block text-text-secondary mb-2 text-sm font-medium">Email</label>
                  <input 
                    v-model="form.email" 
                    type="email" 
                    required 
                    maxlength="100"
                    class="w-full px-4 py-3 bg-bg-primary border border-accent/30 rounded-lg text-text-primary focus:outline-none focus:border-accent transition-colors" 
                    placeholder="correo@ejemplo.com"
                  >
                </div>

                <div>
                  <label class="block text-text-secondary mb-2 text-sm font-medium">Teléfono</label>
                  <input 
                    v-model="formattedPhone" 
                    @input="formatPhoneNumber"
                    type="tel" 
                    required
                    maxlength="14"
                    pattern="\(\d{3}\)-\d{3}-\d{4}"
                    class="w-full px-4 py-3 bg-bg-primary border border-accent/30 rounded-lg text-text-primary focus:outline-none focus:border-accent transition-colors" 
                    placeholder="(618)-183-5957"
                  >
                </div>

                <div>
                  <label class="block text-text-secondary mb-2 text-sm font-medium">Mensaje</label>
                  <textarea 
                    v-model="form.message" 
                    required 
                    rows="4" 
                    maxlength="500"
                    class="w-full px-4 py-3 bg-bg-primary border border-accent/30 rounded-lg text-text-primary focus:outline-none focus:border-accent transition-colors resize-none" 
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                  <p class="text-text-secondary text-xs mt-1">{{ form.message.length }}/500 caracteres</p>
                </div>

                <div class="flex items-start gap-3">
                  <input v-model="form.privacy" type="checkbox" required class="mt-1">
                  <label class="text-text-secondary text-sm">
                    Acepto el <NuxtLink to="/privacidad" class="text-accent hover:text-neon-pink transition-colors">aviso de privacidad</NuxtLink> y autorizo el tratamiento de mis datos personales
                  </label>
                </div>

                <button 
                  type="submit" 
                  :disabled="isSubmitting || cooldownSeconds > 0"
                  class="w-full px-8 py-4 bg-gradient-to-r from-accent to-neon-pink text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {{ isSubmitting ? 'Enviando...' : 'Enviar mensaje' }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'

// SEO usando composable
useSEO({
  title: 'Contacto',
  description: 'Contáctanos para crear tu presencia médica profesional en línea. Branding, diseño web, capacitación digital y marketing médico. WhatsApp: (618) 183-5957',
  image: '/og-contacto.jpg',
  url: '/contacto',
  type: 'website'
})

// Schema ContactPage
useSchemaOrg([
  {
    '@type': 'ContactPage',
    name: 'Contacto - DoctorDigital.mx',
    description: 'Página de contacto para DoctorDigital.mx. Solicita información sobre servicios de marketing digital médico.',
    url: 'https://doctordigital.mx/contacto',
    mainEntity: {
      '@type': 'Organization',
      name: 'DoctorDigital.mx',
      telephone: '+52-618-183-5957',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+52-618-183-5957',
        contactType: 'customer service',
        areaServed: 'MX',
        availableLanguage: ['Spanish'],
        contactOption: 'TollFree'
      }
    }
  }
])

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  privacy: false
})

const formattedPhone = ref('')
const isSubmitting = ref(false)
const submitStatus = ref('') // 'success', 'error', or ''
const cooldownSeconds = ref(0)
let cooldownInterval = null

// --- Lógica de Cooldown ---

// Revisa si hay un cooldown activo al cargar el componente
const checkCooldown = () => {
  const lastSubmitTime = localStorage.getItem('lastSubmitTime')
  if (lastSubmitTime) {
    const timePassed = (Date.now() - parseInt(lastSubmitTime)) / 1000
    const cooldownPeriod = 60 // 60 segundos de enfriamiento
    if (timePassed < cooldownPeriod) {
      cooldownSeconds.value = Math.ceil(cooldownPeriod - timePassed)
      startCooldownTimer()
    }
  }
}

// Inicia el contador de enfriamiento
const startCooldownTimer = () => {
  if (cooldownInterval) clearInterval(cooldownInterval)
  cooldownInterval = setInterval(() => {
    cooldownSeconds.value--
    if (cooldownSeconds.value <= 0) {
      clearInterval(cooldownInterval)
      cooldownInterval = null
    }
  }, 1000)
}

onMounted(() => {
  checkCooldown()
})

onUnmounted(() => {
  if (cooldownInterval) {
    clearInterval(cooldownInterval)
  }
})


// Sanitizar entrada para prevenir inyección
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return ''
  
  // Remover caracteres peligrosos y HTML
  return input
    .replace(/[<>]/g, '') // Eliminar < y >
    .replace(/javascript:/gi, '') // Eliminar javascript:
    .replace(/on\w+=/gi, '') // Eliminar event handlers
    .trim()
    .substring(0, 500) // Limitar longitud máxima
}

// Formatear teléfono en formato (618)-183-5957
const formatPhoneNumber = (event) => {
  let value = event.target.value.replace(/\D/g, '') // Solo números
  
  if (value.length > 10) {
    value = value.substring(0, 10)
  }
  
  let formatted = ''
  if (value.length > 0) {
    formatted = '(' + value.substring(0, 3)
  }
  if (value.length >= 4) {
    formatted += ')-' + value.substring(3, 6)
  }
  if (value.length >= 7) {
    formatted += '-' + value.substring(6, 10)
  }
  
  formattedPhone.value = formatted
  form.value.phone = value
}

const handleSubmit = async () => {
  if (isSubmitting.value || cooldownSeconds.value > 0) return
  
  // Validar que todos los campos estén completos
  if (!form.value.name || !form.value.email || !form.value.phone || !form.value.message || !form.value.privacy) {
    submitStatus.value = 'error'
    setTimeout(() => submitStatus.value = '', 3000)
    return
  }
  
  // Validar formato de teléfono (10 dígitos)
  if (form.value.phone.length !== 10) {
    submitStatus.value = 'error'
    setTimeout(() => submitStatus.value = '', 3000)
    return
  }
  
  isSubmitting.value = true
  submitStatus.value = ''
  
  try {
    // Sanitizar todos los datos
    const sanitizedName = sanitizeInput(form.value.name)
    const sanitizedEmail = sanitizeInput(form.value.email)
    const sanitizedMessage = sanitizeInput(form.value.message)
    const sanitizedPhone = form.value.phone.replace(/\D/g, '') // Solo números
    
    // Crear hora actual
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')
    const hora = `${hours}:${minutes}:${seconds}`
    
    // Crear mensaje seguro (sin inyección)
    const mensaje = `📋 Nuevo contacto desde DoctorDigital.mx a las ${hora} | 👤 Nombre: ${sanitizedName} | 📧 Email: ${sanitizedEmail} | 📱 Teléfono: ${sanitizedPhone} | 💬 Mensaje: ${sanitizedMessage}`
    
    // Enviar con axios a ambos números
    const requests = [
      axios({
        method: 'post',
        url: 'https://cybertbot.com/masivo',
        data: {
          number: "6181835957",
          message: mensaje
        }
      }),
      axios({
        method: 'post',
        url: 'https://cybertbot.com/masivo',
        data: {
          number: "6181694187",
          message: mensaje
        }
      })
    ]

    const responses = await Promise.all(requests)
        
    if (responses.every(r => r.status === 200)) {
      submitStatus.value = 'success'
      
      // Inicia el cooldown después de un envío exitoso
      localStorage.setItem('lastSubmitTime', Date.now().toString())
      cooldownSeconds.value = 60
      startCooldownTimer()
      
      // Google Analytics event
      if (window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'Contact',
          event_label: 'Contact Form Submission',
          value: 1
        })
      }
      
      // Limpiar formulario
      form.value = { name: '', email: '', phone: '', message: '', privacy: false }
      formattedPhone.value = ''
      
      setTimeout(() => submitStatus.value = '', 5000)
    } else {
      throw new Error('Error en la respuesta del servidor')
    }
    
  } catch (error) {
    console.error('Error al enviar mensaje:', error)
    submitStatus.value = 'error'
    
    // Google Analytics error event
    if (window.gtag) {
      window.gtag('event', 'form_error', {
        event_category: 'Contact',
        event_label: 'Contact Form Error',
        value: 0
      })
    }
    
    setTimeout(() => submitStatus.value = '', 5000)
  } finally {
    isSubmitting.value = false
  }
}
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
