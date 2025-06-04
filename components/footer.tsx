import Image from "next/image"

export function Footer() {
  return (
    <footer id="rodape" className="bg-sky-100 py-8" tabIndex={-1}>
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <Image src="/images/logo_2.png" alt="Logo Mensi" width={100} height={35} className="mx-auto" />
        </div>

        <p className="text-sm text-gray-600">
          © Mensi
          <br />
          Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
