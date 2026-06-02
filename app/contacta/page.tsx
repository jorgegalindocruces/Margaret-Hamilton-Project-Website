import { ContactForm } from '@/components/forms/contact-form'
import { Hero } from '@/components/sections/hero'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { getAssetPath } from '@/lib/assets'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.margarethamiltonproject.org'

export const metadata: Metadata = {
  title: 'Contacto - Escuela de Programación en Cádiz',
  description: 'Contacta con el Proyecto Margaret Hamilton. Monta una escuela de programación en tu colegio público de Cádiz o colabora como voluntario.',
  keywords: [
    'contacto programación niños Cádiz',
    'montar escuela programación',
    'voluntariado tecnología Cádiz',
    'escuela de programación Cádiz',
    'colaborar proyecto educativo',
    'llevar programación colegio',
  ],
  alternates: {
    canonical: `${siteUrl}/contacta`,
  },
  openGraph: {
    title: 'Contacto - Proyecto Margaret Hamilton',
    description: 'Monta una escuela de programación en tu colegio público de Cádiz o colabora como voluntario.',
    url: `${siteUrl}/contacta`,
    type: 'website',
    locale: 'es_ES',
    siteName: 'Proyecto Margaret Hamilton',
    images: [{ url: `${siteUrl}/images/logo/og-image.jpg`, width: 1200, height: 630, alt: 'Contacto - Proyecto Margaret Hamilton' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto - Proyecto Margaret Hamilton',
    description: 'Monta una escuela de programación en tu colegio público de Cádiz o colabora como voluntario.',
    images: [{ url: `${siteUrl}/images/logo/og-image.jpg`, alt: 'Proyecto Margaret Hamilton' }],
  },
}

export default function ContactaPage() {
  return (
    <>
      <Hero
        title="Contacta con nosotros"
        description="¿Quieres lanzar una escuela, colaborar, aportar ideas o apoyar este proyecto? Escríbenos"
        backgroundImage={getAssetPath('/images/misc/img-9988.jpg')}
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 font-heading">
                Información de contacto
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Email</h3>
                  <a
                    href="mailto:proyectomargarethamilton@gmail.com"
                    className="text-primary-600 hover:underline"
                  >
                    proyectomargarethamilton@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Teléfono</h3>
                  <a href="tel:+34690051056" className="text-primary-600 hover:underline">
                    690 051 056
                  </a>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Dirección</h3>
                  <p className="text-gray-700">
                    Calle Fernández Ballesteros 2<br />
                    Cádiz, España
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Redes sociales</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/proyectomargarethamilton"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:text-primary-600 transition-colors"
                    >
                      📷
                    </a>
                    <a
                      href="https://twitter.com/proyectomargarethamilton"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:text-primary-600 transition-colors"
                    >
                      𝕏
                    </a>
                    <a
                      href="https://linkedin.com/company/proyectomargarethamilton"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:text-primary-600 transition-colors"
                    >
                      💼
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 font-heading">
                  ¿A quién va dirigido?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Este formulario es para madres, padres, profesores, colegios y
                  asociaciones interesadas en lanzar una escuela, colaborar con el proyecto
                  o simplemente conocer más sobre nuestra iniciativa.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 font-heading">
                  Envíanos un mensaje
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
