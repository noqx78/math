import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { numbers } from "./gcd.ts"

Deno.test("Grösster Gemeinsamer Teiler", () => {
    const number = new numbers(18, 27);
    const result = number.gcdBruteForce(18, 27);

    assertEquals(result, 9);
});

Deno.test("Bruch kürzen", () => {
    const number = new numbers(18, 27);
    number.cancel()

    assertEquals(number.numerator, 2);
    assertEquals(number.denominator, 3);
});

const gcdTests = [
    { a: 1, b: 1, gcd: 1 },
    { a: 1, b: 2, gcd: 1 },
    { a: 2, b: 2, gcd: 2 },
    { a: 3, b: 4, gcd: 1 },
    { a: 6, b: 9, gcd: 3 },
    { a: 81, b: 36, gcd: 9 },
];

Deno.test("Grösster Gemeinsamer Teiler (Euklid-Algorithmus)", () => {
    for (const { a, b, gcd } of gcdTests) {
        const num = new numbers(a, b);
        const result = num.gcdEuclid(a, b);
        assertEquals(result, gcd);
    }
}); 

Deno.test("Aufgabe 4: Automatische Kürzung", () => {
    const fraction = new numbers(18, 27);
    assertEquals(fraction.numerator, 2);
    assertEquals(fraction.denominator, 3);
});

Deno.test("Aufgabe 4: Automatische Kürzung - bereits gekürztem Bruch", () => {
    const fraction = new numbers(2, 3);
    assertEquals(fraction.numerator, 2);
    assertEquals(fraction.denominator, 3);
});

Deno.test("Aufgabe 4: Automatische Kürzung - Bruch mit 1 als Nenner", () => {
    const fraction = new numbers(5, 1);
    assertEquals(fraction.numerator, 5);
    assertEquals(fraction.denominator, 1);
});
