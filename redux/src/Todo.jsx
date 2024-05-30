import React from "react";
import { addEvent, deleteEvent ,toggle,edit} from "./Todoslice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Todo = () => {
  let [todoInput, setTodoInput] = useState("");

  let [isEditable, setEditable]=useState(false);

  let [todo,setTodo] = useState()

  const todoData = useSelector((state) => state.Todo);

  const dispatch3 = useDispatch();
 
  const handleEdit=(todo)=>{
       setTodoInput(todo.title);
       setTodo(todo);
       setEditable(true);
  }

  return (
    <div>
      <center>
        <br></br>
        <br></br>
        Add a Task :{" "}
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <br></br>
        <br></br>
        <button
          onClick={() => {
            if(!isEditable){
            dispatch3(addEvent(todoInput));
            setTodoInput("");
            }
            else{
              // setTodoInput({...todoData,title:todoInput})
              dispatch3(edit({todo,todoInput}))
              setEditable(false)
              setTodoInput("");
            }
          }}
        >
          Add
        </button>
        <br></br>
        <br></br>
        <div>
          {/* {JSON.stringify(todoData)} */}
          {todoData.todos.map((todo) => (
            <p key={todo.id}>
              {todo.title}&nbsp; &nbsp; 
              {todo.completed? 'Completed' : 'NotCompleted'}&nbsp;&nbsp; 
              <button onClick={()=> {dispatch3(deleteEvent(todo.id))}}> X </button> &nbsp; &nbsp; 
              <button onClick={()=> {dispatch3(toggle(todo))}} >Toggle</button> &nbsp; &nbsp; 
              <button onClick={()=>{(handleEdit(todo))}}> Edit </button>
            </p>
          ))}
          
        </div>
      </center>
    </div>
  );
};

export default Todo;
