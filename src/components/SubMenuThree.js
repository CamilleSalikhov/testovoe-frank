import { useSelector } from 'react-redux';
import './SubMenuThree.css';
import Table from './Table';

const SubMenuThree = () => {

    const textState = useSelector(state => state.sectionOne.text);
    const searchValue = useSelector(state => state.table.searchValue)

    return (
        <div className='subThree'>
            Подменю 3
            <p>{textState}</p>
            <Table searchValue={searchValue} />
        </div>
    )


};

export default SubMenuThree;