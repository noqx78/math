import { assertAlmostEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("area", () => {
  // Given
  const circle = new Circle(new Point2D(1, 1), 5);

  // When
  const actual = circle.area();

  // Then
  assertAlmostEquals(actual, 78.54, 0.01);
});

Deno.test("diameter", () => {
  // Given
  const circle = new Circle(new Point2D(1, 1), 5);

  // When
  const actual = circle.diameter();

  // Then
  assertAlmostEquals(actual, 10, 0.01);
});

Deno.test("circumference", () => {
  // Given
  const rectangle = new Rectangle(new Point2D(1, 1), new Point2D(4, 5));

  // When
  const actual = rectangle.circumference();

  // Then
  assertAlmostEquals(actual, 22, 0.01);
});

