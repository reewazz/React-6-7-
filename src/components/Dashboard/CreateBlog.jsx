import { Button, Checkbox, TextInput } from "@mantine/core";
import axios from "axios";
import React, { useState } from "react";

const CreateBlog = () => {
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const  [status,setStatus] = useState(false)
  const [likes,setLikes] = useState(0)

  const handleSubmit = async () => {
  try{
      const body = {
      title: title,
      author: "6a8ee603b363c99f303f7d6d",
      description: description,
      status: status,
      category: "6a86fa7e642082de48f594ca",
      likes: likes,
    };
    const res = await axios.post("http://localhost:8000/blog/create", body);
    alert("Blog created Successfully")
    setTitle("")
      setStatus()
      setDescription()
      setLikes()
  }
  catch(err) {
    console.error(err.response.data)
    alert(err.response.data.message)
  }

  };


  console.log(status,"lalalal")
  return <div>



<div className="flex flex-col gap-4 w-1/2">
   <TextInput label = "Title" placeholder="Enter blog title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
   <TextInput label = "Description" placeholder="Enter blog Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
   <TextInput label = "Likes" placeholder="Enter blog likes" value={likes} onChange={(e)=>setLikes(e.target.value)}/>
    <Checkbox checked = {status} onChange={()=>setStatus(!status)} label="Status"/>
        <Button onClick={handleSubmit}>Create Blog</Button>
</div>
     
  </div>;
};

export default CreateBlog;
