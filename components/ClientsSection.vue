<template>
  <section class="relative py-24 bg-bg-primary overflow-hidden mask-image-fade-section-top-bottom">
    <!-- Efectos de fondo sutiles -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Encabezado SEO -->
      <div class="text-center mb-16 max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-text-primary mb-6">
          Ellos confían en <span class="bg-gradient-to-r from-accent to-neon-cyan bg-clip-text text-transparent">Doctor Digital Mx</span>
        </h2>
        <p class="text-xl text-text-secondary leading-relaxed">
          Impulsamos la presencia digital de especialistas médicos líderes en México. 
          Nuestra experiencia en <strong class="text-neon-cyan">Diseño Web Médico</strong>, 
          <strong class="text-accent">Branding</strong> y <strong class="text-neon-pink">Posicionamiento SEO</strong> 
          respalda el éxito de nuestros clientes.
        </p>
      </div>

      <!-- Grid de Clientes -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        
        <!-- Dra. Denise Medina -->
        <a href="https://dradenisemedina.com/" target="_blank" rel="noopener noreferrer" class="client-card group">
          <div class="relative h-48 w-full flex items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:border-accent/50 transition-all duration-300 backdrop-blur-sm">
            <div class="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <NuxtImg 
              src="deniseMedina.webp" 
              alt="Logo Dra. Denise Medina - Geriatría" 
              class="max-h-32 w-auto object-contain transition-all duration-300 transform group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="mt-4 text-center">
            <h3 class="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">Dra. Denise Medina</h3>
            <p class="text-sm text-text-secondary">Sitio Web + SEO Médico</p>
            <p class="text-xs text-text-secondary/80 mt-1">Durango, México</p>
          </div>
        </a>

        <!-- Dra. Saira Rosales -->
        <a href="https://drasairarosales.com/" target="_blank" rel="noopener noreferrer" class="client-card group">
          <div class="relative h-48 w-full flex items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:border-neon-pink/50 transition-all duration-300 backdrop-blur-sm">
            <div class="absolute inset-0 bg-gradient-to-br from-neon-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <NuxtImg 
              src="sairaRosales.webp" 
              alt="Logo Dra. Saira Rosales - Geriatría" 
              class="max-h-32 w-auto object-contain transition-all duration-300 transform group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="mt-4 text-center">
            <h3 class="text-lg font-semibold text-text-primary group-hover:text-neon-pink transition-colors">Dra. Saira Rosales</h3>
            <p class="text-sm text-text-secondary">Sitio Web + Estrategia Digital</p>
            <p class="text-xs text-text-secondary/80 mt-1">Durango, México</p>
          </div>
        </a>

        <!-- Dra. Marlene Soto -->
        <a href="https://dramarlenesotogeriatra.com/" target="_blank" rel="noopener noreferrer" class="client-card group">
          <div class="relative h-48 w-full flex items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:border-neon-cyan/50 transition-all duration-300 backdrop-blur-sm">
            <div class="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <NuxtImg 
              src="marleneSoto.webp" 
              alt="Logo Dra. Marlene Soto - Geriatría" 
              class="max-h-32 w-auto object-contain transition-all duration-300 transform group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="mt-4 text-center">
            <h3 class="text-lg font-semibold text-text-primary group-hover:text-neon-cyan transition-colors">Dra. Marlene Soto</h3>
            <p class="text-sm text-text-secondary">Sitio Web Especializado</p>
            <p class="text-xs text-text-secondary/80 mt-1">Ciudad Juárez, Chihuahua</p>
          </div>
        </a>

        <!-- Dra. Karen Soto -->
        <a href="https://drakarensotogeriatra.com/" target="_blank" rel="noopener noreferrer" class="client-card group">
          <div class="relative h-48 w-full flex items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:border-accent/50 transition-all duration-300 backdrop-blur-sm">
            <div class="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <NuxtImg 
              src="/karenSoto.webp" 
              alt="Logo Dra. Karen Soto - Geriatría" 
              class="max-h-32 w-auto object-contain transition-all duration-300 transform group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="mt-4 text-center">
            <h3 class="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">Dra. Karen Soto</h3>
            <p class="text-sm text-text-secondary">Desarrollo Web + Branding</p>
            <p class="text-xs text-text-secondary/80 mt-1">Aguascalientes, México</p>
          </div>
        </a>

        <!-- Dr. Ricardo Rubio (Sin enlace web) -->
        <div class="client-card group cursor-default">
          <div class="relative h-48 w-full flex items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:border-neon-pink/50 transition-all duration-300 backdrop-blur-sm">
            <div class="absolute inset-0 bg-gradient-to-br from-neon-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <NuxtImg 
              src="/ricardoRubio.webp" 
              alt="Logo Dr. Ricardo Rubio - Medicina Familiar" 
              class="max-h-32 w-auto object-contain transition-all duration-300 transform group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="mt-4 text-center">
            <h3 class="text-lg font-semibold text-text-primary group-hover:text-neon-pink transition-colors">Dr. Ricardo Rubio</h3>
            <p class="text-sm text-text-secondary">Diseño de Identidad Visual (Logo)</p>
            <p class="text-xs text-text-secondary/80 mt-1">Durango, México</p>
            <span class="inline-block mt-2 px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-text-secondary">Branding Médico</span>
          </div>
        </div>

        <!-- Dr. José Luis Reveles -->
        <a href="https://drjoseluisrevelestraumatologo.com/" target="_blank" rel="noopener noreferrer" class="client-card group">
          <div class="relative h-48 w-full flex items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:border-neon-cyan/50 transition-all duration-300 backdrop-blur-sm">
            <div class="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <NuxtImg 
              src="/joseLuisReveles.webp" 
              alt="Logo Dr. José Luis Reveles - Traumatología" 
              class="max-h-32 w-auto object-contain transition-all duration-300 transform group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="mt-4 text-center">
            <h3 class="text-lg font-semibold text-text-primary group-hover:text-neon-cyan transition-colors">Dr. José Luis Reveles</h3>
            <p class="text-sm text-text-secondary">Desarrollo Web + Branding</p>
            <p class="text-xs text-text-secondary/80 mt-1">Aguascalientes, México</p>
          </div>
        </a>

        <!-- Dr. Edgar Hernández Vargas -->
        <a href="https://reumatologiadurango.com/" target="_blank" rel="noopener noreferrer" class="client-card group">
          <div class="relative h-48 w-full flex items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:border-accent/50 transition-all duration-300 backdrop-blur-sm">
            <div class="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <NuxtImg 
              src="/edgarHernandez.webp" 
              alt="Logo Dr. Edgar Hernández Vargas - Reumatología" 
              class="max-h-32 w-auto object-contain transition-all duration-300 transform group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="mt-4 text-center">
            <h3 class="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">Dr. Edgar Hernández Vargas</h3>
            <p class="text-sm text-text-secondary">Sitio Web + SEO Médico</p>
            <p class="text-xs text-text-secondary/80 mt-1">Durango, México</p>
          </div>
        </a>

        <!-- Dr. Jeheziel Palacios Quiñonez -->
        <a href="https://internistalaguna.com/" target="_blank" rel="noopener noreferrer" class="client-card group">
          <div class="relative h-48 w-full flex items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:border-neon-pink/50 transition-all duration-300 backdrop-blur-sm">
            <div class="absolute inset-0 bg-gradient-to-br from-neon-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <NuxtImg 
              src="/drJeheziel.webp" 
              alt="Logo Dr. Jeheziel Palacios Quiñonez - Internista Laguna" 
              class="max-h-32 w-auto object-contain transition-all duration-300 transform group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="mt-4 text-center">
            <h3 class="text-lg font-semibold text-text-primary group-hover:text-neon-pink transition-colors">Dr. Jeheziel Palacios Quiñonez</h3>
            <p class="text-sm text-text-secondary">Sitio Web + SEO Médico</p>
            <p class="text-xs text-text-secondary/80 mt-1">La Laguna, Gómez Palacio & Torreón</p>
          </div>
        </a>

        <!-- Dra. Rosalba Yissel Mendoza González -->
        <a href="https://internistaenaguascalientes.com/" target="_blank" rel="noopener noreferrer" class="client-card group">
          <div class="relative h-48 w-full flex items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:border-neon-cyan/50 transition-all duration-300 backdrop-blur-sm">
            <div class="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <NuxtImg 
              src="/draYissel.webp" 
              alt="Logo Dra. Rosalba Yissel Mendoza González - Internista Aguascalientes" 
              class="max-h-32 w-auto object-contain transition-all duration-300 transform group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="mt-4 text-center">
            <h3 class="text-lg font-semibold text-text-primary group-hover:text-neon-cyan transition-colors">Dra. Rosalba Yissel Mendoza González</h3>
            <p class="text-sm text-text-secondary">Sitio Web + SEO Médico</p>
            <p class="text-xs text-text-secondary/80 mt-1">Aguascalientes, México</p>
          </div>
        </a>

        <!-- Dr. Eduardo Pacheco Ponce -->
        <div class="client-card group cursor-default">
          <div class="relative h-48 w-full flex items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:border-accent/50 transition-all duration-300 backdrop-blur-sm">
            <div class="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <NuxtImg 
              src="/eduardoPacheco.webp" 
              alt="Logo Dr. Eduardo Pacheco Ponce - Geriatra Atizapán" 
              class="max-h-32 w-auto object-contain transition-all duration-300 transform group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="mt-4 text-center">
            <h3 class="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">Dr. Eduardo Pacheco Ponce</h3>
            <p class="text-sm text-text-secondary">Sitio Web + Branding</p>
            <p class="text-xs text-text-secondary/80 mt-1">Atizapán & Arboledas, Edomex</p>
            <div class="flex gap-2 justify-center mt-3">
              <a href="https://geriatraatizapan.com/" target="_blank" rel="noopener noreferrer" class="px-3 py-1 text-xs font-medium bg-accent/20 hover:bg-accent/40 text-accent rounded-full transition-colors duration-200">Atizapán</a>
              <a href="https://geriatriaarboledas.com/" target="_blank" rel="noopener noreferrer" class="px-3 py-1 text-xs font-medium bg-accent/20 hover:bg-accent/40 text-accent rounded-full transition-colors duration-200">Arboledas</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.client-card {
  width: 100%;
  max-width: 320px;
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