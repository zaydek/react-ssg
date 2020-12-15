import React, { useEffect } from "react"

interface DocumentTitleProps {
	title: string
	children?: React.ReactNode
}

export default function DocumentTitle({ title, children }: DocumentTitleProps) {
	useEffect(() => {
		const originalTitle = document.title
		document.title = title
		return () => {
			document.title = originalTitle
		}
	}, [title])
	return <>{children}</>
}
