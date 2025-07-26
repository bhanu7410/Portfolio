import { useState } from "react";

import Card from "../util/Card";
import ProjectItem from "./ProjectItem";

import reactIcon from "../../assets/ICONS/react.svg";
import image from "../../assets/ProjectIcons/MultiScan.png";

import { projectsData } from "./data";

export default function Projects() {
	const [hoveredProject, setHoveredProject] = useState(1);

	return (
		<Card>
			<div className="text-2xl">Personal Projects</div>
			<div className="mt-5 grid grid-cols-2">
				<div className="mr-2">
					{projectsData.map((project) => (
						<ProjectItem
							key={project.index}
							project={project}
							onHover={() => setHoveredProject(project.index)}
						/>
					))}
				</div>
				<div className="flex h-full w-full items-center justify-center">
					<div className="hidden h-[300px] w-full rounded bg-blue-900 text-xl font-bold sm:flex sm:flex-col sm:items-center sm:justify-between">
						<div className="rounded pt-2 text-left text-xl">
							{hoveredProject && `0${hoveredProject}`} Keep your
							Websites Protected
						</div>
						<div className="group relative flex items-end justify-center">
							<div>
								<img src={image} alt="" className="scale-100" />
							</div>
							{/* Tech icons container */}
							<div className="absolute bottom-20">
								{[
									reactIcon,
									reactIcon,
									reactIcon,
									reactIcon,
									reactIcon,
								].map((icon, index, arr) => (
									<div
										key={index}
										className="absolute size-20 rounded bg-amber-50 opacity-0 transition-all duration-300 ease-out group-hover:-translate-y-[150px] group-hover:opacity-100"
										style={{
											transform: `translateX(${(index - (arr.length - 1) / 2) * 5}rem)`,
											// rotate(${
											// 	(index - (arr.length - 1) / 2) *
											// 	20
											// }deg)`,
										}}
									>
										<img
											src={icon}
											alt=""
											className="size-full"
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Card>
	);
}
