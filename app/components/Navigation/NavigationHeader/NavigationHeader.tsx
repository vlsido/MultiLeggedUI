import logo from "~/assets/logos/logo.png";
import { StoreIcon } from "../../Icons/StoreIcon";
import { SearchIcon } from "../../Icons/SearchIcon";
import { Link, useLocation } from "react-router";
import ShoppingCartLink from "../ShoppingCartLink";

function Header() {
  const location = useLocation();

  return (
    <div className={"flex w-[100%] bg-brown-400 p-[10px]"}>
      <div className={"flex flex-1"}>
        <Link to={{ pathname: "/" }}>
          <div
            className={
              location.pathname === "/" ? "rounded-full ring-1 ring-black" : ""
            }
          >
            <img src={logo} className="w-[48px] h-[48px] rounded-[60px]" />
          </div>
        </Link>
        <div className="flex flex-1 pr-[48px] justify-center">
          <Link to={{ pathname: "/store" }}>
            <div
              className={
                "flex flex-row px-[10px] py-[5px] gap-[10px] text-black text-[18px] rounded-full items-center " +
                (location.pathname === "/store"
                  ? "bg-white ring-1 ring-black"
                  : "bg-gray-200")
              }
            >
              <StoreIcon />
              Store
            </div>
          </Link>
        </div>
      </div>
      <div
        className={
          "flex flex-1 flex-row px-[10px] py-[5px] gap-[10px] min-w-[200px] bg-yellow-100 rounded-full items-center"
        }
      >
        <SearchIcon />
        <input
          className="w-[100%] h-[100%] text-black outline-none"
          placeholder="Search insects"
        />
      </div>
      <div className={"flex flex-1 justify-center"}>
        <ShoppingCartLink />
      </div>
    </div>
  );
}

export default Header;
