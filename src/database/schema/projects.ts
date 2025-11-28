import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const projects = pgTable("users", {
  id: uuid().defaultRandom().primaryKey(),
  name: text().notNull(),
});
