import './MainMenu.css';
import BlockOne from './BlockOne';
import BlockTwo from './BlockTwo';
import BlockThree from './BlockThree';
import './SectionTwo.css';
import { useState } from 'react';
import useMenu from '../hooks/use-menu';

const SectionTwo = () => {

const [sectionStatus, setSectionStatus, clickHandler] = useMenu();




    return (
        <div className='sectionTwoContainer'>
        <div className="mainContainer">
            <div onClick={clickHandler}   className="mainItem mainOne">Блок 1</div>
            <div onClick={clickHandler}   className="mainItem mainTwo">Блок 2</div>
            <div onClick={clickHandler}    className="mainItem mainThree">Блок 3</div>
        </div>
        { sectionStatus.firstStatus && <BlockOne />}
        { sectionStatus.secondStatus && <BlockTwo />}
        { sectionStatus.thirdStatus && <BlockThree />}
        </div>
    )


}

export default SectionTwo;