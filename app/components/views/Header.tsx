import logo from "~/assets/logos/logo.png";
import { StoreIcon } from "../icons/StoreIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { ShoppingCartIcon } from "../icons/ShoppingCartIcon";

function Header() {



  return (
    <div
      className={"flex w-[100%] bg-brown-400 p-[10px]"}
    >
      <div
        className={"flex flex-1"}
      >
        <img src={logo} className="w-[48px] h-[48px] rounded-[60px]" />
        <div className="flex flex-1 pr-[48px] justify-center">
          <div className="flex flex-row px-[10px] py-[5px] gap-[10px] bg-white text-black text-[18px] border-2 rounded-full items-center">
            <StoreIcon />
            Store
          </div>
        </div>
      </div>
      <div
        className={"flex flex-1 flex-row px-[10px] py-[5px] gap-[10px] min-w-[200px] bg-yellow-100 rounded-full items-center"}
      >
        <SearchIcon />
        <input
          className="text-black"
          placeholder="Search insects"
        />
      </div>
      <div
        className={"flex flex-1 justify-center"}
      >
        <div className="flex flex-row px-[10px] py-[5px] gap-[10px] bg-gray-200 text-black text-[20px] rounded-full items-center ">
          <ShoppingCartIcon />
          $0,00
          <div className="text-[16px] opacity-[0.5]">
            0 items
          </div>
        </div>
      </div>
    </div>
  );

}

export default Header;
