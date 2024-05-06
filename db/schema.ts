import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const GRADES = mysqlTable("grades", {
  id: int("id").primaryKey(),
  studentId: varchar("student_id", { length: 10 }).notNull(),
});
