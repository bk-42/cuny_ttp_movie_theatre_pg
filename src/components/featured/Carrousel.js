import React from 'react';
import React from 'react';
import Slider from "react-slick";

import slide-one from '../../resources/images/slide_one.jpg';
import slide-two from '../../resources/images/slide_two.jpg';
import slide-three from '../../resources/images/slide_three.jpg';


const Carrousel = () => {

    const settings = {
        dots: false;
        infinite: true;
        autoplay: true;
        speed: 900;
    }

    return (
        <div 
            className="carrousel_wrapper"
            style={{
                height:'${window.innerHeight}.px',
                overflow:'hidden'
            }}>
                <Slidebar {...settings}>
                    <div>
                        <div>    
                            <div 
                                className = "carrousel_image"
                                style={{
                                    background:`url(${slide_one})`,
                                    height:`${window.innerHeight}px`
                                }}>
                            </div>
                        </div>    
                        <div>    
                            <div 
                                className = "carrousel_image"
                                style={{
                                    background:`url(${slide_two})`,
                                    height:`${window.innerHeight}px`
                                }}>
                            </div>
                        </div>    
                        <div>    
                            <div 
                                className = "carrousel_image"
                                style={{
                                    background:`url(${slide_three})`,
                                    height:`${window.innerHeight}px`
                                }}>
                            </div>
                        </div>    
                    </div>
                </Slidebar>
            </div>
    );
};

export default Featured;