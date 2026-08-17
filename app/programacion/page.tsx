import { Hero } from '@/components/sections/hero'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { getAssetPath } from '@/lib/assets'
import Link from 'next/link'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.margarethamiltonproject.org'

export const metadata: Metadata = {
  title: 'Programación para Niñas y Niños en Cádiz - Scratch',
  description: 'Clases extraescolares de programación con Scratch para niñas y niños de 6 a 12 años en colegios públicos de Cádiz. Proyecto sin ánimo de lucro.',
  keywords: [
    'programación para niños Cádiz',
    'clases Scratch Cádiz',
    'escuela de programación Cádiz',
    'programación infantil colegios públicos',
    'aprender Scratch niños',
    'pensamiento computacional',
    'programación educativa',
    'coding para niños Cádiz',
  ],
  alternates: {
    canonical: `${siteUrl}/programacion`,
  },
  openGraph: {
    title: 'Programación Educativa - Proyecto Margaret Hamilton',
    description: 'Clases de Scratch para niños de 6 a 12 años en colegios públicos de Cádiz. Pensamiento computacional, lógica y creatividad.',
    url: `${siteUrl}/programacion`,
    type: 'website',
    locale: 'es_ES',
    siteName: 'Proyecto Margaret Hamilton',
    images: [{ url: `${siteUrl}/images/logo/og-image.jpg`, width: 1200, height: 630, alt: 'Programación Educativa - Proyecto Margaret Hamilton' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Programación Educativa - Proyecto Margaret Hamilton',
    description: 'Clases de Scratch para niños de 6 a 12 años en colegios públicos de Cádiz. Pensamiento computacional, lógica y creatividad.',
    images: [{ url: `${siteUrl}/images/logo/og-image.jpg`, alt: 'Programación Educativa - Proyecto Margaret Hamilton' }],
  },
}

export default function ProgramacionPage() {
  return (
    <>
      <Hero
        title="Programación educativa con Scratch en colegios públicos de Cádiz"
        description="Enseñamos a pensar como programadores a niños y niñas de 6 a 12 años"
        backgroundImage={getAssetPath('/images/misc/img-3.jpeg')}
      />

      {/* Intro */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
              Aprender a programar es aprender a pensar
            </h2>
            <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              En el Proyecto Margaret Hamilton utilizamos <strong>Scratch</strong>, el lenguaje de programación visual creado por el MIT, para enseñar a los niños y niñas las nociones fundamentales de la programación. No se trata de formar futuros ingenieros de software: se trata de desarrollar el <strong>pensamiento computacional</strong>, la capacidad de descomponer problemas, encontrar patrones y construir soluciones paso a paso.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Scratch permite a los alumnos crear sus propios videojuegos, animaciones e historias interactivas arrastrando bloques de código visual, sin necesidad de escribir una sola línea de texto. Es la herramienta perfecta para que niños y niñas de <strong>6 a 12 años</strong> descubran la lógica detrás de la tecnología que usan cada día.
            </p>
          </div>
        </Container>
      </Section>

      {/* Qué aprenden */}
      <Section variant="gray">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
              ¿Qué aprenden en nuestras clases?
            </h2>
            <p className="mb-8 text-lg text-gray-700 leading-relaxed">
              Nuestro currículum está diseñado para ir de lo más básico a lo más complejo, siempre de forma progresiva y divertida. Cada sesión trabaja un concepto concreto de programación a través de retos prácticos.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-3 text-3xl">🚀</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Movimiento y dirección</h3>
                <p className="text-gray-600">Mover sprites, girar, deslizar y apuntar. Los primeros pasos para entender cómo dar instrucciones a un ordenador.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-3 text-3xl">🔄</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Bucles y repeticiones</h3>
                <p className="text-gray-600">Repetir, por siempre, rebotar. Los alumnos descubren el poder de automatizar acciones con estructuras repetitivas.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-3 text-3xl">🧠</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Condicionales y lógica</h3>
                <p className="text-gray-600">Si... entonces, sensores y variables. Los peques aprenden a tomar decisiones dentro de sus programas.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-3 text-3xl">🎮</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Proyectos creativos</h3>
                <p className="text-gray-600">Videojuegos, animaciones e historias interactivas. Cada alumno aplica lo aprendido creando su propio proyecto.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Metodología */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
              Nuestra metodología
            </h2>
            <p className="mb-8 text-lg text-gray-700 leading-relaxed">
              Las clases se imparten semanalmente en horario extraescolar dentro de los propios colegios públicos. Cada sesión dura 45 minutos y sigue una estructura pensada para maximizar el aprendizaje:
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-bold">1</div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">Repaso y calentamiento</h3>
                  <p className="text-gray-600">Revisamos lo aprendido en la sesión anterior con un reto rápido para activar la memoria.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-bold">2</div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">Concepto nuevo</h3>
                  <p className="text-gray-600">Introducimos un bloque o concepto de Scratch con una explicación visual y un ejemplo en directo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-bold">3</div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">Práctica guiada</h3>
                  <p className="text-gray-600">Los alumnos replican el ejercicio en sus ordenadores con ayuda del profesor.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-bold">4</div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">Reto libre</h3>
                  <p className="text-gray-600">Cada alumno modifica o amplía el ejercicio a su manera, fomentando la creatividad y la autonomía.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Currículum */}
      <Section variant="gray">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
              +40 clases paso a paso
            </h2>
            <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              Hemos diseñado un currículum completo con más de 40 sesiones de Scratch, organizadas de forma progresiva. Cada clase incluye vídeo explicativo, material descargable y ejercicios prácticos. Además, todo el contenido es <strong>open source</strong>: cualquier persona puede usarlo para montar su propia escuela de programación.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="text-center rounded-xl bg-white border border-gray-200 p-6">
                <div className="mb-2 text-4xl font-bold text-primary-600">41</div>
                <p className="font-semibold text-gray-900">Clases paso a paso</p>
                <p className="mt-1 text-sm text-gray-500">De lo básico a lo avanzado</p>
              </div>
              <div className="text-center rounded-xl bg-white border border-gray-200 p-6">
                <div className="mb-2 text-4xl font-bold text-primary-600">3</div>
                <p className="font-semibold text-gray-900">Talleres prácticos</p>
                <p className="mt-1 text-sm text-gray-500">Proyectos completos guiados</p>
              </div>
              <div className="text-center rounded-xl bg-white border border-gray-200 p-6">
                <div className="mb-2 text-4xl font-bold text-primary-600">100%</div>
                <p className="font-semibold text-gray-900">Open source</p>
                <p className="mt-1 text-sm text-gray-500">Libre para todos</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/crea-tu-escuela"
                className="inline-block rounded-lg bg-primary-600 px-8 py-3 font-medium text-white hover:bg-primary-700 transition-colors"
              >
                Ver todo el currículum
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Competencias */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
              Competencias que desarrollamos
            </h2>
            <p className="mb-8 text-lg text-gray-700 leading-relaxed">
              Más allá de aprender a programar, nuestras clases trabajan habilidades transversales que los niños y niñas aplicarán en cualquier ámbito de su vida.
            </p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div className="text-center rounded-xl bg-primary-50 p-6">
                <div className="mb-2 text-3xl">🧩</div>
                <p className="font-semibold text-gray-900">Pensamiento lógico</p>
              </div>
              <div className="text-center rounded-xl bg-primary-50 p-6">
                <div className="mb-2 text-3xl">🎨</div>
                <p className="font-semibold text-gray-900">Creatividad</p>
              </div>
              <div className="text-center rounded-xl bg-primary-50 p-6">
                <div className="mb-2 text-3xl">🔍</div>
                <p className="font-semibold text-gray-900">Resolución de problemas</p>
              </div>
              <div className="text-center rounded-xl bg-primary-50 p-6">
                <div className="mb-2 text-3xl">💪</div>
                <p className="font-semibold text-gray-900">Tolerancia al error</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="gray">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
              ¿Quieres llevar la programación a tu colegio?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Ponte en contacto con nosotros o accede directamente a nuestro currículum abierto para montar tu propia escuela de programación.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
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
              <Link
                href="/robotica"
                className="rounded-lg border border-gray-300 px-8 py-3 text-center font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Ver robótica educativa
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
