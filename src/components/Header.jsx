import Card from "./Card";

import linkedinLogo from "../assets/LinkedIn Logo Icon.svg";
import githubLogo from "../assets/github-mark-white.svg";
import pin from "../assets/pin.svg";
import mongodbLogo from "../assets/MongoDB.svg";
import reactLogo from "../assets/react.svg";
import expressLogo from "../assets/Express Icon.svg";
import nodejsLogo from "../assets/Node.js Icon.svg";
import nextjsLogo from "../assets/Next.js Icon.svg";
import typescriptLogo from "../assets/TypeScript Icon.svg";

import IconPop from "./IconPop";
import SocialIconButton from "./SocialIconButton";

export default function Header() {
	return (
		<Card>
			<div className="flex h-full items-center justify-start">
				<div className="inline-block grow text-4xl">Bhanu Prabhath</div>

				<SocialIconButton
					icon={githubLogo}
					hoverColor={
						"hover:border-neutral-600 hover:bg-neutral-600/15"
					}
				/>
				<SocialIconButton
					icon={linkedinLogo}
					hoverColor={"hover:border-blue-500 hover:bg-blue-500/15"}
				/>

				<div className="group mr-2 inline-block flex-wrap rounded-xl border-2 border-stone-600/50 p-3 hover:cursor-pointer hover:border-orange-500 hover:bg-orange-500/15">
					<span className="flex items-center gap-1">
						Resume
						<span className="max-w-0 overflow-hidden opacity-0 transition-all duration-200 ease-in group-hover:max-w-[20px] group-hover:opacity-100">
							→
						</span>
					</span>
				</div>
			</div>

			<div className="group text-lg text-gray-400">
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
				I'm a full stack developer specializing{" "}
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
