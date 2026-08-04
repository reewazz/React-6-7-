import { useState } from "react";

function TodoList2() {
//   const [todoList, setTodoList] = useState(["Task 1", "Create Todo App"]);





const [todoList,setTodoList] = useState ([{
    id:1,
    task : "Task 1",
    completed : false
},
{       id:2,
    task : "Task 2",
    completed : false
},
{       id:3,
    task : "Task 3",
    completed : false
},
 ])




  const fruits = ["apple", "banana"];

  const newFruits = ["kiwi", ...fruits, true];

  console.log(fruits, "fruits");
  console.log(newFruits, "new fruits");

  const [inputValue, setInputValue] = useState("");
  const [editingIndex,setEditingIndex] = useState(null)

  // const numbers  = [1,2,3,4]
  //  const doubled = numbers.map ((item,index)=> {
  //   return item*2
  //  })


  const addTodo = () => {

    if (inputValue.length===0) {
        alert ("Write some task")
        return
    }

 if (editingIndex!==null) {

      const newTodo = todoList.map((item,index)=>{
        if (index===editingIndex) {
// item.task = inputValue;
// return item;

return {...item,task:inputValue}   
        }
        else {
          return item
        }
      })
    
      setTodoList (newTodo)
      setEditingIndex(null)
    setInputValue("")
   return
    }


   const newTask = {
    id : Date.now(),
    task : inputValue,
    
    completed: false
   }

 
   setTodoList([...todoList,newTask])
    setInputValue("")
    

  };

  const handleDelete = (a)=> {
   const newTodo = todoList.filter((item,index)=> {
        return item.id!==a
    })
    setTodoList(newTodo)
 
  }


   


  const handleEdit = (item,index)=> {
setInputValue(item.task)
setEditingIndex(index)

  }


  const handleComplete = (idToComplete) => {
    const updatedTodo = todoList.map((item,index)=> {

      if (item.id === idToComplete) {
          return   {...item,completed: !item.completed}
      }
      else {
        return item
      }
    })
    
    setTodoList(updatedTodo)

  }


console.log(todoList);
  return (
    <div className="bg-blue-400 h-screen flex items-center justify-center">
      <div className="bg-white w-100 h-[400px] flex flex-col p-4 rounded-lg">
        <h1 className="font-semibold text-2xl text-center">Todolist 2 </h1>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter any Task"
          className="border border-gray-400 p-2 rounded-sm mb-4"
        />
        {todoList.map((item, index) => (
          <div key ={index} className="flex justify-between mb-2">
            <h3 style={{color:  item.completed ? "green" : "red" }}      >{item.task} </h3>

      
            <div className="flex gap-2">
                <button onClick={()=>handleComplete(item.id)} className="border border-gray-400">
            {item.completed ? "Undo" : "Done"}

                </button>
                <button onClick={()=>handleEdit(item,index)} className="border border-gray-400">Edit</button>
            <button onClick={()=>handleDelete(item.id)} className="border border-gray-400">Delete</button>
                </div>
          </div>
          
        ))}

        <button onClick={addTodo} className="border border-gray-400">
          {editingIndex!==null ? "Update todo" : "Add todo"}
        </button>
     
      </div>
    </div>
  );
}

export default TodoList2;
