import type { ReactNode } from 'react'

interface NotaProps {
  titulo?: string
  children: ReactNode
}

export function Nota({ titulo = 'Nota', children }: NotaProps) {
  return (
    <aside className="not-prose my-8 rounded-xl border border-primary-200 bg-primary-50 p-5 sm:p-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700">{titulo}</p>
      <div className="text-base leading-relaxed text-gray-700 [&_p]:mb-2 [&_p]:text-base [&_p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  )
}
