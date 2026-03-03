export function formatEventName(name: string, edition: number) {
  return edition > 1 ? `${name} ${edition}` : name;
}
