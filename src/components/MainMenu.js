import './MainMenu.css'



const MainMenu = ({clickHandler, type}) => {

    return (
        <div className="mainContainer">
            <div onClick={clickHandler}  className="mainItem mainOne">{type + ' 1'}</div>
            <div onClick={clickHandler}  className="mainItem mainTwo">{type + ' 2'}</div>
            <div onClick={clickHandler}  className="mainItem mainThree">{type + ' 3'}</div>
        </div>
    )
};


export default MainMenu;