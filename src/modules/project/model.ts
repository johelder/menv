import { z } from "zod";

export namespace ProjectModel {
  export const projectBody = z.object({
    name: z.string().max(250),
  });

  export type projectBody = z.infer<typeof projectBody>;

  export const projectResponse = z.object({
    projectId: z.uuid(),
  });

  export type projectResponse = z.infer<typeof projectResponse>;

  // export type signInInvalid = typeof signInInvalid.static;
}
