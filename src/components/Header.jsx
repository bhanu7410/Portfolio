import Card from "./util/Card";

import linkedinLogo from "../assets/ICONS/LinkedIn Logo Icon.svg";
import githubLogo from "../assets/ICONS/github-mark-white.svg";
import mongodbLogo from "../assets/ICONS/MongoDB.svg";
import reactLogo from "../assets/ICONS/react.svg";
import expressLogo from "../assets/ICONS/Express Icon.svg";
import nodejsLogo from "../assets/ICONS/Node.js Icon.svg";
import nextjsLogo from "../assets/ICONS/Next.js Icon.svg";
import typescriptLogo from "../assets/ICONS/TypeScript Icon.svg";
import pin from "../assets/pin.svg";
import resumePDF from "/Resume.pdf";

import IconPop from "./util/IconPop";
import SocialIconButton from "./util/SocialIconButton";

export default function Header() {
	function resumeDownload() {
		window.open(resumePDF);
	}
	return (
		<Card>
			<div className="flex h-full items-center justify-start">
				<div className="inline-block grow text-2xl">Bhanu Prabhath</div>

				<SocialIconButton
					icon={githubLogo}
					hoverColor={
						"hover:border-neutral-600 hover:bg-neutral-600/15"
					}
					url={"https://github.com/bhanu7410"}
				/>
				<SocialIconButton
					icon={linkedinLogo}
					hoverColor={"hover:border-blue-500 hover:bg-blue-500/15"}
					url={
						"https://www.linkedin.com/in/bhanu-prabhath-9a58201b7/"
					}
				/>

				<div
					onClick={resumeDownload}
					className="group mr-2 inline-block h-12 -translate-y-0.75 flex-wrap rounded-xl border-2 border-stone-600/50 p-2 hover:cursor-pointer hover:border-orange-500 hover:bg-orange-500/15"
				>
					<div className="translate-y-0.5 transition-transform duration-300 group-hover:-translate-y-0.25">
						Resume
					</div>
				</div>
			</div>

			<div className="group inline-block text-gray-400">
				<a
					href="https://www.google.com/maps/place/Hyderabad,+Telangana,+India"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center hover:cursor-pointer hover:underline hover:decoration-dotted"
				>
					<img src={pin} alt="" className="h-4 w-auto grayscale" />
					<div>Telangana, India</div>
				</a>
			</div>

			<div className="mt-4 text-white">
				I&apos;m a Full Stack Developer specializing{" "}
				<IconPop
					icons={[
						{ src: mongodbLogo, color: "bg-green-300" },
						{ src: expressLogo, color: "bg-neutral-100" },
						{ src: reactLogo, color: "bg-indigo-950" },
						{ src: nodejsLogo, color: "bg-zinc-700" },
					]}
				>
					MERN
				</IconPop>{" "}
				stack development. Open to learn new technologies and
				collaborate on exciting projects.
			</div>

			<div className="mt-4 text-gray-300">
				Currently working my way through{" "}
				<IconPop icons={[{ src: nextjsLogo, color: "bg-white" }]}>
					Next JS
				</IconPop>{" "}
				and{" "}
				<IconPop icons={[{ src: typescriptLogo, color: "" }]}>
					TypeScript
				</IconPop>
				.
			</div>
		</Card>
	);
}
