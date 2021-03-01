import React from 'react'
import {Link} from 'react-router-dom';

import AOS from 'aos';

const FOOTERDATA = {
    copyright: '© 2020 TRVL Co. All Rights Reserved.',

    navItems: ['About', 'Contact', 'Terms of Service', 'Privacy Policy'],

    svgContent:[
    
    <i class="fab fa-twitter"></i>,
    <i class="fab fa-facebook-f"></i>,
    <i class="fab fa-linkedin"></i>

    ],

    svgIcons: function(){
        return this.svgContent.map(item=><a href="#">{item}</a>);
    
    },
    navList: function(){
        return this.navItems.map(item=><a className="text-decoration-none" href="#">{item}</a>);
    }
}

function Footer() {
AOS.init();
    return (
        <>
        <div class="container-fluid mt-5 pt-5 my-5">
            <div className="row mt-md-5">
                <div className="col-md-6 mx-auto text-center" data-aos="zoom-in" data-aos-duration="2000">
                <Link to ="/">
                <h3>JOIN US</h3>
                    <h3>ENJOY THE PRIVILAGE</h3>
                </Link>
                    
                </div>
            </div>
          
        </div>
        <div className="container-fluid mt-5 border-top">
            <footer className="pt-4 my-3">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-3 text-sm-center col-sm-12 my-sm-3">
                        <span>{FOOTERDATA.copyright}</span>
                    </div>
                    <div className="col-md-3 col-sm-12 my-sm-3 d-flex justify-content-between">
                        {FOOTERDATA.navList()}
                    </div>
                    <div className="col-md-3 col-sm-12 mt-sm-3 d-flex justify-content-between">
                        {FOOTERDATA.svgIcons()}
                    </div>
                </div>
            </footer>
        </div>
        </>
    )
}

export default Footer;
