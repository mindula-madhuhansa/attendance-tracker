import { NextRequest, NextResponse } from "next/server";

import { db } from "@/db";
import { GRADES } from "@/db/schema";

export async function GET(req: NextRequest, res: NextResponse) {
  const database = await db;
  const result = await database.select().from(GRADES);

  if (!result) {
    return NextResponse.json(
      { message: "Failed to fetch grades" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "Successfully fetched grades",
    data: result,
    status: 200,
  });
}
