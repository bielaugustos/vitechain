import { LucideIcon } from "lucide-react"
import { 
  Calendar, 
  CheckSquare, 
  Wallet, 
  Settings 
} from "lucide-react"

export interface NavItem {
  title: string
  url: string
  icon: LucideIcon
  items?: NavSubItem[]
  isFooter?: boolean
}

export interface NavSubItem {
  title: string
  url: string
  isLogout?: boolean
}

export const navigationData: NavItem[] = [
  {
    title: "Hoje",
    url: "/today",
    icon: Calendar,
    items: [
      { title: "Dashboard", url: "/today/dashboard" },
      { title: "Atividades do dia", url: "/today/activities" },
      { title: "Notificações", url: "/today/notifications" },
    ],
  },
  {
    title: "Rotina",
    url: "/habits",
    icon: CheckSquare,
    items: [
      { title: "Criar hábito", url: "/habits/create" },
      { title: "Listar hábitos", url: "/habits/list" },
      { title: "Histórico", url: "/habits/history" },
      { title: "Estatísticas", url: "/habits/stats" },
    ],
  },
  {
    title: "Carteira",
    url: "/finances",
    icon: Wallet,
    items: [
      { title: "Adicionar transação", url: "/finances/add" },
      { title: "Extrato", url: "/finances/statement" },
      { title: "Metas", url: "/finances/goals" },
      { title: "Relatórios", url: "/finances/reports" },
    ],
  },
  {
    title: "Ajustes",
    url: "/settings",
    icon: Settings,
    items: [
      { title: "Perfil", url: "/settings/profile" },
      { title: "Preferências", url: "/settings/preferences" },
      { title: "Tema", url: "/settings/theme" },
      { title: "Privacidade", url: "/settings/privacy" },
      { title: "Sobre", url: "/settings/about" },
      { title: "Sair", url: "/", isLogout: true },
    ],
  },
]
