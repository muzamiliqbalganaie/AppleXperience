import React from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center my-10 px-6'>
        <div className=" logo font-bold text-xl ">Clerk Template</div>
        <ul className=' flex w-full px-4 py-2 justify-center items-center gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
        </ul>
        <div className='flex items-center gap-4'>
            <SignedOut>
              <SignInButton>
                <button className='bg-black text-white px-4 py-2 rounded-md border-red-400 border-2'>Sign In</button>
              </SignInButton>
              <SignUpButton>
                <button className='bg-black text-white px-4 py-2 rounded-md  border-red-300 border-2'>Sign Up</button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
    </div>
  )
}

export default Navbar