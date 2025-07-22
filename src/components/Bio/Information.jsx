export default function Information({ activeTab }) {
	return (
		<div className="mt-5 rounded border-2 border-neutral-700 p-4">
			{activeTab === "Work" ? (
				<div>Work experience content goes here</div>
			) : (
				<div>Education content goes here</div>
			)}
		</div>
	);
}
