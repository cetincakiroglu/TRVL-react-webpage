import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';



export const Button = ({
    children
}) => {
    return(
        <Link to ='/' className="text-decoration-none">
            <button className="btn blue rounded-pill nav-link">
                {children}
            </button>
        </Link>
    )
}