function check(fn) {
	try {
		const ret = fn()
		return [ret, null]
	} catch (err) {
		return [null, err]
	}
}

async function checkAsync(promise) {
	try {
		const ret = await promise
		return [ret, null]
	} catch (err) {
		return [null, err]
	}
}

module.exports = {
	check,
	checkAsync,
}
