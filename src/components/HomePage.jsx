import { Clapperboard, DollarSign } from 'lucide-react'
import React, { useEffect, useState } from 'react'

 const HomePage = () => {


  const [count,setCount] = useState(0)

  const makeAlert = ()=> {
    alert("This is alert")
  }
  

  useEffect (()=>{
   makeAlert()
  }, [count] )


  return (
    <div className='flex flex-col gap-8 items-center'>
      <h1>{count}</h1>
      <button className='bg-blue-400' onClick=  {makeAlert} >Make alert</button>
      <button className='bg-blue-400' onClick={()=>setCount(count+10)} >+10</button>
      <Clapperboard size={14} className='text-red-500 text-sm' />
      <DollarSign/>
    </div>
  )
}

export default HomePage

