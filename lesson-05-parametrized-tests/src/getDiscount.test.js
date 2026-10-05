import { getDiscount } from "./getDiscount.js";

// Задание 3: покройте функцию через test.each, ОБЯЗАТЕЛЬНО проверив границы
// 1000, 2000, 5000 (значение ровно на границе попадает в новую ступень).

test.each([
  { total: 500, discount: 0 },
  { total: 1000, discount: 5 },
  { total: 1500, discount: 5 },
  { total: 1999, discount: 5 },
  { total: 2000, discount: 10 },
  { total: 2500, discount: 10 },
  { total: 4999, discount: 10 },
  { total: 5000, discount: 20 },
  { total: 5500, discount: 20 }
])('total $total have $discount\% discount', ({ total, discount }) => {
  expect(getDiscount(total)).toBe(discount)
})