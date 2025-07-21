import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import linkedinLogo from "./assets/LinkedIn Logo Icon.svg";
import githubLogo from "./assets/github-mark-white.svg";

import "./App.css";

import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
	return (
		<div className="font-monaco h-screen w-screen bg-[rgba(17,17,17,1)] text-white selection:bg-orange-400 selection:text-white lg:px-20">
			{/* <Navbar /> */}
			<Card>
				<div className="flex h-full items-center justify-start">
					<div className="inline-block grow text-4xl">
						Bhanu Prabhath
					</div>
					<div className="group mr-2 inline-block size-12 flex-wrap rounded-xl border-2 border-stone-600/50 p-2 hover:cursor-pointer hover:border-orange-500 hover:bg-orange-500/15">
						<img
							src={githubLogo}
							alt=""
							className="grayscale transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:grayscale-0"
						/>
					</div>
					<div className="group mr-2 inline-block size-12 flex-wrap rounded-xl border-2 border-stone-600/50 p-2 hover:cursor-pointer hover:border-orange-500 hover:bg-orange-500/15">
						<img
							src={linkedinLogo}
							alt=""
							className="grayscale transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:grayscale-0"
						/>
					</div>
					<div className="group mr-2 inline-block size-12 flex-wrap rounded-xl border-2 border-stone-600/50 p-2 hover:cursor-pointer hover:border-orange-500 hover:bg-orange-500/15">
						<img
							src={githubLogo}
							alt=""
							className="transition-transform duration-300 group-hover:-translate-y-0.5"
						/>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default App;
