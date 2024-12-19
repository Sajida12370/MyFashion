// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { useLoginUserMutation } from '../redux/features/auth/authApi'


// const Login = () => {
//     const [message,setMessage]=useState('')
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')

// const dispatch =useDispatch();
// const [loginUser,{isLoading: loginLoading}]=useLoginUserMutation()


//     // handle login
//     const handleLogin = async(e)=>{
//         e.preventDefault()
//         const data={
//             email,
//             password
//         }
//         try {
//             const response = await loginUser(data).unwrap()
//             alert("Login Succesfull")
            
//         } catch (error) {
//             setMessage("Please provide valid email and password")
            
//         }
    

//     }

//   return (
//    <section className='h-screen flex items-center justify-center'>
//    <div className='max-w-sm border shadow bg-white mx-auto p-8'>
//     <h2 className='text-2xl font-semibold pt-5'>Please login</h2>
//     <form  onSubmit ={handleLogin} className='space-y-5 max-w-sm mx-auto pt-8'>
//     <input type='email' name='email' id='email' placeholder='Email Address'
//     required className='w-full bg-gray-100 focus:outline-none px-5 py-3'
//         onChange={(e)=>setEmail(e.target.value)}
//     />

// <input type='password' name='password' id='passsword' placeholder='Password'
//     required className='w-full bg-gray-100 focus:outline-none px-5 py-3'
//     onChange={(e)=>setPassword(e.target.value)}
//     />

//     {
//         message && <p className='text-red-500'>{message}</p>
//     }

//     <button 
//     type='submit' 
//     className='w-full bg-primary mt-5 text-white hover:bg-green-400 font-medium py-3 rounded-md'
//     >Login</button>
//     </form>
//     <p className='my-5 italic text-sm text-center'>Don't Have Account? 
//     <Link to="/register" className='text-red-700 hover:text-red-500 hover:underline'> Register </Link> Here</p>
//    </div>

//    </section>
//   )
// }

// export default Login
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../redux/features/auth/authApi';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { setUser } from '../redux/features/auth/authSlice';

const Login = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation();
const navigate=useNavigate()
    // Handle login
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        };
        try {
            const response = await loginUser(data).unwrap();
            console.log(response)
            const {token,user}= response
            dispatch(setUser({user}))
            Swal.fire({
                title: 'Success!',
                text: 'Login Successful!',
                icon: 'success',
                confirmButtonText: 'Okay',
            });
            navigate("/")
        } catch (error) {
            setMessage("Please provide valid email and password");
            Swal.fire({
                title: 'Error!',
                text: 'Please Provide valid email and password',
                icon: 'error',
                confirmButtonText: 'Okay',
            });
        }
    };

    return (
        <section className='h-screen flex items-center justify-center'>
            <div className='max-w-sm border shadow bg-white mx-auto p-8'>
                <h2 className='text-2xl font-semibold pt-5'>Please login</h2>
                <form onSubmit={handleLogin} className='space-y-5 max-w-sm mx-auto pt-8'>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email Address'
                        required
                        className='w-full bg-gray-100 focus:outline-none px-5 py-3'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        required
                        className='w-full bg-gray-100 focus:outline-none px-5 py-3'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {message && <p className='text-red-500'>{message}</p>}
                    <button
                        type='submit'
                        className='w-full bg-primary mt-5 text-white hover:bg-green-400 font-medium py-3 rounded-md'
                    >
                        Login
                    </button>
                </form>
                <p className='my-5 italic text-sm text-center'>
                    Don't Have Account? 
                    <Link to="/register" className='text-red-700 hover:text-red-500 hover:underline'> Register </Link> Here
                </p>
            </div>
        </section>
    );
};

export default Login;
