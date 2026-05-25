function SearchBar({ value, onChange }) {
    return (
      <div className="search-bar">
        <input
          className="search-bar__input"
          type="text"
          placeholder="Search posts..."
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    );
  }
  
  export default SearchBar;