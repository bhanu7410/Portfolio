export default function SocialIconButton({ icon, hoverColor }) {
	return (
		<div
			className={`group mr-2 inline-block size-12 flex-wrap rounded-xl border-2 border-stone-600/50 p-2 hover:cursor-pointer ${hoverColor}`}
		>
			<img
				src={icon}
				alt=""
				className="translate-y-0.5 grayscale transition-transform duration-300 group-hover:-translate-y-0 group-hover:grayscale-0"
			/>
		</div>
	);
}
