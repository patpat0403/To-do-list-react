import { useState } from "react"

export function NewTodoForm(props){

    props.passfunc
    const[newItem,setNewItem]= useState("") //state for input field


    function handleSubmit(e)
    {
     e.preventDefault() //prevents page from refreshing
 
     props.passfunc(newItem)
 
     setNewItem("") //reset input string 
   }


    return(<form className="new-item-form" onSubmit={handleSubmit}>
  
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value= {newItem} onChange= {e=> setNewItem(e.target.value)}type="text" id="item"/>  
    </div>
  <button className="btn">Add</button>
  </form> 
  )

}