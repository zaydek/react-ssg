import { toKebabCase, toTitleCase } from "../case"

test("toKebabCase", () => {
	expect(toKebabCase("")).toBe("")

	expect(toKebabCase("hello-world")).toBe("hello-world")
	expect(toKebabCase("hello-world-2")).toBe("hello-world-2")
	expect(toKebabCase("hello-world-22")).toBe("hello-world-22")

	expect(toKebabCase("HelloWorld")).toBe("hello-world")
	expect(toKebabCase("HelloWorld2")).toBe("hello-world-2")
	expect(toKebabCase("HelloWorld22")).toBe("hello-world-22")

	expect(toKebabCase(toTitleCase("hello-world"))).toBe("hello-world")
	expect(toKebabCase(toTitleCase("hello-world-2"))).toBe("hello-world-2")
	expect(toKebabCase(toTitleCase("hello-world-22"))).toBe("hello-world-22")

	expect(toKebabCase(toTitleCase("hello-world"))).toBe(toKebabCase(toTitleCase("hello-world")))
	expect(toKebabCase(toTitleCase("hello-world-2"))).toBe(toKebabCase(toTitleCase("hello-world-2")))
	expect(toKebabCase(toTitleCase("hello-world-22"))).toBe(toKebabCase(toTitleCase("hello-world-22")))
})

test("toTitleCase", () => {
	expect(toTitleCase("")).toBe("")

	expect(toTitleCase("hello-world")).toBe("HelloWorld")
	expect(toTitleCase("hello-world-2")).toBe("HelloWorld2")
	expect(toTitleCase("hello-world-22")).toBe("HelloWorld22")

	expect(toTitleCase("HelloWorld")).toBe("HelloWorld")
	expect(toTitleCase("HelloWorld2")).toBe("HelloWorld2")
	expect(toTitleCase("HelloWorld22")).toBe("HelloWorld22")

	expect(toTitleCase(toKebabCase("HelloWorld"))).toBe("HelloWorld")
	expect(toTitleCase(toKebabCase("HelloWorld2"))).toBe("HelloWorld2")
	expect(toTitleCase(toKebabCase("HelloWorld22"))).toBe("HelloWorld22")

	expect(toTitleCase(toKebabCase("HelloWorld"))).toBe(toTitleCase(toKebabCase("HelloWorld")))
	expect(toTitleCase(toKebabCase("HelloWorld2"))).toBe(toTitleCase(toKebabCase("HelloWorld2")))
	expect(toTitleCase(toKebabCase("HelloWorld22"))).toBe(toTitleCase(toKebabCase("HelloWorld22")))
})
