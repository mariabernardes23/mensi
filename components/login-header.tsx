import Image from "next/image"
import Link from "next/link"

export function LoginHeader() {
  return (
    <header className="bg-sky-100 py-4">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-block">
          <Image
            src="/images/logo_2.png"
            alt="Logo Mensi - Voltar para página inicial"
            width={120}
            height={40}
            priority
          />
        </Link>
      </div>
    </header>
  )
}
