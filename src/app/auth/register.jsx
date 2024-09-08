
'use client'
import React,{useState, useContext, useEffect} from 'react'
import {Checkbox} from "@nextui-org/react";
import { AuthContext } from './authContext';
import { useForm } from 'react-hook-form';
import axios from 'axios'
const Register = () => {
    const {setTypeOfAuth} = useContext(AuthContext)
    const {register,handleSubmit,watch,formState: { errors }} = useForm();
    const [gapping,setGapping] = useState()
    const [rememberMe, setRememberMe] = useState(false)
    //state for submit form
    const [isSubmitting, setIsSubmitting] = useState(false);
    const[emailVerification, setEmailVerification] = useState(false)
    const onSubmit=async(data)=>{
        try{
            setIsSubmitting(true)
            const response=await axios.post('/api/auth/register',data)
            console.log(response)
            if(response.status===200){
        
            }
        }
        catch(err) {

        }
    }

   const formClicked = () => {
        errors.password?.type === 'pattern'&& alert('Password must be between 8 and 16 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character, no space');
    }
 useEffect(() => {

    //if the errors object is not empty and there is no email error
   if(Object.keys(errors).length>0 && !errors?.email?.type){

      //give it extra 4 margin
      setGapping('mb-4')
  }
  //if the errors object is not empty
  else if(Object.keys(errors).length>0){
    //remove margin
      setGapping('')

  }
  //else if there are no errors
  else{

      //give it extra 4 margin
      setGapping('mb-4')
  }
   
 },[errors, errors?.email, errors?.firstName])
  return (
   <form onSubmit={handleSubmit(onSubmit)} method='post'>
   <div className={`grid grid-cols-6  gap-x-4 ${gapping}`}>
                            <label className='flex flex-col col-span-4 text-xl gap-y-2 font-jost xs:max-md:text-lg'>
                                E-Mail Address
                            <input type='email' className='py-[0.4rem] border-black border-opacity-15 border-[0.6px] rounded-xl px-4 ' {...register('email',{
                                 required:{
                                    value:true,
                                    message:'Please enter your email'
                                  },
                                  pattern:{
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Please enter a valid email'
                                  }
                            }

                            )}/>
                                {errors.email && <p className=''>{errors.email.message}</p>}
                        </label>
                        <label className='flex flex-col col-span-2 text-xl gap-y-2 font-jost xs:max-md:text-lg'>
                                First Name
                            <input type='text' className='py-[0.4rem] border-black border-opacity-15 border-[0.6px] rounded-xl px-4 '  {...register('firstName',{
                            required:{
                                value:true,
                                message:'Please enter your first name'
                            }
                        })}/>
                             {errors.firstName && <p className=''>{errors.firstName.message}</p>} 
                        </label>
                        </div>
                       
                    <div className='grid grid-cols-8 mb-3 gap-x-4'>

                    <label className='flex flex-col col-span-3 text-xl gap-y-2 font-jost xs:max-md:text-lg'>
                        Last Name
                        <input type='text' className='py-[0.4rem] border-black border-opacity-15 border-[0.6px] rounded-xl px-4' {...register('lastName',{
                            required:{
                                value:true,
                                message:'Please enter your last name'
                            }
                        })}/>
                        {errors.lastName && <p className=''>{errors.lastName.message}</p>}
                    </label>
                        <label className='flex flex-col col-span-5 text-xl gap-y-2 font-jost xs:max-md:text-lg'>
                        Password
                        <input type='password' className='py-[0.4rem] border-black border-opacity-15 border-[0.6px] rounded-xl px-4' {...register('password',{
                            required:{
                                value:true,
                                message:'Please enter your password'
                            },
                            pattern:{
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                                message:'Please meet the password requirements'
                            }
                        }) }/>
                       {errors.password && <p className='text-black pass-error'>{errors.password.message}</p>}
                    </label>
                    </div>
                    
                    <Checkbox size='md' className='block mx-auto mb-3' checked={rememberMe} onChange={()=>setRememberMe(!rememberMe)}>
                                <span className='mx-1 text-lg tracking-normal font-jost text-sign-label '>Remember me</span>
                    </Checkbox>
                        
                    <input type='submit' className='w-full py-3 text-xl text-white bg-formButton rounded-xl border-[#484747] border-[0.6px] outline-2 outline outline-[#1D1D1D] mb-6 hover:bg-slate-50 hover:text-slate-800 transition-all duration-300' value='Sign Up' onClick={formClicked} />
                <p className='text-lg text-center text-black disclaimer font-jost hover:underline-offset-1 hover:underline hover:cursor-pointer' onClick={()=>setTypeOfAuth('login')}>Don’t have an account yet? </p>
                </form>
  )
}

export default Register