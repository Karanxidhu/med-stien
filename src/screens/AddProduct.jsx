import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    useEffect(()=>{
        const role = localStorage.getItem("ChemRole");
        if(role != 'seller'){
            navigate("/addProduct")
        }
    },[])
    const navigate = useNavigate();
    const [details, setDetails] = useState({
        name: '',
        description: '',
        price: '',
        images: '',
        brand: '',
        review: ''
    });
    const onChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
        console.log(details)
    }
    const formSubmit = async()=>{
        try {
          console.log(details)
          const response = await fetch('https://med-stien-backend.vercel.app/api/product/addproduct',{
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            },
            body:JSON.stringify({name:details.name, description: details.description, images: details.images, price: details.price, review: details.review, brand: details.brand})
          })
          const json = await response.json() 
          console.log(json)
        } catch (error) {
          alert(error)
        }
        navigate("/shop")
        }
    return (
        <div className='justify-center items-center p-12 md:pt-32'>
            <main className="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
                <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
                    <h1 className="text-4xl font-semibold">Add your Product</h1>
                </div>
                <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
                    <input className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Name" name='name' onChange={onChange}/>
                    <textarea className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Description" name='description' onChange={onChange}/>
                    <input className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Images" name='images' onChange={onChange}/>
                    <input className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Price" name='price' onChange={onChange}/>
                    <input className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Brand" name='brand' onChange={onChange}/>
                    <input className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Review" name='review' onChange={onChange}/>
                    <div className="flex items-center">
                        <div className="w-1/2 flex items-center">
                            <input id="remember-me" type="checkbox" className="mt-1 mr-2" />
                            <label htmlFor="remember-me">Remember me!</label>
                        </div>
                        <button onClick={formSubmit} className="ml-auto w-1/2 bg-[#275C53] text-white p-2 rounded font-semibold hover:bg-gray-900" type="submit">Add Product</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AddProduct