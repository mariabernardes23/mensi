"use client"

import { useState } from "react"
import Link from "next/link"

export function AccessibilityMenu() {
  const [fontSize, setFontSize] = useState(16)
  const [highContrast, setHighContrast] = useState(false)

  // Função para aumentar o tamanho da fonte
  const increaseFontSize = () => {
    if (fontSize < 24) {
      setFontSize(fontSize + 2)
      document.documentElement.style.fontSize = `${fontSize + 2}px`
    }
  }

  // Função para diminuir o tamanho da fonte
  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 2)
      document.documentElement.style.fontSize = `${fontSize - 2}px`
    }
  }

  // Função para alternar o contraste alto
  const toggleHighContrast = () => {
    setHighContrast(!highContrast)
    document.body.classList.toggle("high-contrast")
  }

  return (
    <nav aria-label="Menu de acessibilidade" className="bg-gray-100 py-2 px-4 text-sm">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link
              href="#conteudo"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("conteudo")?.focus()
                document.getElementById("conteudo")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Ir para conteúdo [1]
            </Link>
          </li>
          <li>
            <Link
              href="#menu"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("menu")?.focus()
                document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Ir para menu [2]
            </Link>
          </li>
          <li>
            <Link
              href="#rodape"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("rodape")?.focus()
                document.getElementById("rodape")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Ir para rodapé [3]
            </Link>
          </li>
          <li>
            <Link
              href="#acessibilidade"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Ir à acessibilidade [4]
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <button
            onClick={increaseFontSize}
            aria-label="Aumentar tamanho da fonte"
            className="focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            A+ <span className="sr-only">Aumentar tamanho da fonte</span>
          </button>
          <button
            onClick={decreaseFontSize}
            aria-label="Diminuir tamanho da fonte"
            className="focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            A- <span className="sr-only">Diminuir tamanho da fonte</span>
          </button>
          <button
            onClick={toggleHighContrast}
            aria-label="Alternar alto contraste"
            className="focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Alto contraste
          </button>
        </div>
      </div>
    </nav>
  )
}
