import './SubMenuTwo.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const SubMenuTwo = () => {

    const operandTwo = parseInt(useParams().operand, 10);
    

    const [operand, setOperand] = useState(0);
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        setOperand(parseFloat(e.target.value) );
    };

    const plusHandler = (e) => {
        setResult(operand + operandTwo);
    };

    const minusHandler = (e) => {
        setResult(operand - operandTwo);
    };

    const multiplyHandler = (e) => {
        setResult(operand * operandTwo);
    };

    const divideHandler = (e) => {
        setResult(operand / operandTwo);
    };


    return (
        <div className='subTwo'>
             Подменю 2
            <input onChange={handleChange} value={operand} type="number" />
            <div>{'= ' + result}</div>
             
             
            <button onClick = {plusHandler} type="button">+</button>
            <button onClick = {minusHandler} type="button">-</button>
            <button onClick = {multiplyHandler} type="button">*</button>
            <button onClick = {divideHandler} type="button">/</button>
        </div>
    )


};

export default SubMenuTwo;