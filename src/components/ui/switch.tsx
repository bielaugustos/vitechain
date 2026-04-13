import * as SwitchPrimitive from "@radix-ui/react-switch"
import * as React from "react"
import { cn } from "@/lib/utils"

interface SwitchProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  isDark?: boolean
}

function Switch({ className, isDark, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-black transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        isDark 
          ? "bg-[hsl(60,2%,12%)] data-[state=checked]:bg-yellow-400" 
          : "bg-white data-[state=checked]:bg-[hsl(45,100%,50%)]",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block h-4 w-4 rounded-full border-2 border-black bg-white ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5",
          isDark && "data-[state=checked]:bg-black data-[state=checked]:border-yellow-400"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }