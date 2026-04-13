import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { 
  List, 
  X,
  Calendar,
  CheckSquare,
  Wallet,
  Settings,
  ChevronUp,
  ChevronDown,
  LogOut,
  ArrowLeft
} from "lucide-react"
import { navigationData } from "@/lib/navigation-data"

export function MobileNavigation() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const isActive = (url: string) => {
    return location.pathname === url || location.pathname.startsWith(url + "/")
  }

  const hasSubItems = (item: typeof navigationData[0]) => {
    return item.items && item.items.length > 0
  }

  const toggleExpand = (url: string) => {
    setExpandedItem(expandedItem === url ? null : url)
  }

  const mainItems = navigationData

  const canGoBack = window.history.length > 1
  const isHomePage = location.pathname === "/"

  const getIconComponent = (icon: any) => {
    switch (icon) {
      case Calendar: return Calendar
      case CheckSquare: return CheckSquare
      case Wallet: return Wallet
      case Settings: return Settings
      default: return Calendar
    }
  }

  return (
    <>
      {!isHomePage && (
        <div className="fixed top-4 left-4 z-50 flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 bg-white border-4 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1"
          >
            <List size={28} strokeWidth={3} />
          </button>
          {canGoBack && (
            <button
              onClick={() => navigate(-1)}
              className="p-2 bg-white border-4 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1"
            >
              <ArrowLeft size={28} strokeWidth={3} />
            </button>
          )}
        </div>
      )}

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`fixed top-0 left-0 h-full w-[95%] max-w-xs bg-white border-r-4 border-black z-50 transform transition-transform duration-300 ease-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b-4 border-black">
          <h2 className="text-xl font-black">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 border-2 border-black rounded hover:bg-gray-100"
          >
            <X size={20} strokeWidth={3} />
          </button>
        </div>

        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100%-140px)]">
          {mainItems.map((item) => {
            const active = isActive(item.url)
            const isExpanded = expandedItem === item.url || active
            const hasSub = hasSubItems(item)
            const IconComponent = getIconComponent(item.icon)

            return (
              <div key={item.url}>
                <button
                  onClick={() => {
                    if (hasSub) {
                      toggleExpand(item.url)
                    } else {
                      navigate(item.url)
                    }
                  }}
                  className={`w-full flex items-center justify-between p-3 border-4 rounded-lg transition-all ${
                    active 
                      ? "bg-[#FEBF00] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" 
                      : "bg-white border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent size={24} />
                    <span className="font-bold">{item.title}</span>
                  </div>
                  {hasSub && (
                    isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />
                  )}
                </button>

                {hasSub && isExpanded && (
                  <div className="mt-2 ml-4 space-y-1 border-l-4 border-gray-300 pl-2">
                    {item.items?.map((subItem) => {
                      const subActive = isActive(subItem.url)
                      return (
                        <button
                          key={subItem.url}
                          onClick={() => {
                            navigate(subItem.url)
                          }}
                          className={`w-full text-left p-2 rounded text-sm font-medium ${
                            subActive 
                              ? "text-[#FEBF00] bg-black" 
                              : "hover:bg-gray-100"
                          }`}
                        >
                          {subItem.title}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t-4 border-black">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center justify-center gap-2 p-3 border-4 border-black rounded-lg hover:bg-red-100 text-red-600 font-bold"
          >
            <LogOut size={24} />
            Sair
          </button>
        </div>
      </div>
    </>
  )
}