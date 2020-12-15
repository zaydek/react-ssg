import React, { useEffect } from "react"

interface Title {
	title: string
	children?: React.ReactNode
}

// `<Title>` is a composable side-effect for mounting and unmounting `document.title`.
export default function Title({ title, children }: Title) {
	useEffect(() => {
		const originalTitle = document.title
		document.title = title
		return () => {
			document.title = originalTitle
		}
	}, [title])
	return <>{children}</>
}
