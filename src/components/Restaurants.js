import React from "react";
import { ResCard, EnhancedResCard } from "./ResCard";
import { Link } from "react-router-dom";

export const Restaurants = (props) => {
  const ResCardClosed = EnhancedResCard(ResCard);

  return (
    <>
      <div className="restaurantContainer">
        {props?.resData?.map((rest) => {
          const {
            id,
            name,
            cuisines,
            avgRating,
            areaName,
            cloudinaryImageId,
            isOpen,
          } = rest?.info;
          {
            return isOpen ? (
              <Link to={"/restaurants/" + id} key={id}>
                <ResCard
                  name={name}
                  cuisines={cuisines}
                  rating={avgRating}
                  area={areaName}
                  imageID={cloudinaryImageId}
                />
              </Link>
            ) : (
              <Link to={"/restaurants/" + id} key={id}>
                <ResCardClosed
                  name={name}
                  cuisines={cuisines}
                  rating={avgRating}
                  area={areaName}
                  imageID={cloudinaryImageId}
                />
              </Link>
            );
          }
        })}
      </div>
    </>
  );
};
