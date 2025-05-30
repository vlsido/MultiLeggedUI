import logo from "~/assets/logos/logo.png";
import { StoreIcon } from "../icons/StoreIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { ShoppingCartIcon } from "../icons/ShoppingCartIcon";
import { Link, useLocation } from "react-router";

function Header() {

  const location = useLocation();

  return (
    <div
      className={"flex w-[100%] bg-brown-400 p-[10px]"}
    >
      <div
        className={"flex flex-1"}
      >
        <img src={logo} className="w-[48px] h-[48px] rounded-[60px]" />
        <div className="flex flex-1 pr-[48px] justify-center">

          <Link
            to={{ pathname: "/" }}
          >
            <div className={"flex flex-row px-[10px] py-[5px] gap-[10px] text-black text-[18px] rounded-full items-center " + (location.pathname === "/" ? "bg-white border-2" : "bg-gray-200")}>
              <StoreIcon />
              Store
            </div>
          </Link>
        </div>
      </div>
      <div
        className={"flex flex-1 flex-row px-[10px] py-[5px] gap-[10px] min-w-[200px] bg-yellow-100 rounded-full items-center"}
      >
        <SearchIcon />
        <input
          className="w-[100%] h-[100%] text-black outline-none"
          placeholder="Search insects"
        />
      </div>
      <div
        className={"flex flex-1 justify-center"}
      >
        <Link
          to={{ pathname: "/cart" }}
        >
          <div
            className={"flex flex-row px-[10px] py-[5px] gap-[10px] text-black text-[20px] rounded-full items-center " + (location.pathname === "/cart" ? "bg-white border-2" : "bg-gray-200")}>

            <ShoppingCartIcon />
            $0,00
            <div className="text-[16px] opacity-[0.5]">
              0 items
            </div>
          </div>
        </Link>
      </div>
    </div>
  );

}

export default Header;
