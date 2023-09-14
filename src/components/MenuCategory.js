import { RES_IMG } from "../commonUtils/constants";

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
                {" "}
                <div className="menu-category">
                  <div className="left-menu-content">
                    <p>{item?.card?.info?.isVeg ? "Veg" : "Non-Veg"}</p>
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
                      <img src={RES_IMG + item?.card?.info?.imageId} />
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
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
