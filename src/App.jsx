import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="font-monaco h-screen w-screen text-black lg:px-20 dark:bg-[rgba(17,17,17,1)] dark:text-white">
			{/* <Navbar /> */}
			<Card>
				<div className="flex h-full items-center justify-start">
					<div className="inline-block text-4xl">Bhanu Prabhath</div>
					<div className="inline-block text-2xl">
						<img src={viteLogo} alt="" />
					</div>
				</div>
			</Card>
		</div>
	);
}

export default App;
