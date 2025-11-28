import { z } from "zod";

export namespace ProjectModel {
  export const projectListResponse = z.array(
    z.object({
      id: z.uuid(),
      name: z.string(),
    }),
  );

  export type projectListResponse = z.infer<typeof projectListResponse>;
}
