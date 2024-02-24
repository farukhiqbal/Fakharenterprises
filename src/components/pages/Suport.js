import React,{useState} from "react";
import Layout from "../Layout/Layout";

const Suport = () => {


    const ProductData = [
        {
          imgSrc: "https://alphaenterprises.com.pk/assets/img/support/s_product_icon_NetworkCameras.png",
          title: "Network Cameras",
          description: ["Panoramic Series", "Ultra Series", "Lite Series"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_Alarms.png",
          title: "Alarms",
          description: ["Wireless Product", "Wired Product", "Field Surveillance Unit"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_camera.png",
          title: "HDCVI Cameras",
          description: ["Pro 4K&6MP Series", "Pro Straight Series", "Lite Plus Series"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_VideoIntercoms.png",
          title: "Video Intercoms",
          description: ["IP Products", "Analog Product", "Video Doorbells"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon.png",
          title: "Access Control",
          description: ["Controllers", "Standalone", "Time Attendance"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_Transmission.png",
          title: "Transmission",
          description: ["Accessories", "Access Switches", "Aggregation Switches"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon-2.png",
          title: "Mobile & Traffic",
          description: ["Mobile", "MPT", "Entrance/Exit Control Products"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_PTZCameras.png",
          title: "PTZ Cameras",
          description: ["Positioning System", "HDCVI PTZ Cameras", "Anti-Corrosion Cameras"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_Software.png",
          title: "Software",
          description: ["Easy4ip", "DSS", "DMSS"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_VideoConferencing.png",
          title: "Video Conferencing",
          description: ["Endpoints", "Multi-Point Control Units", "Telepresence Systems"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_MachineVision.png",
          title: "Machine Vision",
          description: ["3D Cameras", "Area Scan Cameras", "Board Cameras"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_ThermalCameras1.png",
          title: "Thermal Cameras",
          description: ["Anti-Corrosion Series", "Lite Series", "Pro Series"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_DisplayControl.png",
          title: "Display & Control",
          description: ["Interactive LCD Displays", "LCD Digital Signage", "LCD Video Walls"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_NetworkRecorders.png",
          title: "Network Recorders",
          description: ["Ultra Series", "Pro Series", "Lite Series"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_HDCVIRecorders.png",
          title: "HDCVI Recorders",
          description: ["Lite H.265 1080P Series", "Lite H.265 4K Series", "Lite H.265 720P Series"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_EZ-IP.png",
          title: "EZ-IP",
          description: ["Network Cameras", "Network Recorders"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_Accessories-2.png",
          title: "Accessories",
          description: ["Audio", "Cabling", "Camera Accessories"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_Storage.png",
          title: "Storage",
          description: ["Cloud Storage", "IP Storage"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_Drone.png",
          title: "Drone",
          description: ["Anti-Drone Device", "Industrial Drone", "Payload"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_IVS.png",
          title: "IVS",
          description: ["Face Recognition Server", "Vehicle Analysis Server"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_SecurityScreening.png",
          title: "Security Screening",
          description: ["Security Screening Server"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_DedicatedProducts.png",
          title: "Dedicated Products",
          description: ["Project Exclusive"],
        },
        {
          imgSrc: "assets/img/support/s_product_icon_Discontinuedproducts1.png",
          title: "Discontinued Products",
          description: ["Access Control", "Accessories", "Alarms"],
        },
      ];
      
      const [hoveredIndex, setHoveredIndex] = useState(null);


  return (
    <Layout>





<div className="relative md:flex md:items-center">
        <div className="ProductTopDiv h-[20rem] absolute md:p-10">
          <h1 className="heading text-3xl text-center md:text-left lg:text-left md:text-5xl text-white mb-4 md:mb-10">
          TECHNICAL SUPPORT
          </h1>
          <p className="   text-white text-lg  ml-3    md:ml-0 lg:ml-0  md:text-2xl font-normal">
          Innovative Technology | Reliable Quality | End-to-End Service
          </p>
        </div>
        <img
          src="https://alphaenterprises.com.pk/assets/img/support/support.jpg"
          alt=""
          className="w-full md:w-auto"
        />
      </div>


          
      {/* <div style={{ backgroundColor: "#f2f2f2" }}>
      <br />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {ProductData.map((product, index) => (
            <div 
              className="our-support-main relative" 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`support-front bg-white p-4 rounded-lg shadow-md overflow-hidden transition-all duration-500 ${
                  hoveredIndex === index ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                <img
                  src={product.imgSrc}
                  className="mx-auto w-32"
                  alt={product.title}
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold mt-4 mb-2">{product.title}</h3>
                  <button className="btn btn-sm btn-info">Learn More</button>
                </div>
              </div>
              <div 
                className={`support-back bg-white p-4 rounded-lg shadow-md transition-all duration-500 ${
                  hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
              >
                <ul>
                  {product.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */}






<div className="w-[25vw] mx-auto relative">
  <div className="our-support-main w-full h-auto border-b-2 border-gray-800 bg-white rounded-lg overflow-hidden transition duration-500 mb-8">

    <div className="support-front w-full text-center bg-white p-4 relative">
      <img
        src="https://alphaenterprises.com.pk/assets/img/support/s_product_icon_NetworkCameras.png"
        className="w-[60px] mb-[20px] transition-transform duration-500 transform translate-y-0 hover:-translate-y-full"
        alt="Network Cameras"
      />
      <h3 className="text-2xl font-bold">Network Cameras</h3>
      <button className="btn btn-sm btn-info mt-3 px-4 py-2 rounded-md shadow-md hover:bg-blue-700 hover:border-blue-700">Learn More</button>
    </div>

    <div className="support-back bg-white p-4 absolute top-0 left-0 mt-2 text-left opacity-0 transition duration-500 hover:opacity-100 z-20 w-full h-full">
      <ul>
        <li>Panoramic Series</li>
        <li>Ultra Series</li>
        <li>Lite Series</li>
      </ul>
    </div>
  </div>
</div>




        
    
    </Layout>
  );
};

export default Suport;
