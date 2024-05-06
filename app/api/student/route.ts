import { NextRequest, NextResponse } from "next/server";

import { db } from "@/db";
import { STUDENTS } from "@/db/schema";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  const database = await db;
  const result = await database.insert(STUDENTS).values({
    name: data?.name,
    grade: data?.grade,
    contactNumber: data?.contactNumber,
    address: data?.address,
  });

  if (!result) {
    return NextResponse.json({
      message: "Failed to add new student",
      status: 500,
    });
  }

  return NextResponse.json({
    message: "Successfully added new student",
    data: result,
    status: 201,
  });
}

export async function GET(req: NextRequest, res: NextResponse) {
  const database = await db;
  const result = await database.select().from(STUDENTS);

  if (!result) {
    return NextResponse.json({
      message: "Failed to fetch students",
      status: 500,
    });
  }

  return NextResponse.json({
    message: "Successfully fetched students",
    data: result,
    status: 200,
  });
}
