"use client";
import { GiSelfLove } from "react-icons/gi";
import Logo from "./Logo";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaCartArrowDown } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Login from "../login/Login";
import Register from "../register/Register";
import { baseApi, useGetProfileQuery } from "@/redux/api/baseApi";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavLinkList = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/products" },
    { label: "About Us", to: "/about" },
    { label: "Blog", to: "/blog" },
  ];

  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const dispatch = useAppDispatch();

  const { user, token } = useSelector((state: RootState) => state.auth);
  const {data : profile} = useGetProfileQuery();

  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => setIsVisible(true), 10);
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  const toggleView = () => {
    setIsSignIn(!isSignIn);
  };

  const handleLogOut = () => {
    setIsOpen(false);
    dispatch(logout());
    dispatch(baseApi.util.invalidateTags(["Profile"]));
  };

  const handleSignIn = () => {
    setMenuOpen(false);
    openModal();
  };

  return (
    <nav className="max-w-[1440px] mx-auto relative">
      <div className="flex justify-between items-center ps-4 md:ps-10 lg:ps-28 bg-gray-100">
        {/* left */}
        <div className="lg:w-2/12">
          <Logo />
        </div>
        <div className="lg:w-4/12 flex justify-center items-center min-h-16">
          {/* links */}
          <div className="items-center hidden md:flex lg:gap-3">
            {NavLinkList.map((item, idx) => (
              <li
                key={idx}
                className={`list-none rounded-md ${
                  isActive(item.to) ? "bg-gray-300" : "hover:bg-gray-200"
                }`}
              >
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
                <Link href="/favorite" className="navLink-style">
                  <GiSelfLove />
                  <span className="ml-1">Favorite</span>
                </Link>
              </span>
              <Link href="/cart" className="navLink-style relative">
                <div className="relative">
                  <FaCartArrowDown />
                  <span className="absolute w-4 h-4 -top-4 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                    5
                  </span>
                </div>
                <span className="ml-1">Cart</span>
              </Link>

              <div className="hidden lg:block">
                {token ? (
                  <div className="flex flex-col items-center space-y-4">
                    {/* Log Out Button */}
                    <div className="flex items-center gap-2 ms-2">
                      <div className="dropdown dropdown-left dropdown-bottom">
                        <div
                          tabIndex={0}
                          role="button"
                          className="rounded-full"
                        >
                          <div className="avatar online">
                            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                              <Image
                                width={500}
                                height={300}
                                src={ profile?.data?.profileImage || 
                                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                }
                                alt="Profile"
                                className="object-cover w-full h-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          tabIndex={0}
                          className="dropdown-content bg-white text-black z-[1] w-64 p-2 shadow rounded-md"
                        >
                          <div className="card-body text-black">
                            <div className="mb-2 space-y-2">
                              <li
                                className={`list-none rounded-md ${
                                  isActive("/profile")
                                    ? "bg-gray-300"
                                    : "hover:bg-gray-200"
                                }`}
                              >
                                <Link
                                  href="/profile"
                                  className="navLink-style group"
                                >
                                  Profile
                                </Link>
                              </li>
                            </div>
                            <button onClick={handleLogOut} className="my-btn">
                              Log Out
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center space-y-4 md:space-y-0">
                    {/* Sign In Button */}
                    <button className="my-btn" onClick={openModal}>
                      Sign In
                    </button>

                    {/* Modal */}
                    {isOpen && (
                      <div
                        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
                          isVisible ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div
                          className={`bg-white w-11/12 max-w-lg p-6 rounded shadow-lg relative transform transition-transform duration-300 ${
                            isVisible
                              ? "scale-100 translate-y-0"
                              : "scale-95 -translate-y-4"
                          }`}
                          onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
                        >
                          <div className="modal-action flex justify-end text-black">
                            <button className="my-btn" onClick={closeModal}>
                              X
                            </button>
                          </div>

                          {/* Modal Content */}
                          <div className="text-black">
                            {isSignIn ? (
                              <Login
                                toggleView={toggleView}
                                setIsOpen={setIsOpen}
                              />
                            ) : (
                              <Register
                                toggleView={toggleView}
                                isSignIn={isSignIn}
                                setIsSignIn={setIsSignIn}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* menubar */}
          <div className="ms-3">
            <button
              className="text-2xl block md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Menu (Mobile) */}
      <div
        className={`fixed top-0 left-0 w-64 h-full  transform ${
          menuOpen ? "translate-x-0 " : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 bg-white`}
      >
        <div className="flex justify-end px-2">
          <button className="text-2xl p-3" onClick={() => setMenuOpen(false)}>
            ✕
          </button>
        </div>

        <div className="flex flex-col space-y-2 p-4">
          {!token ? (
            <div className="flex flex-col items-center space-y-4 md:space-y-0">
              {/* Sign In Button */}
              <button className="my-btn w-full" onClick={handleSignIn}>
                Sign In
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 ms-2">
                      <div className="dropdown  dropdown-bottom">
                        <div
                          tabIndex={0}
                          role="button"
                          className="rounded-full"
                        >
                          <div className="avatar online">
                            <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
                              <Image
                                width={500}
                                height={300}
                                src={profile?.data?.profileImage || 
                                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                }
                                alt="Profile"
                                className="object-cover w-full h-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          tabIndex={0}
                          className="dropdown-content bg-white text-black z-[1] w-64 p-2 shadow rounded-md"
                        >
                          <div className="card-body text-black">
                            <div className="mb-2 space-y-2">
                              <li
                                className={`list-none rounded-md ${
                                  isActive("/profile")
                                    ? "bg-gray-300"
                                    : "hover:bg-gray-200"
                                }`}
                              >
                                <Link
                                  href="/profile"
                                  className="navLink-style group"
                                >
                                  Profile
                                </Link>
                              </li>
                            </div>
                            <button onClick={handleLogOut} className="my-btn">
                              Log Out
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
          )}

          <div className="divider"></div>

          {NavLinkList.map((item, idx) => (
            <li
              key={idx}
              className={`list-none ${
                isActive(item.to) ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
            >
              <Link
                href={item.to}
                onClick={() => setMenuOpen(false)}
                className="navLink-style group"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </div>
      </div>

      <span className="block md:hidden">
        {/* Full-screen Modal */}
        {isOpen && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`bg-white w-full h-full p-2 rounded shadow-lg relative transform transition-transform duration-300 ${
                isVisible
                  ? "scale-100 translate-y-0"
                  : "scale-95 -translate-y-4"
              }`}
              onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
            >
              <div className="modal-action flex justify-end text-black">
                <button className="my-btn" onClick={closeModal}>
                  X
                </button>
              </div>

              {/* Modal Content */}
              <div className="text-black h-full flex items-center justify-center">
                {isSignIn ? (
                  <Login toggleView={toggleView} setIsOpen={setIsOpen} />
                ) : (
                  <Register
                    toggleView={toggleView}
                    isSignIn={isSignIn}
                    setIsSignIn={setIsSignIn}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </span>

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
