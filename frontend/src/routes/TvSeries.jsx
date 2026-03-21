import {useEffect, useState} from "react"
import MediaSection from "../components/MediaSection"

export default function TvSeries() {
	const [tvSeries, setvSeries] = useState(null)

	useEffect(() => {
		async function getMedia() {
			const response = await fetch("/api/media")
			const data = await response.json()
			setvSeries(data.filter(d => d.category === "TV Series"))
		}

		getMedia()
	}, [])

	// prettier-ignore
	return (
		<MediaSection
			data={tvSeries}
			title="TV Series"
			getThumbnail={d => d.thumbnail.regular.small}
		/>
	)
}
