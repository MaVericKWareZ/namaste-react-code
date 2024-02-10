const FilterContainer = () => {
  return (
    <div className="filter-container">
      <button
        className="filter-button"
        onClick={() => {
          console.log("button clicked");
        }}
      >
        Top Rated Restaurants
      </button>
    </div>
  );
};

export default FilterContainer;
