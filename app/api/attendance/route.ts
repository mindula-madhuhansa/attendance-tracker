import { NextRequest, NextResponse } from "next/server";
import { eq, isNull, or } from "drizzle-orm";

import { db } from "@/db";
import { ATTENDANCE, STUDENTS } from "@/db/schema";

export async function GET(req: NextRequest, res: NextResponse) {
  const searchParams = req.nextUrl.searchParams;
  const grade = searchParams.get("grade") as string;
  const month = searchParams.get("month") as string;

  const database = await db;
  const result = await database
    .select({
      name: STUDENTS.name,
      status: ATTENDANCE.status,
      day: ATTENDANCE.day,
      date: ATTENDANCE.date,
      grade: STUDENTS.grade,
      studentId: STUDENTS.id,
      attendanceId: ATTENDANCE.id,
    })
    .from(STUDENTS)
    .leftJoin(ATTENDANCE, eq(STUDENTS.id, ATTENDANCE.studentId))
    .where(eq(STUDENTS.grade, grade))
    .where(or(eq(ATTENDANCE.date, month), isNull(ATTENDANCE.date)));

  if (!result) {
    return NextResponse.json(
      { message: "Failed to fetch attendance" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "Successfully fetched attendance",
    data: result,
    status: 200,
  });
}
