import React, { useEffect, useState } from 'react'
import CartItem from '../components/CartItem';

const CartScreen = () => {
    useEffect(()=>{
        fetchData();
      },[])
      
    const [items, setItems] = useState([]); 
    const fetchData = async() =>{
        const response = await fetch(`https://med-stien-backend.vercel.app/api/cart/`,{
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
        }
        })
        const json = await response.json()
        setItems(json.userCart.items)
        console.log(json)
      }
  return (
    <div class="flex flex-col justify-center items-center min-h-screen">
    <div class="bg-gray-100 rounded-lg shadow-lg p-6">
        <h1 class="text-2xl font-bold mb-6">Shopping Cart</h1>
        {items.length===0 && 'Nothing in cart. SHOP NOW'}
        {items.map((item)=>{
            console.log(item.product_id)
            return (item.quantity>0) && <CartItem p_id ={item.product_id} key={item._id} quantity={item.quantity}/>
          })}
        <hr class="my-4"/>
        <div class="flex justify-center mt-6">
            <button class="bg-[#275C53] text-white font-bold py-2 px-4 rounded">Checkout</button>
        </div>
    </div>
</div>
  )
}

export default CartScreen