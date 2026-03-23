import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  left.add(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});

Deno.test("3/3 - 1/3 = 2/3 is roughly 0.67", () => {
  const left = new Fraction(3, 3);
  const right = new Fraction(1, 3);

  left.subtract(right);

  assertAlmostEquals(left.toFloat(0.01), 0.67);
});

Deno.test("4/4 * 1/2 = 2/4 is roughly 0.5", () => {
  const left = new Fraction(4, 4);
  const right = new Fraction(1, 2);

  left.multiply(right);

  assertAlmostEquals(left.toFloat(0.01), 0.5);
});

Deno.test("10/10 / 2/10 = 5/10 is roughly 0.5", () => {
  const left = new Fraction(10, 10);
  const right = new Fraction(2, 10)

  left.divide(right);

  assertAlmostEquals(left.toFloat(0.01), 5);
});

Deno.test("toString()", () => {
  const fraction = new Fraction(3, 4);
  const fractionString = fraction.toString();

  assertEquals(fractionString, "3/4")
});

Deno.test("parse()", () => {
  const fraction = Fraction.parse("3/4");
  const fractionString = fraction.toString();

  assertEquals(fractionString, "3/4");
});