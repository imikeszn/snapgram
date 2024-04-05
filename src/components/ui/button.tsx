import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "tailwing.config.jsinline-flex tailwing.config.jsitems-center tailwing.config.jsjustify-center tailwing.config.jswhitespace-nowrap tailwing.config.jsrounded-md tailwing.config.jstext-sm tailwing.config.jsfont-medium tailwing.config.jsring-offset-background tailwing.config.jstransition-colors focus-visible:tailwing.config.jsoutline-none focus-visible:tailwing.config.jsring-2 focus-visible:tailwing.config.jsring-ring focus-visible:tailwing.config.jsring-offset-2 disabled:tailwing.config.jspointer-events-none disabled:tailwing.config.jsopacity-50",
  {
    variants: {
      variant: {
        default: "tailwing.config.jsbg-primary tailwing.config.jstext-primary-foreground hover:tailwing.config.jsbg-primary/90",
        destructive:
          "tailwing.config.jsbg-destructive tailwing.config.jstext-destructive-foreground hover:tailwing.config.jsbg-destructive/90",
        outline:
          "tailwing.config.jsborder tailwing.config.jsborder-input tailwing.config.jsbg-background hover:tailwing.config.jsbg-accent hover:tailwing.config.jstext-accent-foreground",
        secondary:
          "tailwing.config.jsbg-secondary tailwing.config.jstext-secondary-foreground hover:tailwing.config.jsbg-secondary/80",
        ghost: "hover:tailwing.config.jsbg-accent hover:tailwing.config.jstext-accent-foreground",
        link: "tailwing.config.jstext-primary tailwing.config.jsunderline-offset-4 hover:tailwing.config.jsunderline",
      },
      size: {
        default: "tailwing.config.jsh-10 tailwing.config.jspx-4 tailwing.config.jspy-2",
        sm: "tailwing.config.jsh-9 tailwing.config.jsrounded-md tailwing.config.jspx-3",
        lg: "tailwing.config.jsh-11 tailwing.config.jsrounded-md tailwing.config.jspx-8",
        icon: "tailwing.config.jsh-10 tailwing.config.jsw-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
