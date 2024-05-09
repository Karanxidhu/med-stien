import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';

const ProductPage = () => {
  const { id } = useParams()
  useEffect(() => {
    fetchProduct();
  }, [])
  const navigate = useNavigate()
  const initProduct = []
  const [productDetails, setProductDetails] = useState(initProduct)
  const [loading, setLoading] = useState(true)
  const [resL, setResL] = useState(false)
  const [query, setQuery] = useState("")
  const [response, setResponse] = useState("")
  const addToCart = async () => {
    const response = await fetch(`https://med-stien-backend.vercel.app/api/cart/addproduct/${id}`, {
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
    const response = await fetch(`https://med-stien-backend.vercel.app/api/product/fetchproduct/${id}`)
    const json = await response.json()
    setProductDetails(json[0])
    console.log(productDetails)
    setLoading(false)
  }
  const handleGPT = async () => {
    setResL(true)
    const result = await fetch('https://med-stien-backend.vercel.app/api/gpt/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ prompt: query })
    })
    const data = await result.json()
    console.log(data.result)
    setResponse(data.result)
    setResL(false)
  }
  const handleUse = async () => {
    setResL(true)
    const result = await fetch('https://med-stien-backend.vercel.app/api/gpt/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ prompt: `what is use of ${productDetails.name}` })
    })
    const data = await result.json()
    console.log(data.result)
    setResponse(data.result)
    setResL(false)
  }
  const handleSideEff = async () => {
    setResL(true)
    const result = await fetch('https://med-stien-backend.vercel.app/api/gpt/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ prompt: `what are the side effects of ${productDetails.name}` })
    })
    const data = await result.json()
    console.log(data.result)
    setResponse(data.result)
    setResL(false)
  }
  const handleSalts = async () => {
    setResL(true)
    const result = await fetch('https://med-stien-backend.vercel.app/api/gpt/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ prompt: `give information about the salts used in ${productDetails.name}` })
    })
    const data = await result.json()
    console.log(data.result)
    setResponse(data.result)
    setResL(false)
  }
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className='bg-[#275C53] w-full min-h-[89vh] flex items-center'>
      {!loading && <div className='min-h-full md:w-[80%] w-full mx-auto py-16 flex items-start flex-col md:flex-row'>
        <div className='md:w-1/2 w-[90%] mx-auto '
        >
          <img src={productDetails.images[0]} className='md:w-[80%] w-full' alt="" />
        </div>
        <div className='md:w-1/2 w-[90%] mx-auto space-y-5 pt-5'>
          <h1 className='text-white text-3xl md:text-5xl font-semibold text-left'>{productDetails.name}</h1>
          <h1 className='text-white text-xl md:text-2xl text-left'><span className='font-light'>Brand:</span>{productDetails.brand}</h1>
          <p className='text-white text-base text-left'><span className='font-light'>Description: </span>{productDetails.description.slice(0, 250)}...</p>
          <h1 className='text-white text-base md:text-2xl text-left font-semibold' ><span className='font-light'>Price: </span>₹{productDetails.price}</h1>
          <div className='flex justify-center pt-16'>
            <div className='w-[50%] mx-auto flex justify-center items-center cursor-pointer' onClick={() => setShowModal(true)}>
              <p className=' text-sm sm:text-xl font-bold bg-[#7affe9] px-8 py-4 text-[#275C53] rounded-full'>Ask GPT</p>
            </div>
            <div className='w-[50%] mx-auto flex justify-center items-center cursor-pointer' onClick={addToCart}>
              <p className='text-sm sm:text-xl font-bold bg-white px-8 py-4 text-[#275C53] rounded-full'>Add to cart</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none overflow-scroll"
            >
              <div className="min-w-[40%] relative w-auto my-6 mx-auto max-w-6xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold text-center w-full">
                      Ask GPT
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="z-90 bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="p-6 flex-auto">
                      <p>Ask anything you want to ask</p>
                    {response.length>0 &&<div className='h-[350px] overflow-y-scroll py-8 flex'>
                    <ReactMarkdown children={response} className="text-base sm:text-lg" />
                    </div>}
                    {resL&&<div className='flex justify-center items-center pb-8'>
                      <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                        <span
                          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span>
                      </div>
                    </div>}
                    <input class="mt-4 mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Enter you query" name='query' onChange={(e) => { setQuery(e.target.value); console.log(query) }} />
                    <div className='px-5 flex justify-start items-center gap-5 flex-wrap'>
                      <div className='border rounded-lg px-4 py-2 cursor-pointer' onClick={handleUse}>
                        <p className='text-lg'>Use</p>
                      </div>
                      <div className='border rounded-lg px-4 py-2 cursor-pointer' onClick={handleSideEff}>
                        <p className='text-lg'>Side effects</p>
                      </div>
                      <div className='border rounded-lg px-4 py-2 cursor-pointer' onClick={handleSalts}>
                        <p className='text-lg'>Salts</p>
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleGPT}
                    >
                      Ask
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        </div>
      </div>}

    </div>
  )
}

export default ProductPage