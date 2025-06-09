'use client'

import { useEffect } from 'react'

export function VLibras() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js'
    script.async = true

    script.onload = () => {
      const checkVLibras = setInterval(() => {
        if (window.VLibras && typeof window.VLibras.Widget === 'function') {
          new window.VLibras.Widget('https://vlibras.gov.br/app')
          clearInterval(checkVLibras)
        }
      }, 500)
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null // não renderiza manualmente a estrutura do plugin
}
