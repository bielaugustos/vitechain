import { useLocation, useNavigate } from "react-router-dom"
import { navigationData } from "@/lib/navigation-data"

export function BottomNavigation() {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (url: string) => {
    return location.pathname === url || location.pathname.startsWith(url + "/")
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-black shadow-[0_-4px_0px_0px_rgba(0,0,0,1)] md:hidden">
      <div className="flex justify-around items-center h-16">
        {navigationData.map((item) => {
          const Icon = item.icon
          const active = isActive(item.url)

          return (
            <button
              key={item.url}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all ${
                active 
                  ? "bg-[#FEBF00]" 
                  : "hover:bg-gray-100"
              }`}
              onClick={() => navigate(item.url)}
            >
              <Icon 
                size={28} 
                strokeWidth={active ? 3 : 2}
                className="mb-1"
              />
              <span className="text-xs font-bold">{item.title}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}