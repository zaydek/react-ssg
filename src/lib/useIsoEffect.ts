import { useEffect, useLayoutEffect } from "react"

// prettier-ignore
export default typeof window !== "undefined"
	? useLayoutEffect
	: useEffect
