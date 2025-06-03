export default function customImageLoader({ src, width, quality }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${basePath}${src}?w=${width}&q=${quality || 75}`
} 