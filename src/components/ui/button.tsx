import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-full px-4 py-1",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        action: "h-7 px-4 py-1 text-xs justify-end",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  download?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, download, href, asChild = false, ...props },
    ref,
  ) => {
    type CompType = React.ForwardRefExoticComponent<
      ButtonProps & React.RefAttributes<HTMLElement>
    >;
    let Comp = "button" as unknown as CompType;
    if (href) {
      Comp = Link as CompType;
      if (download) {
        Comp = "a" as unknown as CompType;
      }
    }
    if (asChild) {
      Comp = Slot as CompType;
    }
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        href={href}
        download={download}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
