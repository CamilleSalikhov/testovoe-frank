import './SubMenuOne.css';
import Table from './Table';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';


const SubMenuOne = () => {

    const todoState = useSelector(state => state.todos);
    const searchValue = useSelector(state => state.table.searchValue)
    
    
     
    
    
    const todos = todoState.map((e, index) => <TodoItem    key={uuidv4()} index={index} item={e} />)

     

    return (
        <>
        <div className="subOne">
            <div>
            Подменю 1 
            <Table searchValue={searchValue} />
            {todos}
            </div>  
        </div>
        </>
    )


};

export default SubMenuOne;