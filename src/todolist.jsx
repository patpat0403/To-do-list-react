import { TodoItem } from "./todoItem"

export function Todolist({toDOs,toggleTodo,deleteTodo}){

    return(<ul className="list"> 
    {toDOs.length===0 && "No todos"}
    {toDOs.map (todo=>{
        
      return (<TodoItem {...todo}key={todo.id}  toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>)
    })}  
  </ul>)
}