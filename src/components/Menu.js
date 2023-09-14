import { useState } from "react";
import MenuCategory from "./MenuCategory";

const Menu = ({ resInfo }) => {
  const [showIndex, setShowIndex] = useState(null);

  let menuItems =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((card) =>
      card.card.card.hasOwnProperty("title")
    );

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
              <MenuCategory
                menuItem={menuItem}
                showItems={index === showIndex}
                setShowIndex={setShowIndex}
                index={index}
                showIndex={showIndex}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
