import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto py-40">
      <h1 className="text-3xl font-bold mb-4">Hoje</h1>
      <p className="text-lg text-muted-foreground">
        O inicio de algo...
      </p>

      <Button className="mt-6 mr-4">
        Explore as Funcionalidades
      </Button>
      <Button variant="destructive" className="mt-6">
        Explore as Funcionalidades
      </Button>
      <Button variant="outline" className="mt-6">
        Explore as Funcionalidades
      </Button>
      <Button variant="secondary" className="mt-6">
        Explore as Funcionalidades
      </Button>
      <Button variant="ghost" className="mt-6">
        Explore as Funcionalidades
      </Button>
      <Button variant="link" className="mt-6">
        Explore as Funcionalidades
      </Button>
      <Button variant="default" className="mt-6">
        Explore as Funcionalidades
      </Button>

    <Accordion type="single" collapsible className="mt-10">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
          This is not a joke, if you read this im not a robot - and im never gonna be one.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      
    </div>
  )
}

