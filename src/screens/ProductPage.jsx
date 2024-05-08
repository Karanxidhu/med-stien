import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductPage = () => {
    const { id } = useParams()
    useEffect(() => {
        fetchProduct();
    }, [])
    const navigate = useNavigate()
    const initProduct = []
    const [productDetails, setProductDetails] = useState(initProduct)
    const [loading, setLoading] = useState(true)
    const addToCart = async () => {
        const response = await fetch(`http://localhost:5000/api/cart/addproduct/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json()
        console.log(json)
        navigate('/cart')
    }
    const fetchProduct = async () => {
        setLoading(true)
        console.log('fetching product')
        const response = await fetch(`http://localhost:5000/api/product/fetchproduct/${id}`)
        const json = await response.json()
        setProductDetails(json[0])
        console.log(productDetails)
        setLoading(false)
    }
    return (
        <div className='bg-[#275C53] w-full min-h-[89vh] flex items-center'>
            {!loading && <div className='h-full items-center w-[80%] mx-auto py-16 flex'>
                <div className='w-1/2'
                >
                    <img src={productDetails.images[0]} className='w-[80%]' alt="" />
                </div>
                <div className='w-1/2 space-y-5'>
                    <h1 className='text-white text-5xl font-semibold text-center'>{productDetails.name}</h1>
                    <h1 className='text-white text-2xl text-center'>{productDetails.brand}</h1>
                    <p className='text-white text-base text-center'>{productDetails.description.slice(0, 250)}...</p>
                    <div className='w-[80%] mx-auto flex justify-center items-center cursor-pointer' onClick={addToCart}>
                        <p className='text-xl font-bold bg-white px-8 py-4 text-[#275C53] rounded-full'>Add to cart</p>
                    </div>
                </div>
            </div>}

        </div>
    )
}

export default ProductPage