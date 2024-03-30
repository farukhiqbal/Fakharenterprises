import React from "react";
import Layout from "../Layout/Layout";
import service from '../../images/serivces.jpg'
import service1 from '../../images/service-1.png'
import service2 from '../../images/service-2.png'
import service3 from '../../images/service-3.png'
import service4 from '../../images/service-4.png'

const Services = () => {
  // Sample service data
  const services = [
    {
      title: "Fire Extinguishers",
      image:service1,
     
    },
    {
      title: "Fire Suppression System",
      image:service2,
    
    },
    {
      title: "Fire Fighting System",
      image: service3,
    
    },
    {
      title: "Fire Alarm System",
      image:service4,
     
    },
  ];
  return (
    <Layout title={'services'}>
      <div
        className="title-area h-[50vh]"
        style={{
          backgroundSize: "cover",
          //   backgroundColor: "#1d1d1d", // Corrected typo in backgroundColor
          backgroundPosition: "50% 50%",
          backgroundImage:
            `url(${service})`,
        }}
      >
        <div className="container  w-[80vw]  mx-auto">
          <div className="content  py-[120px] ">
            <h1 className="text-white   text-[45px]   text-center  md:text-left lg:text-left      uppercase  lg:-[70px] md:text-[70px]  font-bold   text-shadow: 2px 2px #171717">
              Our Services
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
          <p className="mb-8 px-5 text-[#000000] leading-9 text-[1.1rem]">
            Browse through the fire system and services we provide in Pakistan.
            We have fire extinguishers, fire suppression systems, fire fighting
            systems, and fire alarm systems. We provide our fire safety services
            in all major cities of Pakistan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
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
        </div>
      </div>

      {/* =============================part 3 ===================================== */}

      <div
        class="section services-cta mt-[10rem]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 31, 42, 1) 0%, rgba(128, 16, 21, 1) 100%)",
          padding: "60px 0px",
        }}
      >
        <div class="container text-white  w-[80vw] mx-auto">
          <p class=" text-2xl  py-5 ">We Are The</p>
          <h2 className="   text-[35px]    md:text-[65px] font-bold  ">
            Professional Safety Solutions <br /> Provider You Can Rely On!
          </h2>
          <p className="text-lg">Contact Us Today For Personalized Service</p>
        </div>
      </div>


      
    </Layout>
  );
};

export default Services;
