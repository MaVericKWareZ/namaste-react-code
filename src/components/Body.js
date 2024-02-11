import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SearchContainer from "./SearchContainer";
import FilterComponent from "./FilterComponent";
import {
  SWIGGY_API_URL,
  SWIGGY_RES_DATA_CARD_PATH_ID,
} from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  const updateFilteredRestaurantList = (filteredList) => {
    setFilteredRestaurantList(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const dataJson = await data.json();
    const [resCardData = {}] = dataJson.data.cards.filter(
      (card) => card?.card?.card?.id === SWIGGY_RES_DATA_CARD_PATH_ID
    );
    const resDataList =
      resCardData.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurant(resDataList);
  };

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

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
