import React from "react"
import target_blank from "./target_blank"

interface ExtAnchorProps extends React.ComponentProps<"a"> {
	href: string
}

// Ex:
//
// <ExtAnchor href="TODO">Hello, world!</ExtAnchor>
// -> <a href="TODO" {...target_blank}>Hello, world!</ExtAnchor>
//
export default function ExtAnchor({ href, ...props }: ExtAnchorProps) {
	return <a href={href} {...props} {...target_blank} />
}
