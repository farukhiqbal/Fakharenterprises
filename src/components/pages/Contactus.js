import React from "react";
import Layout from "../Layout/Layout";
import { MdEmail } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Number from "./Number";

const Contactus = () => {
  return (
    <Layout  title={'contact us'}>
      <div
        className="title-area h-[50vh]"
        style={{
          backgroundSize: "cover",
          //   backgroundColor: "#1d1d1d", // Corrected typo in backgroundColor
          backgroundPosition: "50% 50%",
          backgroundImage:
            'url("https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/safety-banner.png")',
        }}
      >
        <div className="container  w-[80vw]  mx-auto">
          <div className="content  py-[120px] ">
            <h1 className="text-white ml-[rem]  text-[45px]   text-center md:text-left lg:text-left  uppercase  lg:text-[70px] md:text-[70px]  font-bold   text-shadow: 2px 2px #171717">
              CONTACT US
            </h1>
          </div>
        </div>
      </div>

      {/* ================================part2 =================================== */}
      <div className="section contact-area    mt-[-55px]">
        <div className="container w-[80vw]  bg-gray-200  mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-md-6  px-5">
              <div className="content-area py-8 px-6">
                <h2 className="mb-[20px]   text-[#000] font-bold   text-[46px]">
                  {" "}
                  Get In Touch
                </h2>
                <p className="mb-[20px]  text-[17px] leading-8 ">
                  We always feel delighted when anyone wants to talk to us. Feel
                  free to call us or email us with any inquires you may have
                  regarding our fire safety products or services. Please allow
                  up to 24 hours for a response. Your patience is greatly
                  appreciated.
                </p>
                <ul className="mt-4">
                  <li className="phone flex   py-2 ">
                    <FaPhoneAlt className="mt-[.2rem]  mr-2 text-[#dc1b24]" />

                    <a href="tel:+92-51-4446640">+92 304-7083322</a>
                  </li>
                  <li className="phone flex   py-2">
                    <FaPhoneAlt className="mt-[.2rem]  mr-2  text-[#dc1b24]" />

                    <a href="tel:+92-51-8312551">+92 304-7083322</a>
                  </li>
                  <li className="email  flex  py-2">
                    <MdEmail className="mt-[.2rem]  mr-2  text-[#dc1b24]" />

                    <a href="mailto:sales@capitalsolutions.pk">
                    Fakharenterprises@gmail.com
                    </a>
                  </li>
                  <li className="address   flex">
                    <FaLocationDot className="mt-[.2rem]  mr-2   text-[#dc1b24]" />
                    gawalmandi Rawalpindi, Punjab, Pakistan-56000
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6  p-[20px]  md:p-[20px]   lg:p-[40px]">
              <div className="form-area bg-white   md:p-[20px]  lg:p-[40px]">
                <div className="p-5 ">
                  <form
                    action="/contact-us#wpcf7-f1165-o1"
                    method="post"
                    className="wpcf7-form init"
                    aria-label="Contact form"
                    noValidate="novalidate"
                    data-status="init"
                  >
                    <div className="flex flex-wrap ">
                      <div className="w-full   md:w-full   lg:w-1/2    ">
                        <div className="form-group    mb-[1rem]  md:mb-[2rem]">
                          <p>
                            <span className="" data-name="your-name">
                              <input
                                size="40"
                                className="border-b-[5px] border-[#f1f1f1] w-full py-2 outline-none focus:border-[#f1f1f1]"
                                placeholder="Full Name"
                                type="text"
                                name="your-name"
                              />
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="w-full   md:w-full   lg:w-1/2    px-0   md:px-4">
                        <div className="form-group   mb-[1rem]  md:mb-[2rem]">
                          <p>
                            <span className="  ">
                              <input
                                size="40"
                                className=" border-b-[5px] w-full border-[#f1f1f1]  py-2  outline-none focus:border-[#f1f1f1]"
                                aria-required="true"
                                placeholder="Phone Number"
                                type="number"
                                name="your-phone"
                              />
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="w-full   px-0  md:px-0   lg:px-0">
                        <div className="form-group    mb-[1rem]  md:mb-[2rem]">
                          <p>
                            <span
                              className="wpcf7-form-control-wrap"
                              data-name="your-email"
                            >
                              <input
                                size="40"
                                className=" border-b-[5px] w-full border-[#f1f1f1]  py-2  mb-5 outline-none focus:border-[#f1f1f1] "
                                placeholder="Email Address"
                                // value=""
                                type="email"
                                name="your-email"
                              />
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="w-full   px-0  md:px-0">
                        <div className="form-group     mb-[1rem]  md:mb-[2rem]">
                          <p>
                            <span
                              className="wpcf7-form-control-wrap"
                              data-name="your-message"
                            >
                              <textarea
                                cols="40"
                                rows="10"
                                className=" border-b-[5px] w-full border-[#f1f1f1] px-2 py-5   h-[10rem]  outline-none focus:border-[#f1f1f1]"
                                placeholder="Your Message"
                                name="your-message"
                              ></textarea>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="rounded-full   mx-auto   my-[3rem] flex justify-between border border-[#dc1b24] bg-[#dc1b24] px-5 py-3 text-center text-xl font-medium text-white shadow-xl transition-all hover:border-[black] hover:bg-[black] focus:ring focus:ring-black disabled:cursor-not-allowed disabled:border-black disabled:bg-black"
                    >
                      Submit
                      <MdKeyboardDoubleArrowRight className="mt-1 ml-2 text-[1.5rem]" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================part3 ================================== */}

      <div className="w-full mt-32">
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3322.972951510641!2d73.05570567569742!3d33.60600627332831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM2JzIxLjYiTiA3M8KwMDMnMjkuOCJF!5e0!3m2!1sen!2s!4v1708759479662!5m2!1sen!2s"
            className="w-full h-40vh"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* =======================================part 6 ============================================================ */}
      <div className="mt-[8rem]"></div>
      <Number />
    </Layout>
  );
};

export default Contactus;
