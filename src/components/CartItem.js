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
        const response = await fetch(`http://localhost:5000/api/product/fetchproduct/${p_id}`)
        const json = await response.json()
        console.log(json)
        setProduct({ name: json[0].name, desc: json[0].description, price: json[0].price, image: json[0].images[0] })
    }
    const handleminus = async()=>{
        const response = await fetch(`http://localhost:5000/api/cart/dec/${p_id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token':localStorage.getItem('token')
                }
        })
        const json = await response.json()
        console.log(json)
    }
    const handleplus = async()=>{
        const response = await fetch(`https://shop-slur-backend.vercel.app/cart/addproduct/${p_id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token':localStorage.getItem('token')
                }
        })
        const json = await response.json()
        console.log(json)
    }
    const handleImg = ()=>{
        navigate(`/productpage/${p_id}`)
    }
  return (
    <div class="flex justify-between mb-4">
            <div class="flex items-center">
                <img onClick={handleImg} src={product.image} alt="Product Image" class="mr-4"/>
                <div>
                    <h2 class="font-bold">Product Name</h2>
                    <p class="text-gray-700">Product Description</p>
                </div>
            </div>
            <div class="flex items-center">
                <button class="text-red-500 hover:text-red-700"><i class="fas fa-trash"></i></button>
                <div class="mx-4">
                    <input type="number" value="1" class="w-16 text-center"/>
                </div>
                <span class="font-bold">$19.99</span>
            </div>
        </div>
  )
}

export default CartItem