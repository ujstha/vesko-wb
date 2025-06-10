const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const generateImageUrl = (src: string, width?: number): string => {
  try {
    const url = new URL(src, import.meta.url);
    if (width) {
      url.searchParams.set("w", width.toString());
    }
    return url.href;
  } catch {
    return src;
  }
};

export const generateSrcSet = (src: string): string => {
  return Object.values(BREAKPOINTS)
    .map((width) => `${generateImageUrl(src, width)} ${width}w`)
    .join(", ");
};

export const getDefaultSizes = (): string => {
  return Object.entries(BREAKPOINTS)
    .map(([breakpoint, width]) => {
      if (breakpoint === "2xl") return `${width}px`;
      return `(max-width: ${width}px) ${width}px`;
    })
    .join(", ");
};
