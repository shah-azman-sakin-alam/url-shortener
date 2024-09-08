'use client'
import React, { useContext, useEffect } from 'react'
import {Checkbox} from "@nextui-org/react";
import { AuthContext } from './authContext';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {TypeOfAuth, setTypeOfAuth} = useContext(AuthContext)
  const {register,  formState: { errors }, handleSubmit }=useForm()
 
  const onSubmit=async(data)=>{

  }
  useEffect(() => {
    console.log(TypeOfAuth)
  }, [TypeOfAuth])
  return (
    <>
    <label className='flex flex-col mb-6 text-xl gap-y-2 font-jost xs:max-md:text-lg'>
    E-Mail Address
        <input type='email' className='py-[0.4rem] border-black border-opacity-15 border-[0.6px] rounded-xl px-4 cursor-text'{...register('email',{
          required:{
            value:true,
            message:'Please enter your email'
          },
          pattern:{
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email'
          }
          
        },
          )}/>
    </label>
    <label className='flex flex-col mb-5 text-xl gap-y-2 font-jost xs:max-md:text-lg'>
   Password
        <input type='password' className='py-[0.4rem] border-black border-opacity-15 border-[0.6px] rounded-xl px-4'/>
    </label>
    <div className='flex justify-between mb-6'>
    
            <Checkbox size='md' className=''>
                <span className='mx-1 text-lg tracking-normal font-jost text-sign-label'>Remember me</span>
            </Checkbox>
            <span className='text-lg tracking-normal underline font-jost text-forgot-pass hover:cursor-pointer'>Forgot password?</span>
        </div>
    
  
        <button type='submit' className='w-full py-3 text-xl text-white bg-formButton rounded-xl border-[#484747] border-[0.6px] outline-2 outline outline-[#1D1D1D] mb-6 hover:bg-slate-50 hover:text-slate-800 transition-all duration-300'>Sign In</button>
    
        <p className='text-lg text-center font-jost text-forgot-pass hover:underline-offset-1 hover:underline hover:cursor-pointer' onClick={()=>setTypeOfAuth('register')}>Don’t have an account yet? <span className='text-black'>Sign up</span></p>
        </> 
  )
}

export default Login