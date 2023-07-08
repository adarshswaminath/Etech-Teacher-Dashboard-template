import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [message,setMessage] = useState("")
    // function for authentication
    const Auth = (props) => {
        if(username === "" && password === ""){
            setMessage("Empty Value Not Procedd")
        }
        if(username === "admin" && password === "admin"){
            window.location.href = '/panel';
        } else {
            setMessage("Invalid Username or Password")
        }
    }
  return (
    <div className='flex flex-col'>
      <h3 className='font-semibold text-violet-500 text-2xl'>Login With Your E-tech Account</h3>
      <p className='text-gray-400'>
        Voluptate enim nulla laborum mollit culpa velit sunt consequat. Exercitation duis sunt excepteur officia veniam ex ea fugiat esse cillum.
      </p>
      <div className='mt-2 mb-2 font-bold '>
        {message}
      </div>

      <form className="grid  mt-3 gap-4">
        <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder='First Name' className='border rounded-lg border-gray-400 p-2' name="" id="" required/>
        <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='border rounded-lg border-gray-400 p-2' name="" id="" required/>
      </form>

      <div className="grid grid-cols-2 mt-3">
        <div className='m-auto flex items-center gap-2'>
          <input type="checkbox" className='checkbox' />
          <p className='text-gray-400 font-semibold'>Remember Me</p>
        </div>
        <Link to="/forgot-password" className='text-gray-400 cursor-pointer hover:text-violet-500 font-semibold'>
          Forgot Password?
        </Link>
      </div>

      <div onClick={Auth} className='bg-violet-500 mt-3 text-white py-3 rounded-lg hover:bg-violet-400 font-semibold'>
        Sign In
      </div>

      <div className='divider my-3'>OR</div>

      <div className="flex gap-6 justify-center">
        <button className='btn flex items-center'>
          <img src="https://pngimg.com/uploads/google/google_PNG19635.png" className='h-12 w-12' alt="" />
          Google
        </button>
        <button className='btn flex items-center'>
          <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png" className='h-12 w-12' alt="" />
          Facebook
        </button>
      </div>
    </div>
  );
}

export default Form;
