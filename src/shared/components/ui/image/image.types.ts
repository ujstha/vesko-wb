import type { ImgHTMLAttributes, SyntheticEvent } from "react";

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "onError"> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  sizes?: string;
  onLoad?: () => void;
  onError?: (error: Error | SyntheticEvent<HTMLImageElement, Event>) => void;
}
