import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

const neobrutalismButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg border-4 border-black text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:bg-[hsl(45,100%,50%)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        primary: "bg-[#FEBF00] text-black hover:bg-[#eab308] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        secondary: "bg-purple-500 text-white hover:bg-purple-600 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        danger: "bg-red-500 text-white hover:bg-red-600 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        success: "bg-green-500 text-white hover:bg-green-600 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const neobrutalismButtonDarkVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg border-4 border-hsl(48,96%,89%) text-sm shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] transition-all active:shadow-[0px_0px_0px_0px_rgba(255,255,255,0.3)] active:translate-x-1 active:translate-y-1 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-hsl(60,2%,12%) text-hsl(48,96%,89%) hover:bg-hsl(45,100%,50%) hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)] active:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]",
        primary: "bg-[#FEBF00] text-black hover:bg-[#eab308] hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)] active:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]",
        secondary: "bg-purple-500 text-white hover:bg-purple-600 hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)] active:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]",
        danger: "bg-red-500 text-white hover:bg-red-600 hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)] active:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]",
        success: "bg-green-500 text-white hover:bg-green-600 hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)] active:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface NeobrutalismButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neobrutalismButtonVariants> {
  asChild?: boolean
  isDark?: boolean
}

const NeobrutalismButton = React.forwardRef<HTMLButtonElement, NeobrutalismButtonProps>(
  ({ className, variant, size, asChild = false, isDark = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(isDark ? neobrutalismButtonDarkVariants({ variant, size, className }) : neobrutalismButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
NeobrutalismButton.displayName = "NeobrutalismButton"

export { NeobrutalismButton, neobrutalismButtonVariants }