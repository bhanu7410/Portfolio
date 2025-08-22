export default function SocialIconButton({ icon, hoverColor, url }) {
	return (
		<a href={url} target="_blank" rel="noopener noreferrer">
			<div
				className={`group mr-2 inline-block size-8 flex-wrap rounded border-2 border-stone-600/50 p-0.5 hover:cursor-pointer sm:size-12 sm:rounded-xl sm:p-2 ${hoverColor}`}
			>
				<img
					src={icon}
					alt=""
					className="grayscale transition-transform duration-300 group-hover:-translate-y-0 group-hover:grayscale-0 sm:translate-y-0.5"
				/>
			</div>
		</a>
	);
}
