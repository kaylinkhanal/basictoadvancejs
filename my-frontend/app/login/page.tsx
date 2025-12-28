import React from 'react'

const Login = () => {
  return (
    <div className='flex item-center m-x-5 p-2 bg-pink-200 h-full width-auto rounded-3xl shadow shadow-xl'>
      <div>Login </div>
      <div>
        <label htmlFor="username">Username/Email</label>
        <input className='border-2 border-red-100' type="text" placeholder='Enter your username'/>
      </div>
      <div></div>
    </div>
  )
}

export default Login