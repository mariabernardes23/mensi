"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, HelpCircle, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { Modal } from "@/components/modal"

// Tipos para os dados do formulário
interface RegisterFormData {
  fullName: string
  email: string
  guardianEmail: string
  birthDate: string
  password: string
  confirmPassword: string
}

// Tipos para os erros de validação
interface FormErrors {
  fullName?: string
  email?: string
  guardianEmail?: string
  birthDate?: string
  password?: string
  confirmPassword?: string
}

export function RegisterForm() {
  // Estados para controlar o formulário
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: "",
    email: "",
    guardianEmail: "",
    birthDate: "",
    password: "",
    confirmPassword: "",
  })

  // Estados para controlar a visibilidade das senhas
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Estados para controlar o envio e validação
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  // Estados para controlar os modais
  const [showGuardianInfoModal, setShowGuardianInfoModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const router = useRouter()

  // Função para atualizar os dados do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Limpar erros quando o usuário começar a digitar
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  // Função para validar o formulário
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Validação do nome completo
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Nome completo é obrigatório"
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Nome deve ter pelo menos 2 caracteres"
    }

    // Validação do e-mail
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido"
    }

    // Validação do e-mail do responsável
    if (!formData.guardianEmail.trim()) {
      newErrors.guardianEmail = "E-mail do responsável é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(formData.guardianEmail)) {
      newErrors.guardianEmail = "E-mail do responsável inválido"
    } else if (formData.guardianEmail === formData.email) {
      newErrors.guardianEmail = "E-mail do responsável deve ser diferente do seu e-mail"
    }

    // Validação da data de nascimento
    if (!formData.birthDate) {
      newErrors.birthDate = "Data de nascimento é obrigatória"
    } else {
      const birthDate = new Date(formData.birthDate)
      const today = new Date()
      const age = today.getFullYear() - birthDate.getFullYear()

      if (age < 13 || age > 100) {
        newErrors.birthDate = "Idade deve estar entre 13 e 100 anos"
      }
    }

    // Validação da senha
    if (!formData.password) {
      newErrors.password = "Senha é obrigatória"
    } else if (formData.password.length < 6) {
      newErrors.password = "Senha deve ter pelo menos 6 caracteres"
    }

    // Validação da confirmação de senha
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirmação de senha é obrigatória"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Senhas não coincidem"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Função para enviar o formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // Simular chamada de API
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Aqui seria implementada a lógica real de cadastro
      console.log("Dados de cadastro:", formData)

      // Mostrar modal de sucesso
      setShowSuccessModal(true)
    } catch (error) {
      console.error("Erro no cadastro:", error)
      setErrors({ email: "Erro ao criar conta. Tente novamente." })
    } finally {
      setIsLoading(false)
    }
  }

  // Função para redirecionar para login
  const handleGoToLogin = () => {
    setShowSuccessModal(false)
    router.push("/login")
  }

  // Função para formatar data de nascimento
  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")

    if (value.length >= 2) {
      value = value.substring(0, 2) + "/" + value.substring(2)
    }
    if (value.length >= 5) {
      value = value.substring(0, 5) + "/" + value.substring(5, 9)
    }

    setFormData((prev) => ({ ...prev, birthDate: value }))

    // Limpar erro se existir
    if (errors.birthDate) {
      setErrors((prev) => ({ ...prev, birthDate: undefined }))
    }
  }

  return (
    <>
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Título e instruções */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Cadastro</h1>
            <p className="text-gray-600">
              Digite seus dados nos campos abaixo. Campos com <span className="text-red-500">*</span> são de
              preenchimento obrigatório.
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Primeira linha - Nome e Data de Nascimento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome completo */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Digite seu nome completo"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  }`}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Data de nascimento */}
              <div>
                <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Data de nascimento (dd/mm/aaaa) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleBirthDateChange}
                  placeholder="Digite sua data de nascimento (dd/mm/aaaa)"
                  maxLength={10}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                    errors.birthDate ? "border-red-500" : "border-gray-300"
                  }`}
                  aria-describedby={errors.birthDate ? "birthDate-error" : undefined}
                />
                {errors.birthDate && (
                  <p id="birthDate-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.birthDate}
                  </p>
                )}
              </div>
            </div>

            {/* Segunda linha - E-mail e Senha */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* E-mail */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Digite seu e-mail"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Senha */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Senha <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Digite sua senha"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors pr-12 ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                    aria-describedby={errors.password ? "password-error" : undefined}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p id="password-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.password}
                  </p>
                )}
              </div>
            </div>

            {/* Terceira linha - E-mail do responsável e Confirmação de senha */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* E-mail do responsável */}
              <div>
                <label htmlFor="guardianEmail" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  E-mail do responsável
                  <button
                    type="button"
                    onClick={() => setShowGuardianInfoModal(true)}
                    className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-full"
                    aria-label="Informações sobre e-mail do responsável"
                  >
                    <HelpCircle size={16} />
                  </button>
                </label>
                <input
                  type="email"
                  id="guardianEmail"
                  name="guardianEmail"
                  value={formData.guardianEmail}
                  onChange={handleChange}
                  placeholder="Digite o e-mail do seu responsável"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                    errors.guardianEmail ? "border-red-500" : "border-gray-300"
                  }`}
                  aria-describedby={errors.guardianEmail ? "guardianEmail-error" : undefined}
                />
                {errors.guardianEmail && (
                  <p id="guardianEmail-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.guardianEmail}
                  </p>
                )}
              </div>

              {/* Confirmação de senha */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirmação da senha <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Digite sua senha novamente"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors pr-12 ${
                      errors.confirmPassword ? "border-red-500" : "border-gray-300"
                    }`}
                    aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                    aria-label={showConfirmPassword ? "Ocultar confirmação de senha" : "Mostrar confirmação de senha"}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p id="confirmPassword-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            {/* Botão de cadastrar */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full max-w-xs bg-teal-500 hover:bg-teal-600 disabled:bg-teal-300 text-white py-3 px-8 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                {isLoading ? "Cadastrando..." : "Cadastrar"}
              </button>
            </div>

            {/* Link para login */}
            <div className="text-center">
              <span className="text-gray-600">Já possui uma conta? </span>
              <Link
                href="/login"
                className="text-teal-600 hover:text-teal-700 font-medium focus:outline-none focus:underline"
              >
                Entre
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Modal de informações sobre e-mail do responsável */}
      <Modal
        isOpen={showGuardianInfoModal}
        onClose={() => setShowGuardianInfoModal(false)}
        title="Informações sobre e-mail do responsável"
        className="max-w-md"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle size={32} className="text-blue-600" />
          </div>
          <p className="text-gray-700 mb-6">
            Para sua segurança, o seu responsável será solicitado por e-mail para autorizar algumas funcionalidades,
            como agendamento de tutorias.
          </p>
          <button
            onClick={() => setShowGuardianInfoModal(false)}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Entendi
          </button>
        </div>
      </Modal>

      {/* Modal de sucesso */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Cadastro realizado com sucesso!"
        className="max-w-md"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <p className="text-gray-700 mb-6">
            Sua conta foi criada com sucesso! Agora você pode fazer login e começar a usar a plataforma Mensi.
          </p>
          <button
            onClick={handleGoToLogin}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Ir para tela de login
          </button>
        </div>
      </Modal>
    </>
  )
}
