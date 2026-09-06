import React from 'react'
import { ProductPage } from '../components/Products/ProductPage'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='flex gap-8'>
        <div className="sidebar flex flex-col gap-6  bg-black text-white w-1/6 h-screen">
            <div>Dashboard</div>
            <div>Blog</div>
            <div>Product</div>

        </div>
        <div className='4/6'>
         <Outlet/>
        </div>

    </div>
  )
}

export default AdminLayout