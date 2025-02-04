//app/api/send/route.ts
import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	try {
		const { firstname, email } = await req.json();

		const { data, error } = await resend.emails.send({
			from: "Acme <onboarding@resend.dev>",
			to: [email], // Se envía el correo al usuario
			subject: "Gracias por tu registro!",
			react: EmailTemplate({
				firstName: firstname,
			}) as React.ReactElement,
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json({ data });
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
