const SearchBar = () => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Hae urheilijaa</span>
    </label>
    <input
      type="text"
      id="header-search"
      placeholder="Hae urheilijaa"
      name="s"
    />
    <button type="submit">Search</button>
  </form>
);

export default SearchBar;
