import { db } from "../../../db";
import { actionLogs } from "../../../db/schema";
import { sql } from "drizzle-orm";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const logs = await db
    .select()
    .from(actionLogs)
    .orderBy(sql`${actionLogs.createdAt} DESC`)
    .limit(2);
  res.status(200).json({ logs });
}
