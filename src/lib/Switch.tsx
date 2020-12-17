import React from "react"

// Ex:
//
// <Case case={...}>
//   ...
// <Case>
//
interface CaseProps {
	case: any
	children?: React.ReactNode
}

export function Case({ children }: CaseProps) {
	return <>{children}</>
}

// Ex:
//
// <Switch on={...}>
//   <Case case={...}>
//     ...
//   <Case>
//   <Case case={...}>
//     ...
//   <Case>
//   <Case case={...}>
//     ...
//   <Case>
// </Switch>
//
interface SwitchProps {
	on: any
	children: React.ReactElement<CaseProps>[]
}

export function Switch({ on, children }: SwitchProps) {
	return children.find(each => each.props.case === on) || null
}
