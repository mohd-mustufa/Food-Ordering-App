import React from "react";
import { ResCard } from "./ResCard";

export const Restaurants = (props) => (
  <>
    <div className="restaurantContainer">
      {props?.resData?.map((rest) => (
        <ResCard
          key={rest?.info?.id}
          name={rest?.info?.name}
          cuisines={rest?.info?.cuisines}
          rating={rest?.info?.avgRating}
          area={rest?.info?.areaName}
          imageID={rest?.info?.cloudinaryImageId}
        />
      ))}
    </div>
  </>
);
