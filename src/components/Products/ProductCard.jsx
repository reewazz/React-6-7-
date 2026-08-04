import { Link } from "react-router-dom"

function ProductCard ({item,handleDelete}) {

    return (
        <>
        <Link to= {`${item.name}?price=${item.price}&rating=${item.brand}`} className="group cursor-pointer bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-200 hover:border-red-400">
  
  {/* Product Image */}
  <div className="overflow-hidden">
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
    />
  </div>

  {/* Product Details */}
  <div className="p-4">
    <h1 className="text-lg font-semibold text-gray-800 truncate">
      {item.name}
    </h1>
    

    <p className="text-sm text-gray-500 mt-1">
      {item.brand}
    </p>
    <p className="text-sm text-gray-500 mt-1">
      {item.category}
    </p>

    <div className="flex items-center justify-between mt-4">
      <p className="text-xl font-bold text-red-500">
        ${item.price}
      </p>

      <button onClick={()=>handleDelete(item.id)} className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 hover:scale-105 active:scale-95 transition-all duration-300">
        Delete
      </button>
    </div>
  </div>
</Link>
        </>
    )
}

export default ProductCard