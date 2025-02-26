// app/lib/turso.ts
import { createClient } from "@libsql/client";

// const client = createClient({
// 	url: "file:local.db",
// 	syncUrl: "libsql://discount-ddbb-ezestom.turso.io", // URL de tu base de datos en Turso
// 	authToken: process.env.AUTH_TOKEN, // Token de autenticación de Turso
// });

const client = createClient({
	url:
		process.env.TURSO_DATABASE_URL || "libsql://discount-ddbb-ezestom.turso.io",
	authToken: process.env.AUTH_TOKEN, // Token de autenticación de Turso
});

// Función para crear la tabla `user_form`
const createFormSubmissionsTable = async () => {
	try {
		const result = await client.execute(`
      CREATE TABLE IF NOT EXISTS user_form (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstname TEXT NOT NULL,
        lastname TEXT NOT NULL,
        company TEXT NOT NULL,
        sector TEXT NOT NULL,
        role TEXT NOT NULL,
        city TEXT NOT NULL,
        product TEXT NOT NULL,
        size TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT,
        created_at INTEGER DEFAULT (unixepoch())
      );
    `);
		console.log("Tabla 'user_form' creada:", result);
	} catch (error) {
		console.error("Error al crear la tabla 'user_form':", error);
	}
};

// Llamar a las funciones de creación de tablas
createFormSubmissionsTable();

// Exportar el cliente para usarlo en otros archivos
export default client;
