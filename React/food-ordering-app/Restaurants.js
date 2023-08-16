import React from "react";
import { apiData } from "./apiData";
import { ResCard } from "./ResCard";

export const Restaurants = () => (
  <>
    <h2 style={{ margin: "10px" }}>Restaurants with online food delivery</h2>
    <div className="restaurantContainer">
      {apiData.map((rest) => (
        <ResCard
          key={rest.info.id}
          name={rest.info.name}
          cuisines={rest.info.cuisines}
          rating={rest.info.avgRating}
          area={rest.info.areaName}
          imageID={rest.info.cloudinaryImageId}
        />
      ))}
    </div>
  </>
);
