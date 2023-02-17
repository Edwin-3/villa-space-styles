import React, { useState } from 'react'
import './portfolio.scss'

/* For creating carousel */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'



function ResponsiveCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex)
    };

    const images = [
        '/assets/img01.jpg',
        '/assets/img02.jpg',
        '/assets/img03.jpg',
        '/assets/img01.jpg',
        '/assets/img02.jpg',
        '/assets/img03.jpg',
    ];





    return (
        <div className="carousel-wrapper">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index + 1}`} />
                ))}
            </Slider>
        </div>
    );
}


const Portfolio = () => {
    return (
        <div className='portfolio-section'>
            <div className='portfolio-heading'>
                <h5>Our Portfolio</h5>
                <h2>Check out our Work</h2>
            </div>
            <ResponsiveCarousel />
        </div>
    )
}

const CustomPrevArrow = props => {
    const { onClick } = props;
    return (
        <div className="custom-arrow prev-arrow" onClick={onClick}>
            <BsArrowLeft />
        </div>
    );
};

const CustomNextArrow = props => {
    const { onClick } = props;
    return (

        <div className="custom-arrow next-arrow" onClick={onClick}>
            <BsArrowRight />
        </div>

    );
}

export default Portfolio