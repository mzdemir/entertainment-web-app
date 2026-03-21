import BookmarkEmptyIcon from "../assets/icon-bookmark-empty.svg?react"
import BookmarkFullIcon from "../assets/icon-bookmark-full.svg?react"
import {useBookmarks} from "../context/BookmarkContext"

export default function MediaCart(props) {
	const {setBookmarks} = useBookmarks()

	const cardThumbnail = {
		backgroundImage: `url(${props?.thumbnailSrc})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
	}

	async function bookmarkMedia() {
		const response = await fetch("/api/bookmarks", {
			method: "POST",
			headers: {"Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}`},
			body: JSON.stringify({
				title: props.title,
				year: props.year,
				category: props.category,
				rating: props.rating,
				thumbnailSrc: props.thumbnailSrc,
			}),
		})

		const data = await response.json()
		if (!response.ok) return {error: data.message}

		setBookmarks(data)
	}

	// prettier-ignore
	const mediaInfoEl = (
		<div className={`text-preset-5 ${props.variant === "collapsed" ? "p-4" : "pbs-2"} grid gap-2`}>
			<div className="flex gap-2 opacity-75">
				<p>{props.year}</p>
				<span className="opacity-75" aria-hidden="true">•</span>
				<p className="flex items-center gap-2">
					<img src={`/icon-category-${props?.category?.toLowerCase().split(" ")[0]}.svg`} aria-hidden="true" />
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
					onClick={bookmarkMedia}
					className={
						"py-2.25 px-2.5 bg-blue-950/50 rounded-full self-end m-2 cursor-pointer hocus:outline-none hocus:bg-white hocus:text-black"
					}
					aria-label={`Add ${props.title} to bookmarks`}>
					{props.isBookmarked ? <BookmarkFullIcon /> : <BookmarkEmptyIcon />}
				</button>
				{props.variant === "collapsed" ? mediaInfoEl : null}
			</div>
			{props.variant === "outside" ? mediaInfoEl : null}
		</>
	)
}
