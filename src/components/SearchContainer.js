import { useState } from "react";
import FuzzySearch from "fuzzy-search";

const SearchContainer = ({ resData, searchRestaurantList }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isSearchRendered, setIsSearchRendered] = useState(false);

  const applySearch = (searchQuery) => {
    const searcher = new FuzzySearch(resData, ["info.name"]);
    const filteredList = searcher.search(searchQuery);

    searchRestaurantList(filteredList);
    setIsSearchRendered(true);
  };

  const handeSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value);
    setIsSearchRendered(true);
  };

  const handleSearchClick = () => {
    applySearch(searchKeyword);
  };

  const handleClearSearch = () => {
    setSearchKeyword("");
    searchRestaurantList([]);
    setIsSearchRendered(false);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter keyword"
        value={searchKeyword}
        onChange={handeSearchKeywordChange}
      />
      {isSearchRendered && (
        <button className="clear-search-button" onClick={handleClearSearch}>
          X
        </button>
      )}
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchContainer;
