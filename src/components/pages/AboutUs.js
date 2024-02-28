import React from "react";
import Layout from "../Layout/Layout";
import aboutus from "../../images/contact.jpg";
import Number from "./Number";

const AboutUs = () => {
  return (
    <Layout  title={'about us '}>
      <div
        className="title-area h-[50vh]"
        style={{
          backgroundSize: "cover",
          //   backgroundColor: "#1d1d1d", // Corrected typo in backgroundColor
          backgroundPosition: "50% 50%",
          backgroundImage: `url(${aboutus})`, // Wrap url() in backticks to include a dynamic URL
        }}
      >
        <div className="container  w-[80vw]  mx-auto">
          <div className="content  py-[120px] ">
            <h1 className="text-white   text-[45px]   text-center md:text-left lg:text-left        uppercase  lg:-[70px] md:text-[70px]  font-bold   text-shadow: 2px 2px #171717">
              ABOUT US
            </h1>
          </div>
        </div>
      </div>

      {/* =============================part 2 ===================================== */}

      <div className="section safety-services mt-20">
        <div
          className="container mx-auto text-center"
          style={{ width: "80vw" }}
        >
          <h2 className="text-5xl font-bold py-5">
            PAKISTAN'S #1 SAFETY SOLUTIONS PROVIDER
          </h2>

          <p className="mb-8 px-5 text-black leading-10 text-[1rem]">
            Fakhar Enterprises has been providing inspection, functional
            testing, and maintenance of fire protection systems to commercial,
            industrial, government, and <br /> mercantile facilities since 2013.
            We expanded our services in 2014 by adding special hazards systems
            and in 2016 added fire alarm and detection. Most recently,
            <br /> we have added access control systems, fire extinguisher sales
            and service, and fire protection systems management programs.
          </p>
        </div>
      </div>

      {/* ==============================part 3 =================================================== */}

      <div
        class="section services-cta mt-2  md:mt-[10rem]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 31, 42, 1) 0%, rgba(128, 16, 21, 1) 100%)",
          padding: "60px 0px",
        }}
      >
        <div class="container text-white w-[80vw] mx-auto   mb-0  lg:mb-[5rem]   md:mb-[5rem]">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="p-4">
              <p className="text-[70px] mt- font-bold   uppercase ">
                Fakhar <br /> Enterprises
              </p>
            </div>
            <div class="p-4">
              <p class="text-2xl py-   border-b-[4px]   border-white   w-[15rem]"></p>
              <p className="py-3 text-[17px] leading-10  mb-[10px]">
                We are a professional firm providing Fire, Safety, Emergency
                Security system, fire protection and life safety services. We
                encourage our team members’ growth through personal and
                professional development to enhance sustained growth of our
                company.
              </p>
              <p className="py-5 text-[17px] leading-10  mb-[20px]">
                We engage in active partnerships with our clients to provide
                design-focused solutions with an unyielding approach toward
                results. While others are content with technical compliance, we
                are only satisfied with incident-free outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===============================part4 ======================= */}

      <div className="section about-what-do">
        <div className="container" style={{ width: "80vw", margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="    my-5    lg:my-[5rem]  md:my-[5rem]">
              <h3 className="uppercase text-[46px]  font-bold mb-[2rem] ">
                History
              </h3>
              <p className="mb-[2rem]  leading-10  text-[17px] font-[450] ">
                Fakhar Enterprises has been providing inspection, functional
                testing, and maintenance of fire protection systems to
                commercial, industrial, government, and mercantile facilities
                since 2013. We expanded our services in 2014 by adding special
                hazards systems and in 2016 added fire alarm and detection.{" "}
              </p>
              <p className="mb-[2rem]  leading-10  text-[17px] font-[450] ">
                Most recently, we have added access control systems, fire
                extinguisher sales and service, and fire protection systems
                management programs.
              </p>
            </div>
            <div
              className=" hidden md:block lg:block  mt-[-100px]"
              style={{ boxShadow: "0 1px 4px 0 rgb(0 0 0 / 21%)" }}
            >
              <img
                src="https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/what-we-do.png"
                className="h-full w-full"
                alt="what-we-do"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ==================================part 4 =============================== */}

      <div className="section about-what-do">
        <div className="container" style={{ width: "80vw", margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div
              className="hidden md:block lg:block mt-[4.3rem]"
              style={{ boxShadow: "0 1px 4px 0 rgb(0 0 0 / 21%)" }}
            >
              <img
                src="https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/what-we-do.png"
                className="h-full w-full"
                alt="what-we-do"
              />
            </div>
            <div className=" mt-0 mb-5  lg:mt-[9rem]  md:mt-[9rem]    px-0  md:px-4">
              <h3 className="uppercase text-[46px] font-bold mb-[2rem]">
                Core Values
              </h3>
              <p className="mb-[2rem] leading-10 text-[17px] font-[450]">
                Fakhar Enterprises Fire team members were asked to provide
                management with their input to establish our core values.
                Capital team members have developed core values using one word
                with a description of what each word means to them. Capital
                Solutions has made these the cornerstone of our philosophy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =============================part 5 ===================================== */}

      <div
        class="section services-cta  pt-[10rem] mt-[-5rem] bg-black"
        style={{
          //   background:
          //     "linear-gradient(180deg, rgba(255, 31, 42, 1) 0%, rgba(128, 16, 21, 1) 100%)",
          padding: "60px 0px",
        }}
      >
        <div class="container text-white mt-2  w-[80vw] mx-auto">
          <p class=" text-2xl  py-5 ">We Are The</p>
          <h2 className="   text-[35px]    md:text-[65px] font-bold  ">
            Professional Safety Solutions <br /> Provider You Can Reply On!
          </h2>
          <p className="text-lg">Contact Us Today For Personalized Service</p>
        </div>
      </div>

      {/* =======================================part 6 ============================================================ */}
      <div className="mt-[8rem]"></div>
      <Number />
    </Layout>
  );
};

export default AboutUs;
