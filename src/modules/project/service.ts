import { db } from "@/database/client";
import { schema } from "@/database/schema";
import { ProjectModel } from "./model";

export abstract class Project {
  static async list() {
    const projects = await db.select().from(schema.projects);
    return projects;
  }
}
