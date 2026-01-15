# 🩺 DoctorDigital.mx

<div align="center">

![Nuxt.js](https://img.shields.io/badge/Nuxt.js-3.14-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

**Agencia digital especializada en marketing y presencia online para profesionales de la salud en México**

[🌐 Ver sitio web](https://doctordigital.mx) • [📧 Contacto](https://doctordigital.mx/contacto)

</div>

---

## 📋 Descripción

**DoctorDigital.mx** es una plataforma web moderna diseñada para ofrecer servicios de marketing digital especializados para médicos y profesionales de la salud. El sitio está construido con las últimas tecnologías web para garantizar un rendimiento óptimo, excelente SEO y una experiencia de usuario excepcional.

### ✨ Características principales

- 🎨 **Diseño moderno y responsive** con modo oscuro/claro
- 🚀 **Optimizado para SEO/AEO** (Search Engine Optimization / Answer Engine Optimization)
- 📱 **PWA Ready** - Instalable como aplicación
- ⚡ **Alto rendimiento** con Nuxt 3 y SSG
- 🔍 **Schema.org** implementado para rich snippets
- 📊 **Google Analytics** integrado
- 🎭 **Animaciones fluidas** con GSAP
- 🍪 **Banner de cookies** para cumplimiento GDPR
- 💬 **WhatsApp integrado** para contacto directo

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|------------|-----|
| **Nuxt 3** | Framework SSR/SSG |
| **Vue 3** | Framework reactivo |
| **Tailwind CSS** | Estilos utilitarios |
| **GSAP** | Animaciones avanzadas |
| **Firebase Hosting** | Despliegue y hosting |
| **@nuxtjs/sitemap** | Generación de sitemap |
| **@nuxtjs/robots** | Configuración de robots.txt |
| **nuxt-schema-org** | Schema estructurado |
| **@nuxt/image** | Optimización de imágenes |

---

## 📁 Estructura del proyecto

```
doctor-digital/
├── app/
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css
│   │   └── images/
│   ├── components/
│   │   ├── Breadcrumbs.vue
│   │   ├── ClientsSection.vue
│   │   ├── CookieBanner.vue
│   │   ├── CTASection.vue
│   │   ├── Footer.vue
│   │   ├── Header.vue
│   │   ├── HeroSection.vue
│   │   └── ...
│   ├── composables/
│   │   └── useSEO.js
│   ├── layouts/
│   │   └── default.vue
│   ├── pages/
│   │   ├── index.vue
│   │   ├── servicios.vue
│   │   ├── portafolio.vue
│   │   ├── contacto.vue
│   │   └── ...
│   └── plugins/
│       ├── dark-mode.client.js
│       ├── gsap.client.js
│       └── gtag.client.js
├── public/
│   ├── manifest.json
│   └── humans.txt
├── nuxt.config.js
├── tailwind.config.ts
├── firebase.json
└── package.json
```

---

## 🚀 Instalación y configuración

### Prerrequisitos

- Node.js 18.x o superior
- npm, pnpm, yarn o bun

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/lorenzoarellano/doctorDigitalWeb.git

# Entrar al directorio
cd doctorDigitalWeb

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo en http://localhost:3000
npm run dev
```

### Producción

```bash
# Generar sitio estático
npm run generate

# Vista previa del build
npm run preview

# Build para producción (SSR)
npm run build
```

### Despliegue en Firebase

```bash
# Instalar Firebase CLI globalmente
npm install -g firebase-tools

# Iniciar sesión en Firebase
firebase login

# Desplegar
firebase deploy
```

---

## 📄 Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal con servicios y testimonios |
| `/servicios` | Catálogo completo de servicios digitales |
| `/portafolio` | Proyectos realizados para clientes |
| `/contacto` | Formulario de contacto y ubicación |
| `/acerca-de` | Información sobre la agencia |
| `/como-ser-visible-online` | Guía de visibilidad digital |
| `/privacidad` | Política de privacidad |
| `/terminos-condiciones` | Términos y condiciones |

---

## 🎨 Servicios ofrecidos

- 🌐 **Diseño Web Médico** - Sitios web profesionales para consultorios
- 📈 **SEO/AEO Médico** - Posicionamiento en buscadores e IA
- 📱 **Gestión de Redes Sociales** - Marketing en redes para doctores
- 🤖 **Inteligencia Artificial** - Automatización y chatbots médicos
- 📊 **Google Business Profile** - Optimización de perfil de Google
- ⭐ **Gestión de Reputación** - Manejo de reseñas online

---

## 🔧 Configuración SEO

El proyecto incluye configuración completa de SEO:

- **Meta tags** optimizados para cada página
- **Open Graph** para compartir en redes sociales
- **Twitter Cards** configuradas
- **Schema.org** con datos estructurados
- **Sitemap XML** generado automáticamente
- **robots.txt** configurado

---

## 📱 PWA

El sitio es una Progressive Web App instalable con:

- Manifest.json configurado
- Iconos para todas las plataformas
- Modo offline básico
- Splash screens personalizados

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto es privado y propiedad de **DoctorDigital.mx**.

---

## 📞 Contacto

- **Sitio web:** [doctordigital.mx](https://doctordigital.mx)
- **Email:** contacto@doctordigital.mx
- **Ubicación:** Durango, México

---

<div align="center">

**Desarrollado con ❤️ para la comunidad médica de México**

© 2025-2026 DoctorDigital.mx - Todos los derechos reservados

</div>
