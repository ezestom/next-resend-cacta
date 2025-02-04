'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";


export const Form = () => {
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [company, setCompany] = useState("");
   const [sector, setSector] = useState("");
   const [role, setRole] = useState("");
   const [city, setCity] = useState("");
   const [product, setProduct] = useState("");
   const [size, setSize] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [loading, setLoading] = useState(false);
   const [userId, setUserId] = useState<number | null>(null); // Para guardar el id del usuario

   console.log(userId);

   const router = useRouter();


   const checkUserExists = async (email: string) => {
      try {
         const response = await fetch(`/api/getUserId?email=${email}`);
         const data = await response.json();

         if (response.ok) {
            // Usuario ya registrado, redirigir directamente
            const participantId = data.participantId;
            setUserId(participantId);
            alert(`Ya has enviado tu formulario 📝, te redirigimos a la página principal. Gracias ${firstname}!`);
            window.location.href = "https://cacta.eco/";
            return true;
         }
      } catch (error) {
         console.error("Error verificando usuario:", error);
      }
      return false;
   };


   const handleRedirect = () => {
      sessionStorage.setItem("formOk", "true"); // Guarda el estado en sessionStorage
      router.push(`/thanks`); // Redirige a la página de éxito
      if (email) {
         localStorage.setItem("email", email);
      }
   };




   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      // Verificar si el usuario ya está registrado
      const userExists = await checkUserExists(email);
      if (userExists) return; // Si ya existe, no enviamos el formulario

      setLoading(true);
      const response = await fetch("/api/submitForm", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            firstname,
            lastname,
            company,
            sector,
            role,
            city,
            product,
            size,
            phone,
            email,
            message,
         }),
      });
      setLoading(false);

      if (response.ok) {
         const data = await response.json();
         const participantId = data.participantId;
         setUserId(participantId);
         alert(`Gracias por rellenar el formulario ${firstname}, te hemos enviado un email con tu código de descuento 📧`);

         // Llamada a la API de Resend para enviar el email
         await fetch('/api/send', {  // Aquí llamamos a tu API de Resend
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               firstname,
               email,
            }),
         });

         handleRedirect();

      } else {
         console.error("Error al enviar el formulario");
      }
   };


   return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full pt-4">
         <label className="text-sm font-semibold">
            Nombre:
            <input
               className="w-full p-2 border rounded bg-[#f9f9f9]"
               type="text"
               value={firstname}
               onChange={(e) => setFirstname(e.target.value)}
               placeholder="ej: Juan"
               required
            />
         </label>
         <label className="text-sm font-semibold">
            Apellido:
            <input
               className="w-full p-2 border rounded bg-[#f9f9f9]"
               type="text"
               value={lastname}
               onChange={(e) => setLastname(e.target.value)}
               placeholder="ej: Pérez"
               required
            />
         </label>
         <label className="text-sm font-semibold">
            Compañía:
            <input
               className="w-full p-2 border rounded bg-[#f9f9f9]"
               type="text"
               value={company}
               onChange={(e) => setCompany(e.target.value)}
               placeholder="ej: Inducítrica"
               required
            />
         </label>
         <label className="text-sm font-semibold">
            Sector:
            <input
               className="w-full p-2 border rounded bg-[#f9f9f9]"
               type="text"
               value={sector}
               onChange={(e) => setSector(e.target.value)}
               placeholder="ej: Agricultura"
               required
            />
         </label>
         <label className="text-sm font-semibold">
            Rol:
            <input
               className="w-full p-2 border rounded bg-[#f9f9f9]"
               type="text"
               value={role}
               onChange={(e) => setRole(e.target.value)}
               placeholder="ej: Gerente de producción"
               required
            />
         </label>
         <label className="text-sm font-semibold">
            Ciudad:
            <input
               className="w-full p-2 border rounded bg-[#f9f9f9]"
               type="text"
               value={city}
               onChange={(e) => setCity(e.target.value)}
               placeholder="ej: Tucumán"
               required
            />
         </label>
         <label className="text-sm font-semibold">
            Producto:
            <input
               className="w-full p-2 border rounded bg-[#f9f9f9]"
               type="text"
               value={product}
               onChange={(e) => setProduct(e.target.value)}
               placeholder="ej: Cítricos"
               required
            />
         </label>
         <label className="text-sm font-semibold">
            Hectáreas:
            <input
               className="w-full p-2 border rounded bg-[#f9f9f9]"
               type="text"
               value={size}
               onChange={(e) => setSize(e.target.value)}
               placeholder="ej: 2000"
               required
            />
         </label>
         <label className="text-sm font-semibold">
            Teléfono:
            <input
               className="w-full p-2 border rounded bg-[#f9f9f9]"
               type="text"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
               pattern="^\d{1,3}\s?\d{0,2}\s?\d{2,4}\s?\d{2,4}\s?\d{0,4}$"
               placeholder="ej: 54 9 11 1234 5678"
               required
            />
         </label>

         <label className="text-sm font-semibold">
            Email:
            <input
               className="w-full p-2 border rounded bg-[#f9f9f9]"
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="ej: juan_perez@inducítrica.com"
               required
            />
         </label>

         <label className="text-sm font-semibold">Mensaje (opcional)
            <textarea
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               placeholder="Mensaje (opcional) max. 150 caracteres"
               maxLength={150}
               rows={4}
               className="w-full p-2 border rounded bg-[#f9f9f9] resize-none"
            />
         </label>
         <div className="py-4 w-full flex">
            <button
               id="send"
               className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full border border-black/15 disabled:bg-gray-400 disabled:cursor-not-allowed"
               type="submit"
               disabled={loading}
            >
               {loading ? "Enviando..." : "Obtener mi descuento"}
            </button>

         </div>
      </form>
   );
}

export default Form;
