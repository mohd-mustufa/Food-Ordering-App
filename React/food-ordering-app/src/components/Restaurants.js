import React from "react";
import { ResCard } from "./ResCard";
import { Link } from "react-router-dom";

export const Restaurants = (props) => (
  <>
    <div className="restaurantContainer">
      {props?.resData?.map((rest) => {
        const { id, name, cuisines, avgRating, areaName, cloudinaryImageId } =
          rest?.info;
        return (
          <Link to={"/restaurants/" + id} key={id}>
            <ResCard
              name={name}
              cuisines={cuisines}
              rating={avgRating}
              area={areaName}
              imageID={cloudinaryImageId}
            />
          </Link>
        );
      })}
    </div>
  </>
);
