import React from 'react'
import logo from "../../assets/images/netflix.png"
import { Bell, Search } from 'lucide-react'

const Netflix = () => {
  return (
    <div>
<div className="navbar text-white z-50 fixed top-0 left-0 flex w-full  items-center justify-between px-20">
   <div className='flex gap-10 items-center'>
     <div className='logo h-20 '>
        <img src={logo} alt=""  className='h-full  object-cover'/>
    </div>
    <div className="nav-items flex gap-4 items-center">
        <div>Home</div>
        <div>Tv Shows</div>
        <div>Movies</div>
        <div>New & Popular</div>
        <div>My List</div>
        <div>Browse By Language</div>
    </div>
   </div>
    <div className="icons flex gap-4 items-center">
        <Search/>
        <div>Kids</div>
        <Bell/>
    </div>
</div>

<div className="hero relative">
<div className='h-screen'>
    <img className='h-full w-full object-cover' src="https://images.hdqwalls.com/download/spider-man-vs-red-ninja-qt-1366x768.jpg" alt="" />
    </div>
    <div className='absolute z-50 top-1/2 -translate-y-1/2 left-20 text-white w-1/2'>
        <h1 className='text-[80px] font-bold'>Spiderman - Brand New Day</h1>
    </div>
    <div className='bg-black/30  h-screen absolute  inset-0'> 

    </div>
    </div>

    </div>
  )
}

export default Netflix