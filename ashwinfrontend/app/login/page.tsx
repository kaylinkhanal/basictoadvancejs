'use client'
import React, { useEffect, useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="min-h-screen flex flex-col gap-3 items-center justify-center text-white  font-mono bg-linear-to-tr from-black to-indigo-500 ">
            <div className="flex flex-col gap-2 bg-gray-800 p-6 rounded-3xl w-full max-w-sm
">
                <div className="p-1">User-name</div>
                <input
                    type="text"
                    placeholder=" Enter your User-Name"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    className=" p-1 rounded-sm "
                />
                <div className="p-1">Password</div>
                <input
                    type="password"
                    placeholder=" Enter your Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className=" p-1 rounded-sm "
                />
                <button 
                className="p-3 mt-5 bg-indigo-600 hover:bg-indigo-800 rounded-md"
                onClick={()=>{alert(`username: ${username} & password: ${password}`)}}
                >
                    Login
                </button>
            </div>
            <a href="#" className=" text-indigo-700 p-1 hover:text-indigo-900">forgot password?</a>
            <div className="mt-3"> Not registered yet?</div>
            <button className="p-3 mt-1 bg-indigo-600 hover:bg-indigo-800 rounded-md">
                <a href="/register">Create new Account</a>
                </button>
        </div>
    );
};

export default Login;
