import { useDispatch } from "react-redux";
import { RES_IMG } from "../commonUtils/constants";
import { addItem } from "../redux/cartSlice";
import MenuItem from "./MenuItem";

const MenuCategory = ({
  menuItem,
  showItems,
  setShowIndex,
  index,
  showIndex,
}) => {
  const handleClick = () => {
    if (index === showIndex) setShowIndex(null);
    else setShowIndex(index);
  };

  return (
    <div>
      <button onClick={() => handleClick()} className="menu-button">
        {menuItem?.card?.card?.title}{" "}
        {"(" + menuItem?.card?.card?.itemCards?.length + ")"}
      </button>

      {showItems && (
        <div>
          {menuItem?.card?.card?.itemCards?.map((item) => {
            return (
              <div key={item?.card?.info?.id}>
                <MenuItem item={item} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
