import { Link, useLocation } from "react-router";
import { SearchIcon } from "../icons/SearchIcon";
import { ShoppingCartIcon } from "../icons/ShoppingCartIcon";
import { StoreIcon } from "../icons/StoreIcon";

function Navigation() {

  const location = useLocation();


  return (
    <>
      <div className="flex fixed right-0 left-0 bottom-0 w-[100%] h-16 gap-2.5 bg-brown-400 justify-center items-center"
      >
        <Link
          to={{ pathname: "/" }}
        >
          <div className={"px-[15px] py-1.25 rounded-full " + (location.pathname === "/" ? "bg-gray-200" : "bg-gray-200/50")}>
            <StoreIcon />
          </div>
        </Link>

        <Link
          to={{ pathname: "/cart" }}
        >
          <div className={"px-[15px] py-1.25 rounded-full " + (location.pathname === "/cart" ? "bg-gray-200" : "bg-gray-200/50")}>
            <ShoppingCartIcon />
          </div>
        </Link>
        <div className={"px-[15px] py-1.25 rounded-full " + (location.pathname === "/search" ? "bg-gray-200" : "bg-gray-200/50")}>
          <SearchIcon />
        </div>
      </div>
      <div className="flex w-[100%] h-16" />
    </>
  );
}

export default Navigation;
