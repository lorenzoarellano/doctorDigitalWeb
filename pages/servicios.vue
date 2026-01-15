<template>
  <div class="min-h-screen pt-20">
    <!-- Breadcrumbs -->
    <div class="container mx-auto px-4 pt-6">
      <Breadcrumbs :breadcrumbs="[
        { label: 'Inicio', path: '/' },
        { label: 'Servicios', path: null }
      ]" />
    </div>

    <!-- Hero de servicios -->
    <section class="relative py-32 bg-gradient-to-br from-bg-primary via-accent/5 to-neon-pink/5 overflow-hidden mask-image-fade-section-top-bottom">
      <!-- Efectos de fondo -->
      <div class="absolute inset-0 opacity-10 mask-y-soft">
        <div class="absolute w-96 h-96 bg-neon-pink rounded-full mix-blend-screen filter blur-3xl top-20 right-10 animate-pulse"></div>
        <div class="absolute w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl bottom-20 left-10"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Servicios <span class="bg-gradient-to-r from-accent via-neon-pink to-neon-cyan bg-clip-text text-transparent">Digitales</span>
          </h1>
          <p class="text-xl text-text-secondary leading-relaxed">
            Transformamos tu práctica médica con tecnología de vanguardia.<br/>
            <span class="text-accent font-semibold">Simple, efectivo y diseñado para doctores.</span>
          </p>
        </div>
      </div>
    </section>

    <!-- Servicios detallados con el nuevo diseño -->
    <section class="relative py-32 bg-gradient-to-br from-bg-primary via-accent/5 to-neon-pink/5 overflow-hidden mask-image-fade-section-top-bottom">
      <!-- Efectos de fondo decorativos (círculos verdes) -->
      <div class="absolute inset-0 opacity-20 pointer-events-none mask-y-soft">
        <div class="absolute w-64 h-64 border-4 border-neon-cyan rounded-full top-10 left-10 animate-pulse"></div>
        <div class="absolute w-48 h-48 border-4 border-neon-cyan rounded-full bottom-20 left-20"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <!-- Grid de servicios mejorado -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          <!-- Servicio 1: Diseño Web Médico -->
          <div class="group relative bg-gradient-to-br from-accent/10 to-neon-pink/10 rounded-3xl p-10 border-2 border-accent/30 hover:border-accent transition-all duration-500 hover:transform hover:scale-105 overflow-hidden backdrop-blur-sm">
            <div class="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative z-10">
              <!-- Icono grande -->
              <div class="flex items-center gap-4 mb-6">
                <div class="w-20 h-20 bg-gradient-to-br from-accent to-neon-pink rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-3xl font-black text-text-primary">Sitio Web Médico</h3>
                  <p class="text-sm text-accent font-semibold">Tu consultorio abierto 24/7</p>
                </div>
              </div>

              <!-- Descripción detallada -->
              <p class="text-text-secondary mb-6 leading-relaxed text-base">
                <span class="text-text-primary font-semibold">Imagina esto:</span> Un paciente busca en Google "cardiólogo cerca de mí" a las 11 PM. 
                Tu sitio web aparece primero, muestra tus credenciales, horarios, servicios y tiene un botón directo para agendar cita por WhatsApp. 
                <span class="text-neon-cyan font-semibold">Así funciona el marketing digital médico moderno.</span>
              </p>

              <div class="bg-dark-surface/30 rounded-xl p-6 mb-6 border border-accent/20">
                <h4 class="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span class="text-neon-pink">💡</span> ¿Qué incluye tu sitio?
                </h4>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Dominio profesional:</span> tuclinica.com o drnombre.mx (incluido primer año)</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Diseño responsive:</span> Se ve perfecto en celular, tablet y computadora</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Botón WhatsApp directo:</span> Tus pacientes agendan en 1 clic</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Google Maps integrado:</span> Que te encuentren fácilmente</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Certificado SSL (candado):</span> Seguridad y confianza para tus pacientes</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Aviso de privacidad LFPDPPP:</span> 100% legal y cumpliendo normativa mexicana</span>
                  </li>
                </ul>
              </div>

              <div class="flex items-center gap-3 text-sm text-text-secondary bg-neon-cyan/10 p-4 rounded-xl border border-neon-cyan/30">
                <span class="text-2xl">⚡</span>
                <span><span class="font-bold text-neon-cyan">Dato importante:</span> El 70% de pacientes busca médicos en Google antes de agendar. Sin sitio web, pierdes 7 de cada 10 oportunidades.</span>
              </div>
            </div>
          </div>

          <!-- Servicio 2: AEO Médico (NUEVO) -->
          <div class="group relative bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 rounded-3xl p-10 border-2 border-neon-pink/30 hover:border-neon-pink transition-all duration-500 hover:transform hover:scale-105 overflow-hidden backdrop-blur-sm">
            <div class="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative z-10">
              <!-- Icono grande -->
              <div class="flex items-center gap-4 mb-6">
                <div class="w-20 h-20 bg-gradient-to-br from-neon-pink to-neon-cyan rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-3xl font-black text-text-primary">🔍 AEO Médico</h3>
                  <p class="text-sm text-neon-pink font-semibold">Visibilidad en Google e IA</p>
                </div>
              </div>

              <!-- Descripción detallada -->
              <p class="text-text-secondary mb-6 leading-relaxed text-base">
                <span class="text-text-primary font-semibold">El siguiente nivel del SEO:</span> AEO (Answer Engine Optimization) hace que aparezcas cuando alguien pregunta 
                <span class="text-neon-pink font-semibold">"¿Cuál es el mejor cardiólogo en Monterrey?" a ChatGPT, Gemini, Perplexity o cualquier modelo de IA.</span> 
                Ya no solo Google, ahora las inteligencias artificiales también te recomiendan.
              </p>

              <div class="bg-dark-surface/30 rounded-xl p-6 mb-6 border border-neon-pink/20">
                <h4 class="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span class="text-neon-cyan">🤖</span> ¿Cómo funciona el AEO?
                </h4>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-pink text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Posicionamiento en ChatGPT:</span> Cuando pacientes preguntan "¿Quién es el mejor gastroenterólogo?", la IA menciona tu nombre</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-pink text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Google AI Overviews:</span> Aparecer en las respuestas generadas por IA de Google (el nuevo "resultado destacado")</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-pink text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Contenido estructurado para IA:</span> Tu sitio web escrito de forma que los modelos de IA lo entiendan y recomienden</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-pink text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Schema markup médico avanzado:</span> Código especializado que dice a Google e IA "esta es información médica confiable"</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-pink text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Optimización para búsquedas por voz:</span> Siri, Alexa, Google Assistant mencionan tu consultorio</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-pink text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Autoridad digital verificable:</span> Certificaciones, reseñas y contenido que la IA reconoce como experto</span>
                  </li>
                </ul>
              </div>

              <div class="flex items-center gap-3 text-sm text-text-secondary bg-accent/10 p-4 rounded-xl border border-accent/30">
                <span class="text-2xl">🚀</span>
                <span><span class="font-bold text-accent">El futuro es hoy:</span> 45% de los pacientes menores de 40 años usa ChatGPT o modelos de IA para buscar médicos. Si no estás optimizado para IA, eres invisible para la nueva generación.</span>
              </div>
            </div>
          </div>

          <!-- Servicio 3: SEO Médico Local -->
          <div class="group relative bg-gradient-to-br from-neon-cyan/10 to-accent/10 rounded-3xl p-10 border-2 border-neon-cyan/30 hover:border-neon-cyan transition-all duration-500 hover:transform hover:scale-105 overflow-hidden backdrop-blur-sm">
            <div class="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative z-10">
              <!-- Icono grande -->
              <div class="flex items-center gap-4 mb-6">
                <div class="w-20 h-20 bg-gradient-to-br from-neon-cyan to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-3xl font-black text-text-primary">SEO Local</h3>
                  <p class="text-sm text-neon-cyan font-semibold">Google Maps y búsquedas cercanas</p>
                </div>
              </div>

              <!-- Descripción detallada -->
              <p class="text-text-secondary mb-6 leading-relaxed text-base">
                <span class="text-text-primary font-semibold">La pregunta del millón:</span> ¿De qué sirve un sitio web si nadie lo encuentra? 
                El SEO (optimización en buscadores) hace que cuando alguien busque "dermatólogo en Guadalajara" o "pediatra cerca de mí", 
                <span class="text-neon-cyan font-semibold">TÚ aparezcas en los primeros resultados, no tu competencia.</span>
              </p>

              <div class="bg-dark-surface/30 rounded-xl p-6 mb-6 border border-neon-cyan/20">
                <h4 class="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span class="text-accent">🎯</span> ¿Cómo funciona el SEO médico?
                </h4>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Palabras clave estratégicas:</span> Optimizamos para búsquedas como "oftalmólogo CDMX" o "traumatólogo urgencias"</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Google My Business:</span> Tu perfil profesional en Google Maps con reseñas y horarios</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Schema médico:</span> Código especial que dice a Google "este es un doctor certificado"</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Velocidad optimizada:</span> Tu sitio carga en menos de 2 segundos (Google premia la rapidez)</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Contenido médico original:</span> Artículos y FAQ sobre tus especialidades</span>
                  </li>
                </ul>
              </div>

              <div class="flex items-center gap-3 text-sm text-text-secondary bg-neon-pink/10 p-4 rounded-xl border border-neon-pink/30">
                <span class="text-2xl">📊</span>
                <span><span class="font-bold text-neon-pink">Resultado real:</span> Médicos que implementan SEO ven entre 40-60% más consultas nuevas en 3-6 meses.</span>
              </div>
            </div>
          </div>

          <!-- Servicio 4: Inteligencia Artificial -->
          <div class="group relative bg-gradient-to-br from-neon-cyan/10 to-accent/10 rounded-3xl p-10 border-2 border-neon-cyan/30 hover:border-neon-cyan transition-all duration-500 hover:transform hover:scale-105 overflow-hidden backdrop-blur-sm">
            <div class="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative z-10">
              <!-- Icono grande -->
              <div class="flex items-center gap-4 mb-6">
                <div class="w-20 h-20 bg-gradient-to-br from-neon-cyan to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-3xl font-black text-text-primary">IA para Médicos</h3>
                  <p class="text-sm text-neon-cyan font-semibold">Automatiza tu consultorio</p>
                </div>
              </div>

              <!-- Descripción detallada -->
              <p class="text-text-secondary mb-6 leading-relaxed text-base">
                <span class="text-text-primary font-semibold">El futuro ya llegó:</span> Robot de WhatsApp que agenda citas, envía recordatorios automáticos, 
                responde preguntas frecuentes y te avisa cuando hay nuevos pacientes. 
                <span class="text-neon-cyan font-semibold">Como tener una secretaria digital 24/7 sin pagar nómina.</span>
              </p>

              <div class="bg-dark-surface/30 rounded-xl p-6 mb-6 border border-neon-cyan/20">
                <h4 class="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span class="text-accent">🤖</span> ¿Qué hace tu asistente IA?
                </h4>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Agenda citas automáticamente:</span> El paciente escribe por WhatsApp y el bot agenda sin intervención humana</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Recordatorios inteligentes:</span> Envía confirmaciones 24h antes y reduce el "ausentismo"</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">FAQ automáticas:</span> Responde "¿cuánto cuesta?", "¿dónde está el consultorio?", "¿qué preparación necesito?"</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Notificaciones al doctor:</span> Te avisa por WhatsApp cuando hay nueva cita o consulta urgente</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-neon-cyan text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Integración con calendarios:</span> Sincroniza con Google Calendar o Outlook</span>
                  </li>
                </ul>
              </div>

              <div class="flex items-center gap-3 text-sm text-text-secondary bg-neon-pink/10 p-4 rounded-xl border border-neon-pink/30">
                <span class="text-2xl">💰</span>
                <span><span class="font-bold text-neon-pink">Ahorro comprobado:</span> Médicos ahorran 10-15 horas semanales en tareas administrativas con IA.</span>
              </div>
            </div>
          </div>

          <!-- Servicio 5: Branding y Capacitación Digital -->
          <div class="group relative bg-gradient-to-br from-accent/10 to-neon-pink/10 rounded-3xl p-10 border-2 border-accent/30 hover:border-accent transition-all duration-500 hover:transform hover:scale-105 overflow-hidden backdrop-blur-sm">
            <div class="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative z-10">
              <!-- Icono grande -->
              <div class="flex items-center gap-4 mb-6">
                <div class="w-20 h-20 bg-gradient-to-br from-accent to-neon-pink rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-3xl font-black text-text-primary">Branding y Capacitación</h3>
                  <p class="text-sm text-accent font-semibold">Identidad profesional + autonomía digital</p>
                </div>
              </div>

              <!-- Descripción detallada -->
              <p class="text-text-secondary mb-6 leading-relaxed text-base">
                <span class="text-text-primary font-semibold">Nuestra filosofía:</span> No hacemos campañas por ti, <span class="text-accent font-semibold">te enseñamos a ser autónomo digitalmente.</span> 
                Diseñamos tu identidad médica profesional (logo, colores, estilo visual) y te capacitamos para que domines las herramientas más potentes del mercado: 
                Google Business, redes sociales, contenido médico y gestión de reputación.
              </p>

              <div class="bg-dark-surface/30 rounded-xl p-6 mb-6 border border-accent/20">
                <h4 class="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span class="text-neon-pink">🎨</span> Lo que incluye este servicio:
                </h4>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-accent text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Diseño de identidad médica:</span> Logo profesional, paleta de colores, tipografía y manual de marca para consultorio y redes sociales</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-accent text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Capacitación en Google Business:</span> Aprende a optimizar tu perfil, responder reseñas y atraer pacientes locales</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-accent text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Capacitación en Facebook y Google Ads:</span> Aprende a manejar estas plataformas para atraer pacientes de forma profesional</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-accent text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Creación de contenido médico:</span> Plantillas Canva personalizadas, guiones para videos cortos, calendario editorial</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-accent text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Gestión de reputación online:</span> Estrategias para conseguir reseñas genuinas y responder comentarios profesionalmente</span>
                  </li>
                  <li class="flex items-start gap-3 text-text-secondary">
                    <span class="text-accent text-xl mt-0.5">→</span>
                    <span><span class="font-semibold text-text-primary">Consultoría continua:</span> Soporte mensual para resolver dudas, revisar tu estrategia y optimizar resultados</span>
                  </li>
                </ul>
              </div>

              <div class="flex items-center gap-3 text-sm text-text-secondary bg-neon-cyan/10 p-4 rounded-xl border border-neon-cyan/30">
                <span class="text-2xl">💪</span>
                <span><span class="font-bold text-neon-cyan">Ventaja clave:</span> Aprende una vez, úsalo toda tu carrera. No dependas de agencias costosas, conviértete en tu propio estratega digital.</span>
              </div>
            </div>
          </div>

        </div>

        <!-- CTA Final -->
        <div class="text-center mt-16">
          <p class="text-xl text-text-secondary mb-8">
            ¿Listo para llevar tu práctica médica al siguiente nivel?
          </p>
          <NuxtLink 
            to="/contacto"
            class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent via-neon-pink to-neon-cyan text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110"
          >
            <span>Solicita tu consultoría digital gratis</span>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
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
  title: 'Servicios de Marketing Digital Médico',
  description: 'Diseño web médico, branding profesional, SEO/AEO, capacitación en Google Business Profile, Facebook Ads, Google Ads y gestión de reputación online. Servicios especializados para médicos y profesionales de la salud.',
  image: '/og-servicios.jpg',
  url: '/servicios',
  type: 'website'
})

// Schema para cada servicio ofrecido
useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Diseño de Identidad Médica Profesional',
    description: 'Creación completa de branding médico: logo, colores corporativos, tipografías y papelería digital. Identidad visual que transmite confianza y profesionalismo.',
    provider: {
      '@type': 'Organization',
      name: 'DoctorDigital.mx'
    },
    serviceType: 'Branding Médico',
    areaServed: 'MX'
  },
  {
    '@type': 'Service',
    name: 'Capacitación Google Business Profile',
    description: 'Aprende a dominar tu perfil de Google Business para aparecer en búsquedas locales, gestionar reseñas y aumentar tu visibilidad en Google Maps.',
    provider: {
      '@type': 'Organization',
      name: 'DoctorDigital.mx'
    },
    serviceType: 'Capacitación Digital',
    areaServed: 'MX'
  },
  {
    '@type': 'Service',
    name: 'Capacitación en Facebook Ads y Google Ads',
    description: 'Domina las campañas publicitarias en Facebook y Google. Aprende a segmentar audiencias médicas, crear anuncios efectivos y medir resultados.',
    provider: {
      '@type': 'Organization',
      name: 'DoctorDigital.mx'
    },
    serviceType: 'Capacitación en Marketing Digital',
    areaServed: 'MX'
  },
  {
    '@type': 'Service',
    name: 'Plantillas Canva para Contenido Médico',
    description: 'Diseños profesionales pre-configurados para crear contenido médico en redes sociales. Ahorra tiempo y mantén consistencia visual.',
    provider: {
      '@type': 'Organization',
      name: 'DoctorDigital.mx'
    },
    serviceType: 'Diseño de Contenido',
    areaServed: 'MX'
  },
  {
    '@type': 'Service',
    name: 'Gestión de Reputación Online',
    description: 'Monitoreo y respuesta estratégica a reseñas. Construcción de reputación digital positiva y manejo de crisis de imagen.',
    provider: {
      '@type': 'Organization',
      name: 'DoctorDigital.mx'
    },
    serviceType: 'Reputación Digital',
    areaServed: 'MX'
  },
  {
    '@type': 'Service',
    name: 'Consultoría Digital Continua',
    description: 'Asesoría personalizada mensual para resolver dudas, optimizar estrategias y mantenerte actualizado en marketing digital médico.',
    provider: {
      '@type': 'Organization',
      name: 'DoctorDigital.mx'
    },
    serviceType: 'Consultoría',
    areaServed: 'MX'
  },
  {
    '@type': 'ItemList',
    name: 'Servicios de Marketing Digital Médico',
    description: 'Lista completa de servicios especializados para profesionales de la salud',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Diseño de Identidad Médica'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Capacitación Google Business Profile'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Capacitación Facebook Ads y Google Ads'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Plantillas Canva'
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Gestión de Reputación'
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Consultoría Continua'
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
