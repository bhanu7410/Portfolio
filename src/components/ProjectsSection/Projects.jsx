import { useState } from "react";

import Card from "../util/Card";
import ProjectItem from "./ProjectItem";
import image from "../../assets/ProjectIcons/MultiScan.png";

import { projectsData } from "./data";

export default function Projects() {
	const [hoveredProject, setHoveredProject] = useState(null);

	return (
		<Card>
			<div className="text-2xl">Personal Projects</div>
			<div className="mt-5 grid grid-cols-2">
				<div className="">
					{projectsData.map((project) => (
						<ProjectItem
							key={project.index}
							project={project}
							onHover={() => setHoveredProject(project.index)}
							onLeave={() => setHoveredProject(null)}
						/>
					))}
				</div>
				<div className="flex h-full w-full items-center justify-center">
					<div className="hidden h-[300px] w-full rounded bg-blue-900 text-xl font-bold sm:flex sm:flex-col sm:items-center sm:justify-end">
						<div className="rounded pb-5">
							{hoveredProject && `0${hoveredProject}`}
							Keep your Website Protected
						</div>
						<div className="h-3/4 w-3/4 overflow-hidden rounded bg-amber-50 text-black">
							<img src={image} alt="" className="h-full w-full" />
						</div>
					</div>
				</div>
			</div>
		</Card>
	);
}
