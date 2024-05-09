import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CartItem = (props) => {
    useEffect(() => {
        fetchData()
    }, [])
    const navigate = useNavigate();
    const { p_id, quantity } = props
    const [product, setProduct] = useState({ name: '', desc: '', price: '', image: '' })
    const fetchData = async () => {
        console.log("fetching 1")
        const response = await fetch(`https://med-stien-backend.vercel.app/api/product/fetchproduct/${p_id}`)
        const json = await response.json()
        console.log(json)
        setProduct({ name: json[0].name, desc: json[0].description, price: json[0].price, image: json[0].images[0] })
    }
    const handleminus = async()=>{
        const response = await fetch(`https://med-stien-backend.vercel.app/api/cart/dec/${p_id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token':localStorage.getItem('token')
                }
        })
        const json = await response.json()
        console.log(json)
        window.location.reload(false);
    }
    const handleplus = async()=>{
        const response = await fetch(`https://med-stien-backend.vercel.app/api/cart/addproduct/${p_id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token':localStorage.getItem('token')
                }
        })
        const json = await response.json()
        console.log(json)
        window.location.reload(false);
    }
    const handleImg = ()=>{
        navigate(`/productpage/${p_id}`)
    }
  return (
    <div class="flex justify-between mb-4">
            <div class="flex items-center">
                <img onClick={handleImg} className='h-[80px] w-[80px] mr-4' src={product.image} alt="Product Image"/>
                <div>
                    <h2 class="font-bold">{product.name}</h2>
                    <p class="text-gray-700">{product.desc.slice(0,40)}...</p>
                </div>
            </div>
            <div class="flex items-center">
                <button class="text-red-500 hover:text-red-700"><i class="fas fa-trash"></i></button>
                <div class="mx-4 flex items-center space-x-2">
                    <div className='p-2 bg-white rounded-full cursor-pointer' onClick={handleminus}>
                    <img src="/images/minus-sign.png" alt="" className='w-3 '/>
                    </div>
                    <p>{quantity}</p>
                    <div className='p-2 bg-white rounded-full cursor-pointer' onClick={handleplus}>
                    <img src="/images/plus-symbol-button.png" alt="" className='w-3 '/>
                    </div>
                    <p className='font-bold'>-</p>
                </div>
                <span class="font-bold">₹{quantity*product.price}</span>
            </div>
        </div>
  )
}

export default CartItem