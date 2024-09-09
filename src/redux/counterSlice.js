import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        counter:0
    },
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        reset(state){
            state.counter = 0
        },
        countWithNum(state,actions){
            state.counter += Number(actions.payload)
        }
    }
})

export default counterSlice.reducer
export const { increment,decrement,reset,countWithNum } = counterSlice.actions