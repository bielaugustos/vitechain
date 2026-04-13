import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { NeobrutalismButton } from "@/components/ui/neobrutalism-button"
import { NeobrutalismInput } from "@/components/ui/neobrutalism-input"

interface ForgotPasswordDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ForgotPasswordDrawer({ open, onOpenChange }: ForgotPasswordDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Esqueceu sua senha?</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-4">
          <p className="text-sm text-gray-600 mb-4">
            Digite seu email para receber o link de recuperação de senha.
          </p>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium block mb-2">Email</label>
              <NeobrutalismInput type="email" placeholder="seu@email.com" />
            </div>
            <NeobrutalismButton className="w-full">
              Enviar link de recuperação
            </NeobrutalismButton>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}