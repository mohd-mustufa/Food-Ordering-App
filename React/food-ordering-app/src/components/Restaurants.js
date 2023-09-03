import React from "react";
import { ResCard } from "./ResCard";
import { Link } from "react-router-dom";

export const Restaurants = (props) => (
  <>
    <div className="restaurantContainer">
      {props?.resData?.map((rest) => (
        <Link to={"/restaurants/" + rest?.info?.id} key={rest?.info?.id}>
          <ResCard
            name={rest?.info?.name}
            cuisines={rest?.info?.cuisines}
            rating={rest?.info?.avgRating}
            area={rest?.info?.areaName}
            imageID={rest?.info?.cloudinaryImageId}
          />
        </Link>
      ))}
    </div>
  </>
);
