import { Elysia } from "elysia";
import { ProjectModel } from "./model";
import { Project } from "./service";

export const project = new Elysia({ prefix: "/projects" }).post(
  "/",
  async ({ body }) => {
    const response = await Project.create(body);

    return response;
  },
  {
    body: ProjectModel.projectBody,
    response: {
      200: ProjectModel.projectResponse,
      // 400: AuthModel.signInInvalid,
    },
  },
);
