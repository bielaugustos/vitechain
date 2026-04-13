import { useNavigate } from "react-router-dom"
import { BackButton } from "@/components/ui/BackButton"
import { NeobrutalismButton } from "@/components/ui/neobrutalism-button"
import { LogOut } from "lucide-react"

export default function Settings() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-[hsl(48,96%,89%)]">
      <div className="p-4">
        <BackButton />
      </div>
      
      <div className="p-4 pt-0">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Ajustes</h1>
          
          <div className="space-y-4">
            <div className="p-6 border-4 border-black bg-white rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-xl font-bold mb-4">Conta</h2>
              <p className="text-gray-600 mb-4">Gerencie suas configurações de conta</p>
              
              <NeobrutalismButton
                onClick={handleLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white"
              >
                <LogOut className="mr-2 h-5 w-5" />
                Sair da Conta
              </NeobrutalismButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
