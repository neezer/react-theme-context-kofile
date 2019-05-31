import { verticalLinearGradient } from "../utils";

test("outputs something correct", () => {
  const pairs = [["#000", "0%"], ["#FFF", "100%"]];

  expect(verticalLinearGradient(pairs)).toBe(
    "linear-gradient(180deg, #000 0%, #FFF 100%)"
  );
});
