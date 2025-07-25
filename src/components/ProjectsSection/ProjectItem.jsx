export default function ProjectItem({ project, onHover, onLeave }) {
	return (
		<div
			onMouseEnter={onHover}
			onMouseLeave={onLeave}
			className="mb-4 cursor-pointer p-2"
		>
			<div className="text-lg font-semibold">{project.title}</div>
			<div className="mt-2 opacity-80">{project.description}</div>

			<div className="mt-6">
				<a href={project.githubSourceCode} target="_blank" className="">
					<div className="inline rounded border-2 p-2">
						Github Source Code
					</div>
				</a>
			</div>
		</div>
	);
}
