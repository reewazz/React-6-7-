import { useState } from "react"

function Toogles (){
    const  [show,setShow] = useState(true)
    const [dark,setDark] = useState(true)
    const [red,setRed] = useState(true)

    const [color,setColor] = useState ("black")

    const [myName,setMyName] = useState("Riwaj")

    const [num,setNum] = useState(5)

    // console.log( `the show value is ${show}`)
    // !true = false
    // !false = true
   
    console.log(dark)

    return (
        <>
        <div style={{ backgroundColor : dark ? "black" : "white" , color: dark ? "white" : "purple", textAlign: dark ? "center" : "right" }} className="">

            <div>
               
                {show? 
                 <h1 className="text-3xl text-red-400 font-bold">Message is Showing</h1>  : <h1>Message is hidden</h1>
                 }
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab repellat et id, est, deserunt ullam modi enim vitae dicta necessitatibus ipsam facilis tenetur corporis aperiam repudiandae fugiat minus quia. Voluptates rem maiores quisquam suscipit alias voluptatum modi officiis, reprehenderit recusandae distinctio fuga deleniti! Animi officia perspiciatis doloribus delectus, odio in maxime aut, autem porro laudantium deserunt dolorem impedit cum qui ullam nobis? Ducimus, error.</p>
                <button onClick={()=> setShow(!show)} className="border border-gray-400 px-8 py-4">
                {show ? "hide" : "show"}

                 

                </button>
<div>
     <input type= {show ? "text" : "password"} className="border border-gray-400" /> 

  
</div>
            </div>

           
        </div>
        <button onClick={()=>setDark(!dark)} className="border border-gray-400">
            {dark ? "Light" : "Dark"}
        </button>

        <div className="flex justify-center">
            <div>
                <div style={{backgroundColor: color }} className="h-20 w-20 rounded-full">
                </div>
                {/* <button onClick={()=>setRed(!red)}>
                    {red ? "green" : "red"}
                </button> */}
                <button onClick={()=>setColor("red")}>red</button>
                <button onClick={()=>setColor("yellow")}>yellow</button>
                <button onClick={()=>setColor("green")}>green</button>
            </div>



        </div>
        <div className="flex justify-center py-10">
                <h1 className="text-red-400 font-semibold text-3xl"> {myName} </h1>
                <button onClick={()=>setMyName("Neupane")} className="border border-gray-400">Surname</button>
                <button onClick={()=>setMyName("Riwaj")} className="border border-gray-400">Name</button>
        </div>
        <h1>   {num}</h1>
        <button onClick={()=>setNum(num*2)}>double</button>
        <button onClick={()=>setNum(num/2)}>divide</button>

        </>
        
    )
}
export default Toogles