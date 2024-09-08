
'use client'
import React, { useContext } from 'react'
import './styles.css'
import { AuthContext } from './authContext'
import { useForm } from 'react-hook-form'
import Login from './login'
import Register from './register'
const page = () => {
     const {TypeOfAuth} = useContext(AuthContext)
     const {handleSubmit}=useForm()
   const onSubmit=async(data)=>{
       console.log(data)
   }
  return (
    <div className='flex items-center justify-center h-screen gap-y-4'>
        <div className=' w-[400px] bg-background px-6 py-6 rounded-[50px]'  >
           <div className='flex flex-col items-center justify-center mb-4 gap-y-1'>
                <h2 className='text-3xl font-bold tracking-tight font-aleo'>{TypeOfAuth==='login'? 'Welcome Back':'Welcome'}</h2>
                <p className='text-xl tracking-tight text-sign-small-text font-jost xs:mb-4'>
                    {TypeOfAuth==='login'? 'Please enter your details to sign in':'Make a new account with us'}
                </p>
                <div className='grid justify-center w-full grid-cols-3 mx-auto gap-x-2 auth-buttons xs:mb-2'>
                <button type='button'>
                        <img  src="https://img.icons8.com/ios-glyphs/mac-os.png" alt="mac-os"/>
                    </button>
                    <button type='button'>
                        <img src="https://img.icons8.com/color/google-logo.png" alt="google-logo"/>
                    </button>
                    <button type='button'>
                        <img  src="https://img.icons8.com/color/twitter--v1.png" alt="twitter--v1" />
                    </button>
                </div>
                <div className='flex items-center w-full gap-x-2 '>
                    <span className='w-full h-[0.4px] bg-black opacity-15'></span>
                    <small className='text-base tracking-tight text-black text-opacity-50 font-jost'>OR</small>
                    <span className='w-full bg-black h-[0.4px] opacity-15'></span>
                </div>
           </div>
            
                    {/* */}
                   {TypeOfAuth==='login'? <Login/>:<Register/>}
                   
                        
        </div>
    </div>
  )
}

export default page