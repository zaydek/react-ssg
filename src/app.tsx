import A from "./A"
import B from "./B"
import DocumentTitle from "./lib/DocumentTitle"
import React, { createElement } from "react"
import { Link, Route, Switch } from "react-router-dom"

// TODO: Add `align-self`.
interface StackProps {
	// tag?: string | (() => JSX.Element)
	tag?: string
	alignSelf?: "start" | "center" | "end"
	align?: "start" | "center" | "end"
	space?: string
	// | "-1"
	// | "-2"
	// | "-3"
	// | "-4"
	// | "-5"
	// | "-6"
	// | "-7"
	// | "-8"
	// | "-9"
	// | "-10"
	// | "-12"
	// | "-14"
	// | "-16"
	// | "-18"
	// | "-20"
	// | "-24"
	// | "-28"
	// | "-32"
	// | "0"
	// | "1"
	// | "2"
	// | "3"
	// | "4"
	// | "5"
	// | "6"
	// | "7"
	// | "8"
	// | "9"
	// | "10"
	// | "12"
	// | "14"
	// | "16"
	// | "18"
	// | "20"
	// | "24"
	// | "28"
	// | "32"
	// | "36"
	// | "40"
	// | "48"
	// | "56"
	// | "64"
	// | "72"
	// | "80"
	// | "96"
	// | "112"
	// | "128"
	// | "144"
	// | "160"
	// | "192"
	// | "224"
	// | "256"
	// | "288"
	// | "320"
	// | "384"
	// | "448"
	// | "512"
	// | "576"
	// | "640"
	className?: string
	children?: React.ReactNode
}

/**
 * **HStack** stacks children horizontally.
 *
 * ![](https://i.ibb.co/z8frhcb/hstack.png)
 *
 * ```html
 * <div class="hstack">
 *   <div class="w-32 h-32 ..."></div>
 *   <div class="w-32 h-32 ..."></div>
 *   <div class="w-32 h-32 ..."></div>
 * </div>
 * ```
 */
function HStack({ tag, alignSelf, align, space, className, children, ...props }: StackProps) {
	return (
		<>
			{createElement(
				tag || "div",
				{
					// prettier-ignore
					className: [
						"hstack",
						align !== undefined && `align-${align}`,
						space !== undefined && `space-${space}`,
						className,
					].filter(Boolean).join(" "),
					...props,
				},
				children,
			)}
		</>
	)
}

/**
 * **VStack** stacks children vertically.
 *
 * ![](https://i.ibb.co/Xy21722/vstack.png)
 *
 * ```html
 * <div class="vstack">
 *   <div class="w-32 h-32 ..."></div>
 *   <div class="w-32 h-32 ..."></div>
 *   <div class="w-32 h-32 ..."></div>
 * </div>
 * ```
 */
function VStack({ tag, alignSelf, align, space, className, children, ...props }: StackProps) {
	return (
		<>
			{createElement(
				tag || "div",
				{
					// prettier-ignore
					className: [
						"vstack",
						alignSelf !== undefined && `align-self-${align}`,
						align !== undefined && `align-${align}`,
						space !== undefined && `space-${space}`,
						className,
					].filter(Boolean).join(" "),
					...props,
				},
				children,
			)}
		</>
	)
}

// TODO: Add `align-self`.
interface SpacerProps {
	tag?: string
	className?: string
	children?: React.ReactNode
}

function Spacer({ tag, className, children, ...props }: SpacerProps) {
	return (
		<>
			{createElement(
				tag || "div",
				{
					className: "spacer" + (!className ? "" : " " + className),
					...props,
				},
				children,
			)}
		</>
	)
}

interface NavItemProps {
	href: string
	children?: React.ReactNode
}

function NavItem({ href, children }: NavItemProps) {
	return (
		<Link className="group" to={href}>
			<HStack className="w-160 h-40 bg-white bg-gray-100 rounded-full">
				<div>{children}</div>
			</HStack>
		</Link>
	)
}

function NavHStack() {
	return (
		<HStack space="16">
			<NavItem href="/">
				<div>React SSG</div>
			</NavItem>
			<Spacer />
			<NavItem href="/a">
				<div>Open /a</div>
			</NavItem>
			<NavItem href="/b">
				<div>Open /b</div>
			</NavItem>
		</HStack>
	)
}

// mx-auto px-32 py-24 w-wrapper
function Page({ title, children }: { title: string; children?: React.ReactNode }) {
	return (
		<DocumentTitle title={title}>
			<VStack space="64" className="container px-32 py-24">
				<NavHStack />
				{children}
			</VStack>
		</DocumentTitle>
	)
}

export default function App() {
	return (
		<Switch>
			{/* 200 */}
			<Route path="/" exact>
				<Page title="Page /">
					<div>Hello, world!</div>
				</Page>
			</Route>
			<Route path="/a" exact>
				<Page title="Page /a">
					<A />
				</Page>
			</Route>
			<Route path="/b" exact>
				<Page title="Page /b">
					<B />
				</Page>
			</Route>
			{/* 404 */}
			<Route path="/">
				<div>TODO</div>
			</Route>
		</Switch>
	)
}
