import { divideAsync } from "./divideAsync.js";

test("divideAsync: делит два числа (resolves / await)", async () => {
    const res = await divideAsync(10, 2)

    expect(res).toBe(5)
})

test("divideAsync: деление на ноль → промис отклоняется (rejects)", async () => {
    const res = () => divideAsync(10, 0)

    await expect(res).rejects.toThrow('Деление на ноль')
});
