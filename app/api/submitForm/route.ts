// app/api/submitForm/route.ts
import { NextResponse } from "next/server";
import client from "../../lib/turso"; // Importar el cliente de Turso

const insertFormData = async (
	firstname: string,
	lastname: string,
	company: string,
	sector: string,
	role: string,
	city: string,
	product: string,
	size: string,
	phone: string,
	email: string,
	message: string
) => {
	const result = await client.execute(
		`
      INSERT INTO user_form (firstname, lastname, company, sector, role, city, product, size, phone, email, message)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      RETURNING id;
    `,
		[
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
		]
	);

	return result.rows[0]?.id; // Devuelve el ID generado
};

export async function POST(request: Request) {
	const {
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
	} = await request.json();

	try {
		const participantId = await insertFormData(
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
			message
		);

		return NextResponse.json({
			message: "Formulario enviado exitosamente",
			participantId: participantId, // Enviar el ID de usuario generado
		});
	} catch (error) {
		console.error("Error al guardar los datos en la base de datos:", error);
		return NextResponse.json(
			{ error: "Hubo un error al guardar los datos en la base de datos" },
			{ status: 500 }
		);
	}
}
