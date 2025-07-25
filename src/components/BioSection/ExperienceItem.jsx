export default function ExperienceItem({ item, isLast }) {
	return (
		<div className="relative">
			{/* Timeline dot */}
			<div className="absolute top-2 left-0 size-3 rounded-full bg-orange-400"></div>

			{/* Timeline line */}
			{!isLast && (
				<div className="absolute top-5 left-1.25 h-full w-0.5 bg-neutral-600"></div>
			)}

			{/* Content */}
			<div className="pb-8 pl-8">
				<div className="flex flex-col pb-2 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<h3 className="text-lg font-semibold text-white">
							{item.title}
						</h3>
						<p className="text-sm text-neutral-300">
							at{" "}
							{item.url ? (
								<a
									href={item.url}
									target="_blank"
									rel="noopener noreferrer"
									className="transition-colors hover:text-orange-400 hover:underline"
								>
									{item.company}
								</a>
							) : (
								item.company
							)}
						</p>
					</div>
					<span className="mt-1 text-sm text-neutral-400 sm:mt-0">
						{item.period}
					</span>
				</div>
				<ul className="mt-3 space-y-1.5">
					{item.highlights.map((highlight, idx) => (
						<li
							key={idx}
							className="flex items-start text-neutral-200"
						>
							<span className="mt-1 mr-2 text-xs text-orange-400">
								▸
							</span>
							<span>{highlight}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
