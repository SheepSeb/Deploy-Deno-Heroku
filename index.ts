import { serve } from "https://deno.land/std@0.93.0/http/server.ts";
import { parse } from 'https://deno.land/std/flags/mod.ts';

const { args } = Deno;
const DEFAULT_PORT = 8000;
const argPort = parse(args).port;

const s = serve({ port: argPort ? Number(argPort) : DEFAULT_PORT });
console.log("It's working");

const wasmCode = await Deno.readFile("main.wasm");
  const wasmModule = new WebAssembly.Module(wasmCode);
  const wasmInstance = new WebAssembly.Instance(wasmModule);
  const add = wasmInstance.exports.add as CallableFunction
  const payload = add(24,7).toString();

for await (const req of s) {
  req.respond({ body: payload});
}