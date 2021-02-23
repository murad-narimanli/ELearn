import React, {useRef} from 'react';
import Slider from "react-slick";
import Images from "../../assets/img/Images/Images";
function SliderComponent(props) {
    const sliders = useRef();
    const settings = {
        dots: false,
        infinite: true,
        cssEase: 'linear',
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
    };
    return (
        <div className={'mt-3'}>
            <div className="slider-container">
                <Slider
                    className='mainslider'
                    ref={slider => (sliders.current = slider)}
                    {...settings}
                >
                    <div>
                        <img src={Images.Fullbg} alt=""/>
                    </div>
                    <div>
                        <img src={Images.Fullbg} alt=""/>
                    </div>
                    <div>
                        <img src={Images.Fullbg} alt=""/>
                    </div>
                </Slider>
            </div>
        </div>
    );
}


export default SliderComponent;
