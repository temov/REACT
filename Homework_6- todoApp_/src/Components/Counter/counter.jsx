import { useSelector } from "react-redux";

export const Counter = ()=>{

const countTotal = useSelector((state) => state.counterReducer.totalCount);
  const checkedCount = useSelector((state) => state.counterReducer.checkedCount);

return(
    <div>
        <h1>Counter: Total_todos:{countTotal}, checked_todos:{checkedCount}</h1>
    </div>
   
        
   
)
}