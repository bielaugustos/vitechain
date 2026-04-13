import { NeobrutalismButton } from "@/components/ui/neobrutalism-button"
import { NeobrutalismCard } from "@/components/ui/neobrutalism-card"
import { NeobrutalismInput } from "@/components/ui/neobrutalism-input"
import { ThemeToggle } from "@/components/ThemeToggle"
import { useTheme } from "@/hooks/useTheme"

export default function Neobrutalism() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  
  const colors = theme === "dark" ? {
    bg: "hsl(60, 2%, 12%)",
    text: "hsl(48, 96%, 89%)",
    border: "hsl(48, 96%, 89%)",
    cardBg: "hsl(60, 2%, 12%)",
  } : {
    bg: "hsl(48, 96%, 89%)",
    text: "black",
    border: "black",
    cardBg: "white",
  }

  return (
    <div 
      className="min-h-screen py-10 px-4"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-2 pb-4 border-b-4" style={{ borderColor: colors.border }}>
          <h1 className="text-4xl font-black" style={{ color: colors.text }}>
            Neobrutalism UI Components
          </h1>
          <ThemeToggle />
        </div>
        <p className="text-lg mb-10 opacity-70" style={{ color: colors.text }}>
          Bold, brutal, and beautiful design system with rounded corners
        </p>

        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-l-4 pl-4 rounded-lg" style={{ borderColor: colors.border, color: colors.text }}>
            Buttons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NeobrutalismCard isDark={isDark}>
              <h3 className="font-bold mb-4" style={{ color: colors.text }}>Default</h3>
              <div className="flex flex-wrap gap-3">
                <NeobrutalismButton isDark={isDark}>Default</NeobrutalismButton>
                <NeobrutalismButton size="sm" isDark={isDark}>Small</NeobrutalismButton>
                <NeobrutalismButton size="lg" isDark={isDark}>Large</NeobrutalismButton>
              </div>
            </NeobrutalismCard>

            <NeobrutalismCard isDark={isDark}>
              <h3 className="font-bold mb-4" style={{ color: colors.text }}>Primary</h3>
              <div className="flex flex-wrap gap-3">
                <NeobrutalismButton variant="primary" isDark={isDark}>Primary</NeobrutalismButton>
                <NeobrutalismButton variant="primary" size="sm" isDark={isDark}>Small</NeobrutalismButton>
                <NeobrutalismButton variant="primary" size="lg" isDark={isDark}>Large</NeobrutalismButton>
              </div>
            </NeobrutalismCard>

            <NeobrutalismCard isDark={isDark}>
              <h3 className="font-bold mb-4" style={{ color: colors.text }}>Secondary</h3>
              <div className="flex flex-wrap gap-3">
                <NeobrutalismButton variant="secondary" isDark={isDark}>Secondary</NeobrutalismButton>
                <NeobrutalismButton variant="secondary" size="sm" isDark={isDark}>Small</NeobrutalismButton>
                <NeobrutalismButton variant="secondary" size="lg" isDark={isDark}>Large</NeobrutalismButton>
              </div>
            </NeobrutalismCard>

            <NeobrutalismCard isDark={isDark}>
              <h3 className="font-bold mb-4" style={{ color: colors.text }}>Danger</h3>
              <div className="flex flex-wrap gap-3">
                <NeobrutalismButton variant="danger" isDark={isDark}>Danger</NeobrutalismButton>
                <NeobrutalismButton variant="danger" size="sm" isDark={isDark}>Small</NeobrutalismButton>
                <NeobrutalismButton variant="danger" size="lg" isDark={isDark}>Large</NeobrutalismButton>
              </div>
            </NeobrutalismCard>

            <NeobrutalismCard isDark={isDark}>
              <h3 className="font-bold mb-4" style={{ color: colors.text }}>Success</h3>
              <div className="flex flex-wrap gap-3">
                <NeobrutalismButton variant="success" isDark={isDark}>Success</NeobrutalismButton>
                <NeobrutalismButton variant="success" size="sm" isDark={isDark}>Small</NeobrutalismButton>
                <NeobrutalismButton variant="success" size="lg" isDark={isDark}>Large</NeobrutalismButton>
              </div>
            </NeobrutalismCard>

            <NeobrutalismCard isDark={isDark}>
              <h3 className="font-bold mb-4" style={{ color: colors.text }}>Default</h3>
              <div className="flex flex-wrap gap-3">
                <NeobrutalismButton isDark={isDark}>Default</NeobrutalismButton>
                <NeobrutalismButton size="sm" isDark={isDark}>Small</NeobrutalismButton>
                <NeobrutalismButton size="lg" isDark={isDark}>Large</NeobrutalismButton>
              </div>
            </NeobrutalismCard>
          </div>
        </section>

        {/* Inputs Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-l-4 pl-4 rounded-lg" style={{ borderColor: colors.border, color: colors.text }}>
            Inputs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NeobrutalismCard isDark={isDark}>
              <h3 className="font-bold mb-4" style={{ color: colors.text }}>Default Input</h3>
              <NeobrutalismInput placeholder="Digite algo..." isDark={isDark} />
            </NeobrutalismCard>

            <NeobrutalismCard isDark={isDark}>
              <h3 className="font-bold mb-4" style={{ color: colors.text }}>Variants</h3>
              <div className="flex flex-col gap-4">
                <NeobrutalismInput variant="yellow" placeholder="Yellow variant" isDark={isDark} />
                <NeobrutalismInput variant="blue" placeholder="Blue variant" isDark={isDark} />
                <NeobrutalismInput variant="green" placeholder="Green variant" isDark={isDark} />
                <NeobrutalismInput variant="red" placeholder="Red variant" isDark={isDark} />
              </div>
            </NeobrutalismCard>

            <NeobrutalismCard isDark={isDark}>
              <h3 className="font-bold mb-4" style={{ color: colors.text }}>Sizes</h3>
              <div className="flex flex-col gap-4">
                <NeobrutalismInput inputSize="sm" placeholder="Small" isDark={isDark} />
                <NeobrutalismInput placeholder="Default" isDark={isDark} />
                <NeobrutalismInput inputSize="lg" placeholder="Large" isDark={isDark} />
              </div>
            </NeobrutalismCard>

            <NeobrutalismCard isDark={isDark}>
              <h3 className="font-bold mb-4" style={{ color: colors.text }}>With Label</h3>
              <div>
                <label className="text-sm font-bold block mb-2" style={{ color: colors.text }}>Nome</label>
                <NeobrutalismInput placeholder="Seu nome" isDark={isDark} />
              </div>
            </NeobrutalismCard>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-l-4 pl-4 rounded-lg" style={{ borderColor: colors.border, color: colors.text }}>
            Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NeobrutalismCard isDark={isDark}>
              <h3 className="font-bold mb-2" style={{ color: colors.text }}>Default Card</h3>
              <p className="text-sm opacity-70" style={{ color: colors.text }}>
                Um card padrão com borda e sombra neobrutalista.
              </p>
            </NeobrutalismCard>

            <NeobrutalismCard variant="yellow" isDark={isDark}>
              <h3 className="font-bold mb-2" style={{ color: colors.text }}>Yellow Card</h3>
              <p className="text-sm opacity-70" style={{ color: colors.text }}>
                Card com variante amarela para destaque.
              </p>
            </NeobrutalismCard>

            <NeobrutalismCard variant="blue" isDark={isDark}>
              <h3 className="font-bold mb-2" style={{ color: colors.text }}>Blue Card</h3>
              <p className="text-sm opacity-70" style={{ color: colors.text }}>
                Card com variante azul para informações.
              </p>
            </NeobrutalismCard>

            <NeobrutalismCard variant="green" isDark={isDark}>
              <h3 className="font-bold mb-2" style={{ color: colors.text }}>Green Card</h3>
              <p className="text-sm opacity-70" style={{ color: colors.text }}>
                Card com variante verde para sucesso.
              </p>
            </NeobrutalismCard>

            <NeobrutalismCard variant="red" isDark={isDark}>
              <h3 className="font-bold mb-2" style={{ color: colors.text }}>Red Card</h3>
              <p className="text-sm opacity-70" style={{ color: colors.text }}>
                Card com variante vermelha para atenção.
              </p>
            </NeobrutalismCard>

            <NeobrutalismCard variant="purple" isDark={isDark}>
              <h3 className="font-bold mb-2" style={{ color: colors.text }}>Purple Card</h3>
              <p className="text-sm opacity-70" style={{ color: colors.text }}>
                Card com variante roxa para另一种风格.
              </p>
            </NeobrutalismCard>
          </div>
        </section>
      </div>
    </div>
  )
}