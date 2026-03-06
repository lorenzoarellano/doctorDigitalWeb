<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-bg-primary via-accent/5 to-neon-pink/5 overflow-hidden mask-image-fade-section-top-bottom">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 left-1/4 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-pink rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mx-auto">
          <!-- Formulario de registro -->
          <div v-if="!isRegistered" class="text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              La Ola que <span class="bg-gradient-to-r from-accent to-neon-pink bg-clip-text text-transparent">Viene</span>
            </h1>
            <p class="text-xl text-text-secondary mb-4">
              Resumen de la ponencia para residentes de psiquiatría
            </p>
            <p class="text-text-secondary mb-12 max-w-xl mx-auto">
              Completa tus datos para descargar el resumen completo en PDF.
            </p>

            <div class="max-w-md mx-auto bg-gradient-to-br from-dark-surface/80 to-accent/10 backdrop-blur-md p-8 rounded-2xl border-2 border-accent/30">
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                  <label class="block text-text-secondary mb-2 text-sm font-medium text-left">Nombre completo</label>
                  <input
                    v-model="form.name"
                    type="text"
                    maxlength="100"
                    placeholder="Dr. Juan Pérez"
                    required
                    class="w-full px-4 py-3 bg-bg-primary/50 border border-accent/30 rounded-lg text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                  <p v-if="errors.name" class="text-neon-pink text-sm mt-1 text-left">{{ errors.name }}</p>
                </div>

                <div>
                  <label class="block text-text-secondary mb-2 text-sm font-medium text-left">WhatsApp</label>
                  <input
                    ref="phoneInput"
                    v-model="form.phoneDisplay"
                    type="tel"
                    placeholder="(618)-183-5957"
                    required
                    @input="handlePhoneInput"
                    @keydown="handlePhoneKeydown"
                    class="w-full px-4 py-3 bg-bg-primary/50 border border-accent/30 rounded-lg text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                  <p v-if="errors.phone" class="text-neon-pink text-sm mt-1 text-left">{{ errors.phone }}</p>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full px-8 py-4 bg-gradient-to-r from-accent to-neon-pink text-text-primary rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  <svg v-if="isSubmitting" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ isSubmitting ? 'Enviando...' : 'Quiero mi resumen' }}
                </button>
              </form>
            </div>
          </div>

          <!-- Vista del PDF -->
          <div v-else class="text-center">
            <h1 class="text-3xl md:text-5xl font-bold text-text-primary mb-4">
              La Ola que <span class="bg-gradient-to-r from-accent to-neon-pink bg-clip-text text-transparent">Viene</span>
            </h1>
            <p class="text-text-secondary mb-8">
              ¡Gracias, <strong class="text-text-primary">{{ registeredName }}</strong>! Aquí tienes tu resumen.
            </p>

            <div class="w-full bg-dark-surface/80 rounded-2xl border border-accent/30 overflow-hidden">
              <iframe
                src="/ponencia_resumen.pdf"
                class="w-full border-0"
                style="height: 80vh;"
                title="Resumen de ponencia - La Ola que Viene"
              ></iframe>
            </div>

            <div class="mt-16 mb-8">
              <a
                href="/ponencia_resumen.pdf"
                download
                class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-neon-pink text-text-primary rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import axios from 'axios'

const STORAGE_KEY = 'ola-que-viene-registro'

useSEO({
  title: 'La Ola que Viene - Resumen de Ponencia',
  description: 'Descarga el resumen de la ponencia "La Ola que Viene" para residentes de psiquiatría. Regístrate para obtener acceso al PDF completo.',
  url: '/la-ola-que-viene',
  type: 'article'
})

const form = reactive({
  name: '',
  phoneDisplay: ''
})

const errors = reactive({
  name: '',
  phone: ''
})

const isSubmitting = ref(false)
const isRegistered = ref(false)
const registeredName = ref('')
const phoneInput = ref(null)

// Check localStorage on mount
onMounted(() => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const data = JSON.parse(saved)
      if (data.phone && data.name) {
        isRegistered.value = true
        registeredName.value = data.name
      }
    }
  } catch {
    // localStorage not available or corrupted
  }
})

// Phone mask logic
function applyPhoneMask(raw) {
  const digits = raw.replace(/\D/g, '').slice(0, 10)
  let masked = ''
  if (digits.length > 0) masked += '(' + digits.slice(0, 3)
  if (digits.length >= 3) masked += ')-'
  if (digits.length > 3) masked += digits.slice(3, 6)
  if (digits.length >= 6) masked += '-'
  if (digits.length > 6) masked += digits.slice(6, 10)
  return masked
}

function getDigits(display) {
  return display.replace(/\D/g, '')
}

function handlePhoneInput(e) {
  const digits = getDigits(e.target.value)
  form.phoneDisplay = applyPhoneMask(digits)
  errors.phone = ''
}

function handlePhoneKeydown(e) {
  // Allow backspace to work naturally with the mask
  if (e.key === 'Backspace' && form.phoneDisplay) {
    const digits = getDigits(form.phoneDisplay)
    if (digits.length > 0) {
      e.preventDefault()
      const newDigits = digits.slice(0, -1)
      form.phoneDisplay = applyPhoneMask(newDigits)
    }
  }
}

function validate() {
  let valid = true
  errors.name = ''
  errors.phone = ''

  const trimmedName = form.name.trim()
  if (!trimmedName) {
    errors.name = 'El nombre es obligatorio'
    valid = false
  } else if (trimmedName.length > 100) {
    errors.name = 'Máximo 100 caracteres'
    valid = false
  }

  const digits = getDigits(form.phoneDisplay)
  if (!digits) {
    errors.phone = 'El teléfono es obligatorio'
    valid = false
  } else if (digits.length !== 10) {
    errors.phone = 'Ingresa los 10 dígitos del teléfono'
    valid = false
  }

  return valid
}

async function handleSubmit() {
  if (!validate()) return

  isSubmitting.value = true
  const trimmedName = form.name.trim()
  const phoneFormatted = form.phoneDisplay

  try {
    const msg = '📋 Nuevo registro en "La Ola que Viene" - 👤 Nombre: ' + trimmedName + ' - 📱 WhatsApp: ' + phoneFormatted
    await axios.post('https://cybertbot.com/masivo', {
      number: '6181835957',
      message: msg
    })
  } catch (error) {
    console.error('Error enviando notificación:', error)
  }

  // Guardar en localStorage
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      name: trimmedName,
      phone: phoneFormatted
    }))
  } catch {
    // localStorage not available
  }

  registeredName.value = trimmedName
  isRegistered.value = true
  isSubmitting.value = false

  // Track event
  if (process.client && window.gtag) {
    window.gtag('event', 'ponencia_registro', {
      event_category: 'Lead',
      event_label: 'La Ola que Viene',
      value: 1
    })
  }
}
</script>
