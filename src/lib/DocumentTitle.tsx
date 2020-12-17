import React from "react"
import useIsoEffect from "./useIsoEffect"

// Ex:
//
// <DocumentTitle title="...">
//   {children}
// </DocumentTitle>
//
// Or
//
// <DocumentTitle title="..." />
//
interface DocumentTitleProps {
	title: string
	children?: React.ReactNode
}

export default function DocumentTitle({ title, children }: DocumentTitleProps) {
	useIsoEffect(() => {
		const originalTitle = document.title
		document.title = title
		return () => {
			document.title = originalTitle
		}
	}, [title])

	return <>{children}</>
}
