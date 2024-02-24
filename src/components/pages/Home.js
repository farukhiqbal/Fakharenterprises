import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import Layout from "../Layout/Layout";
import introimg from "../../images/intro.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Typography from "@mui/material/Typography";
import MultiCarousel from "./MultiCarosel";

const Home = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const products = [
    {
      name: "Fire Extinguishers",
      image:
        "https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/featured/fire-extinguishers.jpg",
      link: "https://www.capitalsolutions.pk/product-category/fire-extinguishers/",
    },
    {
      name: "Fire Alarm/Detection Systems",
      image:
        "https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/featured/fire-alarm.jpg",
      link: "https://www.capitalsolutions.pk/product-category/fire-alarm-system/",
    },
    {
      name: "Fire Suppression Systems",
      image:
        "https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/featured/fire-suppression.jpg",
      link: "https://www.capitalsolutions.pk/product-category/fire-suppression-system/",
    },
    {
      name: "Fire Fighting Systems",
      image:
        "https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/featured/fire-fighting.jpg",
      link: "https://www.capitalsolutions.pk/product-category/fire-fighting-system/",
    },
    {
      name: "Emergency Lighting Systems",
      image:
        "https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/featured/emergency-lighting.jpg",
      link: "https://www.capitalsolutions.pk/product-category/emergency-lighting/",
    },
    {
      name: "PPE",
      image:
        "https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/featured/ppe.jpg",
      link: "https://www.capitalsolutions.pk/product-category/ppe-safety-items/",
    },
  ];

  // Sample service data
  const services = [
    {
      title: "Fire Extinguishers",
      image:
        "https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/service-1.png",
      link: "https://www.capitalsolutions.pk/fire-extinguishers",
    },
    {
      title: "Fire Suppression System",
      image:
        "https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/service-2.png",
      link: "https://www.capitalsolutions.pk/fire-suppression-system",
    },
    {
      title: "Fire Fighting System",
      image:
        "https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/service-3.png",
      link: "https://www.capitalsolutions.pk/fire-fighting-system",
    },
    {
      title: "Fire Alarm System",
      image:
        "https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/service-4.png",
      link: "https://www.capitalsolutions.pk/fire-alarm-system",
    },
  ];

  const imageData = [
    {
      id: 1,
      img: `https://alphaenterprises.com.pk/assets/img/clients/4.png`,
    },
    {
      id: 2,
      img: `https://alphaenterprises.com.pk/assets/img/clients/5.png`,
    },
    {
      id: 3,
      img: `https://alphaenterprises.com.pk/assets/img/clients/6.png`,
    },
    {
      id: 4,
      img: `https://alphaenterprises.com.pk/assets/img/clients/7.png`,
    },
    {
      id: 5,
      img: `https://alphaenterprises.com.pk/assets/img/clients/8.png`,
    },
    {
      id: 6,
      img: `https://alphaenterprises.com.pk/assets/img/clients/9.png`,
    },
    {
      id: 7,
      img: `https://alphaenterprises.com.pk/assets/img/clients/1.png`,
    },
    {
      id: 8,
      img: `https://alphaenterprises.com.pk/assets/img/clients/2.png`,
    },
    {
      id: 9,
      img: `https://alphaenterprises.com.pk/assets/img/clients/3.png`,
    },
  ];

  return (
    <Layout>
      <section
        className="relative"
        style={{
          height: "90vh",
          backgroundImage: `url('https://i0.wp.com/www.capitalsolutions.pk/wp-content/uploads/2022/08/Safety.jpg?fit=1000%2C667&ssl=1')`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          // backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 flex   flex-col          lg:flex-row  md:flex-row items-center justify-center">
          {/* Left Column */}
          <div className="lg:w-1/2 lg:pr-8 px-5 text-center">
            <div className="bg-[#00000054] bg-black  px-5  py-5 ">
              <h2 className="text-3xl lg:text-5xl text-[#ffffff] font-bold leading-tight mb-4">
                FIRE FIGHTING SYSTEMS
              </h2>
              <a
                href="https://www.capitalsolutions.pk/shop"
                className="bg-[#dc1b24] text-white px-6 py-3 rounded-lg  inline-block hover:bg-black hover:text-white transition duration-300"
              >
                See Our Products
              </a>
            </div>
          </div>

          {/* Right Column */}
          {/* <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0     text-center">
            <div className="bg-[#00000054] bg-black px-5  py-5 ">
              <h2 className="text-3xl lg:text-4xl text-[#ffffff] font-bold leading-tight mb-4">
                VISIT OUR ENGINEERING SECTION
              </h2>
              <a
                href="https://www.capitalsolutions.pk/engineering/"
                className="bg-[#dc1b24] text-white px-6 py-3 rounded-lg inline-block  hover:text-black hover:bg-gray-200 transition duration-300"
              >
                Visit Now
              </a>
            </div>
          </div> */}
        </div>
      </section>

      {/* =============================part 2 -=============================== */}

      <div className="section mt-[5rem]">
        <div className="container" style={{ width: "80vw", margin: "0 auto" }}>
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 ">
              <h2 className="text-2xl lg:text-5xl font-[700] text-[#dc1b24] mb-4">
                ABOUT
              </h2>
              <h2 className="text-2xl lg:text-5xl font-[700] mb-4"></h2>
              <p className="mb-4   text-[1.2rem] leading-[2]">
                Fakhar Enterprises is a pioneer in providing inspection,
                functional testing, and maintenance of fire protection systems.
                We have been providing our services to commercial, industrial,
                government, and mercantile facilities since 2013. With time, we
                have expanded our services by adding special hazards, fire alarm
                and detection systems. The evolution of fire fighting equipment
                in Pakistan continues, and we have added access control systems,
                fire extinguisher sales and service, and fire protection systems
                management programs into our catalog of quality solutions.
              </p>
              <button
                type="button"
                className="rounded-full flex justify-between border border-[#dc1b24] bg-[#dc1b24] px-5 py-2.5 text-center text-xl font-medium text-white shadow-xl transition-all hover:border-[black] hover:bg-[black] focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
              >
                read more
                <MdKeyboardDoubleArrowRight className="mt-1 ml-3 text-[1.5rem]" />
              </button>
            </div>
            <div className="w-full lg:w-1/2 p-4  mt-5">
              <img
                src={introimg}
                className="img-responsive"
                alt="Safety Intros"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===============================part 3 ================================== */}

      <div className="bg-[#f5f5f5]  mt-[8rem]">
        <div className="container mx-auto  " style={{ width: "80vw" }}>
          <div className="pt-[5rem] mb-5  text-center">
            <h2 className="text-2xl md:text-[46px]  pb-[20px]  font-bold mb-4">
              <span className="text-[#dc1b24] ">FEATURED</span> PRODUCTS
            </h2>
            <p className="mb-8  text-lg leading-[2.2rem]">
              Fakhar Enterprises provides only the highest quality fire fighting
              equipment in Pakistan.
              <br />
              Look through our fire safety equipment and see exactly what makes
              us the best fire fighting equipment supplier in
              <br />
              Islamabad, Rawalpindi, Lahore, and Karachi.
            </p>
          </div>
          <div className="flex flex-wrap px-5">
            {products.map((product, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8"
              >
                <a href={product.link}>
                  <div className="item">
                    <img
                      src={product.image}
                      className="w-full h-auto"
                      alt={product.name}
                    />
                    <h4 className="text-lg font-medium mt-2 text-center">
                      {product.name}
                    </h4>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="pb-[5rem]">
            <button
              type="button"
              className="rounded-full   mx-auto   my-[3rem] flex justify-between border border-[#dc1b24] bg-[#dc1b24] px-5 py-2.5 text-center text-xl font-medium text-white shadow-md transition-all hover:border-[black] hover:bg-[black] focus:ring focus:ring-black disabled:cursor-not-allowed disabled:border-black disabled:bg-black"
            >
              read more
              <MdKeyboardDoubleArrowRight className="mt-1 ml-3 text-[1.5rem]" />
            </button>
          </div>
        </div>
      </div>

      {/* =====================================part 4 =================================================== */}

      <div
        className="h-[60vh]"
        style={{
          backgroundImage:
            "url('https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/home-products-intro-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          backgroundPosition: "right center",

          paddingBottom: "80px",
          color: "#fff",
        }}
      >
        <div className="container lg:flex-row">
          <div className="items flex md:flex-col lg:flex-row">
            <div className="item lg:w-1/2"></div>

            <div className="item lg:w-1/2 ">
              <div className="content  px-[2rem]  md:px-2  ">
                <h2 className="mt-8        lg:mt-[4.5rem] text-3xl lg:text-5xl font-semibold">
                  SAFETY PRODUCTS
                </h2>
                <p className="py-4 text-base lg:text-lg">
                  With Fakhar Enterprises , you are dealing with the top fire
                  safety product supplier in <br /> Pakistan.
                </p>
                <h3 className="text-3xl    lg:text-5xl font-semibold">
                  FULL CERTIFIED &amp; TESTED
                </h3>
                <p className="py-4 text-base lg:text-lg md:leading-8  lg:leading-9">
                  Fakhar Enterprises has a rigorous process in place to test
                  each piece of fire <br /> fighting equipment. We also provide
                  all relevant industry certification for our <br /> products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================part 5 ==================================== */}

      <div className="section safety-services mt-20">
        <div
          className="container mx-auto text-center"
          style={{ width: "80vw" }}
        >
          <h2 className="text-2xl md:text-5xl pb-5 font-bold mb-4">
            <span className="text-[#dc1b24]">OUR</span> SERVICES
          </h2>
          <p className="mb-8 px-5 text-[#000000] leading-9 text-[1.1rem]">
            Being the premier fire fighting companies in Pakistan, we pride
            ourselves in providing comprehensive fire safety services and
            systems to our clients.
            <br /> Go through our services and select the solution that best
            fits your requirements.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className="h-full ">
                <a href={service.link}>
                  <div
                    className="item h-[20rem] sm:h-[20rem] md:h-[20rem] bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="item h-[20rem] bg-[rgba(0, 0, 0, 0.4)] transition duration-300 ease-in-out hover:bg-red-600 hover:bg-opacity-80">
                      <div className="bg-black bg-opacity-40 h-full flex justify-center   items-center">
                        <div className="content text-white text-center">
                          <h3 className="text-lg md:text-2xl lg:text-3xl    font-[700]">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="rounded-full   mx-auto   my-[3rem] flex justify-between border border-[#dc1b24] bg-[#dc1b24] px-5 py-3 text-center text-lg font-medium text-white shadow-xl transition-all hover:border-[black] hover:bg-[black] focus:ring focus:ring-black disabled:cursor-not-allowed disabled:border-black disabled:bg-black"
          >
            see more
            <MdKeyboardDoubleArrowRight className="mt-1 ml-2 text-[1.5rem]" />
          </button>
        </div>
      </div>

      {/* =======================================part 6 ============================================================ */}

      <div className="section safety-partners  bg-gray-300 mt-[3rem]  mx-auto">
        <div className="container  w-[80vw] mx-auto  ">
          <h2 className="text-center text-4xl mb-5   font-bold  py-5">
            <span className="text-red-600">Our</span> Clients
          </h2>
          <p className="text-center   text-xl   py-2">
            We work with different businesses in the safety equipment industry
            and nurture these relationships to make it easier for our clients to{" "}
            <br />
            receive the highest possible quality of services and products.
          </p>
        </div>
      </div>

      <MultiCarousel />

      {/* ===============================part 7  ===================================== */}
      <div
        className="call-to-action  mt-[12rem]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 31, 42, 1) 0%, rgba(128, 16, 21, 1) 100%)",
          padding: "60px 0px",
        }}
      >
        <div className="container   w-[80vw]  mx-auto">
          <div className="items  flex  flex-col    md:flex-row   lg:flex-row ">
            <div className="item w-[40%] ">
              <div className="image-area   mt-[-150px]   mb-[-20px]">
                <img
                  src="https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/cta-image.png"
                  className="img-responsive"
                  alt="cta image"
                />
              </div>
            </div>
            <div className="item  w-50  ">
              <div className="content-area  font-bold text-white">
                <h3 className="   text-[25px]   mt-[3rem]  md:mt-0 lg:mt-0   md:text-[30px] lg:text-[30px] leading-10 ">
                  Need The Best Fire Safety Solutions?
                </h3>
                <a
                  href="tel:0304 7083322"
                  className="     text-[40px]     md:text-[75px] lg:text-[75px]  leading-11"
                >
                  92304 7083322
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;