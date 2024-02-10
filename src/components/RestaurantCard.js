import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    totalRatingsString,
    sla,
    cloudinaryImageId,
  } = resData.info;
  const resImageUrl = CDN_URL + cloudinaryImageId;
  return (
    <div className="res-card">
      <img src={resImageUrl}></img>
      <div className="res-detail-container">
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>
          {avgRating} stars ({totalRatingsString})
        </h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString} ETA </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
