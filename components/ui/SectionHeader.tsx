interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({ label, title, description, align = 'center' }: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <div className={isCenter ? 'text-center' : 'text-left'}>
      {label && <span className="chip">{label}</span>}
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-zinc-950 sm:text-4xl">{title}</h2>
      {description && (
        <p className={`mt-4 text-base leading-8 text-zinc-600 ${isCenter ? 'mx-auto max-w-2xl' : 'max-w-3xl'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
