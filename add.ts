import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";

Deno.test({
    name: "hello world #2",
    fn: () => {
      const x = 1 + 2;
      assertEquals(x, 3);
    },
  });