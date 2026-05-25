const base = import.meta.env.BASE_URL;

function isExternal(path: string): boolean {
  return /^(https?:)?\/\//.test(path) || path.startsWith("data:") || path.startsWith("blob:");
}

export function sitePath(path: string): string {
  if (!path || path.startsWith("#") || isExternal(path)) {
    return path;
  }

  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.replace(/^\/+/, "");

  return `${cleanBase}${cleanPath}`;
}

export function mediaPath(path?: string | null): string {
  if (!path) {
    return "";
  }

  return sitePath(path);
}
