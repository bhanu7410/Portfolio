import Card from "../util/Card";
import TechIcon from "./TechInfo";
import { useState, useEffect } from "react";
import { techData } from "./data";

export default function Technologies() {
	const [orderClicked, setOrderClicked] = useState([]);
	const [techAnimateFlag, setTechAnimateFlag] = useState(false);
	// console.log("Order clicked:", orderClicked);

	useEffect(() => {
		if (techAnimateFlag && orderClicked.length > 0) {
			const interval = setInterval(() => {
				setOrderClicked((prev) => {
					const newArray = prev.slice(0, -1); // Remove last item immutably
					if (newArray.length === 0) {
						setTechAnimateFlag(false);
					}
					return newArray;
				});
			}, 800);

			return () => clearInterval(interval); // Cleanup
		}
	}, [techAnimateFlag, orderClicked.length]);

	function handleOrderClicked(tech) {
		// if the animation has begun then no clicks should be processed
		if (techAnimateFlag) return;

		if (orderClicked.includes(tech)) {
			setOrderClicked((prev) => prev.filter((item) => item !== tech));
		} else {
			setOrderClicked((prev) => {
				let returningData = [...prev, tech];
				if (returningData.length === techData.length) {
					setTechAnimateFlag(true);
				}

				return returningData;
			});
		}
	}

	function getOrderValue(tech) {
		if (!orderClicked.includes(tech)) {
			return null;
		}
		return orderClicked.indexOf(tech) + 1;
	}

	return (
		<Card>
			<div className="pb-4 text-2xl">Current Technologies </div>
			<div>
				I work with a range of modern technologies to build
				high-performing, functional solutions. These are some of my core
				tools and frameworks.
			</div>
			<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{techData.map((tech) => (
					<TechIcon
						key={tech.id}
						orderValue={getOrderValue(tech.id)}
						info={tech}
						onTechClick={() => handleOrderClicked(tech.id)}
					/>
				))}
			</div>
		</Card>
	);
}
