export default function TechIcon({ info, onTechClick, orderValue }) {
	return (
		<div className="group relative">
			{orderValue === null ? (
				""
			) : (
				<div
					className="absolute inset-x-0 inset-y-0 rounded-lg bg-neutral-300/40 p-1"
					onClick={onTechClick}
				>
					{orderValue}
				</div>
			)}
			<div
				className={`rounded-lg bg-neutral-700/50 py-4 transition-colors sm:p-4 ${info.hoverBg} hover:cursor-pointer`}
				onClick={onTechClick}
			>
				<div className="flex items-center justify-center sm:gap-4">
					<div
						className={`rounded-lg ${info.imgBg} flex-shrink-0 p-2.5`}
					>
						<img
							src={info.src}
							alt={info.title}
							className="size-8 transition-all ease-in group-hover:scale-120 group-hover:rotate-6 sm:size-10"
						/>
					</div>
					<div className="hidden sm:block sm:min-w-0 sm:flex-1">
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
		</div>
	);
}
