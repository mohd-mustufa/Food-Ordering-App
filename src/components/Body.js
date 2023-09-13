import React, { useState } from "react";
import { Restaurants } from "./Restaurants";
import Shimmer from "./Shimmer";
import useRestaurant from "../commonUtils/useRestaurant";
import useOnlineStatus from "../commonUtils/useOnlineStatus";

export const Body = () => {
  let [searchText, setSearchText] = useState("");
  let [filteredRes, setFilteredRes] = useState([]);

  const resData = useRestaurant();
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        You seem to be offline. Check your internet connection and try again!!
      </h1>
    );

  if (!resData || resData.length === 0) {
    return <Shimmer />;
  }

  if (filteredRes.length === 0 && resData.length !== 0) setFilteredRes(resData);

  return (
    <>
      <h2 style={{ margin: "10px" }}>Restaurants with online food delivery</h2>
      <div className="body-container">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              id="search-input"
              className="search-input"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="search-btn style-btn"
              onClick={() => {
                const filteredRestaurants = resData.filter((restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                filteredRestaurants.length !== 0
                  ? setFilteredRes(filteredRestaurants)
                  : "";
              }}
            >
              Search
            </button>
          </div>
          <div className="top-rated-restaurants">
            <button
              id="top-rated-btn"
              onClick={() => {
                const topRatedRestaurants = resData.filter(
                  (restaurant) => restaurant.info.avgRating > 4
                );
                setFilteredRes(topRatedRestaurants);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>

        <Restaurants resData={filteredRes} />
      </div>
    </>
  );
};
