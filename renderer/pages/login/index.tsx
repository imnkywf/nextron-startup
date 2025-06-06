import React, { use, useEffect } from 'react'

export default function Login() {


  useEffect(() => {
    // This is where you can add any side effects or initializations
    console.log('Login component mounted');
  }, []);
  
  return (
    <div>Login</div>
  )
}
