import { useState } from "react";
import Information from "./Information";

export default function Bio() {
	const [activeTab, setActiveTab] = useState("Work");

	function handleActiveTab(tabName) {
		setActiveTab(tabName);
	}

	return (
		<div className="rounded bg-neutral-700/25 p-6">
			{/* Animated Tabs */}
			<div className="relative flex gap-1 rounded bg-neutral-600 p-1 text-2xl">
				{/* Animated background */}
				<div
					className={`absolute top-1 h-[calc(100%-8px)] w-[calc(48%)] rounded bg-neutral-900 transition-all duration-250 ease-in-out ${
						activeTab === "Education"
							? "left-[calc(51.5%)]"
							: "left-1"
					}`}
				/>

				{/* Tabs */}
				<div
					className="relative z-10 flex-1 cursor-pointer rounded px-4 py-2 text-center transition-colors"
					onClick={() => handleActiveTab("Work")}
				>
					Work
				</div>
				<div
					className="relative z-10 flex-1 cursor-pointer rounded px-4 py-2 text-center transition-colors"
					onClick={() => handleActiveTab("Education")}
				>
					Education
				</div>
			</div>

			<Information activeTab={activeTab} />
		</div>
	);
}
