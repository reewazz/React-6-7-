import { useState } from "react"
import Footer from "./components/Footer"
import Counter from "./components/Counter"
import Toogles from "./components/Toggles"
import jobaxle from "./assets/images/favicon-1.jpeg"
import TodoList from "./components/todolist/Todolist"
import TodoList2 from "./components/todolist/Todolist2"
import {ProductPage} from "./components/Products/ProductPage"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import CourseDetailPage from "./components/Course/CourseDetailPage"
import {ProductDetailPage} from "./components/Products/ProductDetailPage"
import Homepage from "./components/HomePage"
import MantineUi from "./components/MantineUi/MantineUi"
import NewsList from "./components/News/NewsList"
import Netflix from "./components/Netflix/Netflix"
import BlogList from "./components/Blogs/BlogList"
import Signup from "./components/Signup"
import PrivateRoutes from "./components/PrivateRoutes"
import AdminLayout from "./layouts/AdminLayout"
import CreateBlog from "./components/Dashboard/CreateBlog"
import CreateProduct from "./components/Dashboard/CreateProduct"
import AppLayout from "./layouts/AppLayout"


function App() {
  
  return (
    
<>

<Routes>

<Route path="/" element={<AppLayout/>  }> 

<Route path="products" element = {<ProductPage/>}/>
<Route path="products/:name" element = {<ProductDetailPage/>}/>
<Route path="todo" element = { <TodoList2/>  } />
<Route path="todo2" element = { <TodoList/>  } />
<Route path="course" element = {<h1>This is Course page this is main</h1>} />
<Route path="course/:name" element = {<CourseDetailPage/>} />
<Route path="mantine" element = {<MantineUi/>} />
<Route path="news" element = {<NewsList/>} />
<Route path="netflix" element = {<Netflix/>} />
<Route path="signup" element = {<Signup/>} />
<Route path="blogs" element = {<BlogList/>} />


</Route>
{/* <Route path="admin" element = {<PrivateRoutes> <AdminLayout/> </PrivateRoutes>} />
<Route path="admin/product" element = {<PrivateRoutes> <ProductPage/> </PrivateRoutes>} /> */}

<Route path="admin" element = {<PrivateRoutes><AdminLayout/></PrivateRoutes>} >

<Route path="blog" element = {<CreateBlog/>}/>
<Route path="product" element = {<CreateProduct/>}/>


</Route>


{/* <Route path="props" element = {
  <TodoList> 
  <Netflix/>
</TodoList>
}/> */}

 
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