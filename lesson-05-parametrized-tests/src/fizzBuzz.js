/**
 * @param {number} n
 */

export function fizzBuzz(n) {
	const isFactorOf = (x) => n % x === 0

	if (isFactorOf(5) && isFactorOf(3))
		return 'FizzBuzz'
	else if (isFactorOf(5))
		return 'Buzz'
	else if (isFactorOf(3))
		return 'Fizz'
	else return `${n}`
}