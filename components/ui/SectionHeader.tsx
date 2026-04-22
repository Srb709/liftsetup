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
      {label && (
        <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest">{label}</span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">{title}</h2>
      {description && (
        <p className={`mt-3 text-slate-500 text-base leading-relaxed ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
