import { Link, useLocation } from "react-router";
import { SearchIcon } from "../../Icons/SearchIcon";
import { ShoppingCartIcon } from "../../Icons/ShoppingCartIcon";
import { StoreIcon } from "../../Icons/StoreIcon";

function Navigation() {
  const location = useLocation();

  return (
    <>
      <div className="flex fixed right-0 left-0 bottom-0 w-[100%] h-16 gap-2.5 bg-brown-400 justify-center items-center">
        <Link to={{ pathname: "/store" }}>
          <div
            className={
              "px-[15px] py-1.25 rounded-full " +
              (location.pathname === "/store"
                ? "bg-gray-200 ring ring-white"
                : "bg-gray-200 opacity-[0.75]")
            }
          >
            <StoreIcon />
          </div>
        </Link>

        <Link to={{ pathname: "/cart" }}>
          <div
            className={
              "px-[15px] py-1.25 rounded-full " +
              (location.pathname === "/cart"
                ? "bg-gray-200 ring ring-white"
                : "bg-gray-200 opacity-[0.75]")
            }
          >
            <ShoppingCartIcon />
          </div>
        </Link>
        <div
          className={
            "px-[15px] py-1.25 rounded-full " +
            (location.pathname === "/search"
              ? "bg-gray-200 ring ring-white"
              : "bg-gray-200 opacity-[0.75]")
          }
        >
          <SearchIcon />
        </div>
      </div>
      <div className="flex w-[100%] h-16" />
    </>
  );
}

export default Navigation;
