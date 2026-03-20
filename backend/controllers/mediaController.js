import fs from "fs"
import path from "path"
import {fileURLToPath} from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const fetchMedia = async (req, res) => {
	const raw = fs.readFileSync(path.join(__dirname, "../data.json"), "utf-8")
	const data = JSON.parse(raw)
	res.json(data)
}

// const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}`)
// const data = await response.json()
