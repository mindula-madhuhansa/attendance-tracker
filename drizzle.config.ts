import dotenv from "dotenv";
dotenv.config();

import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./db/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    host: process.env.MYSQL_HOST!,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE!,
    password: process.env.MYSQL_PASSWORD,
    port: parseInt(process.env.MYSQL_PORT!),
  },
  verbose: true,
  strict: true,
});
