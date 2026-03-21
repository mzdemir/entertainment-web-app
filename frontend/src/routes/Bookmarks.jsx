import MediaSection from "../components/MediaSection"

import {useBookmarks} from "../context/BookmarkContext"

export default function Bookmarks() {
	const {bookmarks} = useBookmarks()

	// prettier-ignore
	return (
		<>
			<MediaSection
				data={bookmarks}
				title="Bookmarked Movies"
				filter={bmark => bmark.category === "Movie"}
			/>

			<MediaSection
				data={bookmarks}
				title="Bookmarked TV Series"
				filter={bmark => bmark.category === "TV Series"}
			/>
		</>
	)
}
