import React, { useEffect, useState } from "react";
import { Restaurants } from "./Restaurants";
import { useState } from "react";
import Shimmer from "./Shimmer";

export const Body = () => {
  let [resData, setResData] = useState([]);

  const fetchApiData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    let jsonData = await data.json();
    setResData(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  if (resData.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="body-container">
        <h2 style={{ margin: "10px" }}>
          Restaurants with online food delivery
        </h2>
        <div className="filter">
          <div className="top-rated-restaurants">
            <button
              id="top-rated-btn"
              onClick={() => {
                const topRatedRestaurants = resData.filter(
                  (restaurant) => restaurant.info.avgRating > 4
                );
                setResData(topRatedRestaurants);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>

        <Restaurants resData={resData} />
      </div>
    </>
  );
};
