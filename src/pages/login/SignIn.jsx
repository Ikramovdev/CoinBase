import React, { useContext } from 'react'
import { SiteLogo } from '../../assets/images/icon'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { Context } from '../../context/Context'
import toast, { Toaster } from 'react-hot-toast'


function SignIn() {
  const {token, setToken} = useContext(Context)
  function handleSignInSubmit(e){
    e.preventDefault()
    const data = {
      email:e.target.email.value,
      password: e.target.password.value
    }
    if(data.email == "B20@gmail.com" && data.password == "123"){
      setToken(data)
    }
    else{
      toast.error("User not found")
    }
  }
  return (
    <div className='flex items-center flex-col justify-center py-[63px]'>
      <Toaster position="top-center" reverseOrder={false}/>
      <Toaster position="top-center" reverseOrder={false}/>
        <a href="inline-block"><SiteLogo/></a>
        <h2 className='text-[25px] leading-[37px] font-bold text-white'>Sign In</h2>
        <form onSubmit={handleSignInSubmit} className='w-[362px] mx-auto' autoComplete='off'>
            <label className='mb-[27px]'>
                <strong className='text-[12px] leading-[16px] text-white mb-[17px] inline-block outline-none'>Email</strong>
                <input className='w-full py-[23px] pl-[34px] rounded-[100px]' type="email" placeholder='Email' name='email' required/>
            </label>
            <label className='mb-[27px]'>
                <strong className='text-[12px] leading-[16px] text-white mb-[17px] inline-block outline-none'>Password</strong>
                <input className='w-full py-[23px] pl-[34px] rounded-[100px]' type="password" placeholder='Password' name='password' required/>
            </label>
            <Link className='mt-[9px] text-[10px] leading-[15px] mb-[7px] text-white block text-center' to={"/sign-up"}>Sign Up</Link>
            <Button type={"submit"} title={"Sign In"}/>
        </form>
    </div>
  )
}

export default SignIn