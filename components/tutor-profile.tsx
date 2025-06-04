"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageSquare, Clock, Calendar } from "lucide-react"
import { useRouter } from "next/navigation"

// Tipos para os dados do tutor
interface TutorSpecialty {
  category: string
  items: string[]
}

interface TutorAvailability {
  date: string
  times: string[]
}

interface TutorData {
  id: string
  name: string
  title: string
  image: string
  subjects: string[]
  specialties: TutorSpecialty[]
  availability: TutorAvailability
  bio?: string
}

interface TutorProfileProps {
  tutor: TutorData
}

export function TutorProfile({ tutor }: TutorProfileProps) {
  // Estado para controlar o horário selecionado
  const [selectedTime, setSelectedTime] = useState<string>("")
  const router = useRouter()

  // Função para lidar com a seleção de horário
  const handleTimeSelection = (time: string) => {
    setSelectedTime(time)
    // Redirecionar para a página de agendamento com os parâmetros
    router.push(`/tutors/${tutor.id}/schedule?date=16/06/2025&time=${time}`)
  }

  // Função para enviar mensagem (apenas visual por enquanto)
  const handleSendMessage = () => {
    console.log(`Enviando mensagem para ${tutor.name}`)
    // Aqui seria implementada a lógica para abrir o chat ou modal de mensagem
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Card principal do perfil */}
      <div className="bg-amber-300 rounded-lg p-8 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Coluna esquerda - Informações principais */}
          <div className="lg:w-2/3">
            <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
              {/* Foto do tutor */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-white shadow-md">
                  <Image
                    src={tutor.image || "/placeholder.svg"}
                    alt={`Foto de ${tutor.name}`}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Nome e título */}
              <div className="flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{tutor.name}</h1>
                <p className="text-xl text-gray-700 mb-4">{tutor.title}</p>

                {/* Bio (se disponível) */}
                {tutor.bio && <p className="text-gray-700 leading-relaxed">{tutor.bio}</p>}
              </div>
            </div>

            {/* Seção: Oferece tutoria em */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Oferece tutoria em:</h2>
              <div className="flex flex-wrap gap-3">
                {tutor.subjects.map((subject) => (
                  <span key={subject} className="bg-white text-gray-700 px-4 py-2 rounded-full font-medium shadow-sm">
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            {/* Seção: Especialidades */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Especialidades:</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tutor.specialties.map((specialty, index) => (
                  <div key={index} className="bg-sky-100 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 sr-only">{specialty.category}</h3>
                    <ul className="space-y-1">
                      {specialty.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 text-sm flex items-start">
                          <span className="text-teal-600 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Seção: Disponibilidade */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Calendar size={20} />
                Escolha um horário para o dia {tutor.availability.date}:
              </h2>
              <div className="flex flex-wrap gap-3">
                {tutor.availability.times.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelection(time)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                      selectedTime === time
                        ? "bg-teal-600 text-white shadow-md"
                        : "bg-teal-500 hover:bg-teal-600 text-white"
                    }`}
                    aria-label={`Agendar sessão às ${time} do dia ${tutor.availability.date}`}
                  >
                    <Clock size={16} className="inline mr-2" />
                    {time}
                  </button>
                ))}
              </div>

              {/* Feedback visual quando um horário é selecionado */}
              {selectedTime && (
                <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
                  <p className="text-green-800 font-medium">
                    ✓ Horário selecionado: {selectedTime} do dia {tutor.availability.date}
                  </p>
                  <p className="text-green-700 text-sm mt-1">
                    Clique em "Enviar mensagem" para confirmar o agendamento com {tutor.name}.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Coluna direita - Botão de ação */}
          <div className="lg:w-1/3 flex lg:justify-end">
            <div className="w-full lg:w-auto">
              <button
                onClick={handleSendMessage}
                className="w-full lg:w-auto bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 flex items-center justify-center gap-2"
                aria-label={`Enviar mensagem para ${tutor.name}`}
              >
                <MessageSquare size={20} />
                Enviar mensagem
              </button>

              {/* Informações adicionais (podem ser expandidas no futuro) */}
              <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">Informações adicionais</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Resposta rápida</li>
                  <li>• Aulas personalizadas</li>
                  <li>• Material didático incluso</li>
                  <li>• Suporte contínuo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção adicional para futuras funcionalidades */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Avaliações (placeholder para futuro desenvolvimento) */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Avaliações dos estudantes</h3>
          <div className="text-center text-gray-500 py-8">
            <p>Avaliações em breve!</p>
            <p className="text-sm mt-2">Os estudantes poderão avaliar as sessões de tutoria.</p>
          </div>
        </div>

        {/* Histórico de aulas (placeholder para futuro desenvolvimento) */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Próximas sessões</h3>
          <div className="text-center text-gray-500 py-8">
            <p>Nenhuma sessão agendada</p>
            <p className="text-sm mt-2">Agende uma sessão para começar a aprender!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
