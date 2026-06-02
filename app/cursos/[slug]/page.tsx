import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { YouTubeEmbed } from '@/components/ui/youtube-embed'
import { MDXContent } from '@/components/mdx/mdx-content'
import { getCourseBySlug, getAllCourses } from '@/lib/content'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface CoursePageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const courses = getAllCourses()
  return courses.map((course) => ({ slug: course.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = getCourseBySlug(params.slug)

  if (!course) {
    return { title: 'Curso no encontrado' }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.margarethamiltonproject.org'
  const courseUrl = `${siteUrl}/cursos/${course.slug}`
  const description = course.excerpt || course.title
  const ogImage = course.coverImage
    ? course.coverImage.startsWith('http') ? course.coverImage : `${siteUrl}${course.coverImage}`
    : undefined

  return {
    title: course.title,
    description,
    alternates: { canonical: courseUrl },
    openGraph: {
      title: course.title,
      description,
      url: courseUrl,
      type: 'article',
      locale: 'es_ES',
      siteName: 'Proyecto Margaret Hamilton',
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: course.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: course.title,
      description,
      images: ogImage ? [{ url: ogImage, alt: course.title }] : [],
    },
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = getCourseBySlug(params.slug)

  if (!course) {
    notFound()
  }

  const displayTitle = course.courseNumber
    ? `Clase ${course.courseNumber}: ${course.title}`
    : course.title

  return (
    <>
      <article>
        {/* Header */}
        <Section className="bg-gradient-to-br from-primary-50 via-white to-blue-50">
          <Container size="md">
            <div className="mx-auto max-w-3xl">
              {course.category && (
                <div className="mb-4">
                  <Badge variant="primary">{course.category}</Badge>
                </div>
              )}
              <h1 className="mb-6 text-4xl font-bold text-gray-900 font-heading sm:text-5xl">
                {displayTitle}
              </h1>
              {course.excerpt && (
                <p className="text-lg text-gray-700">{course.excerpt}</p>
              )}
            </div>
          </Container>
        </Section>

        {/* Video Embed */}
        {course.youtubeUrl && (
          <Section>
            <Container size="md">
              <div className="mx-auto max-w-3xl">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 font-heading">
                  Video de la clase
                </h2>
                <YouTubeEmbed url={course.youtubeUrl} title={course.title} />
                {course.excerpt && (
                  <p className="mt-6 text-gray-700 leading-relaxed">
                    {course.excerpt}
                  </p>
                )}
              </div>
            </Container>
          </Section>
        )}

        {/* Resources */}
        {(course.googleDocUrl || course.scratchUrl) && (
          <Section variant="gray">
            <Container size="md">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 font-heading">
                Recursos adicionales
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {course.googleDocUrl && (
                  <a
                    href={course.googleDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-6 text-center transition-shadow hover:shadow-md"
                  >
                    <div className="text-4xl">📄</div>
                    <span className="font-medium text-gray-900">Documento Google</span>
                  </a>
                )}
                {course.scratchUrl && (
                  <a
                    href={course.scratchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-6 text-center transition-shadow hover:shadow-md"
                  >
                    <div className="text-4xl">🎨</div>
                    <span className="font-medium text-gray-900">Proyecto Scratch</span>
                  </a>
                )}
              </div>
            </Container>
          </Section>
        )}

        {/* Content */}
        <Section>
          <Container size="md">
            <MDXContent source={course.content} />
          </Container>
        </Section>
      </article>

      {/* Back to Courses */}
      <Section variant="gray">
        <Container size="md">
          <div className="text-center">
            <Link href="/crea-tu-escuela">
              <Button variant="outline">← Volver a todos los cursos</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
