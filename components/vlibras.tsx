"use client"

import Script from "next/script"

export function VLibras() {
  return (
    <>
      <div vw="true" className="enabled">
        <div vw-access-button="true" className="active"></div>
        <div vw-plugin-wrapper="true">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>

      <Script
        id="vlibras-script"
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={() => {
          if ((window as any).VLibras) {
            new (window as any).VLibras.Widget("https://vlibras.gov.br/app")
          } else {
            console.warn("VLibras não disponível.")
          }
        }}
      />
    </>
  )
}
