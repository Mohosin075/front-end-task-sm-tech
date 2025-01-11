import Link from "next/link";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa6";
import Logo from "./Logo";

const Footer = () => {
  const NavLinkList = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/products" },
    { label: "About", to: "/about" },
    { label: "Blog", to: "/blog" },
  ];
  return (
    <footer className="max-w-[1440px] mx-auto">
      <footer className="footer bg-base-300 text-base-content p-10">
        <nav className="">
          <div>
            <Logo />
            <div className="mt-10">
              <h4 className="text-xl lg:text-2xl">Download App:</h4>
              <div className="flex text-xl  items-center  gap-6">
                <div className="flex items-center gap-3 bg-black p-3 rounded-md text-white ">
                  <FaApple />
                  <div>
                    <p className="text-sm">Download on the</p>
                    <h4>App Store</h4>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-black p-3 rounded-md text-white ">
                  <BiLogoPlayStore />
                  <div>
                    <p className="text-sm">Get It On</p>
                    <h4>Google Play</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Quick links 1</h6>
          {NavLinkList.map((item, idx) => (
            <li key={idx} className="list-none">
              <Link
                href={item.to}
                className="navLink-style group hover:bg-gray-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">Quick links 2</h6>
          <Link
            href="/favorites"
            className="navLink-style group hover:bg-gray-200"
          >
            Favorites
          </Link>
          <Link href="/cart" className="navLink-style group hover:bg-gray-200">
            Cart
          </Link>
          <Link
            href="/sign-in"
            className="navLink-style group hover:bg-gray-200"
          >
            Sign In
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Contact us</h6>
          <div className="space-y-3">
            <p>1234 5678 90</p>
            <p>Freshharvests@gmail.com</p>
            <p>Tanjung Sari Street, Pontianak, Indonesia</p>
          </div>
        </nav>
      </footer>
    </footer>
  );
};

export default Footer;
