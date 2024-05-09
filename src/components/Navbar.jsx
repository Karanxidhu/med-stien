import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useSearchParams} from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('ChemRole')
    navigate("/")
  }
  return (
    <div className='bg-[#275C53] h-[11vh] flex justify-center items-center'>
        <div className='h-full w-[70%] mx-auto flex justify-around items-center'>
        <div className='text-base space-x-10 text-white tracking-[2px] lg:flex hidden'>
            <Link to={'/'} className='hover:text-[#E2BB53] transition-all duration-500'>HOME</Link>
            <Link to={'/'} className='hover:text-[#E2BB53] transition-all duration-500' >ABOUT US</Link>
            <Link to={'/shop'} className='hover:text-[#E2BB53] transition-all duration-500'>PRODUCTS</Link>
            <Link to={'/'} className='hover:text-[#E2BB53] transition-all duration-500'>BLOG</Link>
            <Link to={'/'} className='hover:text-[#E2BB53] transition-all duration-500'>CONTACTS</Link>
        </div>
        <div className='h-full flex justify-around items-center space-x-10'>
            <img src="/images/user.png" alt="" className='h-[20%] ' onClick={()=>{navigate('/login')}}/>
            <div className='h-full flex justify-center items-center gap-2' onClick={()=>{navigate("/cart")}}>
            <img src="/images/cart.png" alt="" className='h-[20%]'/>
            </div>
            <img src="/images/search.png" alt="" className='h-[20%] '/>
            {localStorage.getItem("token")&&<p className='text-base text-[#E2BB53] cursor-pointer' onClick={handleLogout}>Log Out</p>}
        </div>
        </div>
    </div>
  )
}

export default Navbar