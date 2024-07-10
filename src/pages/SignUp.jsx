// import React from 'react'

// function Signup() {
//   return (
//     <>
    
    
//     <div className='w-full h-screen'>
//       <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg" alt="/" />
//       <div className='bg-black/60 fixed top-0 left-0 w-full h-screen' ></div>
//     <div className='fixed w-full px-4 py-24 z-50'>
//         <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
//         <div className='max-w-[320px] mx-auto py-16' >
//             <h1 className='text-3xl font-bold'>Sign Up</h1>
//             <form className='w-full flex flex-col py-4'>
//                 <input className='p-3 my-2 bg-gray-600 rounded' type="email" placeholder='Email' />
//                 <input className='p-3 my-2 bg-gray-600 rounded' type="password" placeholder='Password' autoComplete='current-password' />
//                 <button bg-red-600 py-3 my-6 rounded font-bold>Sign Up</button>
//                 <div className='flex justify-between items-center text-sm text-gray-600'>
//                     <p><input className='mr-2' type="checkbox" />Remember me</p>
//                     <p>Need Help?</p>
//                 </div>
//                 <p className='py-8'>
//                     <span className='text-gray-600'>Already subscribed to Netflix?</span>
//                 {' '}
//                 <Link to='/login'>Sign In</Link>
                
//                 </p>
//             </form>

//         </div>

//         </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default Signup



import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

function Signup() {
  return (
    <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg" alt="Netflix background" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold text-white'>Sign Up</h1>
            <form className='w-full flex flex-col py-4'>
              <input className='p-3 my-2 bg-gray-600 rounded' type="email" placeholder='Email' />
              <input className='p-3 my-2 bg-gray-600 rounded' type="password" placeholder='Password' autoComplete='current-password' />
              <button className='bg-red-600 py-3 my-6 rounded font-bold text-white'>Sign Up</button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <label htmlFor="remember-me">
                  <input id="remember-me" className='mr-2' type="checkbox" />
                  Remember me
                </label>
                <p>Need Help?</p>
              </div>
              <p className='py-8'>
                <span className='text-gray-600'>Already subscribed to Netflix?</span>{' '}
                <Link to='/login' className='text-red-600'>Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
