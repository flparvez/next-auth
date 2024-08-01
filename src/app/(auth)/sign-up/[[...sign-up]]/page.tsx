import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to test auth
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to AuthService if you can.
      </p>
 
      <br />
        <div className="flex flex-col md:flex-row space-y-2  md:space-y-0 md:space-x-2 mb-4">
          <SignUp/>
        </div>
      
    </div>
  )
}

export default page
