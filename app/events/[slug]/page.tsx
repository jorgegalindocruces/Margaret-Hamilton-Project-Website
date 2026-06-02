import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { MDXContent } from '@/components/mdx/mdx-content'
import { getEventBySlug, getAllEvents } from '@/lib/content'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface EventPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const events = getAllEvents()
  return events.map((event) => ({ slug: event.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const event = getEventBySlug(params.slug)

  if (!event) {
    return { title: 'Evento no encontrado' }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.margarethamiltonproject.org'
  const eventUrl = `${siteUrl}/events/${event.slug}`
  const description = event.excerpt || event.title
  const ogImage = event.bannerImage
    ? event.bannerImage.startsWith('http') ? event.bannerImage : `${siteUrl}${event.bannerImage}`
    : undefined

  return {
    title: event.title,
    description,
    alternates: { canonical: eventUrl },
    openGraph: {
      title: event.title,
      description,
      url: eventUrl,
      type: 'article',
      locale: 'es_ES',
      siteName: 'Proyecto Margaret Hamilton',
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: event.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description,
      images: ogImage ? [{ url: ogImage, alt: event.title }] : [],
    },
  }
}

export default function EventPage({ params }: EventPageProps) {
  const event = getEventBySlug(params.slug)

  if (!event) {
    notFound()
  }

  return (
    <>
      <article>
        {/* Header */}
        <Section className="bg-gradient-to-br from-primary-50 via-white to-blue-50">
          <Container size="md">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold text-gray-900 font-heading sm:text-5xl">
                {event.title}
              </h1>
              {event.excerpt && (
                <p className="mb-6 text-lg text-gray-700">{event.excerpt}</p>
              )}
              <div className="flex flex-wrap gap-6 text-gray-700">
                {event.startsAt && (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📅</span>
                    <span>{formatDate(event.startsAt)}</span>
                  </div>
                )}
                {event.location && (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📍</span>
                    <span>{event.location}</span>
                  </div>
                )}
                {event.organizer && (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">👤</span>
                    <span>{event.organizer}</span>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </Section>

        {/* Content */}
        <Section>
          <Container size="md">
            <MDXContent source={event.content} />
          </Container>
        </Section>
      </article>

      {/* Back to Home */}
      <Section variant="gray">
        <Container size="md">
          <div className="text-center">
            <Link
              href="/"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Volver a inicio
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
