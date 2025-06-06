"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { User, Users, BookOpen, MessageSquare, GraduationCap, ChevronDown, Menu, X } from "lucide-react"

interface ProfileHeaderProps {
  activeItem?: string
}

export function ProfileHeader({ activeItem }: ProfileHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false)

  // Função para verificar se um item está ativo
  const isActive = (item: string) => activeItem === item

  return (
    <header className="bg-sky-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo_2.png"  
              alt="A imagem é um logotipo com a palavra 'MENSI' escrita em letras maiúsculas e arredondadas, de cor azul. A última letra 'I' é substituída por um lápis desenhado de forma divertida e humanizada.Esse lápis tem olhos grandes, um sorriso simpático e está usando uma borracha rosa no topo, como se fosse um chapéu. A ponta do lápis está apontada para baixo, como se estivesse escrevendo. Abaixo dele, há uma linha ondulada preta, sugerindo que ele acabou de escrever 'me ensina'"  
              width={120} 
              height={40} 
              priority 
            />
          </Link>

          {/* Navegação principal - Desktop */}
          <nav className="hidden lg:block" aria-label="Navegação principal">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/profile"
                  className={`flex items-center gap-2 ${
                    isActive("perfil") ? "text-teal-600 font-medium" : "text-gray-800 hover:text-teal-600"
                  } focus:outline-none focus:ring-2 focus:ring-teal-500`}
                >
                  <User size={20} />
                  Perfil
                </Link>
              </li>
              <li>
                <Link
                  href="/tutors"
                  className={`flex items-center gap-2 ${
                    isActive("tutores") ? "text-teal-600 font-medium" : "text-gray-800 hover:text-teal-600"
                  } focus:outline-none focus:ring-2 focus:ring-teal-500`}
                >
                  <GraduationCap size={20} />
                  Tutores
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className={`flex items-center gap-2 ${
                    isActive("comunidade") ? "text-teal-600 font-medium" : "text-gray-800 hover:text-teal-600"
                  } focus:outline-none focus:ring-2 focus:ring-teal-500`}
                >
                  <Users size={20} />
                  Comunidade
                </Link>
              </li>
              <li>
                <Link
                  href="/repository"
                  className={`flex items-center gap-2 ${
                    isActive("repositorio") ? "text-teal-600 font-medium" : "text-gray-800 hover:text-teal-600"
                  } focus:outline-none focus:ring-2 focus:ring-teal-500`}
                >
                  <BookOpen size={20} />
                  Repositório
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className={`flex items-center gap-2 ${
                    isActive("mensagens") ? "text-teal-600 font-medium" : "text-gray-800 hover:text-teal-600"
                  } focus:outline-none focus:ring-2 focus:ring-teal-500`}
                >
                  <MessageSquare size={20} />
                  Mensagens
                </Link>
              </li>
            </ul>
          </nav>

          {/* Menu da conta - Desktop */}
          <div className="hidden lg:block relative">
            <button
              onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
              className="flex items-center gap-2 text-gray-800 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-expanded={isAccountMenuOpen}
              aria-haspopup="true"
            >
              <User size={20} />
              Minha conta
              <ChevronDown size={16} className={`transition-transform ${isAccountMenuOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown do menu da conta */}
            {isAccountMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <Link
                    href="/profile/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  >
                    Configurações
                  </Link>
                  <Link
                    href="/profile/achievements"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  >
                    Conquistas
                  </Link>
                  <hr className="my-1" />
                  <button
                    onClick={() => {
                      <Link href="/"> </Link>
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  >
                    Sair
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Botão do menu mobile */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden bg-sky-100 py-4 mt-4">
            <nav aria-label="Navegação principal mobile">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link
                    href="/profile"
                    className={`flex items-center gap-2 ${
                      isActive("perfil") ? "text-teal-600 font-medium" : "text-gray-800 hover:text-teal-600"
                    } focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User size={20} />
                    Perfil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tutors"
                    className={`flex items-center gap-2 ${
                      isActive("tutores") ? "text-teal-600 font-medium" : "text-gray-800 hover:text-teal-600"
                    } focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <GraduationCap size={20} />
                    Tutores
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className={`flex items-center gap-2 ${
                      isActive("comunidade") ? "text-teal-600 font-medium" : "text-gray-800 hover:text-teal-600"
                    } focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Users size={20} />
                    Comunidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="/repository"
                    className={`flex items-center gap-2 ${
                      isActive("repositorio") ? "text-teal-600 font-medium" : "text-gray-800 hover:text-teal-600"
                    } focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <BookOpen size={20} />
                    Repositório
                  </Link>
                </li>
                <li>
                  <Link
                    href="/messages"
                    className={`flex items-center gap-2 ${
                      isActive("mensagens") ? "text-teal-600 font-medium" : "text-gray-800 hover:text-teal-600"
                    } focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MessageSquare size={20} />
                    Mensagens
                  </Link>
                </li>
                <li className="pt-4 border-t border-gray-300">
                  <Link
                    href="/profile/settings"
                    className="block text-gray-800 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Configurações
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      console.log("Logout")
                      setIsMenuOpen(false)
                    }}
                    className="text-gray-800 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    Sair
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
