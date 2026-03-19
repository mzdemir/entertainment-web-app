export const fetchMedia = async (req, res) => {
	data = {message: "message"}
	res.status(200).json(data)
}

// const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}`)
// const data = await response.json()
