import { fizzBuzz } from "./fizzBuzz.js";

// Задание 2: покройте функцию через test.each .

test.each([
  { value: 9, res: 'Fizz' },
  { value: 10, res: 'Buzz' },
  { value: 15, res: 'FizzBuzz' },
  { value: 4, res: '4' }
])('$value is $res', ({ value, res }) => {
  expect(fizzBuzz(value)).toBe(res)
})