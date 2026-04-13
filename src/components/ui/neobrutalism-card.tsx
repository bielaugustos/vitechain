import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const neobrutalismCardVariants = cva(
  "border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-lg transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1",
  {
    variants: {
      variant: {
        default: "bg-white",
        yellow: "bg-yellow-200",
        blue: "bg-blue-100",
        green: "bg-green-100",
        red: "bg-red-100",
        purple: "bg-purple-100",
        pink: "bg-pink-100",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const neobrutalismCardDarkVariants = cva(
  "border-4 border-hsl(48,96%,89%) bg-hsl(60,2%,12%) p-6 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] rounded-lg transition-all hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.4)] hover:-translate-x-1 hover:-translate-y-1",
  {
    variants: {
      variant: {
        default: "bg-hsl(60,2%,12%)",
        yellow: "bg-yellow-900",
        blue: "bg-blue-900",
        green: "bg-green-900",
        red: "bg-red-900",
        purple: "bg-purple-900",
        pink: "bg-pink-900",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface NeobrutalismCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof neobrutalismCardVariants> {
  isDark?: boolean
}

const NeobrutalismCard = React.forwardRef<HTMLDivElement, NeobrutalismCardProps>(
  ({ className, variant, size, isDark = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(isDark ? neobrutalismCardDarkVariants({ variant, size, className }) : neobrutalismCardVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
NeobrutalismCard.displayName = "NeobrutalismCard"

export { NeobrutalismCard, neobrutalismCardVariants }