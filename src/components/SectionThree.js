import { useSelector } from "react-redux";
import './SectionThree.css'


const SectionThree = () => {

    const menuColor = useSelector(state => state.menuColor.menuColor)


    return (
        <div className="sideMenu" style = {{'backgroundColor' : `${menuColor}`}}>
            section three
        </div>
    )


}

export default SectionThree;