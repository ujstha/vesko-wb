import React, { useState, useEffect, useRef } from "react";

import type { ImageProps } from "./image.types";
import { generateImageUrl, generateSrcSet, getDefaultSizes } from "./image.utils";

import { cn } from "@/shared/utils/cn";

const DEFAULT_ALT = "Image content could not be loaded";
const DEFAULT_FALLBACK_ALT = "No image description provided";

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  objectFit = "cover",
  placeholder = "empty",
  blurDataURL,
  sizes = getDefaultSizes(),
  onLoad,
  onError,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(!priority);
  const [error, setError] = useState<Error | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const processedAlt = alt?.trim() || DEFAULT_FALLBACK_ALT;
  const optimizedSrc = src.includes("?") ? src : generateImageUrl(src, width);

  useEffect(() => {
    if (priority && imageRef.current?.complete) {
      setIsLoading(false);
    }
  }, [priority]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    const error = new Error("Image failed to load");
    setError(error);
    setIsLoading(false);
    onError?.(error);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        isLoading && "animate-pulse bg-neutral-200",
        className
      )}
      style={{
        width,
        height,
        aspectRatio: width && height ? `${width}/${height}` : undefined,
      }}
    >
      {isLoading && placeholder === "blur" && blurDataURL && (
        <img
          src={blurDataURL}
          alt=''
          className={cn(
            "absolute inset-0 h-full w-full text-xs",
            "pointer-events-none select-none"
          )}
          style={{ objectFit }}
          aria-hidden='true'
        />
      )}

      <picture>
        <source type='image/webp' srcSet={generateSrcSet(src)} sizes={sizes} />
        <img
          ref={imageRef}
          src={optimizedSrc}
          alt={error ? DEFAULT_ALT : processedAlt}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "h-full w-full transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100",
            error && "hidden"
          )}
          style={{ objectFit }}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          {...props}
        />
      </picture>

      {error && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            "bg-neutral-100 text-sm"
          )}
          role='alert'
        >
          <span className='px-4 text-center text-red-500'>
            Failed to load image: {processedAlt}
          </span>
        </div>
      )}
    </div>
  );
};
