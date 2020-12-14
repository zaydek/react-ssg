import * as React from "react"

function DropDownButton({ ...props }) {
	return (
		<button className="vstack align-start space-6 px-24 py-20 pt-24 touch:bg-gray-50" {...props}>
			<div className="h-8 bg-gray-400 rounded-full" data-stagger-1 />
			<div className="h-8 bg-gray-300 rounded-full" data-stagger-2 />
		</button>
	)
}

function toArray(value: any) {
	return [value].flat()
}

function Divided({ children }: { children: React.ReactNode }) {
	return (
		<React.Fragment>
			{toArray(children).map((each, x) => (
				<React.Fragment key={x}>
					{x > 0 && <hr />}
					{each}
				</React.Fragment>
			))}
		</React.Fragment>
	)
}

function DropDown({ children }: { children: React.ReactNode }) {
	return (
		// prettier-ignore
		<div className="w-224 bg-white rounded-12 shadow shadow-px shadow-xs shadow-lg overflow-hidden">
			<Divided>
				{children}
			</Divided>
		</div>
	)
}

function VideoPreview() {
	return (
		<div className="hstack space-16">
			<div className="w-160">
				<div className="bg-gray-300" style={{ paddingBottom: "56.25%" }} />
			</div>
			<div className="spacer vstack align-start space-6">
				<div className="h-8 bg-gray-400 rounded-full" data-stagger-1 />
				<div className="h-8 bg-gray-300 rounded-full" data-stagger-2 />
				<div className="spacer" />
			</div>
		</div>
	)
}

function range(to: number) {
	return Array(to)
		.fill(undefined)
		.map((_, x) => x)
}

export default function StackDemo() {
	return (
		<>
			<div className="sticky t-0">
				<div className="hstack space-16 px-24 py-16 bg-white">
					<div className="w-32 h-32 bg-gray-300 rounded-full" />
					<div className="w-128 h-48 bg-gray-300 rounded-full" />
					<div className="spacer" />
					<div className="w-32 h-32 bg-gray-300 rounded-full" />
					<div className="w-32 h-32 bg-gray-300 rounded-full" />
					<div className="w-32 h-32 bg-gray-300 rounded-full" />
					<div className="group zstack">
						<div className="w-32 h-32 bg-gray-300 rounded-full" />
						<div className="- group-touch:+ place-br py-12 transform y-100">
							<DropDown>
								<DropDownButton onClick={() => console.log("Hello, world!")} />
								<DropDownButton onClick={() => console.log("Hello, world!")} />
								<DropDownButton onClick={() => console.log("Hello, world!")} />
								<DropDownButton onClick={() => console.log("Hello, world!")} />
							</DropDown>
						</div>
					</div>
				</div>
			</div>
			{/* App */}
			<div className="hstack space-24 p-24 bg-gray-50">
				{/* LHS */}
				<div className="spacer vstack">
					<div className="w-full bg-gray-300" style={{ paddingBottom: "56.25%" }} />
					<div className="spacer" />
				</div>
				{/* RHS */}
				<div className="- lg:+ vstack space-24 w-448">
					{/* Up next */}
					<div className="hstack">
						<div className="w-24 h-24 bg-gray-300 rounded-full" />
						<div className="spacer" />
						<div className="w-24 h-24 bg-gray-300 rounded-full" />
					</div>
					{/* Recommended */}
					<VideoPreview />
					<hr />
					{range(8).map(x => (
						<VideoPreview key={x} />
					))}
				</div>
			</div>
		</>
	)
}
