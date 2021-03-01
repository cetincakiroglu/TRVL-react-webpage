import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import AOS from 'aos';

function Navbar() {
    AOS.init();
    return (
    <div id="nav" className="container-fluid" data-aos="fade-down" data-aos-duration="2000">
        <nav className="navbar navbar-expand-lg">
            <div className="container py-3 px-2">
               <Link to='/' className="navbar-brand" id="logo">
                   TRVL <i class="fas fa-globe"></i>
               </Link>
               <ul className="navbar-nav">
                   <li className="nav-item pe-md-5">
                       <Link to='/'>About</Link>
                   </li>
                   <li className="nav-item pe-md-5">
                       <Link to='/'>Pricing</Link>
                   </li>
                   <li className="nav-item pe-md-5">
                       <Link to='/'>Services</Link>
                   </li>
                   <li className="nav-item pe-2">
                   <Button>Try For Free</Button>
                   </li>
               </ul>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;
