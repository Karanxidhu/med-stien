import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate()
    const [creds, setCreds] = useState({
        email: '',
        password: '',
        name: '',
        phoneNumber: '',
        role: ''
    });
    const onChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
        console.log(creds)
    }
    const handleSign = async(e)=>{
        e.preventDefault();
        // console.log(form)
        const reponse = await fetch('https://med-stien-backend.vercel.app/api/auth/createuser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(creds)
        })
        const json = await reponse.json();
        console.log(json)
        localStorage.setItem('token', json.authtoken); 
        if(json.role === "seller"){
            localStorage.setItem('ChemRole', json.role)
        }
        if(json.error) {
          alert(json.error)
        }else{
          navigate('/')
        }
      }
    return (
        <div className='justify-center items-center p-12 md:pt-32'>
            <main class="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
                <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
                    <h1 class="text-4xl font-semibold">Sign Up</h1>
                </div>
                <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
                    <input class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Name" name='name' onChange={onChange} />
                    <input class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Email" name='email' onChange={onChange} />
                    <input class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Password" name='password' onChange={onChange} />
                    <input class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Phone Number" name='phoneNumber' onChange={onChange} />
                    <select class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" name='role' onChange={onChange}>
                        <option defaultValue>Choose your type</option>
                        <option value="seller">Chemist</option>
                        <option value="customer">Customer</option>
                    </select>
                    <div class="flex items-center">
                        <div class="w-1/2 flex items-center">
                            <input id="remember-me" type="checkbox" class="mt-1 mr-2" />
                            <label for="remember-me">Remember me!</label>
                        </div>
                        <button onClick={handleSign} class="ml-auto w-1/2 bg-[#275C53] text-white p-2 rounded font-semibold hover:bg-gray-900" type="submit">Sign Up</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Signup