export default function SearchBar() {
	return (
		<label className="flex items-center gap-4 px-4 text-preset-2 ">
			<img className="size-6" src="/icon-search.svg" aria-hidden="true" />
			<input
				className="text-white w-full outline-none caret-red-500 hocus:border-b hocus:border-blue-500 hocus:pbe-2"
				type="text"
				name="search"
				placeholder="Search for movies or TV series"
			/>
		</label>
	)
}
