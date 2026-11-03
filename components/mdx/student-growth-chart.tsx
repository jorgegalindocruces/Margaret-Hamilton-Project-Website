'use client'

import { useState } from 'react'

export interface StudentGrowthDatum {
  /** Etiqueta del curso, p. ej. "2025" */
  curso: string
  ninos: number
  ninas: number
}

interface StudentGrowthChartProps {
  datos: StudentGrowthDatum[]
  titulo?: string
  subtitulo?: string
}

// Paleta validada (dataviz validate_palette.js, modo claro): CVD ΔE 19.6, normal ΔE 40.
// El verde agua queda por debajo de 3:1 sobre blanco, por eso todos los valores
// van etiquetados de forma visible y hay vista de tabla.
const COLOR_NINAS = '#c026d3'
const COLOR_NINOS = '#1baf7a'

const fmtPct = (n: number) =>
  `${n.toLocaleString('es-ES', { maximumFractionDigits: 1, minimumFractionDigits: 1 })} %`

// Rectángulo con solo las esquinas superiores redondeadas (extremo de dato).
function topRoundedRect(x: number, y: number, w: number, h: number, r: number) {
  const rr = Math.min(r, h, w / 2)
  return `M${x},${y + h} V${y + rr} Q${x},${y} ${x + rr},${y} H${x + w - rr} Q${x + w},${y} ${x + w},${y + rr} V${y + h} Z`
}

export function StudentGrowthChart({
  datos,
  titulo = 'Evolución del alumnado',
  subtitulo = 'Niñas y niños inscritos en la escuela por curso',
}: StudentGrowthChartProps) {
  const [hover, setHover] = useState<{ i: number; serie: 'ninas' | 'ninos' } | null>(null)

  const W = 400
  const H = 300
  const m = { top: 32, right: 8, bottom: 32, left: 32 }
  const innerW = W - m.left - m.right
  const innerH = H - m.top - m.bottom

  const maxTotal = Math.max(...datos.map((d) => d.ninos + d.ninas))
  const yMax = Math.ceil((maxTotal * 1.1) / 10) * 10
  const y = (v: number) => m.top + innerH - (v / yMax) * innerH
  const ticks = Array.from({ length: yMax / 10 + 1 }, (_, k) => k * 10)

  const slot = innerW / datos.length
  const barW = Math.min(96, slot * 0.46)
  const barX = (i: number) => m.left + slot * i + (slot - barW) / 2
  const GAP = 2

  const first = datos[0]
  const last = datos[datos.length - 1]
  const totalFirst = first.ninos + first.ninas
  const totalLast = last.ninos + last.ninas
  const crecimiento = ((totalLast - totalFirst) / totalFirst) * 100
  const nuevasNinas = last.ninas - first.ninas

  const hovered = hover ? datos[hover.i] : null

  return (
    <figure className="not-prose my-10 rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
      <figcaption className="mb-4">
        <p className="text-lg font-semibold text-gray-900">{titulo}</p>
        <p className="text-sm text-gray-600">{subtitulo}</p>
      </figcaption>

      <div className="mb-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-700" aria-hidden="true">
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm" style={{ background: COLOR_NINAS }} /> Niñas
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm" style={{ background: COLOR_NINOS }} /> Niños
        </span>
      </div>

      <div className="relative mx-auto max-w-lg">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label={`${titulo}. ${datos
            .map((d) => `${d.curso}: ${d.ninos + d.ninas} en total, ${d.ninas} niñas y ${d.ninos} niños`)
            .join('. ')}.`}
          onMouseLeave={() => setHover(null)}
        >
          {ticks.map((t) => (
            <g key={t}>
              <line x1={m.left} x2={W - m.right} y1={y(t)} y2={y(t)} stroke="#e5e7eb" strokeWidth={1} />
              <text x={m.left - 8} y={y(t)} dy="0.32em" textAnchor="end" fontSize={12} fill="#6b7280">
                {t}
              </text>
            </g>
          ))}

          {datos.map((d, i) => {
            const total = d.ninos + d.ninas
            const x = barX(i)
            const yNinos = y(d.ninos)
            const hNinos = y(0) - yNinos
            const yTop = y(total)
            const hNinas = yNinos - yTop - GAP
            const dim = (serie: 'ninas' | 'ninos') =>
              hover && !(hover.i === i && hover.serie === serie) ? 0.45 : 1
            return (
              <g key={d.curso}>
                <rect
                  x={x}
                  y={yNinos}
                  width={barW}
                  height={hNinos}
                  fill={COLOR_NINOS}
                  opacity={dim('ninos')}
                  onMouseEnter={() => setHover({ i, serie: 'ninos' })}
                />
                <path
                  d={topRoundedRect(x, yTop, barW, hNinas, 4)}
                  fill={COLOR_NINAS}
                  opacity={dim('ninas')}
                  onMouseEnter={() => setHover({ i, serie: 'ninas' })}
                />
                <text
                  x={x + barW / 2}
                  y={yNinos + hNinos / 2}
                  dy="0.35em"
                  textAnchor="middle"
                  fontSize={14}
                  fontWeight={600}
                  fill="#0b0b0b"
                  pointerEvents="none"
                >
                  {d.ninos}
                </text>
                <text
                  x={x + barW / 2}
                  y={yTop + hNinas / 2}
                  dy="0.35em"
                  textAnchor="middle"
                  fontSize={14}
                  fontWeight={600}
                  fill="#ffffff"
                  pointerEvents="none"
                >
                  {d.ninas}
                </text>
                <text
                  x={x + barW / 2}
                  y={yTop - 10}
                  textAnchor="middle"
                  fontSize={16}
                  fontWeight={700}
                  fill="#111827"
                >
                  {total}
                </text>
                <text
                  x={x + barW / 2}
                  y={H - m.bottom + 22}
                  textAnchor="middle"
                  fontSize={13}
                  fill="#374151"
                >
                  {d.curso}
                </text>
              </g>
            )
          })}
        </svg>

        {hover && hovered && (
          <div
            className="pointer-events-none absolute whitespace-nowrap rounded-md border border-gray-200 bg-white px-3 py-2 text-sm shadow-md"
            style={{
              ...(hover.i === datos.length - 1
                ? { right: `${((W - barX(hover.i) + 8) / W) * 100}%` }
                : { left: `${((barX(hover.i) + barW + 8) / W) * 100}%` }),
              top: '30%',
            }}
          >
            <p className="font-semibold text-gray-900">Curso {hovered.curso}</p>
            <p className="text-gray-700">
              {hover.serie === 'ninas' ? 'Niñas' : 'Niños'}: {hovered[hover.serie]} (
              {fmtPct((hovered[hover.serie] / (hovered.ninos + hovered.ninas)) * 100)})
            </p>
            <p className="text-gray-500">Total: {hovered.ninos + hovered.ninas}</p>
          </div>
        )}
      </div>

      {datos.length > 1 && (
        <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-gray-50 p-3">
            <dt className="text-sm text-gray-600">Crecimiento del alumnado</dt>
            <dd className="text-xl font-semibold text-gray-900">
              +{totalLast - totalFirst} (+{fmtPct(crecimiento)})
            </dd>
          </div>
          <div className="rounded-lg bg-gray-50 p-3">
            <dt className="text-sm text-gray-600">Niñas nuevas</dt>
            <dd className="text-xl font-semibold text-gray-900">
              +{nuevasNinas} de {totalLast - totalFirst}
            </dd>
          </div>
          <div className="rounded-lg bg-gray-50 p-3">
            <dt className="text-sm text-gray-600">Participación de niñas</dt>
            <dd className="text-xl font-semibold text-gray-900">
              {fmtPct((first.ninas / totalFirst) * 100)} → {fmtPct((last.ninas / totalLast) * 100)}
            </dd>
          </div>
        </dl>
      )}

      <details className="mt-4 text-sm text-gray-700">
        <summary className="cursor-pointer text-gray-600">Ver los datos en tabla</summary>
        <table className="mt-2 w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 text-gray-600">
              <th className="py-1 font-medium">Curso</th>
              <th className="py-1 font-medium">Niñas</th>
              <th className="py-1 font-medium">Niños</th>
              <th className="py-1 font-medium">Total</th>
              <th className="py-1 font-medium">% niñas</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((d) => (
              <tr key={d.curso} className="border-b border-gray-100">
                <td className="py-1">{d.curso}</td>
                <td className="py-1">{d.ninas}</td>
                <td className="py-1">{d.ninos}</td>
                <td className="py-1">{d.ninos + d.ninas}</td>
                <td className="py-1">{fmtPct((d.ninas / (d.ninos + d.ninas)) * 100)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  )
}
