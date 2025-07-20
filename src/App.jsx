import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="font- font-monaco h-screen bg-slate-900 p-20 text-white">
			<div className="inline-block text-5xl">{">"} Bhanu Prabhath</div>
			<div></div>
		</div>
	);
}

export default App;
