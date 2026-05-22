export function formatEventName(
  name: string | null,
  edition: number,
  series: string,
) {
  if (name) {
    return name;
  }

  return edition > 1 ? `${series} ${edition}` : series;
}
