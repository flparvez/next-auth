"use client"

import React from 'react'
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { credentialsLogin } from '@/action/login';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';


const LoginForm = () => {
    const router = useRouter()
  return (
    <div>
         <form action={async(formData)=>{
const email = formData.get('email') as string;
const password = formData.get('password') as string

if (!email || !password)  return toast.error("Please enter email and password");
const toastId = toast.loading("Logging in")

     const error=   await  credentialsLogin(email,password)
     if(!error)
       {
         toast.success("Login Succesfully",{
        id:toastId,
     });
     router.refresh()
    
    }
  else{
    toast.error(String(error),{
        id:toastId,
    })
  }
        }}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input type="text" name="email" id="email" placeholder="Enter Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Password</Label>
              <Input type="password" name="password" id="email" placeholder="Enter Password" />
            </div>
            <Button type="submit" variant="ghost">Login</Button>
          </div>
        </form>
    </div>
  )
}

export default LoginForm
