import logo from "~/assets/logos/logo.png";

function Header() {

  return (
    <div
      className={"flex flex-1 w-[100%] bg-brown-400 p-[10px]"}
    >
      <div
        className={"flex-1"}
      >
        <img src={logo} className="w-[48px] rounded-[60px]" />
      </div>
      <div
        className={"flex-1"}
      >
      </div>
      <div
        className={"flex-1"}
      >
      </div>
    </div>
  );

}

export default Header;
