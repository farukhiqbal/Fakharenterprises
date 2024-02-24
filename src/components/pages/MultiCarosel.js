import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import client from '../../images/MMBL-logo.webp'
import client1 from '../../images/client2.jpg'
import client2 from '../../images/client3.jpg'
import client3 from '../../images/client4.png'
import client6 from '../../images/client6.png'
import client7 from '../../images/client7.webp'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const imageData = [
  {
    id: 1,
    img: client,
  },
  {
    id: 2,
    img: client1,
  },
  {
    id: 3,
    img: client2,
  },
  {
    id: 4,
    img: client3,
  },
  {
    id: 5,
    img:client6,
  },
  {
    id: 6,
    img: client7,
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

const MultiCarousel = ({ deviceType }) => {
  return (
    <div className="  w-[100vw ]   bg-gray-300  py-[3rem]">
      <div className="    md:w-[95vw] lg:w-[95vw]   md:mx-auto  ">
      <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true}
  showArrow={false} // Set showArrow prop to false to hide next and previous arrow buttons
  infinite={true}
  autoPlay={deviceType !== "mobile" ? true : false}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  removeArrowOnDeviceType={["tablet",  "desktop", "superLargeDesktop"]} // Remove arrow buttons on all device types
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  deviceType={deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  {imageData.map((image) => (
    <div key={image.id}>
      <img
        src={image.img}
        className="mx-auto lg:w-[180px] lg:w-[180px ] md:w-[180px] md:h-[60px]"
        alt=""
      />
    </div>
  ))}
</Carousel>

      </div>
    </div>
  );
};

export default MultiCarousel;
