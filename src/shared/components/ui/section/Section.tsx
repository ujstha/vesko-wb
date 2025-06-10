import { forwardRef, type HTMLProps } from "react";

import { cn } from "@/shared/utils/cn";

interface SectionProps extends HTMLProps<HTMLDivElement> {
  className?: string;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn("relative w-full px-4 py-3 sm:px-6 sm:py-5 lg:px-8 lg:py-7", className)}
      {...props}
    />
  );
});

Section.displayName = "Section";

export { Section };
