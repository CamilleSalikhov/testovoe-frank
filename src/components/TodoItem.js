import './MainMenu.css';
import './TodoItem.css';
import { deleteTodo } from '../store/actions/deleteTodo';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Modal from './Modal';
import UpdateForm from './UpdateForm';
import { changeTodo } from '../store/actions/changeTodo';




const TodoItem = ({item, index}) => {



    
    const [visible, setVisible] = useState(false);


    const handleUpdate = () => {
        setVisible((prevstate) => !prevstate)
    };


    const dispatch = useDispatch();


    const handleCheck = (e) => {

        dispatch(changeTodo( {
            text: item.text,
            id: item.id,
            done: !item.done       
        } ))
        
    }

    const deleteHandler = (e) => {
        dispatch(deleteTodo(index));



    }

    const backGround = item.done ? '#d7385e' : 'white';

    return ( <>{visible && <UpdateForm item ={item} handleUpdate = {handleUpdate} />} 
        <div className="todoContainer" style={{'backgroundColor' : `${backGround}`}}    >
                 <div className='textContainer'>
                 {item.text}
                </div>
                <div className='controls'>
                <input type="checkbox" onChange={handleCheck} defaultChecked={item.done} />
                <button onClick={deleteHandler} type='button'>Удалить</button>
                <button onClick={handleUpdate}  type='button'>Редактировать</button>
                    
                </div>
                 
                 
        </div>
        </>
    )
}

export default TodoItem;