import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { NeobrutalismButton } from "@/components/ui/neobrutalism-button"
import { NeobrutalismInput } from "@/components/ui/neobrutalism-input"
import { Fingerprint } from "lucide-react"
import { PolicyDrawer } from "@/components/PolicyDrawer"
import { ForgotPasswordDrawer } from "@/components/ForgotPasswordDrawer"

interface LoginFormProps {
  onSignUpClick?: () => void
}

export function LoginForm({ onSignUpClick }: LoginFormProps) {
  const navigate = useNavigate()
  const [policyDrawerOpen, setPolicyDrawerOpen] = useState(false)
  const [policyDrawerType, setPolicyDrawerType] = useState<"privacy" | "terms" | "lgpd">("privacy")
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false)

  const openPolicyDrawer = (type: "privacy" | "terms" | "lgpd") => {
    setPolicyDrawerType(type)
    setPolicyDrawerOpen(true)
  }

  const handleTryFree = () => {
    navigate("/today")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg p-6 border-4 border-black bg-white rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-4 mb-6">
          <div>
            <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Entre na sua conta</h3>
            <p className="text-sm text-gray-600">Digite seu email abaixo para fazer login</p>
          </div>
        </div>
        <form>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium block mb-2">Email</label>
              <NeobrutalismInput 
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div>
              <div className="flex items-center mb-2">
                <label className="text-sm font-medium">Senha</label>
                <button
                  type="button"
                  className="ml-auto inline-block text-sm underline"
                  onClick={() => setForgotPasswordOpen(true)}
                  aria-label="Esqueceu sua senha?"
                >
                  Esqueceu sua senha?
                </button>
              </div>
              <NeobrutalismInput 
                id="password" 
                type="password"
                placeholder="•••••••"
                required 
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <NeobrutalismButton type="submit" className="w-full">
              Entrar
            </NeobrutalismButton>
            <NeobrutalismButton variant="default" type="button" className="w-full">
              Entrar com Google
            </NeobrutalismButton>
            <NeobrutalismButton variant="default" type="button" className="w-full text-xs" onClick={handleTryFree}>Entrar sem conta (Teste Gratuito)</NeobrutalismButton>
          </div>
        </form>
        <div className="mt-5 text-center text-sm">
          Não tem uma conta?{" "}
          <a 
            href="#" 
            className="underline underline-offset-4 cursor-pointer ml-1"
            onClick={(e) => {
              e.preventDefault()
              onSignUpClick?.()
            }}
          >
            Cadastre-se
          </a>
        </div>
      </div>
      <div className="mt-8 w-full max-w-lg p-3 bg-gray-100 rounded-lg border-2 border-gray-300 flex items-center justify-center gap-2">
        <Fingerprint className="w-8 h-8 text-gray-600" />
        <p className="text-sm text-gray-600 text-left ml-2">
          Ao continuar, você concorda com nossa{" "}
          <button onClick={() => openPolicyDrawer("privacy")} className="underline cursor-pointer hover:text-gray-800">
            Política de Privacidade
          </button>
          {" "}e{" "}
          <button onClick={() => openPolicyDrawer("terms")} className="underline cursor-pointer hover:text-gray-800">
            Termos de Uso
          </button>
          . Dados protegidos pela{" "}
          <button onClick={() => openPolicyDrawer("lgpd")} className="underline cursor-pointer hover:text-gray-800">
            LGPD
          </button>
          .
        </p>
      </div>
      <PolicyDrawer open={policyDrawerOpen} onOpenChange={setPolicyDrawerOpen} type={policyDrawerType} />
      <ForgotPasswordDrawer open={forgotPasswordOpen} onOpenChange={setForgotPasswordOpen} />
    </div>
  )
}