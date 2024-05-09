import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const navigate = useNavigate()
  useEffect(() => {
    fetchItems();
  }, [])
  const initProduct = []
  const [items, setItems] = useState(initProduct)
  const [loading, setLoading] = useState(true)
  const fetchItems =async () => {
    const response = await fetch('https://med-stien-backend.vercel.app/api/product/fetchallproducts',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      }
    })
  const json = await response.json()
  console.log(json)
  if(json.error){
    navigate('/login')
  }
  setItems(json)
  console.log(items)
  }
  const data = {
    brand: "Brand",
    name: "Name",
    price: "189"
  }

  return (
    <div className="w-full bg-[#275C53] min-h-[89vh] pt-16">
      <div></div>
      <div className="w-full mx-auto lg:flex-row flex-col flex justify-around items-center pb-32 gap-y-16 px-12">
        <div className=" w-[90%] lg:w-[40%] ">
          <h1 className="text-4xl md:text-8xl text-white">
            <span className="hover:text-[#686661] transition-all duration-1000">
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
          <p className="text-sm md:text-lg font-light text-white leading-8 w-full lg:w-[70%] text-justify pt-8 pb-20">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sit
            delectus, deserunt molestiae laborum facilis quisquam odit tempore
            vitae fuga rem, culpa a expedita aut?
          </p>
          <span className=" text-xs text-[#275C53] px-12 md:px-20 py-3 md:py-5 bg-[#E2BB53] rounded-full hover:bg-[#e2bc539c] transition-all duration-1000">
            READ MORE
          </span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-[90%] lg:w-[60%] rounded-3xl hover:scale-105 transition-all duration-500 ease-in-out "
          alt=""
        />
      </div>
      <div className="w-full bg-white py-12">
        <h1 className="text-5xl text-center py-5 pb-12 text-[#275C53]">Products</h1>
        <div className="w-full px-12 mx-auto gap-8 flex flex-wrap justify-center items-center" >
        {items.filter((item, index) => index < 5).map((item, key)=>{
              return(
                <Card data = {item} key={key}/>
              )
            })}
        </div>
      </div>
      <div className="w-full bg-[#F5F0EA] pt-32 pb-24 gap-12 flex justify-center items-center flex-col lg:flex-row px-32">
        <div>
          <img src="https://skinkraft.com/cdn/shop/articles/Vitamin-A_aa8a0823-2fa9-49cb-a6f7-b90a6fd2f6b3_1024x400.jpg?v=1591019155" alt="" />
        </div>
        <div className=" w-[80%] lg:w-[40%] mx-auto">
          <h1 className="text-4xl md:text-8xl text-[#275C53]">
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
          <p className="text-sm md:text-lg font-light text-[#275C53] leading-8 w-full lg:w-[70%] text-justify pt-8 pb-20">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sit
            delectus, deserunt molestiae laborum facilis quisquam odit tempore
            vitae fuga rem, culpa a expedita aut?
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
