import {useEffect, useState} from "react"
import MediaSection from "../components/MediaSection"

export default function Movies() {
	const [movies, setMovies] = useState(null)

	useEffect(() => {
		async function getMedia() {
			const response = await fetch("/api/media")
			const data = await response.json()
			setMovies(data.filter(d => d.category === "Movie"))
		}

		getMedia()
	}, [])

	// prettier-ignore
	return (
		<MediaSection
			data={movies}
			title="Movies"
			getThumbnail={d => d.thumbnail.regular.small}
		/>
	)
}
