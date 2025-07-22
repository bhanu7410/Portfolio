export default function TechIcon({ info }) {
	return (
		<div
			className={`group rounded-lg bg-neutral-700/50 p-4 transition-colors ${info.hoverBg} hover:cursor-pointer`}
		>
			<div className="flex items-center gap-4 grayscale group-hover:grayscale-0">
				<div className={`rounded-lg ${info.imgBg} flex-shrink-0 p-2.5`}>
					<img
						src={info.src}
						alt={info.title}
						className="size-8 transition-all ease-in group-hover:scale-120 group-hover:rotate-6 sm:size-10"
					/>
				</div>
				<div className="min-w-0 flex-1">
					<div
						className={`truncate text-lg font-semibold ${info.title === "Express" || info.title === "PostgreSQL" ? "group-hover:text-neutral-900" : ""} sm:text-xl`}
					>
						{info.title}
					</div>
					<div
						className={`truncate text-xs text-gray-400 ${info.title === "Express" || info.title === "PostgreSQL" ? "group-hover:text-neutral-600" : ""} sm:text-sm`}
					>
						{info.description}
					</div>
				</div>
			</div>
		</div>
	);
}
