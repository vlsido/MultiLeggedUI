import logo from "~/assets/logos/logo.png";
import { StoreIcon } from "../../Icons/StoreIcon";
import { Link, useLocation } from "react-router";
import ShoppingCartLink from "../CartLink";

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
          "flex flex-1 py-[5px] min-w-[200px] justify-center items-center"
        }
      >
        <h1 className="text-center text-[24px] text-shadow-xs text-shadow-black text-white font-bold">
          MULTILEGGED STORE
        </h1>
      </div>
      <div className={"flex flex-1 justify-center"}>
        <ShoppingCartLink />
      </div>
    </div>
  );
}

export default Header;
