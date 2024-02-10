import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import SearchContainer from "./SearchContainer";
import FilterContainer from "./FitlerContainer";

const Body = () => {
  return (
    <div className="body">
      <SearchContainer />
      {/* <FilterContainer /> */}
      <div className="res-container">
        {resList.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
