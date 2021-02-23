import React from 'react';
import Images from "../../assets/img/Images/Images";

function Logo(props) {
    return (
        <div className='logo'>
            <img src={Images.logo} alt=""/>
        </div>
    );
}

export default Logo;
