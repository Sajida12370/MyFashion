import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterUserMutation } from '../redux/features/auth/authApi'
import Swal from 'sweetalert2'

const Register = () => {
    
    const [message,setMessage]=useState('')
    const[username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const [registerUser,{isLoading}] =useRegisterUserMutation()
    const navigate =useNavigate()

    const handleRegister = async(e)=>{
        e.preventDefault()
        const data={
            username,
            email,
            password
        }
        try {
            await registerUser(data).unwrap()
            Swal.fire({
                title: 'Success!',
                text: 'Register Successful!',
                icon: 'success',
                confirmButtonText: 'Okay',
            });
            navigate("/login")
            
        } catch (error) {

            setMessage("Registration Failed");
            Swal.fire({
                title: 'Error!',
                text: 'Registration Failed',
                icon: 'error',
                confirmButtonText: 'Okay',
            });
            
        }
    

    }
  return (
    <section className='h-screen flex items-center justify-center'>
    <div className='max-w-sm border shadow bg-white mx-auto p-8'>
     <h2 className='text-2xl font-semibold pt-5'>Please Register</h2>
     <form  onSubmit ={handleRegister} className='space-y-5 max-w-sm mx-auto pt-8'>
     <input type='text' name='username' id='username' placeholder='UserName'
     required className='w-full bg-gray-100 focus:outline-none px-5 py-3'
         onChange={(e)=>setUsername(e.target.value)}
     />
     <input type='email' name='email' id='email' placeholder='Email Address'
     required className='w-full bg-gray-100 focus:outline-none px-5 py-3'
         onChange={(e)=>setEmail(e.target.value)}
     />
 
 <input type='password' name='password' id='passsword' placeholder='Password'
     required className='w-full bg-gray-100 focus:outline-none px-5 py-3'
     onChange={(e)=>setPassword(e.target.value)}
     />
 
     {
         message && <p className='text-red-500'>{message}</p>
     }
 
     <button 
     type='submit' 
     className='w-full bg-primary mt-5 text-white hover:bg-green-400 font-medium py-3 rounded-md'
     >Register</button>
     </form>
     <p className='my-5 italic text-sm text-center'>Already Have Account? 
     <Link to="/login" className='text-red-700 hover:text-red-500 hover:underline'> Login </Link> Here</p>
    </div>
 
    </section>
  )
}

export default Register
