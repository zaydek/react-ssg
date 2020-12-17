const ERR_TO_LT_0 = "range: `to` must be greater than or equal to `0`"
const ERR_FROM_LT_0 = "range: `from` must be greater than or equal to `0`"
const ERR_FROM_LT_TO = "range: `from` must be less than or equal to `to`"
const ERR_STEP_LT_0 = "range: `step` must be greater than `0`"

// Ex:
//
// range(0) // -> []
// range(1) // -> [0]
// range(2) // -> [0, 2]
// range(4) // -> [0, 1, 2, 3]
// range(8) // -> [0, 1, 2, 3, 4, 5, 6, 7]
//
// range(4, 4) // -> []
// range(4, 8) // -> [4, 5, 6, 7]
//
export default function range(to: number): number[]
export default function range(from: number, to: number): number[]
export default function range(from: number, to: number, step: number): number[]
export default function range(from: number, to?: number, step?: number): number[] {
	if (to === undefined && step === undefined) {
		to = from
		if (to < 0) {
			throw new Error(ERR_TO_LT_0)
		}
		return Array(to)
			.fill(undefined)
			.map((_, x) => x)
	}
	if (from !== undefined && to !== undefined && step === undefined) {
		if (from < 0) {
			throw new Error(ERR_FROM_LT_0)
		} else if (from > to) {
			throw new Error(ERR_FROM_LT_TO)
		}
		return Array(to - from)
			.fill(undefined)
			.map((_, x) => from + x)
	}
	if (from !== undefined && to !== undefined && typeof step === "number") {
		if (from < 0) {
			throw new Error(ERR_FROM_LT_0)
		} else if (from > to) {
			throw new Error(ERR_FROM_LT_TO)
		} else if (step <= 0) {
			throw new Error(ERR_STEP_LT_0)
		}
		const arr = []
		for (let x = from; x < to; x += step) {
			arr.push(x)
		}
		return arr
	}
	return []
}
