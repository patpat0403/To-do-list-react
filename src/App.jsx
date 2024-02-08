import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'; //imported to generate unique ids
import "./styles.css"
import { NewTodoForm } from "./NewToDoForm";
import { Todolist } from "./todolist";


export default function App(){ 
  
   
  const [toDOs, setToDos]=useState(()=>{
    
const localvalue=localStorage.getItem("ITEM")

 if(localvalue==null) //check local storage for instance of items 
  return []  // return empty list

 else
   return JSON.parse(localvalue) // use stored data as items for todolist

}) // state for ToDo list

  useEffect(()=>{

   localStorage.setItem("ITEM",JSON.stringify(toDOs))
   
  }, [toDOs]) //executes function each time there is a change in todos


  function addtodo(title)
  {
    setToDos((currentToDos) =>{return [...currentToDos,{id:uuidv4(),title,completed:false}] //adds new item to the list
  }

    )
  }  
  function toggleTodo(id, completed)
  {
    
    setToDos(currentToDos => {
      return currentToDos.map(todo=>{
        //check each element if it is the same id as the one being checked
        if(todo.id === id)
        {  
          return {...todo,completed} //return todolis with updated attribute
        
        }
          

        return todo

      })
    })
  }

  function deleteTodo(id)
  {
    setToDos(currentToDos=>{
      return currentToDos.filter(todo => todo.id !== id) //return filtered array , todo is an element in currentToDOs. Checks each element and then returns an array excluding the element that is matched 
    })
  }
  return( <> <NewTodoForm passfunc={addtodo}/>
<h1 className="header">ToDo List</h1>
  <Todolist toDOs={toDOs} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
</>)

}
