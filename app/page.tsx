// import Image from "next/image";
import Form from "./components/Form";
import LogoAnimation from "./components/LogoAnimation";

export default function Home() {
  return (
    <div className="flex items-start bg-[#111826] justify-center min-h-screen font-[family-name:var(--font-poppins)] h-full p-4 text-white">
      <main className="flex flex-col  row-start-2 items-center">

        {/* <Image
          className="max-w-[125px] mx-auto"
          src="/logoTrivia.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
        <LogoAnimation />


        <ol className="list-inside list-decimal text-sm text-left">
          <li className="mb-1 text-pretty" >
            ¡Regístrate para obtener tu descuento!
          </li>
          <li className="mb-1 text-pretty" >
            Ya registrado te reenviaremos un email con el código.
          </li>
          <li className="mb-1 text-pretty" >
            Comienza a medir, mejorar y liderar la sostenibilidad de tu empresa.
          </li>
        </ol>
        <Form />
      </main>
    </div>
  );
}