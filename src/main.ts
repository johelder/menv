import openapi from "@elysiajs/openapi";
import { Elysia } from "elysia";
import { project } from "./modules/project";

new Elysia({
  prefix: "v1",
})
  .use(openapi())
  .use(project)
  .listen(3333);

console.log("🦊 Server is running at http://localhost:3333/v1");
console.log("📚 Docs is available at http://localhost:3333/v1/openapi");
