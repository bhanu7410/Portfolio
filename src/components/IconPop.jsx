export default function IconPop({ icons, children }) {
	const length = icons.length;

	return (
		<>
			<div className="group relative inline-flex cursor-pointer items-center justify-center font-bold text-white">
				{icons.map((icon, index) => {
					// I want the icons to spaced evenly not angled

					return (
						<div
							key={index}
							className={`absolute flex size-7 items-center justify-center rounded ${icon.color} opacity-0 transition-all duration-200 ease-in group-hover:-translate-y-8 group-hover:opacity-100`}
							style={{
								transform: `translateX(${(index - (length - 1) / 2) * 1.5}rem) rotate(${
									(index - (length - 1) / 2) * 15 ||
									Math.random() * 7 - 2.5
								}deg)`,
							}}
						>
							<img
								src={icon.src}
								alt=""
								className="absolute size-6 rounded transition-all duration-200 ease-in"
							/>
						</div>
					);
				})}
				<span>{children}</span>
				<span className="absolute -bottom-0.25 left-0 h-[1.5px] w-full bg-white transition-all duration-175 ease-in group-hover:left-full group-hover:w-0"></span>
			</div>
		</>
	);
}
