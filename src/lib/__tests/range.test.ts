import range from "../range"

test("range: range(to)", () => {
	expect(() => range(-1)).toThrow("range: `to` must be greater than or equal to `0`")

	expect(range(0)).toStrictEqual([])
	expect(range(1)).toStrictEqual([0])
	expect(range(2)).toStrictEqual([0, 1])
	expect(range(4)).toStrictEqual([0, 1, 2, 3])
	expect(range(8)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7])
})

test("range: range(from, to)", () => {
	expect(() => range(-1, 0)).toThrow("range: `from` must be greater than or equal to `0`")
	expect(() => range(0, -1)).toThrow("range: `from` must be less than or equal to `to`")

	// from=0
	expect(range(0, 0)).toStrictEqual([])
	expect(range(0, 0)).toStrictEqual([])
	expect(range(0, 1)).toStrictEqual([0])
	expect(range(0, 2)).toStrictEqual([0, 1])
	expect(range(0, 4)).toStrictEqual([0, 1, 2, 3])
	expect(range(0, 8)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7])

	// from=4
	expect(range(4, 4)).toStrictEqual([])
	expect(range(4, 8)).toStrictEqual([4, 5, 6, 7])
})

test("range: range(from, to, step)", () => {
	expect(() => range(-1, 0, 0)).toThrow("range: `from` must be greater than or equal to `0`")
	expect(() => range(0, -1, 0)).toThrow("range: `from` must be less than or equal to `to`")
	expect(() => range(0, 0, -1)).toThrow("range: `step` must be greater than `0`")

	// step=1
	expect(range(0, 0, 1)).toStrictEqual([])
	expect(range(0, 1, 1)).toStrictEqual([0])
	expect(range(0, 2, 1)).toStrictEqual([0, 1])
	expect(range(0, 4, 1)).toStrictEqual([0, 1, 2, 3])
	expect(range(0, 8, 1)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7])

	// step=2
	expect(range(0, 0, 2)).toStrictEqual([])
	expect(range(0, 1, 2)).toStrictEqual([0])
	expect(range(0, 2, 2)).toStrictEqual([0])
	expect(range(0, 4, 2)).toStrictEqual([0, 2])
	expect(range(0, 8, 2)).toStrictEqual([0, 2, 4, 6])

	// from=4 step=1
	expect(range(4, 4, 1)).toStrictEqual([])
	expect(range(4, 8, 1)).toStrictEqual([4, 5, 6, 7])

	// from=4 step=2
	expect(range(4, 4, 2)).toStrictEqual([])
	expect(range(4, 8, 2)).toStrictEqual([4, 6])
})
