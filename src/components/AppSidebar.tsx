import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { 
  Calendar, 
  CheckSquare, 
  Wallet, 
  Settings,
  ChevronRight,
  ChevronDown,
  List,
  X
} from "lucide-react"
import { navigationData } from "@/lib/navigation-data"
import { ThemeToggle } from "@/components/ThemeToggle"

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (url: string) => {
    return location.pathname === url || location.pathname.startsWith(url + "/")
  }

  const toggleExpand = (url: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(url)) {
        newSet.delete(url)
      } else {
        newSet.add(url)
      }
      return newSet
    })
  }

  const handleItemClick = (item: typeof navigationData[0]) => {
    if (item.items && item.items.length > 0) {
      toggleExpand(item.url)
    } else {
      navigate(item.url)
    }
  }

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-white border-r-4 border-black shadow-[4px_0px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hidden md:flex flex-col z-50 ${
        isCollapsed ? "w-20" : "w-72"
      }`}
    >
      <div className="p-4 border-b-4 border-black">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 border-2 border-black rounded-lg bg-white hover:bg-[hsl(45,100%,50%)] transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]"
            aria-label={isCollapsed ? "Expandir menu" : "Recolher menu"}
          >
            {isCollapsed ? <List size={20} strokeWidth={3} /> : <X size={20} strokeWidth={3} />}
          </button>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-2">
        {navigationData.map((item) => {
          const Icon = item.icon
          const active = isActive(item.url)
          const isExpanded = expandedItems.has(item.url)

          return (
            <div key={item.url} className="mb-2">
              <button
                onClick={() => handleItemClick(item)}
                className={`w-full flex items-center justify-between p-3 rounded-lg border-2 border-black transition-all ${
                  active 
                    ? "bg-[hsl(45,100%,50%)] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]" 
                    : "bg-white hover:bg-[hsl(45,100%,50%)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={24} strokeWidth={active ? 3 : 2} />
                  {!isCollapsed && <span className="font-bold">{item.title}</span>}
                </div>
                {!isCollapsed && item.items && item.items.length > 0 && (
                  isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />
                )}
              </button>

              {!isCollapsed && isExpanded && item.items && item.items.length > 0 && (
                <div className="ml-4 mt-2 space-y-1">
                  {item.items.map((subItem) => (
                    <button
                      key={subItem.url}
                      onClick={() => navigate(subItem.url)}
                      className={`w-full text-left p-2 rounded-lg border-2 border-black text-sm transition-all ${
                        location.pathname === subItem.url
                          ? "bg-[hsl(45,100%,50%)] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                          : "bg-white hover:bg-[hsl(45,100%,50%)]"
                      }`}
                    >
                      {subItem.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      <div className="p-4 border-t-4 border-black">
        {!isCollapsed ? (
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">Tema</span>
            <ThemeToggle />
          </div>
        ) : (
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        )}
      </div>
    </aside>
  )
}