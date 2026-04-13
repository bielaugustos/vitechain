import { Button } from "../components/ui/button"

export default function Buttons() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Button Components Test</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Sizes</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="default">Default</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">Icon</Button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">asChild Test</h2>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <span>Custom Child (inherits props)</span>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}