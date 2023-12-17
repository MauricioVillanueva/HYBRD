import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { switchSelector } from "../redux/slices/navBarSlice";
import { useDispatch } from "react-redux";

import Searchbar from "./SideBar/Searchbar";

const NavBar = ({ theme }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;

  const selected = (select) => {
    dispatch(switchSelector(select));
  };

  return (
    <nav className="hidden bg-white border-gray-200 dark:bg-gray-900 lg:block shadow-md mb-2 w-full">
      <div className="w-full flex items-center justify-between mx-auto p-2 pl-10">
        <Link to="/">
          <div className="flex">
            <img
              className="w-[40px] h-[40px]"
              alt="Image"
              src="https://generation-sessions.s3.amazonaws.com/14ae48c3ae3b406102e000bb194d554c/img/image-33@2x.png"
            />
            <img
              className="h-[40px] w-[105px]"
              alt="Image"
              src="https://generation-sessions.s3.amazonaws.com/14ae48c3ae3b406102e000bb194d554c/img/image-34@2x.png"
            />
          </div>
        </Link>
        <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
          <ul className="font-general-sans font-medium flex p-4 md:p-0 border-gray-100 rounded-lg flex-row space-x-8 mt-0 border-0 bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to={currentPath === "/" ? "/" : "/"}
                onClick={() => selected("/")}
              >
                <p
                  href="#"
                  className={`hover:text-red-500 ${
                    theme === "dark" && currentPath === "/"
                      ? "text-red-500"
                      : theme === "dark"
                      ? "text-gray-300"
                      : theme !== "dark" && currentPath === "/"
                      ? "text-red-500"
                      : "text-black"
                  }`}
                  aria-current="page"
                >
                  HOME
                </p>
              </Link>
            </li>
            <li>
              <Link to="/products">
                <p
                  href="#"
                  className={`hover:text-red-500 ${
                    theme === "dark" && currentPath === "/products"
                      ? "text-red-500"
                      : theme === "dark"
                      ? "text-gray-300"
                      : theme !== "dark" && currentPath === "/products"
                      ? "text-red-500"
                      : "text-black"
                  }`}
                >
                  PRODUCTS
                </p>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <p
                  href="#"
                  className={`hover:text-red-500 ${
                    theme === "dark" && currentPath === "/contact"
                      ? "text-red-500"
                      : theme === "dark"
                      ? "text-gray-300"
                      : theme !== "dark" && currentPath === "/contact"
                      ? "text-red-500"
                      : "text-black"
                  }`}
                >
                  CONTACT US
                </p>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <p
                  href="#"
                  className={`hover:text-red-500 ${
                    theme === "dark" && currentPath === "/about"
                      ? "text-red-500"
                      : theme === "dark"
                      ? "text-gray-300"
                      : theme !== "dark" && currentPath === "/about"
                      ? "text-red-500"
                      : "text-black"
                  }`}
                >
                  ABOUT US
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <Searchbar />
        <div className="w-[370px] h-auto border-opacity-20 justify-around items-center inline-flex">
          <Link to="/Favorites">
            <div className="flex-col justify-start items-center inline-flex">
              <img
                alt="Saved"
                src={
                  theme === "dark" && currentPath === "/favorites"
                    ? "https://i.postimg.cc/V6dZjT9V/Active-Heart.png"
                    : theme === "dark"
                    ? "https://i.postimg.cc/FsjWg0cN/Inactive-Heart-Dark-Mode.png"
                    : theme !== "dark" && currentPath === "/favorites"
                    ? "https://i.postimg.cc/V6dZjT9V/Active-Heart.png"
                    : "https://i.postimg.cc/vHR2V040/Inactive-Heart-Light-Mode.png"
                }
                className="w-6 h-auto"
              />
              <div
                className={`text-xs font-medium hover:text-red-500 ${
                  theme === "dark" && currentPath === "/favorites"
                    ? "text-red-500"
                    : theme === "dark"
                    ? "text-gray-400"
                    : theme !== "dark" && currentPath === "/favorites"
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                Saved
              </div>
            </div>
          </Link>
          <Link to="/cart" onClick={() => selected("cart")}>
            <div className="flex-col justify-start items-center inline-flex">
              <img
                alt="MyCart"
                src={
                  theme === "dark" && currentPath === "/cart"
                    ? "https://i.postimg.cc/pV51rwL9/Active-Cart.png"
                    : theme === "dark"
                    ? "https://i.postimg.cc/K8DWFtvJ/Inactive-Cart-Dark-Mode.png"
                    : theme !== "dark" && currentPath === "/cart"
                    ? "https://i.postimg.cc/pV51rwL9/Active-Cart.png"
                    : "https://i.postimg.cc/j2f817F6/Inactive-Cart-Light-Mode.png"
                }
              />
              <div
                className={`text-xs font-medium hover:text-red-500 ${
                  theme === "dark" && currentPath === "/cart"
                    ? "text-red-500"
                    : theme === "dark"
                    ? "text-gray-400"
                    : theme !== "dark" && currentPath === "/cart"
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                Cart
              </div>
            </div>
          </Link>
          <Link to="/Account" onClick={() => selected("Account")}>
            <div className="flex-col justify-start items-center inline-flex">
              <img
                src={
                  theme === "dark" && currentPath === "/Account"
                    ? "https://i.postimg.cc/BnWfdhyF/Active-Account.png"
                    : theme === "dark"
                    ? "https://i.postimg.cc/9Fwjg3xV/Inactive-Account-Dark-Mode.png"
                    : theme !== "dark" && currentPath === "/Account"
                    ? "https://i.postimg.cc/BnWfdhyF/Active-Account.png"
                    : "https://i.postimg.cc/VN7H01tt/Inactive-Account-Light-Mode.png"
                }
                className="w-4 h-auto"
                alt="Account"
              />
              <div
                className={`text-xs font-medium hover:text-red-500 ${
                  theme === "dark" && currentPath === "/Account"
                    ? "text-red-500"
                    : theme === "dark"
                    ? "text-gray-400"
                    : theme !== "dark" && currentPath === "/Account"
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                Account
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
