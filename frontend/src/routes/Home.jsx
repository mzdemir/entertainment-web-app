import {useEffect, useState} from "react"
import MediaSection from "../components/MediaSection"

export default function Home() {
	const [mediaToDisplay, setMediaToDisplay] = useState(null)
	const recommended = mediaToDisplay?.filter(media => !media?.thumbnail?.trending)
	const trending = mediaToDisplay?.filter(media => media?.thumbnail?.trending)

	useEffect(() => {
		async function getMedia() {
			const response = await fetch("/api/media")
			const data = await response.json()
			setMediaToDisplay(data)
		}

		getMedia()
	}, [])

	// prettier-ignore
	return (
		<>
			<MediaSection 
				data={trending} 
				title="Trending"
				layout="flex" 
				size="w-60 h-35" 
				getThumbnail={d => d.thumbnail.trending.small} 
			/>
			<MediaSection 
				data={recommended} 
				title="Recommended for you"
				getThumbnail={d => d.thumbnail.regular.small} 
			/>
		</>
	)
}
