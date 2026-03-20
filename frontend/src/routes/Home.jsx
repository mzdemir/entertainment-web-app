import {useEffect, useState} from "react"
import MediaCart from "../components/MediaCart"

export default function Home() {
	const [mediaToDisplay, setMediaToDisplay] = useState(null)
	const trending = mediaToDisplay?.filter(media => media?.thumbnail?.trending)
	const recommended = mediaToDisplay?.filter(media => !media?.thumbnail?.trending)

	useEffect(() => {
		async function getMedia() {
			const response = await fetch("/api/media")
			const data = await response.json()
			setMediaToDisplay(data)
		}

		getMedia()
	}, [])

	return (
		<>
			<section className="grid gap-4 px-4 overflow-hidden">
				<h2 className="text-preset-1">Trending</h2>
				<div className="flex gap-4">
					{trending?.map(trend => {
						const thumbnailSrc = trend.thumbnail.trending.small
						return (
							<div key={trend?.title} className="w-60 h-35">
								<MediaCart
									variant={"collapsed"}
									title={trend?.title}
									thumbnailSrc={thumbnailSrc}
									year={trend?.year}
									category={trend?.category}
									rating={trend?.rating}
								/>
							</div>
						)
					})}
				</div>
			</section>

			<section className="grid gap-4 px-4">
				<h2 className="text-preset-1">Recommended for you</h2>
				<div className="grid grid-cols-2 gap-4">
					{recommended?.map(rec => {
						const thumbnailSrc = rec.thumbnail.regular.small
						return (
							<div key={rec?.title} className="h-min">
								<MediaCart
									variant={"outside"}
									title={rec?.title}
									thumbnailSrc={thumbnailSrc}
									year={rec?.year}
									category={rec?.category}
									rating={rec?.rating}
								/>
							</div>
						)
					})}
				</div>
			</section>
		</>
	)
}
