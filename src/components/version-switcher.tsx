import * as React from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function VersionSwitcher({
  versions,
  defaultVersion,
}: {
  versions: string[]
  defaultVersion: string
}) {
  const [selectedVersion, setSelectedVersion] = React.useState(defaultVersion)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-32 justify-between">
          <span className="text-xs">{selectedVersion}</span>
          <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {versions.map((version) => (
          <DropdownMenuItem
            key={version}
            onClick={() => setSelectedVersion(version)}
          >
            {version}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}