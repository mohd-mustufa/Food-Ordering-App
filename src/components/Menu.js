import { useState } from "react";
import { RES_IMG } from "../commonUtils/constants";

const Menu = ({ resInfo }) => {
  const [buttonVisibility, setbuttonVisibility] = useState(
    Array(
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.length
    ).fill(true)
  );

  let menuItems =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((card) =>
      card.card.card.hasOwnProperty("title")
    );

  const toggleButton = (index) => {
    const updatedVisibility = [...buttonVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setbuttonVisibility(updatedVisibility);
  };

  return (
    <div className="menu">
      {menuItems.map((menuItem, index) => {
        return (
          <div key={menuItem?.card?.card?.title}>
            {!(
              menuItem?.card?.card?.title && menuItem?.card?.card?.itemCards
            ) ? (
              ""
            ) : (
              <>
                <button
                  onClick={() => toggleButton(index)}
                  className="menu-button"
                >
                  {menuItem?.card?.card?.title}{" "}
                  {"(" + menuItem?.card?.card?.itemCards?.length + ")"}
                </button>

                {buttonVisibility[index] && (
                  <>
                    {menuItem?.card?.card?.itemCards?.map((item) => {
                      return (
                        <div key={item?.card?.info?.id}>
                          {" "}
                          <div className="menu-category">
                            <div className="left-menu-content">
                              <p>
                                {item?.card?.info?.isVeg ? "Veg" : "Non-Veg"}
                              </p>
                              <p>
                                <strong>{item?.card?.info?.name}</strong>
                              </p>
                              <p>
                                <strong>
                                  Rs.{" "}
                                  {(item?.card?.info?.price ||
                                    item?.card?.info?.defaultPrice) / 100}
                                </strong>
                              </p>
                              <p className="menu-description">
                                {item?.card?.info?.description}
                              </p>
                            </div>
                            <div className="right-menu-content">
                              {item?.card?.info?.imageId ? (
                                <img
                                  src={RES_IMG + item?.card?.info?.imageId}
                                />
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                          <div className="menu-line">
                            <hr />
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
