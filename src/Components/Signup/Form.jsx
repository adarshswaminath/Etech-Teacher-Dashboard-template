import React from 'react';

function Form() {
  return (
    <div className='flex flex-col'>
      <h3 className='font-semibold text-violet-500 text-2xl'>Become an E-tech Instructor</h3>
      <p className='text-gray-400'>
        Voluptate enim nulla laborum mollit culpa velit sunt consequat. Exercitation duis sunt excepteur officia veniam ex ea fugiat esse cillum.
      </p>
      
      <form className="grid gap-4 mt-3">
        <input type="text" placeholder='First Name' className='border rounded-lg border-gray-400 p-2 focus:outline-none' name="" id="" required />
        <input type="email" placeholder='Email' className='border rounded-lg border-gray-400 p-2 focus:outline-none' name="" id="" required />
        <input type="password" placeholder='Password' className='border rounded-lg border-gray-400 p-2 focus:outline-none' name="" id="" required />
        <input type="password" placeholder='Confirm Password' className='border rounded-lg border-gray-400 p-2 focus:outline-none' name="" id="" required />
      </form>

      <div className='grid mt-3'>
        <div className='flex items-center gap-2'>
          <input type='checkbox' className='checkbox' />
          <p className='text-gray-400 font-semibold'>I agree to the terms and conditions</p>
        </div>
      </div>

      <button className='bg-violet-500 mt-3 text-white py-3 rounded-lg hover:bg-violet-400 font-semibold focus:outline-none'>
        Sign Up
      </button>

      <div className='divider my-3'>OR</div>

      <div className='flex   gap-6 justify-center'>
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
