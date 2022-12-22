import { useSelector } from "react-redux";
import './SectionThree.css';
import SideMenu from "./SideMenu";
import SubMenuOne from "./SubMenuOne";
import SubMenuTwo from "./SubMenuTwo";
import SubMenuThree from "./SubMenuThree";
import useMenu from "../hooks/use-menu";

const SectionThree = () => {

    const menuColor = useSelector(state => state.sectionOne.menuColor)

    const [sectionStatus, setSectionStatus, clickHandler] = useMenu();

    return (
        <div className="sectionThreeContainer">
            <SideMenu clickHandler = {clickHandler} menuColor = {menuColor} />
            { sectionStatus.firstStatus && <SubMenuOne />}
            { sectionStatus.secondStatus && <SubMenuTwo />}
            { sectionStatus.thirdStatus && <SubMenuThree />}
        </div>
    )


}

export default SectionThree;