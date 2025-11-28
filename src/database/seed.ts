import { db } from "./client";
import { schema } from "./schema";

await db
  .insert(schema.projects)
  .values([{ name: "Orbit" }, { name: "Sirius" }, { name: "Nova" }]);

console.log(`Seeding complete.`);
process.exit(0);
