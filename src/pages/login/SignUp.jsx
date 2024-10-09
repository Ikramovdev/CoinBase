import React from 'react'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='flex items-center flex-col justify-center py-[63px]'>
        <h2 className='text-[25px] leading-[37px] font-bold text-white'>Sign Up</h2>
        <form className='w-[362px] mx-auto'>
            <label className='mb-[27px]'>
                <strong className='text-[12px] leading-[16px] text-white mb-[17px] inline-block outline-none'>New Email</strong>
                <input className='w-full py-[23px] pl-[34px] rounded-[100px]' type="email" placeholder='Email' name='newemail' required/>
            </label>
            <label className='mb-[27px]'>
                <strong className='text-[12px] leading-[16px] text-white mb-[17px] inline-block outline-none'>New Password</strong>
                <input className='w-full py-[23px] pl-[34px] rounded-[100px]' type="password" placeholder='Password' name='newpassword' required/>
            </label>
            <Link className='mt-[9px] text-[10px] leading-[15px] mb-[7px] text-white block text-center' to={"/"}>Sign In</Link>
            <Button type={"submit"} title={"Sign Up"}/>
        </form>
    </div>
  )
}

export default SignUp