import './BlockOne.css'
import Table from './Table';
import { useDispatch, useSelector } from 'react-redux';
import { selectOption } from '../store/actions/selectOption';
import { useState } from 'react';
import { setSearchValue } from '../store/actions/setSearchValue';

 


const BlockOne = () => {

 const searchValue = useSelector(state => state.table.searchValue);

const dispatch = useDispatch();

const onSelectChange = (e) => {
    dispatch(selectOption(e.target.value));
    
};

const onSearchChange = (e) => {
    dispatch(setSearchValue(e.target.value)) ;
}




    return(
        <div className="blockOneContainer">
            block one
            <select defaultValue={'default'} onChange={onSelectChange} name='typeList'  >
                    <option disabled   value = 'default'> Выбрать опцию  </option>
                    <option value='descend'>По убыванию</option>
                    <option value='ascend'>По возрастанию</option>
                     
            </select>
             
            <input onChange={onSearchChange} placeholder='Найти по описанию'  type="search" name="search" value={searchValue} />
            <Table searchValue={searchValue} />

        </div>
    )


}

export default BlockOne;