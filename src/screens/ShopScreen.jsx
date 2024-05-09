import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom';

const ShopScreen = () => {
  const navigate = useNavigate();
  const initItems = []
  const [items, setItems] = useState(initItems)
  useEffect(() => {
    fetchItems()
    // eslint-disable-next-line
}, [])

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
  return (
    <div className='w-[90%] mx-auto pb-16 '>
          <h1 className='text-5xl text-center py-12'>
            Products Available
          </h1>
          <div className=" flex gap-8 flex-wrap justify-center items-center ">
            {items.map((item, key)=>{
              return(
                <Card data = {item} key={key}/>
              )
            })}
          </div>
    </div>
  )
}

export default ShopScreen