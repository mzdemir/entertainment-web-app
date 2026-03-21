import {useBookmarks} from "../context/BookmarkContext"
import MediaCart from "./MediaCart"

export default function MediaSection({data, title, filter, layout, variant, size, getThumbnail}) {
	const {bookmarks} = useBookmarks()
	const filteredData = filter ? data.filter(filter) : data

	return (
		<section className="grid gap-4 px-4 overflow-hidden">
			<h2 className="text-preset-1">{title}</h2>
			<div className={`${layout ? layout : "grid grid-cols-2"} gap-4`}>
				{filteredData?.map(d => {
					const thumbnailSrc = getThumbnail ? getThumbnail(d) : d.thumbnailSrc
					const isBookmarked = bookmarks.some(b => b.title === d?.title)
					return (
						<div key={d?.title} className={size ? size : "h-min"}>
							<MediaCart
								variant={variant ? variant : "outside"}
								title={d?.title}
								thumbnailSrc={thumbnailSrc}
								year={d?.year}
								category={d?.category}
								rating={d?.rating}
								isBookmarked={isBookmarked}
							/>
						</div>
					)
				})}
			</div>
		</section>
	)
}
