import {createSlice} from '@reduxjs/toolkit';

 const  reducer=createSlice({
    name:'donner',
    initialState:{
        searchParams:[
            'example1',
            'example2',
            'example3'

        ] 
    },
    reducers:{
        addToSearchParams:(state,action)=>{
            state.searchParams=[action.payload];

        }
        
    }
});
export const {addToSearchParams}=reducer.actions;
export default reducer.reducer;