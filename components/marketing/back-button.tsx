"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function BackButton() {
  const router = useRouter()

  return (
    <Button 
      variant="ghost" 
      className="gap-2 -ml-4 text-muted-foreground hover:text-foreground"
      onClick={() => {
        if (window.history.length > 1) {
          router.back()
        } else {
          router.push('/')
        }
      }}
    >
      <ArrowLeft className="w-4 h-4" />
      Volver a la página principal
    </Button>
  )
}
