<template>
  <div class="min-h-screen pt-20">
    <!-- Breadcrumbs -->
    <div class="container mx-auto px-4 pt-6">
      <Breadcrumbs :breadcrumbs="[
        { label: 'Inicio', path: '/' },
        { label: 'Cómo Ser Visible Online', path: null }
      ]" />
    </div>

    <!-- Hero Section -->
    <section class="relative py-32 bg-gradient-to-br from-bg-primary via-accent/5 to-neon-pink/5 overflow-hidden mask-image-fade-section-top-bottom">
      <div class="absolute inset-0 opacity-10 mask-y-soft">
        <div class="absolute w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-3xl top-20 right-10 animate-pulse"></div>
        <div class="absolute w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl bottom-20 left-10"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            La Nueva Era del <span class="bg-gradient-to-r from-accent via-neon-pink to-neon-cyan bg-clip-text text-transparent">SEO Médico</span>
          </h1>
          <p class="text-xl text-text-secondary leading-relaxed mb-4">
            Cómo los Pacientes y la Inteligencia Artificial te Encuentran
          </p>
          <p class="text-lg text-neon-cyan font-semibold italic">
            "Tu reputación médica ya no solo vive en los buscadores. Ahora también está en las respuestas que da la IA."
          </p>
        </div>
      </div>
    </section>

    <!-- Evolución: De SEO a AEO -->
    <section class="relative py-20 bg-gradient-to-br from-bg-primary via-neon-pink/5 to-accent/5 overflow-hidden mask-image-fade-section-top-bottom">
      <div class="absolute inset-0 opacity-20 pointer-events-none">
        <div class="absolute w-64 h-64 border-4 border-neon-pink rounded-full top-10 right-10 animate-pulse"></div>
        <div class="absolute w-48 h-48 border-4 border-accent rounded-full bottom-20 right-20"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold text-text-primary mb-8 text-center">
            De SEO a <span class="text-accent">AEO, LLMO y GEO</span>
          </h2>
          <p class="text-xl text-text-secondary text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            La evolución de la visibilidad médica en internet
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <!-- AEO Card -->
            <div class="group bg-gradient-to-br from-accent/10 to-neon-pink/10 rounded-3xl p-8 border-2 border-accent/30 hover:border-accent transition-all duration-500 hover:scale-105">
              <div class="w-16 h-16 bg-gradient-to-br from-accent to-neon-pink rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span class="text-3xl">🧭</span>
              </div>
              <h3 class="text-2xl font-bold text-text-primary mb-3">AEO</h3>
              <p class="text-sm text-accent font-semibold mb-3">Answer Engine Optimization</p>
              <p class="text-text-secondary leading-relaxed">
                Tu contenido preparado para aparecer en las <span class="text-accent font-semibold">respuestas generadas por IA</span> como ChatGPT, Perplexity o Google AI Overviews.
              </p>
            </div>

            <!-- LLMO Card -->
            <div class="group bg-gradient-to-br from-neon-cyan/10 to-accent/10 rounded-3xl p-8 border-2 border-neon-cyan/30 hover:border-neon-cyan transition-all duration-500 hover:scale-105">
              <div class="w-16 h-16 bg-gradient-to-br from-neon-cyan to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span class="text-3xl">🧠</span>
              </div>
              <h3 class="text-2xl font-bold text-text-primary mb-3">LLMO</h3>
              <p class="text-sm text-neon-cyan font-semibold mb-3">Large Language Model Optimization</p>
              <p class="text-text-secondary leading-relaxed">
                Estructurar información para que los modelos de IA <span class="text-neon-cyan font-semibold">te mencionen y recomienden</span> en sus respuestas.
              </p>
            </div>

            <!-- GEO Card -->
            <div class="group bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 rounded-3xl p-8 border-2 border-neon-pink/30 hover:border-neon-pink transition-all duration-500 hover:scale-105">
              <div class="w-16 h-16 bg-gradient-to-br from-neon-pink to-neon-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span class="text-3xl">⚙️</span>
              </div>
              <h3 class="text-2xl font-bold text-text-primary mb-3">GEO</h3>
              <p class="text-sm text-neon-pink font-semibold mb-3">Generative Engine Optimization</p>
              <p class="text-text-secondary leading-relaxed">
                Asegura que tu sitio sea <span class="text-neon-pink font-semibold">priorizado por motores de búsqueda basados en IA generativa</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Por qué importa -->
    <section class="relative py-20 bg-gradient-to-br from-bg-primary via-accent/5 to-neon-cyan/5 overflow-hidden mask-image-fade-section-top-bottom">
      <div class="absolute inset-0 opacity-10 mask-y-soft">
        <div class="absolute w-96 h-96 bg-neon-pink rounded-full mix-blend-screen filter blur-3xl top-20 right-10"></div>
        <div class="absolute w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-3xl bottom-20 left-10 animate-pulse"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold text-text-primary mb-8 text-center">
            ¿Por qué esto <span class="text-neon-cyan">importa para los médicos?</span>
          </h2>

          <div class="bg-gradient-to-br from-dark-surface/50 to-accent/5 rounded-3xl p-10 border-2 border-accent/30 mb-12">
            <p class="text-xl text-text-secondary leading-relaxed mb-6">
              Porque tus pacientes ya no solo "buscan" un médico, ahora <span class="text-accent font-semibold">le preguntan a la inteligencia artificial</span>:
            </p>

            <div class="space-y-4">
              <div class="flex items-start gap-4 bg-dark-surface/30 rounded-xl p-6 border border-neon-cyan/20">
                <span class="text-3xl">💬</span>
                <p class="text-text-primary text-lg italic">"¿Quién es el mejor cardiólogo en Guadalajara?"</p>
              </div>
              <div class="flex items-start gap-4 bg-dark-surface/30 rounded-xl p-6 border border-accent/20">
                <span class="text-3xl">💬</span>
                <p class="text-text-primary text-lg italic">"¿Dónde puedo encontrar un geriatra en Durango?"</p>
              </div>
              <div class="flex items-start gap-4 bg-dark-surface/30 rounded-xl p-6 border border-neon-pink/20">
                <span class="text-3xl">💬</span>
                <p class="text-text-primary text-lg italic">"¿Qué especialista trata vértigo en adultos mayores?"</p>
              </div>
            </div>

            <div class="mt-8 bg-neon-cyan/10 rounded-xl p-6 border border-neon-cyan/30">
              <p class="text-text-secondary leading-relaxed">
                La IA toma su información de sitios web confiables y bien estructurados.<br/>
                Si tu sitio no está optimizado para estos nuevos motores, simplemente <span class="text-neon-cyan font-bold">no existes en esas respuestas</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cómo funcionan -->
    <section class="relative py-20 bg-gradient-to-br from-bg-primary via-neon-pink/5 to-accent/5 overflow-hidden mask-image-fade-section-top-bottom">
      <div class="absolute inset-0 opacity-20 pointer-events-none">
        <div class="absolute w-64 h-64 border-4 border-neon-cyan rounded-full bottom-10 left-10"></div>
        <div class="absolute w-48 h-48 border-4 border-accent rounded-full top-20 left-20 animate-pulse"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold text-text-primary mb-12 text-center">
            ¿Cómo funcionan estos <span class="text-accent">nuevos motores inteligentes?</span>
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div class="bg-gradient-to-br from-accent/10 to-neon-pink/10 rounded-2xl p-8 border-2 border-accent/30 text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-accent to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-3xl font-bold text-white">1</span>
              </div>
              <p class="text-text-secondary">La IA <span class="text-accent font-semibold">analiza miles de sitios web</span></p>
            </div>

            <div class="bg-gradient-to-br from-neon-cyan/10 to-accent/10 rounded-2xl p-8 border-2 border-neon-cyan/30 text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-neon-cyan to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-3xl font-bold text-white">2</span>
              </div>
              <p class="text-text-secondary">Identifica cuáles son <span class="text-neon-cyan font-semibold">confiables y relevantes</span></p>
            </div>

            <div class="bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 rounded-2xl p-8 border-2 border-neon-pink/30 text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-neon-pink to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-3xl font-bold text-white">3</span>
              </div>
              <p class="text-text-secondary">Resume y <span class="text-neon-pink font-semibold">menciona o cita</span> a los médicos que cumplen estándares</p>
            </div>
          </div>

          <!-- Tabla de niveles de visibilidad -->
          <div class="bg-dark-surface/30 rounded-3xl p-8 border-2 border-accent/30">
            <h3 class="text-2xl font-bold text-text-primary mb-6 text-center">Tres niveles de visibilidad</h3>
            <div class="space-y-4">
              <div class="flex items-start gap-4 bg-gradient-to-r from-accent/10 to-transparent rounded-xl p-6 border-l-4 border-accent">
                <div class="flex-shrink-0">
                  <span class="text-2xl">📊</span>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-accent mb-2">SEO tradicional</h4>
                  <p class="text-text-secondary">Apareces en los resultados de búsqueda normales de Google</p>
                </div>
              </div>

              <div class="flex items-start gap-4 bg-gradient-to-r from-neon-cyan/10 to-transparent rounded-xl p-6 border-l-4 border-neon-cyan">
                <div class="flex-shrink-0">
                  <span class="text-2xl">💡</span>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-neon-cyan mb-2">AEO (Answer Engine)</h4>
                  <p class="text-text-secondary">Tu información aparece dentro de las respuestas que la IA genera directamente</p>
                </div>
              </div>

              <div class="flex items-start gap-4 bg-gradient-to-r from-neon-pink/10 to-transparent rounded-xl p-6 border-l-4 border-neon-pink">
                <div class="flex-shrink-0">
                  <span class="text-2xl">🚀</span>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-neon-pink mb-2">LLMO / GEO</h4>
                  <p class="text-text-secondary">Los modelos de IA comprenden tu perfil y pueden usarlo para futuras respuestas médicas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Qué hace comprensible un sitio -->
    <section class="relative py-20 bg-gradient-to-br from-bg-primary via-accent/5 to-neon-pink/5 overflow-hidden mask-image-fade-section-top-bottom">
      <div class="absolute inset-0 opacity-10 mask-y-soft">
        <div class="absolute w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl top-20 left-10"></div>
        <div class="absolute w-96 h-96 bg-neon-pink rounded-full mix-blend-screen filter blur-3xl bottom-20 right-10 animate-pulse"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold text-text-primary mb-8 text-center">
            ¿Qué hace que un sitio médico sea <span class="bg-gradient-to-r from-accent to-neon-cyan bg-clip-text text-transparent">"comprensible"</span> para la IA?
          </h2>
          <p class="text-xl text-text-secondary text-center mb-12 leading-relaxed">
            Los modelos de IA no solo leen, <span class="text-accent font-semibold">interpretan contexto y estructura</span>
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gradient-to-br from-accent/10 to-neon-pink/10 rounded-3xl p-8 border-2 border-accent/30 hover:border-accent transition-all duration-300">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-accent to-neon-pink rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-2xl">📋</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-text-primary mb-2">Estructura clara</h3>
                  <p class="text-text-secondary">Nombre, especialidad, ubicación, horarios y servicios descritos con precisión</p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-neon-cyan/10 to-accent/10 rounded-3xl p-8 border-2 border-neon-cyan/30 hover:border-neon-cyan transition-all duration-300">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-neon-cyan to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-2xl">💬</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-text-primary mb-2">Lenguaje natural</h3>
                  <p class="text-text-secondary">Escribir como hablas con tus pacientes, no como un texto técnico</p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 rounded-3xl p-8 border-2 border-neon-pink/30 hover:border-neon-pink transition-all duration-300">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-neon-pink to-neon-cyan rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-2xl">🔧</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-text-primary mb-2">Datos estructurados</h3>
                  <p class="text-text-secondary">Schema.org / Physician: código que le dice a Google e IA quién eres exactamente</p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-accent/10 to-neon-cyan/10 rounded-3xl p-8 border-2 border-accent/30 hover:border-accent transition-all duration-300">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-accent to-neon-cyan rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-2xl">✅</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-text-primary mb-2">Contenido ético</h3>
                  <p class="text-text-secondary">Sin afirmaciones exageradas ni información sin respaldo científico</p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-neon-cyan/10 to-neon-pink/10 rounded-3xl p-8 border-2 border-neon-cyan/30 hover:border-neon-cyan transition-all duration-300 md:col-span-2">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-2xl">📍</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-text-primary mb-2">Relevancia local</h3>
                  <p class="text-text-secondary">La IA prioriza los médicos más cercanos y los sitios con direcciones verificadas en Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cómo DoctorDigital aplica esto -->
    <section class="relative py-20 bg-gradient-to-br from-bg-primary via-neon-pink/5 to-accent/5 overflow-hidden mask-image-fade-section-top-bottom">
      <div class="absolute inset-0 opacity-20 pointer-events-none">
        <div class="absolute w-64 h-64 border-4 border-neon-pink rounded-full top-10 right-10 animate-pulse"></div>
        <div class="absolute w-48 h-48 border-4 border-accent rounded-full bottom-20 right-20"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold text-text-primary mb-8 text-center">
            Cómo <span class="text-accent">DoctorDigital.mx</span> aplica AEO, LLMO y GEO
          </h2>

          <div class="bg-gradient-to-br from-dark-surface/50 to-accent/5 rounded-3xl p-10 border-2 border-accent/30">
            <p class="text-xl text-text-secondary mb-8 text-center">
              Cuando diseñamos tu sitio, aplicamos una <span class="text-accent font-semibold">estrategia integral</span>:
            </p>

            <div class="space-y-6">
              <div class="flex items-start gap-4 bg-gradient-to-r from-accent/20 to-transparent rounded-xl p-6 border-l-4 border-accent">
                <span class="text-3xl flex-shrink-0">1️⃣</span>
                <div>
                  <h3 class="text-lg font-bold text-accent mb-2">SEO Médico Local</h3>
                  <p class="text-text-secondary">Para posicionarte en Google y Google Maps</p>
                </div>
              </div>

              <div class="flex items-start gap-4 bg-gradient-to-r from-neon-cyan/20 to-transparent rounded-xl p-6 border-l-4 border-neon-cyan">
                <span class="text-3xl flex-shrink-0">2️⃣</span>
                <div>
                  <h3 class="text-lg font-bold text-neon-cyan mb-2">AEO (Answer Engine Optimization)</h3>
                  <p class="text-text-secondary">Para que tu contenido aparezca en respuestas generadas por IA</p>
                </div>
              </div>

              <div class="flex items-start gap-4 bg-gradient-to-r from-neon-pink/20 to-transparent rounded-xl p-6 border-l-4 border-neon-pink">
                <span class="text-3xl flex-shrink-0">3️⃣</span>
                <div>
                  <h3 class="text-lg font-bold text-neon-pink mb-2">LLMO (Large Language Model Optimization)</h3>
                  <p class="text-text-secondary">Para que los modelos de lenguaje comprendan tu perfil profesional</p>
                </div>
              </div>

              <div class="flex items-start gap-4 bg-gradient-to-r from-accent/20 to-transparent rounded-xl p-6 border-l-4 border-accent">
                <span class="text-3xl flex-shrink-0">4️⃣</span>
                <div>
                  <h3 class="text-lg font-bold text-accent mb-2">GEO (Generative Engine Optimization)</h3>
                  <p class="text-text-secondary">Para asegurar que las nuevas IA de búsqueda te prioricen en sus resultados</p>
                </div>
              </div>
            </div>

            <div class="mt-8 bg-neon-cyan/10 rounded-xl p-6 border border-neon-cyan/30 text-center">
              <p class="text-lg text-text-primary font-semibold">
                No solo tendrás un sitio bonito, sino <span class="text-neon-cyan">una presencia digital inteligente y preparada para el futuro</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Beneficios -->
    <section class="relative py-20 bg-gradient-to-br from-bg-primary via-accent/5 to-neon-cyan/5 overflow-hidden mask-image-fade-section-top-bottom">
      <div class="absolute inset-0 opacity-10 mask-y-soft">
        <div class="absolute w-96 h-96 bg-neon-pink rounded-full mix-blend-screen filter blur-3xl top-20 right-10"></div>
        <div class="absolute w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-3xl bottom-20 left-10 animate-pulse"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold text-text-primary mb-12 text-center">
            Beneficios para tu <span class="text-neon-cyan">práctica médica</span>
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="group bg-gradient-to-br from-accent/10 to-neon-pink/10 rounded-3xl p-8 border-2 border-accent/30 hover:border-accent transition-all duration-500 hover:scale-105">
              <div class="w-16 h-16 bg-gradient-to-br from-accent to-neon-pink rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span class="text-3xl">📈</span>
              </div>
              <h3 class="text-2xl font-bold text-text-primary mb-3">Mayor visibilidad</h3>
              <p class="text-text-secondary">En Google, Maps y asistentes IA</p>
            </div>

            <div class="group bg-gradient-to-br from-neon-cyan/10 to-accent/10 rounded-3xl p-8 border-2 border-neon-cyan/30 hover:border-neon-cyan transition-all duration-500 hover:scale-105">
              <div class="w-16 h-16 bg-gradient-to-br from-neon-cyan to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span class="text-3xl">👥</span>
              </div>
              <h3 class="text-2xl font-bold text-text-primary mb-3">Más pacientes</h3>
              <p class="text-text-secondary">Te encuentran por voz, texto o chat</p>
            </div>

            <div class="group bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 rounded-3xl p-8 border-2 border-neon-pink/30 hover:border-neon-pink transition-all duration-500 hover:scale-105">
              <div class="w-16 h-16 bg-gradient-to-br from-neon-pink to-neon-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span class="text-3xl">🏆</span>
              </div>
              <h3 class="text-2xl font-bold text-text-primary mb-3">Confianza digital</h3>
              <p class="text-text-secondary">Aumento en la credibilidad de tus pacientes</p>
            </div>

            <div class="group bg-gradient-to-br from-accent/10 to-neon-cyan/10 rounded-3xl p-8 border-2 border-accent/30 hover:border-accent transition-all duration-500 hover:scale-105">
              <div class="w-16 h-16 bg-gradient-to-br from-accent to-neon-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span class="text-3xl">🚀</span>
              </div>
              <h3 class="text-2xl font-bold text-text-primary mb-3">Largo plazo</h3>
              <p class="text-text-secondary">Posicionamiento ético y profesional sostenible</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Resumen final -->
    <section class="relative py-20 bg-gradient-to-br from-bg-primary via-neon-pink/5 to-accent/5 overflow-hidden mask-image-fade-section-top-bottom">
      <div class="absolute inset-0 opacity-20 pointer-events-none">
        <div class="absolute w-64 h-64 border-4 border-neon-cyan rounded-full bottom-10 left-10"></div>
        <div class="absolute w-48 h-48 border-4 border-accent rounded-full top-20 left-20 animate-pulse"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="bg-gradient-to-br from-dark-surface/80 to-accent/10 rounded-3xl p-12 border-2 border-accent/30 text-center">
            <h2 class="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              En <span class="bg-gradient-to-r from-accent via-neon-pink to-neon-cyan bg-clip-text text-transparent">Resumen</span>
            </h2>
            
            <p class="text-xl text-text-secondary mb-6 leading-relaxed">
              Antes bastaba con tener una página web.<br/>
              Hoy necesitas que tanto <span class="text-accent font-semibold">Google como la IA sepan quién eres, dónde estás y en qué eres experto</span>.
            </p>

            <div class="bg-accent/10 rounded-2xl p-8 border border-accent/30 mb-8">
              <p class="text-lg text-text-primary leading-relaxed">
                En <span class="text-accent font-bold">DoctorDigital.mx</span>, optimizamos tu presencia para el presente y el futuro de la medicina digital: 
                <span class="text-neon-cyan font-semibold">visible, comprensible y relevante</span> para buscadores y modelos de inteligencia artificial.
              </p>
            </div>

            <NuxtLink 
              to="/contacto"
              class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent via-neon-pink to-neon-cyan text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110"
            >
              <span>Quiero ser visible en Google e IA</span>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <CTASection />
  </div>
</template>

<script setup>
// SEO usando composable
useSEO({
  title: 'Cómo Ser Visible Online - Guía AEO/LLMO/GEO',
  description: 'Guía completa de AEO, LLMO y GEO para médicos. Aprende cómo aparecer en Google, ChatGPT, Perplexity y otros motores de IA para atraer más pacientes. La nueva era del SEO médico explicada.',
  image: '/og-guia-seo.jpg',
  url: '/como-ser-visible-online',
  type: 'article'
})

// Schema Article + FAQPage para contenido educativo
useSchemaOrg([
  {
    '@type': 'Article',
    headline: 'La Nueva Era del SEO Médico: AEO, LLMO y GEO',
    description: 'Cómo los pacientes y la inteligencia artificial encuentran médicos en línea. Guía completa sobre Answer Engine Optimization, Large Language Model Optimization y Generative Engine Optimization.',
    author: {
      '@type': 'Person',
      name: 'Lorenzo Arellano',
      url: 'https://doctordigital.mx/acerca-de'
    },
    publisher: {
      '@type': 'Organization',
      name: 'DoctorDigital.mx',
      logo: {
        '@type': 'ImageObject',
        url: 'https://doctordigital.mx/logo.png'
      }
    },
    datePublished: '2024-01-01',
    dateModified: '2025-11-12',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://doctordigital.mx/como-ser-visible-online'
    },
    articleSection: 'Marketing Digital Médico',
    keywords: 'SEO médico, AEO, LLMO, GEO, marketing médico, visibilidad online, ChatGPT, Google, inteligencia artificial',
    about: [
      {
        '@type': 'Thing',
        name: 'Answer Engine Optimization'
      },
      {
        '@type': 'Thing',
        name: 'Large Language Model Optimization'
      },
      {
        '@type': 'Thing',
        name: 'Generative Engine Optimization'
      }
    ]
  },
  {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué es AEO (Answer Engine Optimization)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AEO es la optimización para motores de respuestas como Google Assistant, Alexa y Siri. Se enfoca en proporcionar respuestas directas y concisas a preguntas específicas de los usuarios.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Qué es LLMO (Large Language Model Optimization)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LLMO es la optimización para grandes modelos de lenguaje como ChatGPT, Claude y Gemini. Estructura el contenido para que los LLMs lo comprendan, citen y recomienden en sus respuestas conversacionales.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Qué es GEO (Generative Engine Optimization)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GEO es la optimización para motores generativos como Perplexity AI y SearchGPT. Combina búsqueda tradicional con IA generativa para ofrecer respuestas contextuales y citadas.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Por qué los médicos necesitan AEO/LLMO/GEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Los pacientes ahora preguntan "¿Cuál es el mejor dermatólogo en Durango?" a ChatGPT o Google Assistant. Si tu perfil no está optimizado para estos sistemas, pierdes pacientes frente a competidores que sí lo están.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cómo funciona el posicionamiento en LLMs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Los LLMs priorizan contenido con: 1) Datos estructurados (Schema.org), 2) Respuestas claras a preguntas frecuentes, 3) Menciones en sitios autoritativos, 4) Información verificable y actualizada, 5) Contexto rico sobre especialidades y tratamientos.'
        }
      }
    ]
  },
  {
    '@type': 'HowTo',
    name: 'Cómo Mejorar tu Visibilidad en Motores de IA',
    description: 'Guía paso a paso para optimizar tu presencia digital médica para AEO, LLMO y GEO',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Optimiza Google Business Profile',
        text: 'Completa todos los campos, agrega fotos profesionales, responde reseñas y actualiza información de servicios.',
        url: 'https://doctordigital.mx/como-ser-visible-online#google-business'
      },
      {
        '@type': 'HowToStep',
        name: 'Estructura tu Contenido',
        text: 'Usa formato pregunta-respuesta, listas claras, tablas comparativas y definiciones precisas.',
        url: 'https://doctordigital.mx/como-ser-visible-online#estructura'
      },
      {
        '@type': 'HowToStep',
        name: 'Implementa Datos Estructurados',
        text: 'Agrega Schema.org markup para que Google y LLMs comprendan tu contenido como entidades verificables.',
        url: 'https://doctordigital.mx/como-ser-visible-online#schema'
      }
    ]
  }
])
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
