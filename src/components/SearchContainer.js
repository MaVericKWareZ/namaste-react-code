import { useState } from "react";
import FuzzySearch from "fuzzy-search";

const SearchContainer = ({ resData, searchRestaurantList }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const applySearch = (searchQuery) => {
    const searcher = new FuzzySearch(resData, ["info.name"]);
    const filteredList = searcher.search(searchQuery);

    searchRestaurantList(filteredList);
  };

  const handeSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSearchClick = () => {
    applySearch(searchKeyword);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter keyword"
        value={searchKeyword}
        onChange={handeSearchKeywordChange}
      />
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchContainer;
