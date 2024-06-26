import { boolean, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const GRADES = mysqlTable("grades", {
  id: int("id").primaryKey(),
  grade: varchar("grade", { length: 10 }).notNull(),
});

export const STUDENTS = mysqlTable("students", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  grade: varchar("grade", { length: 100 }).notNull(),
  contactNumber: varchar("contact_number", { length: 15 }).notNull(),
  address: varchar("address", { length: 255 }).notNull(),
});

export const ATTENDANCE = mysqlTable("attendance", {
  id: int("id").autoincrement().primaryKey(),
  studentId: int("student_id").notNull(),
  status: boolean("status").default(false),
  day: int("day").notNull(),
  date: varchar("date", { length: 10 }).notNull(),
});
