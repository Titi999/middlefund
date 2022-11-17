import React from "react";
import logo from '../../assets/images/MiddlefundLogo.png';
import {website} from '../links'

const Logo = ({classN, wdth}) => {
    return(
        <div>
            <a href={website}><img className={classN} src={logo} alt="Logo" width={wdth}/></a>
        </div>
    );
}

export default Logo;