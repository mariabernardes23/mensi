import { AccessibilityMenu } from "@/components/accessibility-menu"
import { ProfileHeader } from "@/components/profile-header"
import { AppointmentsCalendar } from "@/components/appointments-calendar"
import { Footer } from "@/components/footer"
import { AccessibilityButton } from "@/components/accessibility-button"
import { Breadcrumb } from "@/components/breadcrumb"

export default function AppointmentsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Menu de acessibilidade - mesmo das outras páginas */}
      <AccessibilityMenu />

      {/* Header da página com navegação */}
      <ProfileHeader activeItem="perfil" />

      {/* Conteúdo principal da página de agendamentos */}
      <div className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Perfil", href: "/profile" },
              { label: "Agendamento", href: "/profile/appointments", active: true },
            ]}
            className="mb-8"
          />

          {/* Título da página */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Meus agendamentos</h1>

          {/* Componente de calendário de agendamentos */}
          <AppointmentsCalendar />
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
  title: "Meus Agendamentos | Mensi",
  description: "Visualize e gerencie seus agendamentos de tutoria na plataforma Mensi.",
}
