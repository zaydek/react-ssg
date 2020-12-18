export function check(fn: Function) {
	try {
		const ret = fn()
		return [ret, null]
	} catch (err) {
		return [null, err]
	}
}

export async function checkAsync<T>(promise: Promise<T>) {
	try {
		const ret = await promise
		return [ret, null]
	} catch (err) {
		return [null, err]
	}
}
