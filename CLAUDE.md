# Proyecto Margaret Hamilton - Website

## Proyecto

Sitio web del Proyecto Margaret Hamilton, una escuela de programación sin ánimo de lucro para niños y niñas de 6 a 12 años en colegios públicos de Cádiz. Stack: Next.js 14, MDX, Tailwind CSS, TypeScript.

## Estructura de contenido

- Blog posts: `content/blog/*.mdx`
- Cursos: `content/courses/*.mdx`
- Eventos: `content/events/*.mdx`
- Equipo: `content/team/*.mdx`
- Imágenes: `public/images/blog/`

## Convenciones del blog

- Archivos MDX con frontmatter YAML
- Slug en kebab-case que coincide con el nombre del archivo
- Campos obligatorios: type, slug, title, excerpt, date, author, authorSlug, category, categorySlug, draft
- Campos opcionales: coverImage (imagen del artículo), ogImage (thumbnail para redes sociales, si no existe usa coverImage), tags
- Autor principal: Jorge Galindo (jorge-galindo)
- Categorías existentes: Novedades (novedades), Historias (historias), Inspiración (inspiracion)

## Regla SEO obligatoria

**Siempre que se cree o modifique un artículo del blog, ejecuta `/seo-audit` antes de dar el trabajo por terminado.** Esto garantiza que cada publicación cumple con las keywords objetivo y las buenas prácticas SEO del proyecto.
