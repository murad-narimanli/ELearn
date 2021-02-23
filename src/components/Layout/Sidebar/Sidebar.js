import React from 'react';
import MenuList from "../../Elements/MenuList";
import Logo from "../../Elements/Logo";
import BottomMenu from "../../Elements/BottomMenu";
import {toggleMenu} from "../../../redux/actions";
import {connect} from 'react-redux'
function Sidebar(props) {
    const {toggleMenu , web} = props;
    return (
        <>
            <div className={`sidebar animated fadeInLeft ${( !web && props.toggleReducer ) && 'show' }`}>
                <div className="position-relative">
                    <Logo/>
                    <MenuList web={web} toggleMenu={toggleMenu}/>
                    {web && <BottomMenu/>}
                </div>
            </div>
            {( !web && props.toggleReducer )? <div onClick={()=>{toggleMenu()}} className="overlay"></div>: ''}
        </>
    );
}

const mapStateToProps = ({toggleReducer}) => {
    return {toggleReducer}
}
export default connect(mapStateToProps , {toggleMenu})(Sidebar);
