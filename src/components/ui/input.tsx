import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "tailwing.config.jsflex tailwing.config.jsh-10 tailwing.config.jsw-full tailwing.config.jsrounded-md tailwing.config.jsborder tailwing.config.jsborder-input tailwing.config.jsbg-background tailwing.config.jspx-3 tailwing.config.jspy-2 tailwing.config.jstext-sm tailwing.config.jsring-offset-background file:tailwing.config.jsborder-0 file:tailwing.config.jsbg-transparent file:tailwing.config.jstext-sm file:tailwing.config.jsfont-medium placeholder:tailwing.config.jstext-muted-foreground focus-visible:tailwing.config.jsoutline-none focus-visible:tailwing.config.jsring-2 focus-visible:tailwing.config.jsring-ring focus-visible:tailwing.config.jsring-offset-2 disabled:tailwing.config.jscursor-not-allowed disabled:tailwing.config.jsopacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
