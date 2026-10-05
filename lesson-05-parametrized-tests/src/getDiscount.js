/**
 * @param {number} total
 * @returns {number}
 */

export function getDiscount(total) {
	if (total < 1000)
		return 0
	else if (total < 2000)
		return 5
	else if (total < 5000)
		return 10
	else return 20
}