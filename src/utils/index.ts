export function maybeEllipsize(str: string, cutoff: number) {
  if (str.length < cutoff) return str

  return str.substring(0, cutoff) + '...'
}
