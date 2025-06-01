import { Link } from "react-router";

function Footer() {

  return (
    <div
      data-testid="FOOTER.CONTAINER:VIEW"
      className="flex flex-col p-2.5 gap-2.5 bg-gray-600"
    >
      <div>
        <p className="text-black/80 text-[14px]">
          © MultiLegged 2025
        </p>
      </div>
      <div className="flex flex-row gap-2.5 underline decoration-black">
        <Link

          to={{ pathname: "/privacy" }}
        >
          <p className="text-black">
            Privacy Policy
          </p>
        </Link>
        <Link
          to={{ pathname: "/contact" }}
        >
          <p className="text-black">
            Contact Us
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
