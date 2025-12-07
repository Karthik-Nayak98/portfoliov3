export function formatDate(date: string | number | Date): string {
  const dateObj = typeof date === 'string' || typeof date === 'number'
    ? new Date(date)
    : date;

  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export function parseDate(date: string): Date {
  return new Date(date);
}

export function getDateValue(date: string | number): number {
  return typeof date === 'string' ? new Date(date).valueOf() : date;
}
