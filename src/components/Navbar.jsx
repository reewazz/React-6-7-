import { Link, NavLink } from "react-router-dom"
import Footer from "./Footer"

function Navbar() {


    return (
        <>
      <div className="flex justify-between items-center px-20 py-4 bg-gray-400">

        <h1 className="text-2xl font-semibold">Logo</h1>
        <div className="flex gap-8 items-center">
            <NavLink to="/"  className={"px-4 py-2 rounded-lg"}>Home</NavLink>
        
           <NavLink to='products' className={"px-4 py-2 rounded-lg"}>Product</NavLink>
           <NavLink to='todo' className={"px-4 py-2 rounded-lg"}>Todo</NavLink>
        </div>

      </div>
        </>
    )
}

export default Navbar