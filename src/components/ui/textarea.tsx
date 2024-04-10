import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "tailwing.config.jsflex tailwing.config.jsmin-h-[80px] tailwing.config.jsw-full tailwing.config.jsrounded-md tailwing.config.jsborder tailwing.config.jsborder-input tailwing.config.jsbg-background tailwing.config.jspx-3 tailwing.config.jspy-2 tailwing.config.jstext-sm tailwing.config.jsring-offset-background placeholder:tailwing.config.jstext-muted-foreground focus-visible:tailwing.config.jsoutline-none focus-visible:tailwing.config.jsring-2 focus-visible:tailwing.config.jsring-ring focus-visible:tailwing.config.jsring-offset-2 disabled:tailwing.config.jscursor-not-allowed disabled:tailwing.config.jsopacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
