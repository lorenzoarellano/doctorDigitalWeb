<template>
  <nav aria-label="Breadcrumb" class="py-4">
    <ol class="flex items-center space-x-2 text-sm text-text-secondary" itemscope itemtype="https://schema.org/BreadcrumbList">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <NuxtLink 
          v-if="crumb.path" 
          :to="crumb.path" 
          class="hover:text-accent transition-colors duration-200"
          itemprop="item"
        >
          <span itemprop="name">{{ crumb.label }}</span>
        </NuxtLink>
        <span v-else class="text-text-primary font-medium" itemprop="name">{{ crumb.label }}</span>
        <meta itemprop="position" :content="index + 1" />
        
        <svg 
          v-if="index < breadcrumbs.length - 1" 
          class="w-4 h-4 mx-2 text-text-secondary" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </li>
    </ol>
  </nav>
</template>

<script setup>
const props = defineProps({
  breadcrumbs: {
    type: Array,
    required: true,
    // Ejemplo: [
    //   { label: 'Inicio', path: '/' },
    //   { label: 'Servicios', path: '/servicios' },
    //   { label: 'Branding Médico', path: null } // null = página actual
    // ]
  }
})
</script>
