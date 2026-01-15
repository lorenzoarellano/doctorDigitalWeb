<template>
  <button
    @click="toggleTheme"
    class="p-2 rounded-lg bg-gray-200 dark:bg-dark-surface/50 hover:bg-accent/20 dark:hover:bg-accent/20 transition-all duration-300 border border-gray-300 dark:border-accent/30 hover:border-accent dark:hover:border-accent/50"
    :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
    :title="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
  >
    <!-- Sol (cuando está en Dark mode, muestra sol para cambiar a Light) -->
    <svg 
      v-if="isDark"
      class="w-5 h-5 text-yellow-400" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
      />
    </svg>
    
    <!-- Luna (cuando está en Light mode, muestra luna para cambiar a Dark) -->
    <svg 
      v-else
      class="w-5 h-5 text-purple-600" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
      />
    </svg>
  </button>
</template>

<script setup>
const isDark = ref(true)

onMounted(() => {
  // Verificar el tema actual
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme')
    isDark.value = savedTheme !== 'light'
  }
})

const toggleTheme = () => {
  if (typeof window === 'undefined') return
  
  const htmlElement = document.documentElement
  const currentIsDark = htmlElement.classList.contains('dark')
  
  console.log('Cambiando tema. Estado actual:', currentIsDark ? 'Dark' : 'Light')
  
  if (currentIsDark) {
    htmlElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
    isDark.value = false
    console.log('Cambiado a Light mode')
  } else {
    htmlElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    isDark.value = true
    console.log('Cambiado a Dark mode')
  }
}
</script>
