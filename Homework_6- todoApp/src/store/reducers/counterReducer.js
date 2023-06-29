const initialState ={

    totalCount:0,
    checkedCount:0
}

export const counterReducer = (state = initialState,action)=>{

    switch (action.type) {
        case "TOTAL_COUNT":
            
            return {
                ...state,
                totalCount:state.totalCount+1
            }
        case "CHECKED_COUNT":
            
            return {
                ...state,
                checkedCountCount:state.checkedCount+1
            }
    
        default:
            return state;
           
    }


}