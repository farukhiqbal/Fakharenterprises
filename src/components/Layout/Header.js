import React, { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { FiAlignJustify } from "react-icons/fi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import logo from "../../images/flogo.jpg";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [heading, setHeading] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [submenuStates, setSubmenuStates] = useState({});

  const handleSubmenuToggle = (submenuKey) => {
    // Toggle the state of the specified submenu
    setSubmenuStates((prevState) => ({
      ...prevState,
      [submenuKey]: !prevState[submenuKey],
    }));
  };

  const handleNav = () => {
    setNav(!nav);
  };
  const handleLinkClick = () => {
    scroll.scrollToTop();
  };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     setShowShadow(scrollPosition > 0); // Adjust the value as needed
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // Define your navigation links as an array of objects
  const navLinks = [
    {
      text: "HOME",
      url: "/home",
    },
    { text: "ABOUT US", url: "/aboutus" },

    { text: "PRODUCTS", url: "/product" },
    { text: "SERVICES", url: "/services" },
    // { text: "SUPPORT", url: "" },
    { text: "CONTACT US", url: "/contactus" },
  ];

  return (
    <>
      <div className=" hidden   md:hidden lg:visible   md:flex  bg-gray-500 text-white   md:flex-row md:justify-between lg:flex lg:flex-row lg:justify-between flex-col justify-between">
        <div className="md:w-auto lg:w-auto mb-4 md:mb-0 lg:mb-0">
          <Link
            to="#"
            className="section-area block md:inline lg:inline    py-2 text-lg ml-[8rem]  "
          >
            Gawalmandi Rawalpindi, Punjab, Pakistan-46000
          </Link>
        </div>

        <div className="flex items-center justify-center md:justify-end lg:justify-end">
          <ul className="flex justify-around   text-lg py-2  mr-[5rem]  gap-[2rem]">
            <li>
              <Link to="" target="_blank">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link to="#" target="_blank">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="#" target="_blank">
                <i className="fa fa-linkedin"></i>
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link to="" target="_blank">
                <i className="fa fa-instagram"></i>
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`sticky top-0 z-[1000] text-black Georgian bg-[#fff] px-4 md:px-6 w-full border-b-2 border-red-700 `}
      >
        <div className="flex flex-col lg:flex-row justify-around py-2">
          <div className="flex flex-col lg:flex-row gap-x-4">
            <div className="lg:hidden hover:text-orange-500 ml-8 lg:ml-0  ">
              {/* bars  */}
              <button
                onClick={handleNav}
                className="fixed top-4 right-4 inline-flex justify-right  items-center rounded-lg  px-2 p-2 text-lg font-medium "
              >
                {/* <FiAlignJustify /> */}
                <TiThMenu className="text-3xl" />
              </button>
            </div>
            <div className="flex  items-center">
              <Link to="/" onClick={handleLinkClick}>
                <img
                  className="h-[55px]   w-[15rem]   sm:w-[20rem]  md:w-[24.5rem]"
                  src={logo}
                  alt=""
                />
              </Link>
            </div>
          </div>
          {/* <div className="flex gap-x-6 md:gap-x-12   justify-center items-center ml-3">
  <button className="cursor-pointer h-12 text-[16px] lg:h-10 text-white px-4 rounded-2xl bg-red-500 hover:bg-red-600">
    Apply Now
  </button>
  <button className="cursor-pointer  h-12 text-[16px] lg:h-10 text-white px-4 rounded-2xl bg-red-500 hover:bg-red-600">
    Sign In
  </button>
</div> */}

          <div
            className={`h-1 flex flex-col ml-10 md:flex-row   justify-between   md:text-[17px]   md:pt-[25px] md:mt-2 items-center  md:px-7 text-sm ${
              showShadow ? "shadow-2xl" : ""
            }`}
          >
            <div className="">
              <div className="hidden lg:inline Georgian">
                <ul className="flex justify-center hover:cursor-pointer ">
                  {navLinks.map((li, index) => (
                    <li
                      key={index}
                      className="py-1 px-6  hover:rounded duration-400 hover:bg-black/5 hover:text-red-700 drop-shadow-xl relative group"
                    >
                      <Link
                        to={li.url}
                        className="flex text-lg font-semibold text-black no-underline "
                      >
                        {li.text}
                        {li.submenu ? (
                          <span className="text-md md:ml-2 pt-2 inline ">
                            <BsChevronDown />
                          </span>
                        ) : null}
                      </Link>

                      {li.submenu && (
                        <div className="absolute top-7 left-1 w-[250px]   hidden group-hover:block shadow-lg z-[999] bg-white/90">
                          <div className="pt-2 py-1">
                            <div className="w-3 h-4 absolute mt-5 rotate-45"></div>

                            <div className="py-2 px-3 flex flex-col">
                              {li.dropdown.map((mysublinks, subIndex) => (
                                <div
                                  className="text-black/80    hover:text-red-500"
                                  key={subIndex}
                                >
                                  <Link
                                    to={mysublinks.link}
                                    className="text-black no-underline text-[17px]"
                                  >
                                    <p className="text-md py- font-light hover:ml-2 hover:text-red-600 ease-out  duration-100 border-b border-black">
                                      {mysublinks.name}
                                    </p>
                                    <p className=""></p>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            nav
              ? "Georgian bg-white absolute right-0  top-0 w-80  z-1000 rounded-sm shadow-md overflow-y-hidden text-black "
              : "fixed right-[-100%] "
          }
        >
          <div className="sticky min-h-full max-h-[100vh] bg-white overflow-y-auto">
            <ul className="pt-4 px-6 bg-white f-h pb-3">
              <div className="flex justify-end md:pr-8 pt-4 ">
                <TfiClose
                  onClick={handleNav}
                  className="rounded p-1 font-bold hover:bg-black/5"
                  size={24}
                />
              </div>
              <div className="mt-6 text-[18px] ">
                {navLinks.map((li, index) => (
                  <>
                    <Link to={li.url} className="text-black no-underline">
                      <li
                        key={index}
                        className="cursor-pointer Georgian py-2 pl-3 font-medium   hover:rounded hover:bg-black/5 hover:text-red-700 "
                      >
                        <span className="" onClick={handleNav}>
                          {" "}
                          {li.text}
                        </span>
                      </li>
                    </Link>
                    {li.submenu && (
                      <BsChevronDown
                        className={`${
                          submenuStates[index] && "rotate-180"
                        } absolute  mt-[-39px] right-8 `}
                        onClick={() => handleSubmenuToggle(index)}
                      />
                    )}

                    <div className=" ml- mt-2  flex flex-col justify-center border-b-2 border-black items-center max-h-[40vh] overflow-y-auto">
                      {li.submenu && submenuStates[index] && nav && (
                        <ul className="pt-0">
                          {li.dropdown.map((submenuItem, subIndex) => (
                            <Link
                              to={submenuItem.link}
                              className="text-black no-underline"
                            >
                              <li
                                key={subIndex}
                                className=" text-black/70 text-md ease-out   transition-all duration-200  gap-x-4 cursor-pointer    rounded-md py-2   hover:rounded hover:bg-black/5 hover:text-red-700"
                                onClick={() => {
                                  setNav(!nav);
                                }}
                              >
                                {submenuItem.name}
                              </li>
                            </Link>
                          ))}
                        </ul>
                      )}
                    </div>
                  </>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
