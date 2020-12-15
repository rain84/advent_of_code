//  https://adventofcode.com/2020/day/1

const { dates } = require('./input')

// Big O === 2*n
const get2DatesForSum = (sum) => (dates) => {
	const complements = dates.reduce((acc, val) => {
		const complement = sum - val
		acc[complement] = val
		return acc
	}, {})

	const result = []
	for (const date of dates) if (complements[date]) return [date, complements[date]]

	return result
}

// Big O === n^2
const get3DatesForSum = (sum) => (dates) => {
	dates.sort()
	const mapOfDates = dates.reduce((acc, val) => {
		acc[val] = true
		return acc
	}, {})

	for (let i = 0; i < dates.length; i++) {
		const date1 = dates[i]

		for (let j = i + 1; j < dates.length; j++) {
			const date2 = dates[j]
			const date3 = sum - date1 - date2

			if (mapOfDates[date3]) return [date1, date2, date3]
		}
	}

	return []
}

const run = () => {
	const multiply = (a, b) => a * b

	const res1 = get2DatesForSum(2020)(dates).reduce(multiply)
	const res2 = get3DatesForSum(2020)(dates).reduce(multiply)

	console.log(res1, res2)
}

module.exports = { run }
