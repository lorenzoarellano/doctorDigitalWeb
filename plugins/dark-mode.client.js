export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    // Forzar modo oscuro siempre
    document.documentElement.classList.add('dark')
  }
})
