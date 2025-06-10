import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/utils/cn";

const spinnerVariants = cva(
  [
    "relative",
    "before:absolute before:inset-0 before:rounded-full  before:animate-spin before:border-white",
    "after:absolute after:inset-0 after:rounded-full after:border-2 after:animate-spin after:border-white",
  ],
  {
    variants: {
      size: {
        xs: "size-4 before:border-[1px] after:border-[1px]",
        sm: "size-6 before:border-[1px] after:border-[1px]",
        md: "size-8 before:border-2 after:border-2",
        lg: "size-12 before:border-3 after:border-3",
        xl: "size-16 before:border-4 after:border-4",
      },
      variant: {
        primary: "before:border-t-accent-600 after:border-t-accent-600",
        secondary: "before:border-t-neutral-600 after:border-t-neutral-600",
        white: "before:border-t-white after:border-t-white",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  }
);

type LoadingSpinnerProps = VariantProps<typeof spinnerVariants> & {
  className?: string;
  fullScreen?: boolean;
  text?: string;
};

const LoadingSpinner = ({
  size,
  variant,
  className,
  fullScreen = false,
  text,
}: LoadingSpinnerProps) => {
  const spinnerClasses = cn(spinnerVariants({ size, variant }), className);

  const content = (
    <div className='flex flex-col items-center justify-center gap-2'>
      <div className={spinnerClasses} />
      {text && <p className='text-sm text-neutral-600'>{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className='bg-default-white/80 fixed inset-0 z-50 flex items-center justify-center'>
        {content}
      </div>
    );
  }

  return content;
};

LoadingSpinner.displayName = "LoadingSpinner";

export { LoadingSpinner };
