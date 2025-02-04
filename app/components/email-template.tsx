//app/components/email-template.tsx
import * as React from "react";
interface EmailTemplateProps {
   firstName: string;
}

export const EmailTemplate = ({ firstName }: EmailTemplateProps) => (
   <div style={{ fontFamily: "'Geist Sans', sans-serif", padding: "50px", backgroundColor: "#f0f0f0", borderRadius: "8px", color: "#111827", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ color: "#111827", fontSize: "24px", fontWeight: "bold", maxWidth: "600px", margin: "0 auto" }}>¡Gracias por tu registro, {firstName}!</h2>

      <p style={{ fontSize: "16px", marginBottom: "10px" }}>📅 Recuerda que tu código es válido hasta el 14 de abril de 2025.</p>
      <p style={{ fontSize: "16px", marginBottom: "10px" }}>
         Uno de nuestros agentes se pondrá en contacto contigo en los próximos días. Pero si necesitas algo antes, ¡estamos aquí para ayudarte! Puedes encontrarnos en cualquiera de nuestros canales:
      </p>

      <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>📧 Correo:</h3>
      <ul style={{ paddingLeft: "20px" }}>
         <li><a href="mailto:vicky.engelberger@cacta.eco" style={{ color: "#111827", textDecoration: "none" }}>vicky.engelberger@cacta.eco</a></li>
         <li><a href="mailto:jl.cebe@cacta.eco" style={{ color: "#111827", textDecoration: "none" }}>jl.cebe@cacta.eco</a></li>
      </ul>

      <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>🌍 Página web:</h3>
      <p><a href="https://cacta.eco/" target="_blank" rel="noopener noreferrer" style={{ color: "#111827", textDecoration: "none" }}>https://cacta.eco/</a></p>

      <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>📱 Redes sociales:</h3>
      <ul style={{ paddingLeft: "20px" }}>
         <li><a href="https://www.facebook.com/CactaSustainabilitySolutions" target="_blank" rel="noopener noreferrer" style={{ color: "#111827", textDecoration: "none" }}>📌 Facebook: Cacta Sustainability Solutions</a></li>
         <li><a href="https://www.instagram.com/cacta_eco" target="_blank" rel="noopener noreferrer" style={{ color: "#111827", textDecoration: "none" }}>📌 Instagram: @cacta_eco</a></li>
         <li><a href="https://www.linkedin.com/company/cacta-sustainability-solutions" target="_blank" rel="noopener noreferrer" style={{ color: "#111827", textDecoration: "none" }}>📌 LinkedIn: Cacta Sustainability Solutions</a></li>
      </ul>

      <div style={{ maxWidth: "600px", margin: "0 auto", gap: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
         <p style={{ fontSize: "18px" }}>Prevé el cambio, moldealo a tu favor.</p>
         <p style={{ fontSize: "16px" }}>¿Preparado para comenzar?</p>
      </div>
   </div>
);

export default EmailTemplate;
