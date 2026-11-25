import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password)
        console.log("hello guys !");
        
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center '>
      <div className='border-2 p-20 rounded-2xl border-emerald-600'>
            <form
             onSubmit={(e)=>{
                submitHandler(e)
                console.log("email is",email);
                console.log("password is",password)

                setEmail("")
                setPassword("")
                
             }}
        className='flex flex-col items-center justify-center ' >

                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                 required className=' outline-none text-white bg-transparent border-2 border-emerald-600 py-3 text-xl  px-5 rounded-full placeholder:text-gray-300' type="email" placeholder="Enter your email" />

                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                 required className=' mt-3 text-white outline-none bg-transparent border-2 border-emerald-600 py-3 text-xl  px-5 rounded-full placeholder:text-gray-300'type="password" placeholder="Enter  password" />

                <button className='text-white  mt-5 outline-none  border-2 bg-emerald-600 py-3 text-xl  px-5 rounded-full placeholder:text-white'>LogIn</button>

            </form>

      </div>
    </div>
  )
}

export default Login
