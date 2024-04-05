import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function HomeScreen() {
  const fadeImages = [
    {
      url: "https://skinkraft.com/cdn/shop/articles/Vitamin-A_aa8a0823-2fa9-49cb-a6f7-b90a6fd2f6b3_1024x400.jpg?v=1591019155",
      caption: "Vitamin A",
    },
    {
      url: "https://www.guardian.in/cdn/shop/articles/vitamin-d-food.jpg?v=1691563301&width=1000",
      caption: "Vitamin D",
    },
    {
      url: "https://fittify.in/cdn/shop/articles/3_d78229ac-f5c5-4afa-9d8c-6943ae4add0f.jpg?v=1674207064",
      caption: "Vitamin C",
    },
  ];

  return (
    <div className="w-full bg-[#275C53] min-h-[89vh] pt-16">
      <div></div>
      <div className="w-[75%] mx-auto flex justify-around items-center pb-32">
        <div className="w-[40%]">
          <h1 className="text-8xl text-white">
            <span className="hover:text-[#E2BB53] transition-all duration-1000">
              Chemist
            </span>{" "}
            <br />{" "}
            <span className="hover:text-[#E2BB53] transition-all duration-1000">
              Shop
            </span>{" "}
            <br />{" "}
            <span className="hover:text-[#E2BB53] transition-all duration-1000">
              Inventory
            </span>
          </h1>
          <p className="text-lg font-light text-white leading-8 w-[70%] text-justify pt-8 pb-20">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sit
            delectus, deserunt molestiae laborum facilis quisquam odit tempore
            vitae fuga rem, culpa a expedita aut?
          </p>
          <span className=" text-xs text-[#275C53] px-20 py-5 bg-[#E2BB53] rounded-full hover:bg-[#e2bc539c] transition-all duration-1000">
            READ MORE
          </span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-[60%] rounded-3xl hover:scale-105 transition-all duration-500 ease-in-out "
          alt=""
        />
      </div>
      <div className="h-[70vh] w-full bg-white flex justify-center items-center">
        <h1 className="text-5xl">Product Area</h1>
      </div>
      <div className="w-full bg-[#F5F0EA] pt-32 pb-24">
        <div className="w-[70%] mx-auto flex justify-between">
          <div className="slide-container w-[50%]">
            <Fade>
              {fadeImages.map((fadeImage, index) => (
                <div key={index}>
                  <img
                    style={{ width: "100%" }}
                    className="rounded-3xl"
                    src={fadeImage.url}
                  />
                  <h2 className="text-lg font-semibold text-[#275C53] leading-8 text-center ">{fadeImage.caption}</h2>
                </div>
              ))}
            </Fade>
          </div>

          <div className="w-[40%]">
            <h1 className="text-8xl text-[#275C53]">
              <span className="hover:text-[#E2BB53] transition-all duration-1000">
                Vitamins
              </span>{" "}
              <br />{" "}
              <span className="hover:text-[#E2BB53] transition-all duration-1000">
                In
              </span>{" "}
              <br />{" "}
              <span className="hover:text-[#E2BB53] transition-all duration-1000">
                Inventory
              </span>
            </h1>
            <p className="text-lg font-light text-[#275C53] leading-8 w-[70%] text-justify pt-8 pb-20">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sit
              delectus, deserunt molestiae laborum facilis quisquam odit tempore
              vitae fuga rem, culpa a expedita aut?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
