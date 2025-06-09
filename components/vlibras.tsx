"use client"

import { useEffect } from "react"

export function VLibras() {
  useEffect(() => {
    const script = document.createElement("script")
    script.id = "vlibras-script"
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js"
    script.async = true
    script.onload = () => {
      const interval = setInterval(() => {
        if ((window as any).VLibras) {
          new (window as any).VLibras.Widget("https://vlibras.gov.br/app")
          clearInterval(interval)
        }
      }, 300)
    }

    document.body.appendChild(script)
  }, [])

  return (
    <div vw="true" className="enabled">
      <div vw-access-button="true" className="active"></div>
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  )
}
