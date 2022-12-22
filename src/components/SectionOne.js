import './SectionOne.css';
import { useDispatch } from 'react-redux';
import { changeMenu } from '../store/actions/changeMenu';


const SectionOne = () => {

    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(changeMenu(e.target.dataset.color))
        console.log(e.target.dataset.color)
    }


    return (
        <div className="sectionOne">
            <div className='buttonContainer'>
            <button onClick={handleClick} data-color='red' type='button'>Красный</button>
            <button onClick={handleClick} data-color='green' type='button'>Зеленый</button>
            <button onClick={handleClick} data-color='blue'>Синий</button>
            </div>

            <textarea rows="14" cols="15"></textarea>
             
        </div>
    )


}

export default SectionOne;