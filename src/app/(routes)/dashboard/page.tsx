"use client"

import Header from '@/components/Header'
import { UserButton } from '@clerk/nextjs'
import React, { useEffect } from 'react'


function Dashboard() {
  
  return (
    <div className='flex justify-center items-center'>
     <UserButton/>
      

     
    </div>
  )
}

export default Dashboard