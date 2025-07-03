import { Link } from "react-router";
import { StoreIcon } from "~/components/Icons/StoreIcon";
import Footer from "~/components/UI/Footer";

function WelcomeBody() {
  return (
    <div className="flex flex-1 flex-col gap-2.5 justify-between overflow-y-auto">
      <div className="flex flex-col max-w-[1000px] mt-[5%] text-black self-center bg-white rounded-xl p-5 drop-shadow-xl">
        <h1 className="mb-8 text-black text-[24px] text-center font-semibold">
          Welcome to the <span className="text-nowrap">MultiLegged Store!</span>
        </h1>
        <p>
          We're breeders of isopods and stick & leaf insects based in{" "}
          <b>Estonia, Europe</b>.
        </p>
        <br />
        <p>
          You can explore the website and purchase them right here in our store!
        </p>
        <br />
        <p>
          Currently we ship wihtin the Baltics{" "}
          <b>(Estonia, Latvia, Lithuania)</b>, but we're expanding to other
          European countries very soon.
        </p>
        <br />
        <Link
          className="flex w-fit items-center self-center justify-center bg-black-500 rounded-full drop-shadow-md px-4 py-2.5"
          to={"/store"}
        >
          <StoreIcon fill="white" />
          <span className="text-white">Head to the store now!</span>
        </Link>
        <br />
        <p>
          If you have any questions, feel free to reach out through our{" "}
          <Link to={"/contact"}>
            <span className="text-blue-800 underline">contact page</span>
          </Link>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default WelcomeBody;
