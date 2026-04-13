import { useState } from "react"
import { ReactNode } from "react"
import { AppSidebar } from "./AppSidebar"
import { MobileNavigation } from "./MobileNavigation"

interface ResponsiveLayoutProps {
  children: ReactNode
}

export function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen">
      <MobileNavigation />
      
      <div className="hidden md:block">
        <AppSidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      </div>
      
      <main className={`transition-all duration-300 ${sidebarOpen ? 'md:ml-72' : 'md:ml-20'}`}>
        <div className="p-4 pb-20 md:pb-4 md:pt-4">
          {children}
        </div>
      </main>
    </div>
  )
}