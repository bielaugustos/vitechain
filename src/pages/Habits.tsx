import { ResponsiveLayout } from "@/components/ResponsiveLayout"
import { BackButton } from "@/components/ui/BackButton"

export default function Habits() {
  return (
    <ResponsiveLayout>
      <div className="min-h-screen bg-[hsl(48,96%,89%)]">
        <div className="p-4">
          <BackButton />
        </div>
      </div>
    </ResponsiveLayout>
  )
}
