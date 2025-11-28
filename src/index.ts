import openapi from "@elysiajs/openapi";
import { Elysia } from "elysia";

new Elysia({
  prefix: "v1",
})
  .use(openapi())
  .get("/", () => "Hello Elysia")
  .get("/users", () => "Get users")
  .listen(3333);

console.log("🦊 Server is running at http://localhost:3333/v1");
console.log("📚 Docs is available at http://localhost:3333/v1/openapi");
