function SearchBar({ setSearch }) {
  return (
    <input
      className="search"
      placeholder="Search product..."
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}

export default SearchBar;