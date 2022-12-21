import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";
import { useState } from "react";

 




const BlockTwo = () => {
    const todoState = useSelector(state => state.todos);

    
    
     
    
    
    const todos = todoState.map((e, index) => <TodoItem    key={uuidv4()} index={index} item={e} />)

     


    return(
        <>
         
        <div>
             
            block two
            {todos}
            <AddForm />
             

        </div>
        </>
        )


}

export default BlockTwo;