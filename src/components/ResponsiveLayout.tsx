import { ReactNode } from "react"
import { AppSidebar } from "./AppSidebar"
import { MobileNavigation } from "./MobileNavigation"

interface ResponsiveLayoutProps {
  children?: ReactNode
}

export function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  return (
    <div className="min-h-screen">
      <MobileNavigation />
      
      <div className="hidden md:block">
        <AppSidebar />
      </div>
      
      <main className="md:ml-72 transition-all duration-300">
        <div className="p-4 pb-20 md:pb-4 md:pt-4">
          {children}
        </div>
      </main>
    </div>
  )
}