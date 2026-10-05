import { getUserName } from "./getUserName.js";

test("getUserName: возвращает имя найденного пользователя (mockReturnValue)", () => {
  const storage = { findById: jest.fn().mockReturnValue({ id: 42, name: "Аня" }) }

  const res = getUserName(storage, 42)

  expect(res).toBe('Аня')
  expect(storage.findById).toHaveBeenCalledTimes(1)
  expect(storage.findById).toHaveBeenCalledWith(42)
});

test("getUserName: не найден → «Аноним»", () => {
  const storage = { findById: jest.fn().mockReturnValue(undefined) }

  const res = getUserName(storage, 42)

  expect(res).toBe('Аноним')
  expect(storage.findById).toHaveBeenCalledTimes(1)
})
