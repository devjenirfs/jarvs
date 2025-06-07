import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const actionLogs = pgTable("action_logs", {
  id: serial("id").primaryKey(),
  command: varchar("command", { length: 100 }),
  createdAt: timestamp("created_at").defaultNow(),
});