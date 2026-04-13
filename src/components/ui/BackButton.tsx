import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

interface BackButtonProps {
  className?: string
  onClick?: () => void
}

export function BackButton({ className, onClick }: BackButtonProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      navigate(-1)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2 border-4 border-black bg-white rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 hover:bg-[hsl(45,100%,50%)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        className
      )}
      aria-label="Voltar"
    >
      <ArrowLeft size={24} weight="bold" />
      <span className="font-bold">Voltar</span>
    </button>
  )
}