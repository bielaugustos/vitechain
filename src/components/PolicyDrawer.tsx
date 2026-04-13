import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"

interface PolicyDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  type: "privacy" | "terms" | "lgpd"
}

export function PolicyDrawer({ open, onOpenChange, type }: PolicyDrawerProps) {
  const getContent = () => {
    switch (type) {
      case "privacy":
        return {
          title: "Política de Privacidade",
          content: (
            <div className="space-y-4 text-sm text-gray-700">
              <p>Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.</p>
              <div>
                <h4 className="font-bold">Coleta de Dados</h4>
                <p>Coletamos informações que você fornece diretamente, incluindo nome, email e dados de uso.</p>
              </div>
              <div>
                <h4 className="font-bold">Uso das Informações</h4>
                <p>Utilizamos seus dados para fornecer serviços, melhorar sua experiência e comunicar importantes atualizações.</p>
              </div>
              <div>
                <h4 className="font-bold">Proteção de Dados</h4>
                <p>Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado.</p>
              </div>
            </div>
          ),
        }
      case "terms":
        return {
          title: "Termos de Uso",
          content: (
            <div className="space-y-4 text-sm text-gray-700">
              <p>Ao usar nossos serviços, você concorda com os seguintes termos e condições.</p>
              <div>
                <h4 className="font-bold">Uso do Serviço</h4>
                <p>Você deve usar nossos serviços de acordo com as leis aplicáveis e estes termos.</p>
              </div>
              <div>
                <h4 className="font-bold">Conta e Senha</h4>
                <p>Você é responsável por manter a confidencialidade de sua conta e senha.</p>
              </div>
              <div>
                <h4 className="font-bold">Limitação de Responsabilidade</h4>
                <p>Não somos responsáveis por danos indiretos ou consequências resultantes do uso dos serviços.</p>
              </div>
            </div>
          ),
        }
      case "lgpd":
        return {
          title: "LGPD",
          content: (
            <div className="space-y-4 text-sm text-gray-700">
              <p>Princípios do livre acesso e da transparência (art. 6º, IV e VI): impõem ao agente de tratamento a obrigação de fornecer aos titulares informações claras, precisas e facilmente acessíveis sobre a forma do tratamento, o período de retenção e as finalidades específicas que justificam a coleta de seus dados por meio de cookies.</p>
              <p>Também é importante que sejam fornecidas informações sobre o eventual compartilhamento de dados com terceiros e sobre os direitos assegurados ao titular, entre outros aspectos indicados no art. 9º da LGPD.</p>
            </div>
          ),
        }
    }
  }

  const { title, content } = getContent()

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-4">{content}</div>
      </DrawerContent>
    </Drawer>
  )
}