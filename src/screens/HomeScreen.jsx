import React from 'react'

function HomeScreen() {
  return (
    <div className='w-full bg-[#275C53] min-h-[89vh] pt-16'>
        <div className='w-[75%] mx-auto flex justify-around items-center'>
            <div className='w-[40%]'>
                <h1 className='text-8xl text-white'>
                    Chemist <br/>Shop <br/>Inventory
                </h1>
                <p className='text-lg font-light text-white leading-8 w-[70%] text-justify pt-8 pb-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sit delectus, deserunt molestiae laborum facilis quisquam odit tempore vitae fuga rem, culpa a expedita aut?</p>
                <span className=' text-xs text-[#275C53] px-20 py-5 bg-[#E2BB53] rounded-full'>READ MORE</span>
            </div>
            <img src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[60%] rounded-3xl" alt="" />
        </div>
        <div className='h-[40vh] w-full'>

        </div>
    </div>
  )
}

export default HomeScreen