import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const neobrutalismCardStaticVariants = cva(
  "border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-lg",
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

export interface NeobrutalismCardStaticProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof neobrutalismCardStaticVariants> {}

const NeobrutalismCardStatic = React.forwardRef<HTMLDivElement, NeobrutalismCardStaticProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(neobrutalismCardStaticVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
NeobrutalismCardStatic.displayName = "NeobrutalismCardStatic"

export { NeobrutalismCardStatic, neobrutalismCardStaticVariants }