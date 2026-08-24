import React, { useEffect, useState } from 'react'

const BlogList = () => {
    const [bloglist,setBlogList] = useState()

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
    <div>BlogList</div>
  )
}

export default BlogList