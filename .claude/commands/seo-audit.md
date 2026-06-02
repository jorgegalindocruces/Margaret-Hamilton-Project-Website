Realiza una auditoría SEO completa del sitio web del Proyecto Margaret Hamilton.

## Keywords objetivo

Las keywords principales que debemos posicionar son (por prioridad):

1. **"Escuela de programación en Cádiz"** — keyword principal
2. **"Programación para niños Cádiz"**
3. **"Clases de programación infantil Cádiz"**
4. **"Aprender Scratch Cádiz"**
5. **"Robótica educativa Cádiz"**
6. **"Talleres de programación para niños"**
7. **"STEM para niños Cádiz"**
8. **"Actividades extraescolares programación Cádiz"**
9. **"Proyecto Margaret Hamilton"**
10. **"Programación en colegios públicos"**

## Qué auditar

### 1. Metadata de artículos del blog (`content/blog/*.mdx`)

Para cada artículo, verifica:

- **title**: entre 50-60 caracteres, incluye keyword relevante si es natural
- **excerpt/description**: entre 120-160 caracteres, incluye keyword principal, es un call-to-action o resumen atractivo
- **slug**: descriptivo, con keywords, sin palabras vacías innecesarias
- **tags**: al menos 3 tags relevantes, incluyen variaciones de keywords
- **ogImage o coverImage**: que exista y el archivo referenciado exista en `public/`
- **date**: formato correcto YYYY-MM-DD
- **author/authorSlug y category/categorySlug**: que estén presentes y sean consistentes

### 2. Metadata global (`app/layout.tsx`)

- Title template con keyword principal
- Description con keywords naturales, entre 150-160 caracteres
- Keywords array actualizado
- OpenGraph completo (locale, siteName, image con dimensiones 1200x630)
- Twitter Card configurada
- Robots: index/follow correctos

### 3. Metadata de páginas individuales

Revisa `generateMetadata` en:
- `app/blog/[slug]/page.tsx` — URLs absolutas en og:image, canonical, article:section/tags
- `app/blog/page.tsx` — meta del listado de blog
- `app/page.tsx` — homepage
- Otras páginas en `app/`

Verifica que:
- Las URLs de og:image sean absolutas (empiecen con https://)
- Exista `alternates.canonical` con URL absoluta
- `og:url` esté presente
- `og:locale` sea `es_ES`
- `og:site_name` esté presente

### 4. Sitemap y Robots (`app/sitemap.ts`, `app/robots.ts`)

- Todas las páginas públicas incluidas en el sitemap
- Prioridades coherentes (homepage 1.0, blog 0.8, posts 0.7)
- changeFrequency acorde a la realidad
- robots.txt no bloquea nada importante

### 5. Contenido de los artículos

- Uso de headings jerárquicos (h2, h3 — nunca h1 en el body, el título ya es h1)
- Links internos entre artículos cuando sea relevante
- Alt text en imágenes
- Densidad natural de keywords (sin keyword stuffing)
- Longitud mínima de ~300 palabras por artículo

### 6. Estructura HTML y accesibilidad SEO

- Etiqueta `<html lang="es">` presente
- Heading hierarchy correcta
- Links con texto descriptivo (no "click aquí")
- Imágenes con alt text

## Formato de salida

Presenta los resultados como una tabla por sección con columnas:
- **Elemento** | **Estado** (OK / Mejorar / Error) | **Detalle**

Al final, da un **resumen ejecutivo** con:
- Puntuación general (de 0 a 100)
- Top 3 mejoras prioritarias con impacto estimado
- Acciones concretas a tomar (con archivos y líneas a modificar)

Si encuentras problemas, propón los cambios concretos para corregirlos e implementa las correcciones.
