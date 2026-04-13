import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Eye, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"

const neobrutalismInputVariants = cva(
  "flex h-12 w-full rounded-lg border-4 border-hsl(48,96%,89%) bg-white px-4 text-base transition-all focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
  {
    variants: {
      variant: {
        default: "bg-white",
        yellow: "bg-yellow-100",
        blue: "bg-blue-100",
        green: "bg-green-100",
        red: "bg-red-100",
      },
      inputSize: {
        default: "h-12 px-4 text-base",
        sm: "h-9 px-3 text-base",
        lg: "h-14 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
)

const neobrutalismInputDarkVariants = cva(
  "flex h-12 w-full rounded-lg border-4 border-black bg-hsl(60,2%,12%) px-4 text-base text-hsl(48,96%,89%) transition-all focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-hsl(48,96%,89%)/50 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]",
  {
    variants: {
      variant: {
        default: "bg-hsl(60,2%,12%)",
        yellow: "bg-yellow-900",
        blue: "bg-blue-900",
        green: "bg-green-900",
        red: "bg-red-900",
      },
      inputSize: {
        default: "h-12 px-4 text-base",
        sm: "h-9 px-3 text-base",
        lg: "h-14 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
)

export interface NeobrutalismInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof neobrutalismInputVariants> {
  isDark?: boolean
}

const NeobrutalismInput = React.forwardRef<HTMLInputElement, NeobrutalismInputProps>(
  ({ className, variant, inputSize, isDark = false, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const isPassword = type === "password"

    return (
      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          className={cn(
            isDark ? neobrutalismInputDarkVariants({ variant, inputSize, className }) : neobrutalismInputVariants({ variant, inputSize, className }),
            isPassword && "pr-10"
          )}
          ref={ref}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            className={`absolute right-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-hsl(48,96%,89%)' : 'text-gray-500'} hover:${isDark ? 'text-hsl(45,100%,50%)' : 'text-gray-700'}`}
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    )
  }
)
NeobrutalismInput.displayName = "NeobrutalismInput"

export { NeobrutalismInput, neobrutalismInputVariants }