import { useState } from "react"
import { NeobrutalismButton } from "@/components/ui/neobrutalism-button"
import { NeobrutalismInput } from "@/components/ui/neobrutalism-input"
import { Fingerprint } from "lucide-react"
import { PolicyDrawer } from "@/components/PolicyDrawer"

interface SignUpProps {
  onLoginClick?: () => void
}

export default function SignUp({ onLoginClick }: SignUpProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerType, setDrawerType] = useState<"privacy" | "terms" | "lgpd">("privacy")

  const openDrawer = (type: "privacy" | "terms" | "lgpd") => {
    setDrawerType(type)
    setDrawerOpen(true)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg p-6 border-4 border-black bg-white rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-4 mb-6">
          <div>
            <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Crie sua Conta</h3>
            <p className="text-sm text-gray-600">
              Preencha seus dados para se registrar
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium block mb-2">Nome</label>
            <NeobrutalismInput type="text" placeholder="Seu nome" />
          </div>
          <div>
            <label className="text-sm font-medium block mb-2">Email</label>
            <NeobrutalismInput type="email" placeholder="seu@email.com" />
          </div>
          <div>
            <label className="text-sm font-medium block mb-2">Senha</label>
            <NeobrutalismInput type="password" placeholder="•••••••" />
          </div>
          <div>
            <label className="text-sm font-medium block mb-2">
              Confirme a senha
            </label>
            <NeobrutalismInput type="password" placeholder="•••••••" />
          </div>
          <div className="flex flex-col gap-5 mt-2">
            <NeobrutalismButton type="submit" className="w-full">
              Cadastrar
            </NeobrutalismButton>
            <NeobrutalismButton
              variant="default"
              type="button"
              className="w-full"
            >
              Cadastrar com Google
            </NeobrutalismButton>
          </div>
        </form>
        <div className="mt-5 text-center text-sm">
            Já tem uma conta?{" "}
            <a
              href="#"
              className="underline cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                onLoginClick?.();
              }}
            >
              Entrar
            </a>
          </div>
      </div>
      <div className="mt-8 w-full max-w-lg p-3 bg-gray-100 rounded-lg border-2 border-gray-300 flex items-center justify-center gap-2">
        <Fingerprint className="w-8 h-8 text-gray-600" />
        <p className="text-sm text-gray-600 text-left ml-2">
          Ao continuar, você concorda com nossa{" "}
          <button onClick={() => openDrawer("privacy")} className="underline cursor-pointer hover:text-gray-800">
            Política de Privacidade
          </button>
          {" "}e{" "}
          <button onClick={() => openDrawer("terms")} className="underline cursor-pointer hover:text-gray-800">
            Termos de Uso
          </button>
          . Dados protegidos pela{" "}
          <button onClick={() => openDrawer("lgpd")} className="underline cursor-pointer hover:text-gray-800">
            LGPD
          </button>
          .
        </p>
      </div>
      <PolicyDrawer open={drawerOpen} onOpenChange={setDrawerOpen} type={drawerType} />
    </div>
  );
}
