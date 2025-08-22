import { useState, useEffect } from "react";

export default function ProjectItem({ project, onHover, onLeave }) {
	const [uRHereStatus, setUrHereStatus] = useState(false);
	const [displayedText, setDisplayedText] = useState("");
	const fullText = "You are here the Whole Time!";

	function handleUrHereStatus() {
		setUrHereStatus(true);
		console.log("You are here the Whole Time!");
	}

	const handleClick = () => {
		if (project.title === "Portfolio Website" && !uRHereStatus) {
			handleUrHereStatus();
		}
	};

	useEffect(() => {
		if (uRHereStatus) {
			let currentIndex = 0;
			const interval = setInterval(() => {
				if (currentIndex <= fullText.length) {
					setDisplayedText(fullText.slice(0, currentIndex));
					currentIndex++;
				} else {
					clearInterval(interval);
				}
			}, 20);
			return () => clearInterval(interval);
		}
	}, [uRHereStatus]);

	return (
		<div onMouseEnter={onHover} onMouseLeave={onLeave} className="p-2 pb-4">
			<div className="text-lg font-semibold">{project.title}</div>
			<div className="mt-2 opacity-80">{project.description}</div>

			<div className="mt-6 flex flex-col gap-5 sm:flex-row">
				<div>
					<a
						href={project.githubSourceCode}
						target="_blank"
						className=""
					>
						<div className="inline cursor-pointer rounded border-2 p-2 transition-all duration-200 hover:border-4 hover:border-r-0 hover:border-b-0 hover:border-gray-600 hover:bg-gray-500 hover:text-white">
							Github Source Code
						</div>
					</a>
				</div>
				{project.liveLink && (
					<div onClick={handleClick}>
						{project.title === "Portfolio Website" ? (
							<div className="inline cursor-pointer rounded border-2 p-2 transition-all duration-300 hover:border-4 hover:border-r-0 hover:border-b-0 hover:border-orange-600 hover:bg-orange-500 hover:text-black">
								Live Demo
							</div>
						) : (
							<a href="">
								<div className="inline cursor-pointer rounded border-2 p-2 transition-all duration-300 hover:border-4 hover:border-r-0 hover:border-b-0 hover:border-orange-600 hover:bg-orange-500 hover:text-black">
									Live Demo
								</div>
							</a>
						)}
					</div>
				)}
				{uRHereStatus && (
					<div className="bg-orange-500 text-gray-100">
						{displayedText}
					</div>
				)}
			</div>
		</div>
	);
}
