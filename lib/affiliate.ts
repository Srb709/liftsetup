// Amazon affiliate tag — set NEXT_PUBLIC_AMAZON_TAG in your environment to override.
const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_TAG ?? 'liftsetup-20'

/**
 * Appends (or replaces) the Amazon affiliate tag on any amazon.com URL.
 * Non-Amazon URLs are returned unchanged.
 */
export function withAffiliateTag(url: string): string {
  if (!url.includes('amazon.com')) return url
  try {
    const parsed = new URL(url)
    parsed.searchParams.set('tag', AMAZON_TAG)
    return parsed.toString()
  } catch {
    return url
  }
}
