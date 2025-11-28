import { Elysia } from "elysia";
import { ProjectModel } from "./model";
import { Project } from "./service";

export const project = new Elysia({ prefix: "/projects" }).get(
  "/",
  Project.list,
  {
    response: {
      200: ProjectModel.projectListResponse,
    },
  },
);
