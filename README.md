# Margaret Hamilton Project

![Margaret Hamilton Project](https://jorgegalindocruces.github.io/margarethamilton/images/hero/hero-main.png)

Sitio web 100% estático del Proyecto Margaret Hamilton, una iniciativa sin ánimo de lucro que acerca la programación a niñas y niños de escuelas públicas.

🌐 **Sitio en vivo:** [https://jorgegalindocruces.github.io/margarethamilton](https://jorgegalindocruces.github.io/margarethamilton)

## 🚀 Stack Tecnológico

- **Next.js 14** (App Router) con TypeScript
- **TailwindCSS** para estilos
- **MDX** para gestión de contenido (45 cursos, 6 posts, eventos, equipo)
- **next-mdx-remote** para renderizado de MDX
- **Formspree** para formularios de contacto
- **GitHub Pages** para hosting estático

## ✨ Características

✅ **100% Estático** - Sin base de datos, sin backend, sin costos de servidor
✅ **Contenido en MDX** - Gestión de contenido mediante archivos markdown
✅ **SEO Optimizado** - Sitemap automático, robots.txt y metadata dinámica
✅ **Formularios Funcionales** - Integración con Formspree para contacto y newsletter
✅ **Deploy Automático** - GitHub Actions construye y despliega en cada push
✅ **Alta Performance** - Generación estática en build time (SSG)
✅ **Accesible** - Optimizado para todos los dispositivos y navegadores

## 📋 Requisitos

- Node.js 18+ y npm
- Git

## 🛠️ Instalación y Desarrollo

### 1. Clonar el repositorio

```bash
git clone https://github.com/jorgegalindocruces/margarethamilton.git
cd margarethamilton
npm install
```

### 2. Variables de entorno (opcional)

Crea un archivo `.env.local` (solo necesario para personalizar la URL del sitemap):

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Desarrollo Local

El proyecto está configurado para funcionar automáticamente tanto en local como en producción sin cambios manuales.

```bash
# Modo desarrollo con hot-reload
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

**✅ Configuración Automática:**
- En **local**: Sin `basePath`, funciona en `http://localhost:3000`
- En **producción** (GitHub Pages): Aplica automáticamente `/margarethamilton` como basePath

El archivo `.env.local` (no incluido en git) controla esta configuración:
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
GITHUB_PAGES=false
```

### Build de Producción Local

Para probar el build de producción localmente:

```bash
# Generar build estático
npm run build

# Servir el sitio (sin basePath, como en desarrollo)
npx serve out -l 3000
```

## Estructura del Proyecto

```
/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Home
│   ├── nuestra-mision/      # Página misión
│   ├── equipo/              # Página equipo
│   ├── contacta/            # Página contacto
│   ├── donacion/            # Página donación
│   ├── blog/                # Blog
│   ├── blog-category/       # Filtro por categoría
│   ├── blog-author/         # Página autor
│   ├── crea-tu-escuela/     # Landing cursos
│   ├── cursos/              # Detalle curso
│   ├── events/              # Detalle evento
│   ├── sitemap.ts           # Generador sitemap
│   └── robots.ts            # Configuración robots.txt
├── components/              # Componentes reutilizables
│   ├── ui/                  # Componentes UI base
│   ├── layout/              # Header, Footer, Nav
│   ├── sections/            # Hero, Features, Stats, etc
│   ├── forms/               # Formularios con Formspree
│   └── mdx/                 # Componentes MDX
├── content/                 # Contenido MDX
│   ├── blog/                # Posts del blog (.mdx)
│   ├── courses/             # Cursos (.mdx)
│   ├── events/              # Eventos (.mdx)
│   ├── team/                # Miembros equipo (.mdx)
│   ├── testimonials/        # Testimonios (.mdx)
│   └── partners/            # Colaboradores (.mdx)
├── lib/
│   ├── content/             # Parsers de contenido MDX
│   └── utils.ts             # Utilidades
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
└── public/                  # Assets estáticos
```

## Gestión de Contenido

Todo el contenido se gestiona mediante archivos MDX en `/content`. Cada tipo de contenido tiene su propia carpeta.

### Crear un post de blog

Crea un archivo en `content/blog/mi-post.mdx`:

```mdx
---
type: "blog"
slug: "mi-post"
title: "Mi Nuevo Post"
excerpt: "Descripción corta del post"
date: "2026-01-07"
author: "Nombre Autor"
authorSlug: "nombre-autor"
category: "Categoría"
categorySlug: "categoria"
coverImage: "/images/blog/mi-post.jpg"
tags: ["tag1", "tag2"]
draft: false
---

# Contenido del post

Escribe aquí el contenido en Markdown...
```

### Crear un curso

Crea un archivo en `content/courses/mi-curso.mdx`:

```mdx
---
type: "course"
slug: "mi-curso"
courseNumber: 1
title: "Título del Curso"
excerpt: "Descripción"
category: "Categoría"
categorySlug: "categoria"
coverImage: "/images/courses/curso.jpg"
googleDocUrl: "https://docs.google.com/..."
youtubeUrl: "https://youtube.com/..."
scratchUrl: "https://scratch.mit.edu/..."
draft: false
---

# Contenido del curso...
```

### Otros tipos de contenido

- **Eventos:** `content/events/evento.mdx`
- **Equipo:** `content/team/nombre.mdx`
- **Testimonios:** `content/testimonials/testimonio.mdx`
- **Colaboradores:** `content/partners/partner.mdx`

Ver archivos de ejemplo en cada carpeta para la estructura exacta del frontmatter.

## Formularios

Los formularios usan Formspree. Para configurarlos:

1. Crea una cuenta en [formspree.io](https://formspree.io)
2. Crea 4 formularios:
   - Newsletter
   - Contacto
   - Voluntariado
   - Donación
3. Actualiza los IDs en los componentes:
   - `components/forms/newsletter-form.tsx`
   - `components/forms/contact-form.tsx`
   - `components/forms/volunteer-form.tsx`
   - `components/forms/donation-form.tsx`

Busca `https://formspree.io/f/FORM_ID` y reemplaza con tus IDs.

## 🚀 Deploy en GitHub Pages

El sitio se despliega automáticamente mediante GitHub Actions cada vez que haces push a la rama `main`.

### Configuración Inicial (ya realizada)

1. **GitHub Pages está configurado en el repositorio**:
   - Settings > Pages > Source: **GitHub Actions**

2. **Workflow configurado** en `.github/workflows/deploy.yml`:
   - Se ejecuta automáticamente en cada push a `main`
   - Construye el sitio con `npm run build`
   - Despliega la carpeta `/out` a GitHub Pages

### Actualizar Contenido

Para actualizar el sitio, simplemente haz push de tus cambios:

```bash
git add .
git commit -m "Actualizar contenido"
git push origin main
```

El sitio se actualizará automáticamente en **2-3 minutos**. Puedes ver el progreso en la pestaña **Actions** del repositorio.

### URL del Sitio

- **Producción:** https://jorgegalindocruces.github.io/margarethamilton

### Dominio Personalizado (opcional)

Para usar un dominio personalizado:

1. Ve a Settings > Pages > Custom domain
2. Añade tu dominio (ej: `www.margarethamiltonproject.org`)
3. Configura los registros DNS según las instrucciones de GitHub
4. Actualiza `NEXT_PUBLIC_SITE_URL` en el workflow de GitHub Actions

## 📦 Comandos Disponibles

```bash
npm run dev          # Modo desarrollo (limitado - ver nota arriba)
npm run build        # Generar build estático en /out
npm run lint         # Ejecutar ESLint
npx serve out        # Servir build de producción localmente
```

## 🔍 SEO y Performance

### SEO
- ✅ Metadata dinámica por página
- ✅ OpenGraph tags configurados
- ✅ Sitemap.xml generado automáticamente en cada build
- ✅ robots.txt configurado
- ✅ URLs amigables y descriptivas

### Performance
- ✅ Generación estática (SSG) - 0ms tiempo de servidor
- ✅ Sin dependencias de runtime ni JavaScript innecesario
- ✅ Font optimization con next/font
- ✅ Code splitting automático
- ✅ Imágenes optimizadas para web

## 🧰 Tecnologías Clave

| Tecnología | Propósito | Documentación |
|------------|-----------|---------------|
| Next.js 14 | Framework React con SSG | [docs](https://nextjs.org) |
| MDX | Contenido con Markdown + JSX | [docs](https://mdxjs.com) |
| TailwindCSS | Estilos utility-first | [docs](https://tailwindcss.com) |
| next-mdx-remote | Renderizado de MDX | [docs](https://github.com/hashicorp/next-mdx-remote) |
| Formspree | Formularios sin backend | [docs](https://formspree.io) |

## 📁 Estructura de Contenido

El contenido se gestiona completamente mediante archivos MDX:

```
content/
├── blog/          # 6 posts del blog
├── courses/       # 45 cursos de programación
├── events/        # Eventos y actividades
├── team/          # 2 miembros del equipo
├── testimonials/  # Testimonios (vacío - listo para usar)
└── partners/      # Colaboradores (vacío - listo para usar)
```

## 🤝 Contribuir

¿Quieres ayudar a mejorar el proyecto? ¡Genial!

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Proyecto sin ánimo de lucro del Proyecto Margaret Hamilton.

## 📧 Contacto

- **Web:** https://jorgegalindocruces.github.io/margarethamilton
- **Email:** proyectomargarethamilton@gmail.com
- **Instagram:** [@proyectomargarethamilton](https://instagram.com/proyectomargarethamilton)

---

**Hecho con ❤️ para acercar la programación a las escuelas públicas**
