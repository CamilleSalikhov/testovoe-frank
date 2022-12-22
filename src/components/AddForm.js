import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './AddForm.css';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../store/actions/addTodo';



const AddForm = () => {

    const dispatch = useDispatch();
    const [textValue, setTextValue] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(
            {
                text: textValue,
                id: uuidv4()
            }
        ))

    };

    const handleChange = (e) => {
        setTextValue(e.target.value)
    }



    return (
        <div className='addFormContainer'>
            <form onSubmit={handleSubmit}>
                <div className="formItems">
                <textarea onChange={handleChange} value={textValue} rows="10" cols="15"></textarea>
                <button type="sumbit">Добавить</button>
                </div>
            </form>
        </div>
    )
}


export default AddForm;