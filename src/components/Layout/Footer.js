import React from "react";
import { MdEmail } from "react-icons/md";
import {
  
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";
import Flogo from "../../images/footerlogo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="main-footer py-5 mt-[5rem]">
          <div className="mx-auto  w-[80vw]">
            <div className="row   grid  grid-cols-1   md:grid-cols-3 lg:grid-col-3 ">
              <div className="  grid-cols-1">
                <div className="   w-[300px]  h-[200px]">
                  <img
                    src={Flogo}
                    className="  h-full w-full   "
                    alt="footer-logo"
                  />
                </div>
              </div>
              <div className="   grid-cols-1">
                <h3 className="text-2xl  font-bold mb-5 ">Products</h3>
                <ul className="text-md">
                  <li className="py-2">
                    <Link to="/product" className=" hover:underline ">
                      Fire Fighting Solutions
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link to="/product" className=" hover:underline ">
                      Emergency Lights
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link to="/product" className=" hover:underline ">
                      Personal Protective Equipments (PPE)
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=" grid-cols-1">
                <h3 className="text-2xl  font-bold mb-5 ">Contact Info</h3>
                <ul className="contact">
                  <li className="address flex   my-2">
                    <FaLocationDot className="mt-[.2rem]  mr-2 " />
                    gawalmandi Rawalpindi, Punjab, Pakistan-56000
                  </li>
                  <li className="phone font-bold flex  py-2">
                    <FaPhoneAlt className="mt-[.2rem]  mr-2 " />
                    Phone: <Link to="tel:+92-51-4446640">+92 304 7083322</Link>
                  </li>

                  {/* <li className="fax">Fax: +92-51-4446641</li> */}
                  <li className="email   font-bold flex  py-2">
                    <MdEmail className="mt-[.2rem]  mr-2 " />
                    E-Mail:
                    <Link to="mailto:sales@capitalsolutions.pk">
                    Fakharenterprises@gmail.com
                    </Link>
                  </li>
                </ul>
                <ul className="myFooterSocialIcons gap-4  flex  mt-5 social-network">
                    <li className="icoFacebook  rounded-[40px] hover:bg-blue-600 hover:text-white h-[2.5rem] border-2 border-black w-[2.5rem]">
                      <Link
                        to="https://www.facebook.com/businessrwp?mibextid=ZbWKwL"
                        
                      >
                        <FaFacebookF className="text-center  text-lg ml-2 mt-2" />
                      </Link>
                    </li>
                    <li className="  rounded-[40px] hover:bg-blue-500 hover:text-white h-[2.5rem] border-2 border-black w-[2.5rem]">
                      <FaTwitter className="text-center  text-lg ml-2 mt-2" />
                    </li>
                    <li className="  rounded-[40px] hover:bg-red-700 hover:text-white h-[2.5rem] border-2 border-black w-[2.5rem]">
                      <FaInstagram className="text-center  text-lg ml-2 mt-2" />
                    </li>
                    <li className="  rounded-[40px] hover:bg-blue-600 hover:text-white h-[2.5rem] border-2 border-black w-[2.5rem]">
                      <FaLinkedin className="text-center  text-lg ml-2 mt-2" />
                    </li>
                  
                  </ul>

              </div>
            </div>
          </div>
        </div>

        <div className="text-center  pt-">
          <div className=" mt-4 bg-[#dc1b24] text-[#fff]  pt-2 text-lg">
            <marquee>
              {/* <FaHeart /> */}
              All Rights Reserved. © 2024
              <b className="ml-1">FakharEnterprises.com.pk</b> &nbsp;
              {/* <FaHeart /> */}
              &nbsp; Developed By : <strong>medcloud.com.pk</strong>
            </marquee>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
