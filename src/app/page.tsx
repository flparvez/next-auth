import { auth } from '@/auth'
import {handleSignOut} from '@/action'

import React from 'react'

const Home = async () => {
  const user = await auth()

  console.log(user)
  return (
    <div>
      <h2>Home Page</h2>
      <h2>test</h2>
      <form action={handleSignOut}>
          <button type='submit'>Logout</button>
      </form>
    
    </div>
  )
}

export default Home
