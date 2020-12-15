import React from "react"

// Ex:
//
// <Title title="...">
//   {children}
// </Title>
//
// Or
//
// <Title title="..." />
//
interface DocumentTitleProps {
	title: string
	children?: React.ReactNode
}

export default function Title(props: DocumentTitleProps) {
	React.useEffect(() => {
		const originalTitle = document.title
		document.title = props.title
		return () => {
			document.title = originalTitle
		}
	}, [props.title])
	return <>{props.children}</>
}
