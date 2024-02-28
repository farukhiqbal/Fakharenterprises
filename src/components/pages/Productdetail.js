import React from "react";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItems";
import Layout from "../Layout/Layout";
import ReactImageMagnify from "react-image-magnify";
import Number from "./Number";

const ProductDetail = () => {
  const { id } = useParams();
  const product = ProductItem.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Layout>
      <div className="  w-[100vw]  md:w-[80vw]   mx-auto">
        <h2 className="text-2xl text-red-700 my-5 text-center font-bold">
          Product Detail
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full md:w-[70%] mx-auto md:mx-0 relative shadow-xl">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: product.image,
                  className: "w-full max-w-full", // Ensure the small image is fluid width and doesn't overflow its container
                },
                largeImage: {
                  src: product.image,
                  width: 1000,
                  height: 1200,
                },
                enlargedImagePosition: "over", // Show enlarged image over the original
                isActivatedOnTouch: true, // Activate on touch for mobile devices
                shouldUsePositiveSpaceLens: true, // Use positive space lens for better performance on mobile
              }}
            />
          </div>
          <div className="w-full md:w-full">
            <div className="mt-5">
              <h3 className="text-4xl font-bold">{product.name}</h3>
              {/* Add more product details here */}
              <p className="mt-3 text-gray-700">{product.description}</p>
              {/* <p className="mt-3 text-lg text-gray-800">
            Price: ${product.price}
          </p> */}
              {/* Add more details as needed */}
            </div>
          </div>
        </div>
      </div>

      {/* ================================part 2 ========================== */}
      <div className="mt-[12rem]"></div>
      <Number />
    </Layout>
  );
};

export default ProductDetail;
