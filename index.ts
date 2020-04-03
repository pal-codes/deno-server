import { serve } from "https://deno.land/std@v0.38.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for (const req of s) {
  req.respond({ body: "Hello World\n" });
}
