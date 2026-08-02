import { Hero } from '@/components/sections/hero'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { getAssetPath } from '@/lib/assets'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.margarethamiltonproject.org'

export const metadata: Metadata = {
  title: 'Robótica Educativa para Niñas y Niños en Cádiz',
  description: 'Robótica educativa en colegios públicos de Cádiz con LEGO Education Essential. Programación visual, retos STEAM y pensamiento computacional de 6 a 12 años.',
  keywords: [
    'robótica educativa Cádiz',
    'LEGO Essential escuelas',
    'robótica para niños Cádiz',
    'clases robótica colegios públicos',
    'STEAM para niños',
    'programación visual niños',
    'escuela de programación Cádiz',
    'pensamiento computacional',
  ],
  alternates: {
    canonical: `${siteUrl}/robotica`,
  },
  openGraph: {
    title: 'Robótica Educativa - Proyecto Margaret Hamilton',
    description: 'Clases de robótica con LEGO Essential en colegios públicos de Cádiz. Retos STEAM y programación visual para niños de 6 a 12 años.',
    url: `${siteUrl}/robotica`,
    type: 'website',
    locale: 'es_ES',
    siteName: 'Proyecto Margaret Hamilton',
    images: [{ url: `${siteUrl}/images/blog/foto-robotica.png`, width: 1200, height: 630, alt: 'Robótica Educativa - Proyecto Margaret Hamilton' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robótica Educativa - Proyecto Margaret Hamilton',
    description: 'Clases de robótica con LEGO Essential en colegios públicos de Cádiz. Retos STEAM y programación visual para niños de 6 a 12 años.',
    images: [{ url: `${siteUrl}/images/blog/foto-robotica.png`, alt: 'Robótica Educativa - Proyecto Margaret Hamilton' }],
  },
}

export default function RoboticaPage() {
  return (
    <>
      <Hero
        title="Robótica educativa en colegios públicos de Cádiz"
        description="Aprendemos programación construyendo robots con LEGO Education Essential"
        backgroundImage={getAssetPath('/images/blog/foto-robotica.png')}
      />

      {/* Intro */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
              Programación que se puede tocar
            </h2>
            <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              En el Proyecto Margaret Hamilton no solo enseñamos programación en pantalla. Nuestra pata de robótica educativa lleva la tecnología al mundo físico: los niños y niñas construyen, programan y prueban robots reales en el aula.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hemos invertido <strong>1.517€</strong> en la compra de <strong>cuatro sets completos de LEGO Education Essential</strong> para reforzar y ampliar las clases de robótica en las dos escuelas públicas en las que estamos presentes, llevando más recursos al aula y más oportunidades de aprendizaje al alumnado.
            </p>
          </div>
        </Container>
      </Section>

      {/* Qué aprenden */}
      <Section variant="gray">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
              ¿Qué aprenden con la robótica?
            </h2>
            <p className="mb-8 text-lg text-gray-700 leading-relaxed">
              Los materiales se utilizan para trabajar programación de forma visual y manipulativa. Nuestro objetivo es que los niños y niñas no solo &ldquo;hagan que un robot se mueva&rdquo;, sino que entiendan cómo pensar como programadores: observar, probar, corregir y volver a intentarlo.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-3 text-3xl">🔄</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Bucles</h3>
                <p className="text-gray-600">Estructuras repetitivas explicadas de forma abstracta y práctica.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-3 text-3xl">🧩</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Secuencias lógicas</h3>
                <p className="text-gray-600">Resolución de retos progresivos que desarrollan el pensamiento ordenado.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-3 text-3xl">🏎️</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Carreras de robots</h3>
                <p className="text-gray-600">Conceptos de movimiento, tiempo y control aplicados en competiciones.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-3 text-3xl">🎨</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Desafíos creativos</h3>
                <p className="text-gray-600">Cada equipo diseña, prueba y mejora su propia solución.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* STEAM */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
              Pensamiento crítico y desafíos STEAM
            </h2>
            <p className="mb-8 text-lg text-gray-700 leading-relaxed">
              LEGO Education Essential es una herramienta especialmente potente dentro del aprendizaje STEAM. Permite empezar con proyectos sencillos y avanzar hacia diseños cada vez más creativos y complejos. Está diseñado para alumnado de ciclo superior de primaria y secundaria, y se adapta muy bien a sesiones de 45 minutos.
            </p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div className="text-center rounded-xl bg-primary-50 p-6">
                <div className="mb-2 text-3xl">🧠</div>
                <p className="font-semibold text-gray-900">Pensamiento crítico</p>
              </div>
              <div className="text-center rounded-xl bg-primary-50 p-6">
                <div className="mb-2 text-3xl">📊</div>
                <p className="font-semibold text-gray-900">Análisis de datos</p>
              </div>
              <div className="text-center rounded-xl bg-primary-50 p-6">
                <div className="mb-2 text-3xl">💡</div>
                <p className="font-semibold text-gray-900">Resolución de problemas</p>
              </div>
              <div className="text-center rounded-xl bg-primary-50 p-6">
                <div className="mb-2 text-3xl">🤝</div>
                <p className="font-semibold text-gray-900">Trabajo en equipo</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Impacto */}
      <Section variant="gray">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
              Una inversión con impacto educativo real
            </h2>
            <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              Esta compra no es solo una mejora de material: es una apuesta por desarrollar en el alumnado las competencias del siglo XXI. Queremos que cada sesión de robótica sea una oportunidad para que los estudiantes:
            </p>
            <ul className="mb-8 space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-primary-600 font-bold">✓</span>
                Aprendan conceptos STEAM de forma significativa
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary-600 font-bold">✓</span>
                Ganen autonomía para enfrentarse a retos
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary-600 font-bold">✓</span>
                Disfruten construyendo soluciones innovadoras
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              Seguimos trabajando para que la tecnología educativa llegue a más aulas públicas y para que el aprendizaje de la programación sea una experiencia inspiradora, inclusiva y divertida.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
              ¿Quieres que la robótica llegue a tu colegio?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Si quieres saber más sobre cómo montar una escuela de programación y robótica en tu centro educativo, ponte en contacto con nosotros.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contacta"
                className="rounded-lg bg-primary-600 px-8 py-3 text-center font-medium text-white hover:bg-primary-700 transition-colors"
              >
                Contacta con nosotros
              </Link>
              <Link
                href="/crea-tu-escuela"
                className="rounded-lg border border-gray-300 px-8 py-3 text-center font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Monta tu escuela
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
