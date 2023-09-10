import { useEffect, useState } from "react";
import { MENU_DATA } from "./constants";

const useRestaurantMenu = (resId) => {
  [resInfo, setResInfo] = useState(null);

  const fetchData = async () => {
    const data = await fetch(MENU_DATA + resId);
    const jsonData = await data.json();
    setResInfo(jsonData.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
