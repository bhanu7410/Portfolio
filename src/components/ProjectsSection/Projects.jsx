import { useState } from "react";

import Card from "../util/Card";
import ProjectItem from "./ProjectItem";

import { projectsData } from "./data";

export default function Projects() {
	const [hoveredProject, setHoveredProject] = useState(1);

	return (
		<Card>
			<div className="text-2xl">Personal Projects</div>
			<div className="mt-5 flex flex-col">
				<div className="mr-2">
					{projectsData.map((project) => (
						<ProjectItem
							key={project.index}
							project={project}
							onHover={() => setHoveredProject(project.index)}
						/>
					))}
				</div>
			</div>
		</Card>
	);
}
