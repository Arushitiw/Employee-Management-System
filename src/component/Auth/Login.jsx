import React, { useState } from "react";

const Login=({handleLogin})=>{
    const[email,setemail]=useState('')
    const[pass,setpass]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault();
        handleLogin(email,pass)
        console.log("email is",email);
        console.log("password is",pass);
        setemail("")
        setpass("")
    }
    return(
        <div className="flex items-center justify-center h-screen w-screen"> 
            <div className=" border-2 border-emerald-500 p-20 rounded-xl">
                <form onSubmit={(e)=>{
                    submitHandler(e);
                }} className="flex flex-col items-center justify-center" >
                <input 
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }}
                required className=" placeholder:text-gray-400 text-white outline-none bg-transparent border-2 border-emerald-600  px-3 py-2 rounded-full" type="email" placeholder="Enter your email" />
                <input 
                value={pass}
                onChange={(e)=>{
                        setpass(e.target.value)
                }} className=" placeholder:text-gray-400 text-white outline-none bg-transparent border-2 border-emerald-600  mt-10 px-3 py-2 rounded-full" type="password" placeholder="Enter your password" />
                <button className=" placeholder:text-white text-white outline-none border-none  bg-emerald-600  px-2 rounded mt-2">Log in</button>
                
                </form>
            </div>
        </div>
    )
}
export default Login