import { AccessibilityMenu } from "@/components/accessibility-menu"
import { ProfileHeader } from "@/components/profile-header"
import { RepositorySearch } from "@/components/repository-search"
import { Footer } from "@/components/footer"
import { AccessibilityButton } from "@/components/accessibility-button"
import { Breadcrumb } from "@/components/breadcrumb"

export default function RepositoryPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Menu de acessibilidade - mesmo das outras páginas */}
      <AccessibilityMenu />

      {/* Header da página com navegação */}
      <ProfileHeader activeItem="repositorio" />

      {/* Conteúdo principal da página de repositório */}
      <div className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Perfil", href: "/profile" },
              { label: "Repositório", href: "/repository", active: true },
            ]}
            className="mb-8"
          />

          {/* Componente de busca de conteúdos */}
          <RepositorySearch />
        </div>
      </div>

      {/* Rodapé */}
      <Footer />

      {/* Botão de acessibilidade flutuante */}
      <AccessibilityButton />
    </main>
  )
}

// Metadados para SEO
export const metadata = {
  title: "Repositório de Conteúdos | Mensi",
  description:
    "Explore nosso repositório de materiais educativos. Encontre exercícios, vídeos e conteúdos organizados por disciplina e série.",
}
