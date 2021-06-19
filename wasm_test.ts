import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";

Deno.test({
    name:'WebAssembly case add',
    fn : async () =>{
        const wasmCode = await Deno.readFile("main.wasm");
        const wasmModule = new WebAssembly.Module(wasmCode);
        const wasmInstance = new WebAssembly.Instance(wasmModule);
        const add = wasmInstance.exports.add as CallableFunction
        const x = add(3,2);

        assertEquals(x,5);
    }
});




  