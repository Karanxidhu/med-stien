import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='bg-[#275C53] h-[11vh] flex justify-center items-center'>
        <div className='h-full w-[70%] mx-auto flex justify-around items-center'>
        <div className='text-base space-x-10 text-white tracking-[2px]'>
            <Link to={'/'} className='text-[#E2BB53]'>HOME</Link>
            <Link to={'/'}>ABOUT US</Link>
            <Link to={'/'}>PRODUCTS</Link>
            <Link to={'/'}>BLOG</Link>
            <Link to={'/'}>CONTACTS</Link>
        </div>
        <div className='h-full flex justify-around items-center space-x-10'>
            <img src="/images/user.png" alt="" className='h-[20%]'/>
            <div className='h-full flex justify-center items-center gap-2'>
            <img src="/images/cart.png" alt="" className='h-[20%]'/>
            <p className='text-base text-[#E2BB53]'>0</p>
            </div>
            <img src="/images/search.png" alt="" className='h-[20%] '/>
        </div>
        </div>
    </div>
  )
}

export default Navbar