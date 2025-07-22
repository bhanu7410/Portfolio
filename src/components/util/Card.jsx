export default function Card({ children }) {
	return (
		<div className="mb-8 rounded-lg border-2 border-stone-600/50 p-6 shadow-lg">
			{children}
		</div>
	);
}
