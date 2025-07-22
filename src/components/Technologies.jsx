import mongodbLogo from "../assets/ICONS/MongoDB.svg";
import reactLogo from "../assets/ICONS/react.svg";
import expressLogo from "../assets/ICONS/Express Icon.svg";
import nodejsLogo from "../assets/ICONS/Node.js Icon.svg";
import figmaLogo from "../assets/ICONS/Figma Icon.svg";
import postgresSqlLogo from "../assets/ICONS/PostgresSQL Icon.svg";
import gitLogo from "../assets/ICONS/Git Icon.svg";

import Card from "./util/Card";
import TechIcon from "./TechInfo";

export default function Technologies() {
	return (
		<Card>
			<div className="pb-4 text-4xl">Current Technologies </div>
			<div>
				I&apos;m proficient in a range of modern technologies that help
				me to build highly functional solutions. These are some of my
				main technologies.
			</div>
			<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				<TechIcon
					info={{
						title: "Figma",
						description: "Design Tool",
						src: figmaLogo,
						imgBg: "bg-green-800",
						hoverBg: "hover:bg-green-800",
					}}
				/>
				<TechIcon
					info={{
						title: "Nodejs",
						description: "Backend",
						src: nodejsLogo,
						imgBg: "bg-lime-900",
						hoverBg: "hover:bg-lime-900",
					}}
				/>
				<TechIcon
					info={{
						title: "React",
						description: "JavaScript Library",
						src: reactLogo,
						imgBg: "bg-indigo-950",
						hoverBg: "hover:bg-indigo-950",
					}}
				/>
				<TechIcon
					info={{
						title: "Express",
						description: "Backend Tool",
						src: expressLogo,
						imgBg: "bg-neutral-100",
						hoverBg: "hover:bg-neutral-100",
					}}
				/>
				<TechIcon
					info={{
						title: "MongoDB",
						description: "NoSQL Database",
						src: mongodbLogo,
						imgBg: "bg-lime-900",
						hoverBg: "hover:bg-lime-900",
					}}
				/>
				<TechIcon
					info={{
						title: "Git",
						description: "Version Control",
						src: gitLogo,
						imgBg: "bg-orange-900",
						hoverBg: "hover:bg-orange-900",
					}}
				/>
				<TechIcon
					info={{
						title: "PostgreSQL",
						description: "Sql Database",
						src: postgresSqlLogo,
						imgBg: "bg-blue-300",
						hoverBg: "hover:bg-blue-300",
					}}
				/>
			</div>
		</Card>
	);
}
