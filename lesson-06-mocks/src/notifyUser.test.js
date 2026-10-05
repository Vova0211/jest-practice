import { notifyUser } from "./notifyUser.js";

test("notifyUser: вызывает mailer.send с нужными аргументами (AAA)", () => {
    const storage = { send: jest.fn() }

    notifyUser(storage, { email: 'example@mail.com' }, 'Hello')

    expect(storage.send).toHaveBeenCalledTimes(1)
    expect(storage.send).toHaveBeenCalledWith('example@mail.com', 'Hello')
})


test("notifyUser: без email — ошибка, mailer.send не вызывается", () => {
    const storage = { send: jest.fn() }

    const res = () => notifyUser(storage, {}, 'Hello')

    expect(res).toThrow('У пользователя нет email')
    expect(storage.send).not.toHaveBeenCalled()
});
