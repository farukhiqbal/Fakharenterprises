import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Pagination from "@mui/material/Pagination";
import { IoSearch } from "react-icons/io5";
import ProductItem from "./ProductItems";
import { Link } from "react-router-dom";
import product from "../../images/product.jpg";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1); // Start page from 1
  const productsPerPage = 12;

  // Filter products based on search query
  const filteredProducts = ProductItem.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Event handler to update search query state
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(1); // Reset page to 1 when search query changes
  };

  // Change page
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  // Paginated products
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  return (
    <Layout>
      <div className="relative md:flex md:items-center  ">
        <div className="ProductTopDiv mt-5   w-[80vw] mx-auto   h-[20rem] absolute md:p-10">
          <h1 className="heading text-3xl text-center md:ml-[5rem] font-bold  mx-auto md:text-left lg:text-left md:text-7xl text-white mb-4 md:mb-10">
            All PRODUCTS
          </h1>
          <p className="   text-white text-lg  ml-3    md:ml-0 lg:ml-0  md:text-3xl font-normal"></p>
        </div>
        <img
          src="https://asfiresafety.com.pk/wp-content/uploads/2023/09/fire-safety.jpg"
          alt=""
          className="w-full    h-[30vh]   md:w-full   md:h-[50vh] "
        />
      </div>

      {/* ============================part 2 ============================ */}

      {/* Search input */}
      <div className="container mx-auto mt-[9rem]  w-[80vw]">
        <div className=" w-[80vw] text-center mx-auto  mb-[3rem] py-5 flex  flex-col   md:flex-row lg:flex-row items-center">
          <h2 className=" font-bold w-[40vw]  text-left text-[2rem]">
            Find Products{" "}
          </h2>
          <div className="   w-full  mt-2 md:mt-0 lg:mt-0  md:w-[40vw]  lg:w-[40vw] flex">
            <input
              type="search"
              placeholder="find the products"
              className="text-lg py-2 border-2 w-[50%] border-black rounded-l-2xl px-2 outline-none focus:border-black flex-1"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <span className="text-white bg-red-500 rounded-r-2xl px-5 py-2">
              <IoSearch className="my-2 text-lg" />
            </span>
          </div>
        </div>

        {/* Display filtered products */}
        <h2 className="text-3xl font-[700] justify-between flex gap-3 mb-8">
          <p className="text-red-600 flex ">All 
           <p className="text-black ml-2">Products
            </p>
          </p>

  <span className="text-gray-500"> Total{`(${filteredProducts.length} products)`}</span>


        </h2>
        {filteredProducts.length === 0 ? (
          <p className="text-center font-bold text-2xl mt-[3rem]">
            No products found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="item bg-white text-center p-[20px]   shadow-[#0000003c] shadow-lg mb-30"
              >
                <img
                  src={product.image}
                  alt=""
                  className="bg-transparent cursor-pointer"
                />
                <Link
                  to={`/productdetail/${product.id}`}
                  className="text-center  cursor-pointer my-3  font-bold "
                >
                  {product.name}
                </Link>
              </div>
            ))}
          </div>
        )}
        {filteredProducts.length > 0 && (
          <div className="flex justify-center mt-[5rem]">
            <Pagination
              count={Math.ceil(filteredProducts.length / productsPerPage)}
              page={page}
              onChange={handleChangePage}
              color="primary"
            />
          </div>
        )}
      </div>

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
                  +92 304 7083322
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
