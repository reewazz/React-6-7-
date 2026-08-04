import { useState } from "react"
import ProductCard from "./ProductCard";

function ProductPage () {

  const [productList,setProductList] = useState([
  {
    id: 101,
    name: "iPhone 16 Pro",
    brand: "Apple",
    category: "Smartphones",
    price: 1099,
    image: "https://picsum.photos/seed/iphone16pro/600/600",
  },
  {
    id: 102,
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    price: 1199,
    image: "https://picsum.photos/seed/galaxys25ultra/600/600",
  },
  {
    id: 201,
    name: "MacBook Air M3",
    brand: "Apple",
    category: "Laptops",
    price: 1299,
    image: "https://picsum.photos/seed/macbookairm3/600/600",
  },
  {
    id: 202,
    name: "Dell XPS 13",
    brand: "Dell",
    category: "Laptops",
    price: 1399,
    image: "https://picsum.photos/seed/dellxps13/600/600",
  },
  {
    id: 301,
    name: "Apple Watch Series 10",
    brand: "Apple",
    category: "Smartwatches",
    price: 499,
    image: "https://picsum.photos/seed/applewatch10/600/600",
  },
  {
    id: 302,
    name: "Samsung Galaxy Watch Ultra",
    brand: "Samsung",
    category: "Smartwatches",
    price: 649,
    image: "https://picsum.photos/seed/galaxywatchultra/600/600",
  },
  {
    id: 401,
    name: "AirPods Pro 2",
    brand: "Apple",
    category: "Earbuds",
    price: 249,
    image: "https://picsum.photos/seed/airpodspro2/600/600",
  },
  {
    id: 402,
    name: "Sony WF-1000XM5",
    brand: "Sony",
    category: "Earbuds",
    price: 299,
    image: "https://picsum.photos/seed/sonyxm5/600/600",
  },
  {
    id: 501,
    name: "Sony Alpha A7 IV",
    brand: "Sony",
    category: "Cameras",
    price: 2499,
    image: "https://picsum.photos/seed/sonya7iv/600/600",
  },
  {
    id: 502,
    name: "Canon EOS R8",
    brand: "Canon",
    category: "Cameras",
    price: 1499,
    image: "https://picsum.photos/seed/canoneosr8/600/600",
  },
]);

const [name,setName] = useState("")
const [brand,setBrand] = useState("")
const [category,setCategory] = useState("")
const [price,setPrice] = useState("")
const [image,setImage] = useState("")

const [show,setShow] = useState(false)


 const handleDelete = (a)=> {
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
    setProductList ([...productList,newProduct])
  setName("")
  setBrand("")
  setPrice("")
  setImage("")
  setCategory("")

  setShow(false)

}

const [filter,setFilter] = useState("") //this is category



// console.log(numbers,"nummm")

const categories = [...new  Set(productList.map(item => item.category))];

const filteredProducts =   filter==="" ? productList :     productList.filter ((item,index)=> (
            item.category === filter
))

console.log(filteredProducts)
console.log(categories,"cattt")

    return (
        <>

       
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
          {filteredProducts.map((item,index)=> (
           <ProductCard handleDelete={handleDelete} key={index}  item = {item}  />
        ))}
      </div>
        </>
    )
}


export default ProductPage