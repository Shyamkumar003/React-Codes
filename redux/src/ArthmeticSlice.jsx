import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Number1:0,
    Number2:0,
    result :0
}

export const ArthmeticSlice = createSlice({
 name : 'Arthemetic',
 initialState,
 reducers : {
     add : (state,action)=>{
      // alert('add')
       let {Number1,Number2} = action.payload;    //destructring
       state.Number1 = Number1  //action.payload.Number1
       state.Number2 = Number2 //action.payload.Number2
       state.result = Number1+Number2;
       console.log(state.Number1)
       console.log(state.result)
     }
 }
})

export const {add} = ArthmeticSlice.actions;

export default ArthmeticSlice.reducer
