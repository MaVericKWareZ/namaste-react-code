import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import SearchContainer from "./SearchContainer";
import FilterComponent from "./FilterComponent";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  const updateFilteredRestaurantList = (filteredList) => {
    setFilteredRestaurantList(filteredList);
  };

  return (
    <div className="body">
      <SearchContainer
        resData={listOfRestaurant}
        searchRestaurantList={updateFilteredRestaurantList}
      />
      <FilterComponent
        resData={listOfRestaurant}
        updateFilteredRestaurantList={updateFilteredRestaurantList}
      />
      <div className="res-container">
        {(filteredRestaurantList.length > 0
          ? filteredRestaurantList
          : listOfRestaurant
        ).map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
