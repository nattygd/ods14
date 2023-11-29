import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const CarouselBibliotecaComponent = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="contenido-img">
                <h2 className="my-4 text-center">Imágenes</h2>
            </div>
            <Slider {...settings}>
                <div className="w-50">
                    <a href="images/img1.jpeg"><img src="images/img1.jpeg" alt="Image" className="img-fluid" /></a>
                    <h3><a href="images/img1.jpeg">Tortuga</a></h3>
                </div>
                <div className="w-50">
                    <a href="images/img2.jpeg"><img src="images/img2.jpeg" alt="Image" className="img-fluid" /></a>
                    <h3><a href="images/img2.jpeg">Día mundial de los océanos</a></h3>
                </div>
                <div className="w-50">
                    <a href="images/img3.jpeg"><img src="images/img3.jpeg" alt="Image" className="img-fluid" /></a>
                    <h3><a href="images/img3.jpeg">Vida submarina</a></h3>
                </div>
                <div className="w-50">
                    <a href="images/img4.jpg"><img src="images/img4.jpg" alt="Image" className="img-fluid" /></a>
                    <h3><a href="images/img4.jpg">ODS14</a></h3>
                </div>
            </Slider>
        </div>
    )
}
