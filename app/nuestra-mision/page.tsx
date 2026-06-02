import { Features } from '@/components/sections/features'
import { Hero } from '@/components/sections/hero'
import { Stats } from '@/components/sections/stats'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { getAllTeamMembers, getAllTestimonials, getAllPartners, getAllSchools } from '@/lib/content'
import { getAssetPath } from '@/lib/assets'
import Image from 'next/image'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.margarethamiltonproject.org'

export const metadata: Metadata = {
  title: 'Nuestra Misión - Igualdad de Género en Tecnología',
  description: 'Escuela de programación en Cádiz sin ánimo de lucro. Cerramos la brecha de género en tecnología con paridad 50/50 en colegios públicos.',
  keywords: [
    'igualdad de género tecnología',
    'educación inclusiva Cádiz',
    'escuela de programación Cádiz',
    'brecha de género STEM',
    'programación paridad niños niñas',
    'voluntariado educación Cádiz',
  ],
  alternates: {
    canonical: `${siteUrl}/nuestra-mision`,
  },
  openGraph: {
    title: 'Nuestra Misión - Igualdad en Tecnología desde la Infancia',
    description: 'Escuela de programación en Cádiz sin ánimo de lucro con paridad 50/50 en colegios públicos.',
    url: `${siteUrl}/nuestra-mision`,
    type: 'website',
    locale: 'es_ES',
    siteName: 'Proyecto Margaret Hamilton',
    images: [{ url: `${siteUrl}/images/logo/og-image.jpg`, width: 1200, height: 630, alt: 'Nuestra Misión - Proyecto Margaret Hamilton' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuestra Misión - Igualdad en Tecnología desde la Infancia',
    description: 'Escuela de programación en Cádiz sin ánimo de lucro con paridad 50/50 en colegios públicos.',
    images: [{ url: `${siteUrl}/images/logo/og-image.jpg`, alt: 'Proyecto Margaret Hamilton' }],
  },
}

export default function MisionPage() {
  const teamMembers = getAllTeamMembers()
  const testimonials = getAllTestimonials()
  const partners = getAllPartners()
  const schools = getAllSchools()

  return (
    <>
      <Hero
        title="Nuestra misión: Desarrollamos el talento del futuro, inspirando a las niñas y niños de hoy"
        description="¿Te sumas al cambio?"
        backgroundImage={getAssetPath('/images/misc/img-3.jpeg')}
      />

      {/* Pilares Fundamentales */}
      <Features
        title="Nuestros pilares"
        features={[
          {
            title: 'Colegios Públicos',
            description:
              'Enfoque en colegios públicos con coste subvencionado de forma privada, asegurando acceso universal.',
            icon: '🏫',
          },
          {
            title: 'Paridad 50/50',
            description:
              'Paridad al 50% niños-niñas en todos nuestros programas educativos.',
            icon: '⚖️',
          },
          {
            title: 'Edades 6-12',
            description:
              'Enseñanza desde los 6 a 12 años en entorno diverso e inclusivo.',
            icon: '👧👦',
          },
        ]}
      />

      {/* Stats */}
      <Stats
        stats={[
          { label: 'Fondos recibidos', value: '+30K€', icon: '💰' },
          { label: 'Niños y niñas', value: '+60', icon: '👧👦' },
          { label: 'Colegios', value: '2', icon: '🏫' },
          { label: 'Donaciones', value: '+60', icon: '❤️' },
        ]}
      />

      {/* Escuelas Activas */}
      {schools && schools.length > 0 && (
        <Section>
          <Container>
            <h2 className="mb-12 text-3xl font-bold text-gray-900 font-heading sm:text-4xl text-center">
              Escuelas Activas
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
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
          </Container>
        </Section>
      )}

      {/* Misión detallada */}
      <Section variant="gray">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
              Nuestra Misión
            </h2>
            <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              Nos focalizamos en cerrar la brecha de género en tecnología desde la infancia
              mediante escuelas accesibles e inclusivas. Creemos que la educación tecnológica
              debe estar al alcance de todos, sin importar su origen o situación económica.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Trabajamos directamente con colegios públicos, proporcionando todo el material
              necesario y formando a profesores voluntarios para que puedan impartir clases
              de programación de calidad.
            </p>
          </div>
        </Container>
      </Section>

      {/* Origen del proyecto */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
              El origen
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              El Proyecto Margaret Hamilton nace de la visión de crear oportunidades
              educativas en tecnología para niñas y niños en colegios públicos. Inspirados
              por pioneras como Margaret Hamilton, quien lideró el desarrollo del software
              del Apollo 11, queremos mostrar que la tecnología es para todos.
            </p>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <Section variant="gray">
          <Container>
            <h2 className="mb-12 text-3xl font-bold text-gray-900 font-heading sm:text-4xl text-center">
              Testimonios de familias
            </h2>
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

      {/* Team Preview */}
      {teamMembers && teamMembers.length > 0 && (
        <Section>
          <Container>
            <h2 className="mb-12 text-3xl font-bold text-gray-900 font-heading sm:text-4xl text-center">
              Equipo de voluntarios
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.slice(0, 3).map((member) => (
                <div key={member.slug} className="text-center">
                  {member.avatarImage && (
                    <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                      <Image
                        src={member.avatarImage}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h3 className="mb-1 text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Partners */}
      {partners && partners.length > 0 && (
        <Section variant="gray">
          <Container>
            <h2 className="mb-12 text-3xl font-bold text-gray-900 font-heading sm:text-4xl text-center">
              Colaboradores
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {partners.map((partner) => (
                <div
                  key={partner.slug}
                  className="relative h-16 w-32 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                >
                  <Image
                    src={partner.logoImage}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* FAQ */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-3xl font-bold text-gray-900 font-heading sm:text-4xl text-center">
              Preguntas frecuentes
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  ¿Cuál es vuestra misión?
                </h3>
                <p className="text-gray-700">
                  Cerrar la brecha de género en tecnología desde la infancia mediante escuelas
                  de programación en colegios públicos.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  ¿Cómo puedo donar?
                </h3>
                <p className="text-gray-700">
                  Puedes donar a través de nuestra página de colaboración empresarial o
                  mediante nuestra campaña en Goteo.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  ¿Las donaciones son deducibles?
                </h3>
                <p className="text-gray-700">
                  Sí, somos una entidad sin ánimo de lucro y las donaciones son deducibles
                  según la legislación vigente.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  ¿Cómo puedo ser voluntario?
                </h3>
                <p className="text-gray-700">
                  Visita nuestra página de equipo y rellena el formulario de voluntariado.
                  Buscamos personas apasionadas por la educación y la tecnología.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
