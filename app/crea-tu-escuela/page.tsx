import { CourseCard } from '@/components/cards/course-card'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { getAllCourses, getAllCourseCategories } from '@/lib/content'
import Link from 'next/link'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.margarethamiltonproject.org'

export const metadata: Metadata = {
  title: 'Crea tu Escuela de Programación con Scratch',
  description: 'Currículum abierto de Scratch para crear una escuela de programación para niñas y niños de 6 a 12 años en colegios públicos.',
  keywords: [
    'cursos scratch niños',
    'tutoriales programación infantil',
    'escuela de programación Cádiz',
    'talleres scratch',
    'aprender scratch paso a paso',
    'recursos educativos programación',
    'currículum programación niños',
    'videos scratch español',
  ],
  alternates: {
    canonical: `${siteUrl}/crea-tu-escuela`,
  },
  openGraph: {
    title: '45 Cursos de Scratch y Programación para Niños',
    description: 'Vídeos, talleres y recursos descargables para enseñar programación a niños en colegios públicos.',
    url: `${siteUrl}/crea-tu-escuela`,
    type: 'website',
    locale: 'es_ES',
    siteName: 'Proyecto Margaret Hamilton',
    images: [{ url: `${siteUrl}/images/logo/og-image.jpg`, width: 1200, height: 630, alt: 'Cursos - Proyecto Margaret Hamilton' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '45 Cursos de Scratch y Programación para Niños',
    description: 'Vídeos, talleres y recursos descargables para enseñar programación a niños en colegios públicos.',
    images: [{ url: `${siteUrl}/images/logo/og-image.jpg`, alt: 'Proyecto Margaret Hamilton' }],
  },
}

export default function CreaTuEscuelaPage() {
  const allCourses = getAllCourses()
  const categories = getAllCourseCategories()

  // Group courses by category
  const coursesByCategory = categories.map((category) => ({
    ...category,
    courses: allCourses.filter((course) => course.categorySlug === category.slug),
  }))

  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-blue-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 font-heading sm:text-5xl">
              Crea una escuela de programación con Scratch, paso a paso
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Currículum abierto, vídeos explicativos y materiales para llevarlo a un colegio público
            </p>
          </div>
        </Container>
      </Section>

      {/* Content Description */}
      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 font-heading">
              Tecnología, comunidad y futuro en tus manos
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                El proyecto Margaret Hamilton no pertenece a una ciudad, ni a una persona. Es una idea que nace con vocación universal, con el espíritu colaborativo y open source que define lo mejor del mundo tecnológico.
              </p>

              <p>
                Queremos que cualquier persona, colectivo o escuela que comparta nuestros valores pueda replicar este modelo donde lo necesite. Creemos que el cambio real empieza desde abajo, desde las aulas, desde cada niña que se atreve a pensar: <em className="font-semibold">&ldquo;yo también puedo programar cohetes&rdquo;</em>.
              </p>

              <p>
                Por eso hemos liberado todo el contenido de nuestro currículum: para que tú también puedas lanzar una escuela Margaret Hamilton en tu barrio, en tu ciudad, en tu cole.
              </p>

              <div className="bg-primary-50 rounded-xl p-8 mt-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  ¿Qué encontrarás aquí?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 text-primary-600">✓</span>
                    <span>El currículum completo dividido por sesiones, con todos los contenidos listos para aplicar en el aula.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary-600">✓</span>
                    <span>Vídeos explicativos donde te guiamos paso a paso para llevar cada clase.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary-600">✓</span>
                    <span>Materiales descargables, enlaces, ejercicios y recursos extra.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Courses by Category */}
      {coursesByCategory.map((category, index) => {
        if (category.courses.length === 0) return null

        return (
          <Section key={category.slug} variant={index % 2 === 0 ? 'default' : 'gray'}>
            <Container>
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
                    {category.title}
                  </h2>
                  <Badge variant="primary">{category.courses.length} cursos</Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.courses.map((course) => (
                  <CourseCard
                    key={course.slug}
                    slug={course.slug}
                    courseNumber={course.courseNumber}
                    title={course.title}
                    excerpt={course.excerpt}
                    coverImage={course.coverImage}
                    categoryTitle={course.category}
                  />
                ))}
              </div>
            </Container>
          </Section>
        )
      })}

      {/* CTA */}
      <Section variant="primary">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
              ¿Quieres montar una escuela en tu colegio?
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              Te ayudamos con todo el proceso, desde la formación hasta el material
            </p>
            <Link
              href="/contacta"
              className="inline-block rounded-lg bg-primary-600 px-8 py-3 font-medium text-white transition-colors hover:bg-primary-700"
            >
              Contáctanos
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
