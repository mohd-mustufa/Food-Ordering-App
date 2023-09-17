import { RES_IMG } from "../commonUtils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const MenuItem = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <div className="menu-category">
        <div className="left-menu-content">
          <p>{item?.card?.info?.isVeg ? "Veg" : "Non-Veg"}</p>
          <p>
            <strong>{item?.card?.info?.name}</strong>
          </p>
          <p>
            <strong>
              Rs.
              {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                100}
            </strong>
          </p>
          <p className="menu-description">{item?.card?.info?.description}</p>
        </div>
        <div className="right-menu-content">
          {item?.card?.info?.imageId ? (
            <img src={RES_IMG + item?.card?.info?.imageId} />
          ) : (
            ""
          )}
        </div>
        <button className="add-item-btn" onClick={() => addToCart(item)}>
          Add+
        </button>
      </div>
      <div className="menu-line">
        <hr />
      </div>
    </>
  );
};

export const EnhancedMenuItem = (MenuItem) => {
  return (props) => {
    return (
      <div>
        <MenuItem {...props} />
      </div>
    );
  };
};

export default MenuItem;
