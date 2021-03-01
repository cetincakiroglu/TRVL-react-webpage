import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import Carousel from './Carousel';





const textContent = [
    {
      id:1,
        text:' Lorem ipsum dolor sit amet.'
    },
    {
        id:2,
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum delenit.'
    }
]

function HeroSection() {
    AOS.init();
    return (
      <>
      <Carousel />
        <div id="hero_container" className="container">
            <div className='row'>
                <div id="hero-text" className="col-12 mt-md-5 d-flex">
                    <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-around"  data-aos="fade-right" data-aos-duration="3000">
                        <div>
                            <h1 className="lh-sm mt-sm-5 mt-md-0">
                               {textContent[0].text}
                            </h1>
                            <div className="col-10 mt-4">
                                <p className="lh-lg">{textContent[1].text}</p>
                            </div>
                            <div className="col-md-6 col-sm-12 mt-4 d-flex justify-content-between">
                                <Button>Try For Free</Button>
                                <Link to='/'>
                                <Button id="link_btn">See Pricing</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 text-center d-sm-none d-md-block" data-aos="fade-left" data-aos-duration="3000">
                      <img src="https://picsum.photos/400/300" className="rounded" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HeroSection
