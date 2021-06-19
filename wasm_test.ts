const wasmCode = await Deno.readFile("main.wasm");
  const wasmModule = new WebAssembly.Module(wasmCode);
  const wasmInstance = new WebAssembly.Instance(wasmModule);
  const add = wasmInstance.exports.add as CallableFunction
  console.log(add(3,2).toString());