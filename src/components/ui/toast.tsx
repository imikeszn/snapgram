"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "tailwing.config.jsfixed tailwing.config.jstop-0 tailwing.config.jsz-[100] tailwing.config.jsflex tailwing.config.jsmax-h-screen tailwing.config.jsw-full tailwing.config.jsflex-col-reverse tailwing.config.jsp-4 sm:tailwing.config.jsbottom-0 sm:tailwing.config.jsright-0 sm:tailwing.config.jstop-auto sm:tailwing.config.jsflex-col md:tailwing.config.jsmax-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "tailwing.config.jsgroup tailwing.config.jspointer-events-auto tailwing.config.jsrelative tailwing.config.jsflex tailwing.config.jsw-full tailwing.config.jsitems-center tailwing.config.jsjustify-between tailwing.config.jsspace-x-4 tailwing.config.jsoverflow-hidden tailwing.config.jsrounded-md tailwing.config.jsborder tailwing.config.jsp-6 tailwing.config.jspr-8 tailwing.config.jsshadow-lg tailwing.config.jstransition-all data-[swipe=cancel]:tailwing.config.jstranslate-x-0 data-[swipe=end]:tailwing.config.jstranslate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:tailwing.config.jstranslate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:tailwing.config.jstransition-none data-[state=open]:tailwing.config.jsanimate-in data-[state=closed]:tailwing.config.jsanimate-out data-[swipe=end]:tailwing.config.jsanimate-out data-[state=closed]:tailwing.config.jsfade-out-80 data-[state=closed]:tailwing.config.jsslide-out-to-right-full data-[state=open]:tailwing.config.jsslide-in-from-top-full data-[state=open]:sm:tailwing.config.jsslide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "tailwing.config.jsborder tailwing.config.jsbg-background tailwing.config.jstext-foreground",
        destructive:
          "tailwing.config.jsdestructive tailwing.config.jsgroup tailwing.config.jsborder-destructive tailwing.config.jsbg-destructive tailwing.config.jstext-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "tailwing.config.jsinline-flex tailwing.config.jsh-8 tailwing.config.jsshrink-0 tailwing.config.jsitems-center tailwing.config.jsjustify-center tailwing.config.jsrounded-md tailwing.config.jsborder tailwing.config.jsbg-transparent tailwing.config.jspx-3 tailwing.config.jstext-sm tailwing.config.jsfont-medium tailwing.config.jsring-offset-background tailwing.config.jstransition-colors hover:tailwing.config.jsbg-secondary focus:tailwing.config.jsoutline-none focus:tailwing.config.jsring-2 focus:tailwing.config.jsring-ring focus:tailwing.config.jsring-offset-2 disabled:tailwing.config.jspointer-events-none disabled:tailwing.config.jsopacity-50 group-[.destructive]:tailwing.config.jsborder-muted/40 group-[.destructive]:hover:tailwing.config.jsborder-destructive/30 group-[.destructive]:hover:tailwing.config.jsbg-destructive group-[.destructive]:hover:tailwing.config.jstext-destructive-foreground group-[.destructive]:focus:tailwing.config.jsring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "tailwing.config.jsabsolute tailwing.config.jsright-2 tailwing.config.jstop-2 tailwing.config.jsrounded-md tailwing.config.jsp-1 tailwing.config.jstext-foreground/50 tailwing.config.jsopacity-0 tailwing.config.jstransition-opacity hover:tailwing.config.jstext-foreground focus:tailwing.config.jsopacity-100 focus:tailwing.config.jsoutline-none focus:tailwing.config.jsring-2 group-hover:tailwing.config.jsopacity-100 group-[.destructive]:tailwing.config.jstext-red-300 group-[.destructive]:hover:tailwing.config.jstext-red-50 group-[.destructive]:focus:tailwing.config.jsring-red-400 group-[.destructive]:focus:tailwing.config.jsring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="tailwing.config.jsh-4 tailwing.config.jsw-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("tailwing.config.jstext-sm tailwing.config.jsfont-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("tailwing.config.jstext-sm tailwing.config.jsopacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
