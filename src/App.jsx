import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import linkedinLogo from "./assets/LinkedIn Logo Icon.svg";
import githubLogo from "./assets/github-mark-white.svg";

import "./App.css";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
	return (
		<div className="h-screen w-screen bg-[rgba(17,17,17,1)] font-(family-name:--font-monaco) text-white selection:bg-orange-400 selection:text-white lg:px-20">
			<Header />
		</div>
	);
}

export default App;
