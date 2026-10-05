import { isLeapYear } from "./isLeapYear.js";

// Задание 1: покройте функцию через test.each в форме МАССИВА МАССИВОВ.

test.each([
  [ 2024, true ],
  [ 2000, true ],
  [ 2023, false ],
  [ 1900, false ]
])("isLeap of %i is %s", (year, isLeap) => {
  expect(isLeapYear(year)).toBe(isLeap)
})










