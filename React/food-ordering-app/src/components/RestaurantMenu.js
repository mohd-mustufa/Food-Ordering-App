import Menu from "./Menu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../commonUtils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    locality,
    areaName,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="menu-page">
      <div className="restaurant-info">
        <div className="left-menu-header">
          <h2>{name}</h2>
          <p>
            <strong>{cuisines.join(", ")}</strong>
          </p>
          <p>
            <strong>{locality + ", " + areaName}</strong>
          </p>
        </div>
        <div className="right-menu-header">
          <p>{`Avg Rating: ${avgRating}`}</p>
          <p>{`Total Ratings: ${totalRatingsString}`}</p>
          <p>
            <strong>{costForTwoMessage}</strong>
          </p>
        </div>
      </div>
      <h1>Menu</h1>
      <Menu resInfo={resInfo} />
    </div>
  );
};

export default RestaurantMenu;
