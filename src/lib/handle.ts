// Go-style error handling.
//
// https://dev.to/sobiodarlington/better-error-handling-with-async-await-2e5m
export default async function handle<T>(promise: Promise<T>) {
	try {
		const data = await promise
		return [data, undefined]
	} catch (err) {
		return await Promise.resolve([undefined, err])
	}
}
