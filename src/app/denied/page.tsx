import Link from "next/link"

export default function DeniedPage() {
  return (
    <div className="w-full max-w-screen-xl h-screen flex flex-col justify-center items-center">
      <h1>Acesso negado</h1>
      <p className="text-base t ext-slate-600 mb-10">
        Você não tem permissão para proceguir
      </p>
      <Link href="/" className="p-4 bg-amber-950 text-slate-50">
        Voltar
      </Link>
    </div>
  )
}
