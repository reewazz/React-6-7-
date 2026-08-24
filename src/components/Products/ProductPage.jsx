import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";

export function ProductPage () {

  const [productList,setProductList] = useState([]);



const [name,setName] = useState("")
const [brand,setBrand] = useState("")
const [category,setCategory] = useState("")
const [price,setPrice] = useState("")
const [image,setImage] = useState("")


const fetchProducts = async()=> {
  const response = await fetch("http://localhost:8000/products")
  const finalresponse = await response.json()
  setProductList(finalresponse)
}


useEffect(()=>{
fetchProducts()
},[])


const [show,setShow] = useState(false)

// localStorage.setItem("products",JSON.stringify(productList))



// localStorage.setItem("name","riwaj")


const userObj = {
  name : "sandip",
  age :21
}
// localStorage.removeItem("name")

const myname = localStorage.getItem("name")

console.log(myname,"name from local")

const name2 = "ddne"
localStorage.setItem("name", true)
localStorage.setItem("names", "another name")



localStorage.setItem("user", JSON.stringify(userObj))

const userobjfromlocal = JSON.parse(localStorage.getItem("user"))

 const handleDelete = (a,e)=> {
  console.log(e,'event')

  e.preventDefault()
   const newTodo = productList.filter((item,index)=> {
        return item.id!==a
    })
    setProductList(newTodo)
 
  }
  

const addProduct = ()=> {
  const newProduct = {
    id: Date.now(),
    name: name,
    brand: brand,
    category: category,
    price: price,
     image: "https://picsum.photos/seed/sonya7iv/600/600",

    }
    // setProductList ([...productList,newProduct])
    // setProductList ((prev)=>[...prev,newProduct])
      setProductList((prev) => {
    const updatedList = [...prev, newProduct];
    localStorage.setItem("productlist", JSON.stringify(updatedList));
    return updatedList;
  });
  setName("")
  setBrand("")
  setPrice("")
  setImage("")
  setCategory("")

  setShow(false)
  

}


useEffect(()=> {
  localStorage.setItem("products",productList)
},[productList])
const [filter,setFilter] = useState("") //this is category


const productListfromLocal = JSON.parse(localStorage.getItem("productlist"))

// console.log(numbers,"nummm")

const categories = [...new  Set(productList.map(item => item.category))];

const filteredProducts =   filter=== "" ? productList :     productList.filter ((item,index)=> (
            item.category === filter
))

console.log(filteredProducts)
console.log(categories,"cattt")



    return (
        <>

       
        <h1>{userobjfromlocal.age}</h1>
       <div>
        <h1>Total Products</h1>
        <p> $  {productList.length}  </p>
       </div>
    <div className="flex justify-center">
      <button onClick={()=>setShow(true)} className="h-auto w-auto py-2 px-4 bg-blue-400">Add Product </button>
    </div>

  {
  show && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-[90%] max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            Add Product
          </h2>

          <button
            onClick={() => setShow(false)}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter product name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Brand
            </label>
            <input
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              type="text"
              placeholder="Enter brand"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Enter category"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="Enter price"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type="text"
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() => setShow(false)}
            className="rounded-lg border border-gray-300 px-5 py-2 font-medium hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
          onClick={addProduct}
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Save Product
          </button>
        </div>

      </div>
    </div>
  )
}

    <div className="flex gap-4 items-center justify-center py-4">

<button onClick={()=>setFilter("")} className="bg-blue-400 rounded-sm  p-2 text-white">All</button>
      {categories.map((item,index)=>(
        <button onClick={()=>setFilter(item)} className="bg-blue-400 rounded-sm  p-2 text-white" key={index}> {item}  </button>
      ))}

    </div>
      <div className="grid grid-cols-3 gap-8 py-16 px-20">
          {filteredProducts?.map((item,index)=> (
           <ProductCard handleDelete={handleDelete} key={index}  item = {item}  />
        ))}
      </div>
        </>
    )
}


