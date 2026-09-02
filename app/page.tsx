import { BlogCard } from '@/components/cards/blog-card'
import { EventCard } from '@/components/cards/event-card'
import { CTA } from '@/components/sections/cta'
import { Features } from '@/components/sections/features'
import { Hero } from '@/components/sections/hero'
import { Stats } from '@/components/sections/stats'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { getAllBlogPosts, getUpcomingEvents, getAllPartners, getAllTestimonials, getAllSchools } from '@/lib/content'
import { getAssetPath } from '@/lib/assets'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.margarethamiltonproject.org'

export const metadata: Metadata = {
  title: 'Escuela de Programación para Niñas y Niños en Cádiz',
  description: 'Programación, Scratch y robótica para niñas y niños de 6 a 12 años en colegios públicos de Cádiz. Proyecto sin ánimo de lucro, con preinscripción abierta.',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Proyecto Margaret Hamilton - Escuela de Programación en Cádiz',
    description: 'Escuela de programación en Cádiz para niños de 6 a 12 años. Scratch, robótica y coding en colegios públicos.',
    url: siteUrl,
    type: 'website',
    locale: 'es_ES',
    siteName: 'Proyecto Margaret Hamilton',
    images: [{ url: `${siteUrl}/images/logo/og-image.jpg`, width: 1200, height: 630, alt: 'Proyecto Margaret Hamilton - Escuela de Programación en Cádiz' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proyecto Margaret Hamilton - Escuela de Programación en Cádiz',
    description: 'Escuela de programación en Cádiz para niños de 6 a 12 años. Scratch, robótica y coding en colegios públicos.',
    images: [{ url: `${siteUrl}/images/logo/og-image.jpg`, alt: 'Proyecto Margaret Hamilton' }],
  },
}

export default function HomePage() {
  // Get content from MDX files
  const blogPosts = getAllBlogPosts().slice(0, 3)
  const events = getUpcomingEvents(3)
  const partners = getAllPartners()
  const testimonials = getAllTestimonials().slice(0, 3)
  const schools = getAllSchools()

  return (
    <>
      {/* Banner preinscripción */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdzlmKd9kA2kwWNK673SpK-V9XExtsI9KFAZ5Gx7BKw30hCpg/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-primary-600 px-4 py-3 text-center text-white hover:bg-primary-700 transition-colors"
      >
        <span className="text-sm font-medium sm:text-base">
          Preinscripción abierta para el curso 2026-2027 &rarr;
        </span>
      </a>

      {/* Hero Section */}
      <Hero
        title="Desarrollamos el talento del futuro, inspirando a las niñas y niños de hoy"
        subtitle="Proyecto Margaret Hamilton"
        description="Llevamos programación y robótica a niñas y niños de 6 a 12 años en colegios públicos de Cádiz, desde una escuela sin ánimo de lucro y paritaria"
        ctaPrimary={{ text: 'Ver clases en Cádiz', href: '/programacion' }}
        ctaSecondary={{ text: 'Monta tu escuela', href: '/crea-tu-escuela' }}
        videoBackground="1011818557"
      />

      {/* Features - Tres Pilares */}
      <Features
        title="Nuestros pilares fundamentales"
        subtitle="Por qué somos diferentes"
        features={[
          {
            title: 'Igualdad Digital',
            description:
              'Enfocados en colegios públicos con coste subvencionado de forma privada. Educación tecnológica accesible para todos.',
            icon: '🌐',
          },
          {
            title: 'Educación Accesible',
            description:
              'Paridad al 50% niños-niñas. Enseñanza desde los 6 a 12 años en entorno diverso e inclusivo.',
            icon: '📚',
          },
          {
            title: 'Referentes Reales',
            description:
              'Inspiramos con historias de pioneras como Margaret Hamilton, mostrando que la tecnología es para todos.',
            icon: '⭐',
          },
        ]}
      />

      {/* Stats Section */}
      <Stats
        stats={[
          { label: 'Fondos recibidos', value: '+30K€', icon: '💰' },
          { label: 'Niños y niñas', value: '+60', icon: '👧👦' },
          { label: 'Colegios', value: '2', icon: '🏫' },
          { label: 'Donaciones', value: '+60', icon: '❤️' },
        ]}
      />

      {/* About - Sin ánimo de lucro */}
      <Section backgroundImage={getAssetPath('/images/misc/img-1.jpeg')} overlayOpacity="dark">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
              Proyecto sin ánimo de lucro
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos una iniciativa educativa que busca cerrar la brecha de género en
              tecnología desde la infancia. Llevamos la programación a
              colegios públicos, creando espacios inclusivos donde niñas y niños descubren
              su potencial tecnológico. También trabajamos <Link href="/robotica" className="font-medium text-primary-600 hover:text-primary-700">robótica educativa en el aula</Link> con materiales manipulativos.
            </p>
          </div>
        </Container>
      </Section>

      {/* Escuelas Activas */}
      {schools && schools.length > 0 && (
        <Section>
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
                Nuestras escuelas activas
              </h2>
              <p className="text-lg text-gray-600">
                {schools.length} colegios públicos con programas activos
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {schools.map((school) => (
                <div
                  key={school.slug}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={school.image}
                      alt={school.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      {school.name}
                    </h3>
                    {school.location && (
                      <p className="text-gray-600">{school.location}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Crea tu escuela */}
            <div className="mt-12 rounded-xl bg-primary-50 p-8 text-center">
              <h3 className="mb-2 text-2xl font-bold text-gray-900 font-heading">
                Crea tu propia escuela
              </h3>
              <p className="mb-6 text-gray-700">
                Aquí tienes todo lo necesario para crear tu escuela. Desde el curriculum de los peques a la logística explicada paso a paso.
              </p>
              <Link
                href="/crea-tu-escuela"
                className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700"
              >
                Todo lo necesario
              </Link>
            </div>
          </Container>
        </Section>
      )}

      {/* Upcoming Events */}
      {events && events.length > 0 && (
        <Section variant="gray">
          <Container>
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
                Próximos eventos
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <EventCard
                  key={event.slug}
                  slug={event.slug}
                  title={event.title}
                  description={event.excerpt}
                  bannerImage={event.bannerImage}
                  startsAt={event.startsAt}
                  location={event.location}
                  organizer={event.organizer}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <Section backgroundImage={getAssetPath('/images/misc/img-2.jpeg')} overlayOpacity="dark">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
                Lo que dicen las familias
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.slug}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex gap-1 text-yellow-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="mb-4 text-gray-700">{testimonial.content}</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    {testimonial.role && (
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Blog Posts */}
      {blogPosts && blogPosts.length > 0 && (
        <Section variant="gray">
          <Container>
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
                  Blog y noticias
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Ver todo →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  coverImage={post.coverImage}
                  publishedAt={post.date}
                  authorName={post.author}
                  categoryTitle={post.category}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Partners/Sponsors */}
      {partners && partners.length > 0 && (
        <Section>
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
                Patrocinadores y colaboradores
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {partners.map((partner) => (
                <a
                  key={partner.slug}
                  href={partner.websiteUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-16 w-32 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                >
                  <Image
                    src={partner.logoImage}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA Final */}
      <CTA
        title="¿Te sumas al cambio?"
        description="Ayúdanos a llevar la programación a más niñas y niños"
        ctaPrimary={{ text: 'Colabora con nosotros', href: '/donacion' }}
        ctaSecondary={{ text: 'Contáctanos', href: '/contacta' }}
        backgroundImage={getAssetPath('/images/misc/img-4.jpeg')}
      />
    </>
  )
}
