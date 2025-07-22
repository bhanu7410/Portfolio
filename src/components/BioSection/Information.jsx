import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";
import { workExperience, education } from "./data";

export default function Information({ activeTab }) {

	return (
		<div className="mt-5 rounded border-2 border-neutral-700 p-6">
			{activeTab === "Work" ? (
				<div className="relative">
					{workExperience.map((item, index) => (
						<ExperienceItem
							key={item.id}
							item={item}
							isLast={index === workExperience.length - 1}
						/>
					))}
				</div>
			) : (
				<div className="relative">
					{education.map((item, index) => (
						<EducationItem
							key={item.id}
							item={item}
							isLast={index === education.length - 1}
						/>
					))}
				</div>
			)}
		</div>
	);
}
