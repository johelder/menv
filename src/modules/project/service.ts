import { status } from "elysia";

import type { ProjectModel } from "./model";

export abstract class Project {
  static async create({ name }: ProjectModel.projectBody) {
    return {};
  }
}
