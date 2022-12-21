 import './App.css';
 import MainMenu from './components/MainMenu';
 import { useState } from 'react';
 import SectionOne from './components/SectionOne';
 import SectionTwo from './components/SectionTwo';
 import SectionThree from './components/SectionThree';
import useMenu from './hooks/use-menu';

function App() {
  const [sectionStatus, setSectionStatus, clickHandler] = useMenu();
   

  const clickHandlerTwo = (e) => {
    document.title = e.target.innerText; 
    clickHandler(e);
  }


  return (
    <div className="App">
      <MainMenu clickHandler = {clickHandlerTwo} />
      {sectionStatus.firstStatus && <SectionOne />}
      {sectionStatus.secondStatus && <SectionTwo />}
      {sectionStatus.thirdStatus && <SectionThree />}
    </div>
  );
}

export default App;
