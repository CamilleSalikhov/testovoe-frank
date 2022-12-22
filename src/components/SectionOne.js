import './SectionOne.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeMenu } from '../store/actions/changeMenu';
import { changeText } from '../store/actions/changeText';


const SectionOne = () => {

    const dispatch = useDispatch();
    const textState = useSelector(state => state.sectionOne.text)

    const handleClick = (e) => {
        dispatch(changeMenu(e.target.dataset.color));
    }


    const handleChange = (e) => {
        dispatch(changeText(e.target.value));
    }

    return (
        <div className="sectionOne">
            <div className='buttonContainer'>
            <button onClick={handleClick} data-color='red' type='button'>Красный</button>
            <button onClick={handleClick} data-color='green' type='button'>Зеленый</button>
            <button onClick={handleClick} data-color='blue'>Синий</button>
            </div>

            <textarea value={textState} onChange={handleChange} rows="14" cols="15"></textarea>
             
        </div>
    )


}

export default SectionOne;