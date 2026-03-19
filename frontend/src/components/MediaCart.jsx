import BookmarkIcon from "../assets/icon-bookmark-empty.svg?react"

export default function MediaCart(props) {
	const cardThumbnail = {
		backgroundImage: `url(${props?.thumbnailSrc})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
	}

	// prettier-ignore
	const mediaInfoEl = (
		<div className={`text-preset-5 ${props.variant === "collapsed" ? "p-4" : "pbs-2"} grid gap-2`}>
			<div className="flex gap-2 opacity-75">
				<p>{props.year}</p>
				<span className="opacity-75" aria-hidden="true">•</span>
				<p className="flex items-center gap-2">
					<img src={`/icon-category-${props.category.toLowerCase().split(" ")[0]}.svg`} aria-hidden="true" />
					{props.category}
				</p>
				<span className="opacity-75" aria-hidden="true">•</span>
				<p>{props.rating}</p>
			</div>
			<h1 className="text-preset-3">{props.title}</h1>
		</div>
	)

	return (
		<>
			<div
				style={cardThumbnail}
				className={`${props.variant === "outside" ? "h-27.5" : "h-full"} flex flex-col justify-between rounded-lg`}>
				<button
					className="py-2.25 px-2.5 bg-blue-950/50 rounded-full self-end m-2 cursor-pointer hocus:outline-none hocus:bg-white hocus:text-black"
					aria-label={`Add ${props.title} to bookmarks`}>
					<BookmarkIcon />
				</button>
				{props.variant === "collapsed" ? mediaInfoEl : null}
			</div>
			{props.variant === "outside" ? mediaInfoEl : null}
		</>
	)
}
