import React, { useEffect, useState } from 'react'
import { BlogCard } from './BlogCard'

const BlogList = () => {
    const [bloglist,setBlogList] = useState([])

    const fetchBlogs = async()=> {
      const response = await fetch("http://localhost:8000/blog/getAll")
      const finalresponse = await response.json()
      setBlogList(finalresponse)
    }
    
    
    useEffect(()=>{
    fetchBlogs()
    },[])

    

    console.log(bloglist,"blogss")
  return (
    <div>

    <h1 className='text-center font-semibold text-4xl'>Blogs</h1>
  

  <div className='grid grid-cols-3 gap-8 py-4 px-20'>
      {bloglist.map((item,index)=>(
      <BlogCard key={index} blog={item}/>
    ))}
  </div>
    </div>
  )
}

export default BlogList