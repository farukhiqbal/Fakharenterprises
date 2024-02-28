import React from 'react'

const Number = () => {
  return (
    <div>

<div
        className="call-to-action  pt-[9rem]   md:pt-0 lg:pt-0"
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
                <h3 className="   text-[25px]   mt-[3rem]  md:mt-0 lg:mt-0   md:text-[35px] lg:text-[35px] leading-10 ">
                  Need The Best Fire Safety Solutions?
                </h3>
                <a
                  href="tel:0304 7083322"
                  className="     text-[40px]     md:text-[75px] lg:text-[75px]  leading-11"
                >
                  +92 304 7083322
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Number