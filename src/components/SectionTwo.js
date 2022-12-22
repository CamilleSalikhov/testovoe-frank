import './MainMenu.css';
import BlockOne from './BlockOne';
import BlockTwo from './BlockTwo';
import BlockThree from './BlockThree';
import './SectionTwo.css';
import { useState } from 'react';
import useMenu from '../hooks/use-menu';
import MainMenu from './MainMenu';

const SectionTwo = () => {

const [sectionStatus, setSectionStatus, clickHandler] = useMenu();




    return (
        <div className='sectionTwoContainer'>
        <MainMenu type={'Блок'}  clickHandler={clickHandler} />
        { sectionStatus.firstStatus && <BlockOne />}
        { sectionStatus.secondStatus && <BlockTwo />}
        { sectionStatus.thirdStatus && <BlockThree />}
        </div>
    )


}

export default SectionTwo;