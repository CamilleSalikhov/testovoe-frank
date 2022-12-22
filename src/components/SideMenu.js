import './SideMenu.css'



const SideMenu = ({menuColor, clickHandler}) => {


    return (
         
        <div className="sideMenu" style = {{'backgroundColor' : `${menuColor}`}}>
            <div onClick={clickHandler} className='sideMenuItem mainOne'>Подменю 1</div>
            <div onClick={clickHandler} className='sideMenuItem mainTwo'>Подменю 2</div>
            <div onClick={clickHandler} className='sideMenuItem mainThree'>Подменю 3</div>
        </div>
         
    )
}

export default SideMenu;