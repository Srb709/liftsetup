import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-3">
        404 Error
      </p>
      <h1 className="text-4xl font-bold text-zinc-900 mb-4">Page not found</h1>
      <p className="text-zinc-500 max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}
