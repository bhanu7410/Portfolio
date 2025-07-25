export default function ProjectItem({ project, onHover, onLeave }) {
	return (
		<div onMouseEnter={onHover} onMouseLeave={onLeave} className="p-2 pb-4">
			<div className="text-lg font-semibold">{project.title}</div>
			<div className="mt-2 text-balance opacity-80">
				{project.description}
			</div>

			<div className="mt-6">
				<a href={project.githubSourceCode} target="_blank" className="">
					<div className="inline cursor-pointer rounded border-2 p-2">
						Github Source Code
					</div>
				</a>
			</div>
		</div>
	);
}
