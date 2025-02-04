'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Gracias() {
	const router = useRouter();

	// Usamos useEffect para llamar a changeScene cuando el componente se monta
	useEffect(() => {
		setTimeout(() => {
			router.push("https://cacta.eco/");
		}, 5000);
	}, [router]);

	return (
		<main className="container mx-auto p-4 text-center flex items-center justify-center flex-col h-screen bg-[#007d67]/25 w-full">
			<div className="bg-[#007d67]/50 rounded-lg text-center p-8 border border-black/15">
				<Image
					className="max-w-[125px] mx-auto pb-4"
					src="/logoTrivia.png"
					alt="Next.js logo"
					width={180}
					height={38}
					priority
				/>
				<h1 className="text-base font-base mb-4">
					¡Gracias por llenar el formulario!
				</h1>
				<p className="mb-4 text-xs text-balance">
					Tus datos han sido registrados exitosamente. Serás redirigido a la página principal en unos segundos.
				</p>
			</div>
		</main>
	);
}
