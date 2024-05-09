import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [creds, setCreds] = useState({email: '', password:''})
    const navigate = useNavigate()
    const onChange = (e)=>{
        setCreds({...creds, [e.target.name]: e.target.value})
        console.log(creds)
    }

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            navigate('/addProduct')
        }
    },[])

    const handleLogin= async (e)=>{
        e.preventDefault();
        const response = await fetch("https://med-stien-backend.vercel.app/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: creds.email, password: creds.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            if(json.role === "seller"){
                localStorage.setItem('ChemRole', json.role)
            }
            navigate("/shop");

        }
        else{
            alert("Invalid credentials");
        }
    
    }
    return (
        <div className='h-screen justify-center items-center p-12 md:pt-32'>
            <main class="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
                <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
                    <h1 class="text-4xl font-semibold">Welcome back.</h1>
                </div>
                <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
                    <input class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Email" name='email' onChange={onChange}/>
                    <input class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Password" name='password' onChange={onChange}/>
                    <Link to='/signup' className='text-[#275C53]'>Sign up</Link>
                    <div class="flex items-center">
                        <div class="w-1/2 flex items-center">
                            <input id="remember-me" type="checkbox" class="mt-1 mr-2" />
                            <label for="remember-me">Remember me!</label>
                        </div>
                        <button onClick={handleLogin} class="ml-auto w-1/2 bg-[#275C53] text-white p-2 rounded font-semibold hover:bg-gray-900" type="submit">Log In</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login