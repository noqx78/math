import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { numbers } from "./gcd.ts"

Deno.test("Grösster Gemeinsamer Teiler", () => {
    const number = new numbers(18, 27);
    const result = number.gcdBruteForce(number.numerator, number.denominator);

    assertEquals(result, 9);
});

Deno.test("Bruch kürzen", () => {
    const number = new numbers(18, 27);
    number.cancel()

    assertEquals(number.numerator, 2);
    assertEquals(number.denominator, 3);
});
