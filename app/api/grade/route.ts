import { NextResponse } from "next/server";

import { db } from "@/db";
import { GRADES } from "@/db/schema";

export async function GET(req: Request) {
  const database = await db;
  const res = await database.select().from(GRADES);

  if (!res) {
    return NextResponse.json(
      { message: "Failed to fetch grades" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "Successfully fetched grades",
    data: res,
    status: 200,
  });
}
