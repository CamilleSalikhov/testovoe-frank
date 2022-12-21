import './MainMenu.css'



const MainMenu = ({clickHandler}) => {

    return (
        <div className="mainContainer">
            <div onClick={clickHandler}  className="mainItem mainOne">Раздел 1</div>
            <div onClick={clickHandler}  className="mainItem mainTwo">Раздел 2</div>
            <div onClick={clickHandler}  className="mainItem mainThree">Раздел 3</div>
        </div>
    )
};


export default MainMenu;