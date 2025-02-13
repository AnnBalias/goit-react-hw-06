import css from "./SearchBox.module.css"

const SearchBox = ({ search, setSearch }) => {

    return (
        <div className={css.searchBox}>
            <label htmlFor="search">
                Find contacts by name
            </label>
            <input
                type="text"
                name="search"
                className={css.searchInput}
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
        </div>
    )
}

export default SearchBox;