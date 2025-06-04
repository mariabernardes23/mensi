"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-sky-100 py-4" id="menu" tabIndex={-1}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo_2.png" alt="Logo Mensi" width={120} height={40} priority />
        </Link>

        {/* Menu para desktop */}
        <nav className="hidden md:block" aria-label="Menu principal">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="#sobre-nos"
                className="text-gray-800 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                href="#recomendacoes"
                className="text-gray-800 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Recomendações
              </Link>
            </li>
            <li>
              <Link
                href="#tutores"
                className="text-gray-800 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Nossos Tutores
              </Link>
            </li>
            <li>
              <Link
                href="#contato"
                className="text-gray-800 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Fale Conosco
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          href="/login"
          className="hidden md:block bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Entrar
        </Link>

        {/* Botão do menu mobile */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-sky-100 py-4">
          <nav className="container mx-auto px-4" aria-label="Menu principal mobile">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="#sobre-nos"
                  className="block text-gray-800 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="#recomendacoes"
                  className="block text-gray-800 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Recomendações
                </Link>
              </li>
              <li>
                <Link
                  href="#tutores"
                  className="block text-gray-800 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nossos Tutores
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="block text-gray-800 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="block bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Entrar
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
