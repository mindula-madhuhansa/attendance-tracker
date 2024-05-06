import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

async function connect() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD,
    port: parseInt(process.env.MYSQL_PORT!),
  });

  if (!connection) {
    throw new Error("Failed to connect to the database");
  }

  const db = drizzle(connection);
}

connect();
