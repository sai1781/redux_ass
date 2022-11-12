import {createSlice} from '@reduxjs/toolkit'

const state = createSlice({
    name:"state",
    initialState:{
        value:true
    },
    reducers:{
    setValue:(initialstate,action) => {
        initialstate.value=action.payload
    }
}
})

export const{setValue} = state.actions
export default state.reducer;



// import {createSlice} from '@reduxjs/toolkit'

// const counter = createSlice({
//     name:"counter",
//     initialState:{
//         value:0,
//         input1:"",
//         input2:""
//     },
//     reducers: {
//         setValue:(initialState,action) =>{
//             initialState.value = action.payload
//         },
//         setValue1:(initialState,action) =>{
//             initialState.input1 = action.payload
//         },
//         setValue2:(initialState,action) =>{
//             initialState.input2 = action.payload
//         }
//     }
// })

// export const{setValue} = counter.actions
// export const{setValue1} = counter.actions
// export const{setValue2} = counter.actions
// export default counter.reducer;