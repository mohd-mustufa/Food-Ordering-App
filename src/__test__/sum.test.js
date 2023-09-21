import sum from "./sum";

test("Sum function should calculate the sum of 2 nums", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
