import { useState } from "react"
import Footer from "./components/Footer"
import Counter from "./components/Counter"
import Toogles from "./components/Toggles"
import jobaxle from "./assets/images/favicon-1.jpeg"
import TodoList from "./components/todolist/Todolist"
import TodoList2 from "./components/todolist/Todolist2"
import ProductPage from "./components/Products/ProductPage"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import CourseDetailPage from "./components/Course/CourseDetailPage"
import ProductDetailPage from "./components/Products/ProductDetailPage"


function App() {
  
  return (
    
<>

<Navbar/>
<Routes>

<Route index element={<h1>This is Home page</h1>}/>
{/* can also be used like below */}
{/* <Route path="/" element={<h1>This is Home page</h1>}/> */}   
<Route path="products" element = {<ProductPage/>}/>
<Route path="products/:name" element = {<ProductDetailPage/>}/>

<Route path="todo" element = { <TodoList2/>  } />
<Route path="todo/2" element = { <TodoList/>  } />
<Route path="course" element = {<h1>This is Course page this is main</h1>} />
<Route path="course/:name" element = {<CourseDetailPage/>} />

 
<Route path="*" element = {<h1>Page not found</h1>}/>




</Routes>

{/* <Footer/> */}

{/* <Navbar/>
<ProductPage/>


<TodoList2/> */}


  
  </>
  ) 
  
}


export default App