import './UpdateForm.css';
import { useDispatch } from 'react-redux';
import { changeTodo } from '../store/actions/changeTodo';
import { useState } from 'react';


const UpdateForm = ({handleUpdate, item}) => {

    const [textValue, setTextValue] = useState('')

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(item.id)

        dispatch(changeTodo(
            {
                id:item.id,
                text: textValue,
                done:item.done
            }
        ))
    }


    const handleChange = (e) => {
        setTextValue(e.target.value)
    }


    return (
        <div className='updateFormContainer'>
            updateform
            <form onSubmit={handleSubmit}>
                <div className='updateContainer'>
                <button onClick={handleUpdate} className='xButton' type="button">X</button>
                <textarea value={textValue} onChange={handleChange} rows="14" cols="14"></textarea>
                <button  type="submit">Изменить</button>
                 
                </div>
                 
            </form>
        </div>
    )
}


export default UpdateForm;