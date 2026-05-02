// Utility to concatenate class names conditionally
type ClassValue = string | number | boolean | null | undefined | ClassValue[] | { [key: string]: boolean };

export function cn(...args: ClassValue[]): string {
  const classes: string[] = [];
  args.forEach(arg => {
    if (!arg) return;
    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      classes.push(cn(...arg));
    } else if (typeof arg === 'object') {
      for (const key in arg) {
        if (arg[key]) classes.push(key);
      }
    }
  });
  return classes.join(' ');
}
