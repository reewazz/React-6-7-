import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {

    const [name,setName] = useState("")
    const handleSignup = async()=> {

        const body  = {

   email : "abc@gmail.com",
   password : "1234567890",
}

        const response  = await axios.post("http://localhost:8000/user/login",body)
        alert("logged in successsfully")

    }

  return (
    <div>
        <h1>This is signup page</h1>
        <input className='border border-gray-400' type="text" value={name}  onChange={(e)=>setName(e.target.value)}/>
        <input className='border border-gray-400' type="text" />

        <button onClick={handleSignup}>create user</button>
    </div>
  )
}

export default Signup