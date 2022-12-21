import { useState } from "react";


const useMenu = () => {
//document.title = e.target.innerText;
    const [sectionStatus, setSectionStatus] = useState({
        firstStatus:false,
        secondStatus:false,
        thirdStatus:false
      })
    
      const clickHandler = (e) => {
        
        if (e.target.classList.contains('mainOne')) {
          setSectionStatus((prevState) => ({
            firstStatus:!prevState.firstStatus,
            secondStatus:false,
            thirdStatus:false
          }))
        } else if (e.target.classList.contains('mainTwo')) {
          setSectionStatus((prevState) => ({
            firstStatus:false,
            secondStatus: !prevState.secondStatus,
            thirdStatus:false
          }))
        } else if (e.target.classList.contains('mainThree')) {
          setSectionStatus((prevState) => ({
            firstStatus:false,
            secondStatus: false,
            thirdStatus:!prevState.thirdStatus
          }))
        }
      }

      return [
        sectionStatus,
        setSectionStatus,
        clickHandler
      ]



}

export default useMenu;