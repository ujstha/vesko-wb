import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "@/shared/utils/cn";

const textVariants = cva("transition-smooth !leading-", {
  variants: {
    variant: {
      heading: "text-4xl lg:text-5xl font-bold",
      subheading: "text-2xl md:text-3xl lg:text-3xl font-semibold",
      title: "text-lg md:text-xl lg:text-2xl font-semibold",
      subtitle: "text-base font-semibold",
      body: "text-sm lg:text-base font-normal",
      caption: "text-sm font-normal",
      label: "text-xs font-medium",
      tiny: "text-xxs font-normal",
    },
    color: {
      primary: "text-default-black",
      primaryLight: "text-default-white",
      secondary: "text-neutral-500",
      accent: "text-accent-600",
      danger: "text-red-600",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    truncate: {
      true: "truncate",
      false: "",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "body",
    color: "primary",
    truncate: false,
  },
});

interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof textVariants> {
  as?: React.ElementType;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  as: Slot = "p",
  variant,
  color,
  align,
  truncate,
  weight,
  className,
  ...props
}) => {
  return (
    <Slot
      className={cn(textVariants({ variant, color, align, truncate, weight }), className)}
      {...props}
    />
  );
};

export { Text };
