import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: uuid().defaultRandom().primaryKey(),
  name: text().notNull(),
});
