 import './App.css';
 import MainMenu from './components/MainMenu';
 import { useState } from 'react';
 import SectionOne from './components/SectionOne';
 import SectionTwo from './components/SectionTwo';
 import SectionThree from './components/SectionThree';
import useMenu from './hooks/use-menu';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  const [sectionStatus, setSectionStatus, clickHandler] = useMenu();
   

  const clickHandlerTwo = (e) => {
    document.title = e.target.innerText; 
    clickHandler(e);
  }


  return (
    <div className="App">
      <Switch>
      <Route path = '/:operand'  >
      <MainMenu type = {'Раздел'} clickHandler = {clickHandlerTwo} />
      {sectionStatus.firstStatus && <SectionOne />}
      {sectionStatus.secondStatus && <SectionTwo />}
      {sectionStatus.thirdStatus && <SectionThree />}
      </Route>
      <Route path='/' exact>
        <Redirect to = '/0' />
      </Route>
       
      <Route path='*'>
        <div>
          Страница не найдена
        </div>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
