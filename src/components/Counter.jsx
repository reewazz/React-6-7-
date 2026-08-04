import { useState } from "react"

function Counter (){
      const [text,setText] = useState("This is state example")
  
    const [count,setCount] = useState(0)

    //boolean - > true/false
    //object   {name: "somnething", age:15}
    //array   ["one","two",3,false ]
   
    // const show  = true
    
    const changeText = ()=> {
      setText("changed text")
      console.log(text,"after click")
    }

      const decrease = ()=> {
    setCount(count-1)
    }

    

    return (
        <>
        <h1 className="text-4xl text-red-950 text-center"> back to old {text} </h1>
<div className="flex justify-center">
  <button onClick={changeText} className="border border-gray-400 p-4 ">Change Text</button>

</div>

 <div className="flex justify-center py-10">
   <div className="flex gap-10">
    <button onClick={decrease} className="border border-gray-400 p-4">-</button>
<h1 className="text-4xl text-red-950 text-center"> {count}  </h1>
    <button onClick={()=> setCount(count+1)} className="border border-gray-400 p-4">+</button>
    <button onClick={()=> setCount(0)}  className="border border-gray-400 p-4">reset</button>


  </div>
 </div>

        </>
    )
}

export default Counter