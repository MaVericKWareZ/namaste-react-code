import { useState } from "react";

const FilterComponent = ({ resData, updateFilteredRestaurantList }) => {
  const [isTopRatedFilterActive, setIsTopRatedFilterActive] = useState(false);

  const applyFilter = () => {
    const filteredList = resData.filter((res) => res.info.avgRating > 4.3);
    updateFilteredRestaurantList(filteredList);
    setIsTopRatedFilterActive(true);
  };

  const resetFilter = () => {
    updateFilteredRestaurantList([]);
    setIsTopRatedFilterActive(false);
  };

  return (
    <div className="filter-container">
      <button className="filter-button" onClick={applyFilter}>
        Top Rated Restaurants
      </button>
      <button
        className="reset-button"
        onClick={resetFilter}
        disabled={!isTopRatedFilterActive}
      >
        Reset Filter
      </button>
    </div>
  );
};

export default FilterComponent;
