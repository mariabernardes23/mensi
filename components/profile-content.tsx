"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Award } from "lucide-react"
import { ExpandableSection } from "@/components/expandable-section"

export function ProfileContent() {
  // Estados para controlar quais seções estão expandidas
  const [expandedSections, setExpandedSections] = useState({
    tutors: true, // Primeira seção começa expandida conforme o layout
    communities: false,
    materials: false,
  })

  // Função para alternar uma seção específica
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  // Função para expandir todas as seções
  const expandAllSections = () => {
    setExpandedSections({
      tutors: true,
      communities: true,
      materials: true,
    })
  }

  // Função para recolher todas as seções
  const collapseAllSections = () => {
    setExpandedSections({
      tutors: false,
      communities: false,
      materials: false,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Seção de boas-vindas */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          {/* Avatar do usuário */}
          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            A
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Adenilson, bem vindo!</h1>
            <Link
              href="/profile/avatar"
              className="text-teal-600 hover:text-teal-700 text-sm focus:outline-none focus:underline"
            >
              Gerenciar avatar
            </Link>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/profile/appointments"
            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <Calendar size={18} />
            Meus agendamentos
          </Link>
          <Link
            href="/profile/achievements"
            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <Award size={18} />
            Minhas conquistas
          </Link>
        </div>
      </div>

      {/* Controles para expandir/recolher todos os painéis */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={expandAllSections}
          className="text-teal-600 hover:text-teal-700 focus:outline-none focus:underline"
        >
          Abrir todos os painéis
        </button>
        <span className="text-gray-400">|</span>
        <button
          onClick={collapseAllSections}
          className="text-teal-600 hover:text-teal-700 focus:outline-none focus:underline"
        >
          Ocultar todos os painéis
        </button>
      </div>

      {/* Seções expansíveis */}
      <div className="space-y-4">
        {/* Seção: Seus tutores */}
        <ExpandableSection
          title="Seus tutores"
          isExpanded={expandedSections.tutors}
          onToggle={() => toggleSection("tutors")}
        >
          <div className="p-6">
            <p className="text-gray-600 mb-4">Poxa! Por enquanto você ainda não tem nenhum tutor.</p>
            <Link
              href="/tutors"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Encontre um tutor
            </Link>
          </div>
        </ExpandableSection>

        {/* Seção: Suas comunidades */}
        <ExpandableSection
          title="Suas comunidades"
          isExpanded={expandedSections.communities}
          onToggle={() => toggleSection("communities")}
        >
          <div className="p-6">
            <p className="text-gray-600 mb-4">Você ainda não participa de nenhuma comunidade.</p>
            <Link
              href="/community"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Explorar comunidades
            </Link>
          </div>
        </ExpandableSection>

        {/* Seção: Últimos materiais visualizados */}
        <ExpandableSection
          title="Últimos materiais visualizados"
          isExpanded={expandedSections.materials}
          onToggle={() => toggleSection("materials")}
        >
          <div className="p-6">
            <p className="text-gray-600 mb-4">Nenhum material foi visualizado recentemente.</p>
            <Link
              href="/repository"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Explorar repositório
            </Link>
          </div>
        </ExpandableSection>
      </div>
    </div>
  )
}
