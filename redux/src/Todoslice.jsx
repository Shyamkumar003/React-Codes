import { createSlice } from "@reduxjs/toolkit";

const initialState={
    // id:0,
    // task:""
    todos:[],
    index:0
}

export const TodoSlice = createSlice({
    name:'Todo',
    initialState,
    reducers : {
        addEvent : (state,action)=>{
                    
           let newTodo={
            completed:false,
            title: action.payload,
            id: state.index++
           }
           state.todos.push(newTodo);
        
        },
        deleteEvent : (state,action)=>{
            state.todos = state.todos.filter((t) =>t.id!= action.payload);
        },
        toggle : (state,action)=>{
            state.todos = state.todos.map((t) => {
                if(t.id === action.payload.id ){
                t.completed =!t.completed
                return t;
            }else
                return t;
            })
        },

        edit : (state,action)=>{

            console.log(action.payload.todo)
            console.log(action.payload.todoInput)


                state.todos= state.todos.map((todo) =>{
                    if(todo.id == action.payload.todo.id){
                        todo.title = action.payload.todoInput
                        return todo;
                    }
                    else return todo;
                })
                   
            }   
         }
    })

export const {addEvent,deleteEvent,toggle,edit} = TodoSlice.actions;

export default TodoSlice.reducer