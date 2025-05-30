import { useLocation } from "react-router";
import { SearchIcon } from "../icons/SearchIcon";
import { ShoppingCartIcon } from "../icons/ShoppingCartIcon";
import { StoreIcon } from "../icons/StoreIcon";

function Navigation() {

  const location = useLocation();

  return (
    <div className="flex w-[100%] h-16 gap-2.5 bg-brown-400 justify-center items-center">
      <div className="px-[15px] py-1.25 bg-gray-200/50 rounded-full">
        <StoreIcon />
      </div>
      <div className="px-[15px] py-[5px] bg-gray-200/50 rounded-full">
        <ShoppingCartIcon />
      </div>
      <div className="px-[15px] py-[5px] bg-gray-200/50 rounded-full">
        <SearchIcon />
      </div>
    </div>
  );
}

export default Navigation;
