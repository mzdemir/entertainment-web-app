import {createContext, useState, useContext, useEffect} from "react"

const BookmarkContext = createContext()

export function BookmarkProvider({children}) {
	const [bookmarks, setBookmarks] = useState([])

	useEffect(() => {
		async function getMedia() {
			const response = await fetch("/api/bookmarks", {
				headers: {"Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}`},
			})
			const data = await response.json()
			setBookmarks(data)
		}
		getMedia()
	}, [])

	// prettier-ignore
	return (
    <BookmarkContext.Provider value={{bookmarks, setBookmarks}}>
      {children}
    </BookmarkContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useBookmarks() {
	return useContext(BookmarkContext)
}
