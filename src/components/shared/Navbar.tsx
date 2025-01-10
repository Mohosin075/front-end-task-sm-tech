"use client";
import { IoHome } from "react-icons/io5";
import Logo from "./Logo";
import { useState } from "react";
import Link from "next/link";

import { FaBars, FaCartArrowDown } from "react-icons/fa6";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const user = false;

  const NavLinkList = [
    { label: "Home", to: "/"},
    { label: "Shop", to: "/products" },
    { label: "About", to: "/about" },
    { label: "Blog", to: "/blog"},
  ];
  return (
    <nav className="max-w-[1440px] mx-auto ">
      <div className="flex justify-between items-center ps-4 md:ps-10 lg:ps-28 bg-gray-100">
        {/* left */}
        <div className="lg:w-2/12">
          <Logo />
        </div>
        <div className="lg:w-4/12 flex justify-center items-center min-h-16">
          {/* links */}
          <div className="items-center hidden md:flex lg:gap-3">
            {NavLinkList.map((item, idx) => (
              <li key={idx} className="list-none hover:bg-gray-200 rounded-md">
                <Link href={item.to} className="navLink-style group">
                  {item.label}
                </Link>
              </li>
            ))}
          </div>
        </div>
        {/* right */}
        <div className="md:w-5/12 lg:w-5/12 bg-secondary min-h-16 pr-4 md:pr-10 lg:pr-28 flex items-center justify-end">
          <div>
            <div className="flex items-center text-white">
              <span className="hidden lg:block">
                <Link href="/favorite" className={"navLink-style"}>
                  <FaCartArrowDown />
                  <span className="ml-1">Favorite</span>
                </Link>
              </span>
              <Link href="/my-cart" className="navLink-style relative">
                <div className="relative">
                  <FaCartArrowDown />
                  <span className="absolute w-4 h-4 -top-4 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                    5
                  </span>
                </div>
                <span className="ml-1">Cart</span>
              </Link>

              <div className="hidden lg:block">
                {user ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        // handleLogOut();
                        setMenuOpen(false);
                      }}
                      className="my-btn"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <Link href="/sign-in" className={""}>
                      <button className="my-btn">Sign In</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* menubar */}
          <div className="ms-3">
            <button
              className=" text-2xl block md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Menu (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64  transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 bg-white`}
      >
        <div className="flex justify-end px-2">
          {/* <Logo /> */}
          <button className=" text-2xl p-3" onClick={() => setMenuOpen(false)}>
            ✕
          </button>
        </div>

        <div className="flex flex-col space-y-2 p-4">
          {!user ? (
            <div className="flex justify-between items-center gap-3 text-center">
              <Link
                href="/sign-in"
                onClick={() => setMenuOpen(false)}
                className="my-btn w-full"
              >
                Sign In
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => {
                  // handleLogOut();
                  setMenuOpen(false);
                }}
                className="my-btn"
              >
                Log Out
              </button>
            </div>
          )}

          <div className="divider"></div>

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
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
