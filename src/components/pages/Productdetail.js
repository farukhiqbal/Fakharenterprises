import React from "react";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItems";
import Layout from "../Layout/Layout";
// import ReactImageMagnify from "react-image-magnify";
import Number from "./Number";

const ProductDetail = () => {
  const { id } = useParams();
  const product = ProductItem.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-5xl font-bold flex items-center justify-center h-screen">
      Product not found
    </div>
    
    );
  }

  return (
    <Layout>
      <div className="w-full md:w-4/5 mx-auto px-4">
        <h2 className="text-3xl text-red-700 my-[3rem] text-center font-bold">
          Product Detail
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:mx-0 relative shadow-lg  px-[4rem]   ">
            <img src={product.image} alt=" " className="mx-auto" />

            {/* <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: product.image,
                  className: "mx-auto", // Center the image horizontally
                },
                largeImage: {
                  src: product.image,
                  width: 1200,
                  height: 1500,
                },
              }}
            /> */}
          </div>
          <div>
            <div className="mt-5">
              <h3 className="text-4xl font-bold">{product.name}</h3>
              {/* Add more product details here */}
              <p className="mt-3 text-gray-700 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional content */}
      <div className="mt-[12rem]"></div>
      <Number />
    </Layout>
  );
};

export default ProductDetail;
