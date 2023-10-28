import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const CarouselGroupsComponent = () => {
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
            <div id="groups" className="contenido-img">
                <h2 className="my-4 text-center">Agrupaciones</h2>
            </div>
            <Slider {...settings}>
                <div>
                    <a href="#"><img
                        src="https://images.squarespace-cdn.com/content/v1/5c7ced5ac2ff614ea867b66e/1551719349266-8G9BCZMWEW34O91S6G1L/Skoll.png?format=500w"
                        alt="Image" className="img-fluid" /></a>
                    <h3 className="my-4 text-center"><a href="#">Skoll Centre for Social Entrepreneurship</a></h3>
                </div>
                <div>
                    <a href="#"><img
                        src="https://images.squarespace-cdn.com/content/v1/5c7ced5ac2ff614ea867b66e/1554943786570-7ZU7R6J6WBX5L1YJH9TS/wbcsd3.png?format=500w"
                        alt="Image" className="img-fluid" /></a>
                    <h3 className="my-4 text-center"><a href="#">World Business Council for Sustainable Development</a></h3>
                </div>
                <div>
                    <a href="#"><img
                        src="https://images.squarespace-cdn.com/content/v1/5c7ced5ac2ff614ea867b66e/1554943336850-EZM5W5M4SJWMV60K8DIE/Oxford-University-square-logo.png?format=500w"
                        alt="Image" className="img-fluid" /></a>
                    <h3 className="my-4 text-center"><a href="#">University of Oxford</a></h3>
                </div>
                <div>
                    <a href="#"><img
                        src="https://images.squarespace-cdn.com/content/v1/5c7ced5ac2ff614ea867b66e/1564691878797-POULKCY0VJI4P5F0IY9K/ck.jpg?format=500w"
                        alt="Image" className="img-fluid" /></a>
                    <h3 className="my-4 text-center"><a href="#">Climate-KIC</a></h3>
                </div>
                <div>
                    <a href="#"><img
                        src="https://images.squarespace-cdn.com/content/v1/5c7ced5ac2ff614ea867b66e/1554943785944-NBKNH51F8VQCNZDFHKWT/TEDx-logo3.jpg?format=500w"
                        alt="Image" className="img-fluid" /></a>
                    <h3 className="my-4 text-center"><a href="#">TEDx</a></h3>
                </div>
                <div>
                    <a href="#"><img
                        src="https://images.squarespace-cdn.com/content/v1/5c7ced5ac2ff614ea867b66e/1554943634256-ZYV69AIJFVVUEJUC4WW3/LTD+copy.jpg?format=500w"
                        alt="Image" className="img-fluid" /></a>
                    <h3 className="my-4 text-center"><a href="#">Live the Dream</a></h3>
                </div>
                <div>
                    <a href="#"><img
                        src="https://images.squarespace-cdn.com/content/v1/5c7ced5ac2ff614ea867b66e/1554943800509-BMT2P7OD8DXCZBSG2L7E/WEF_Logo.png?format=500w"
                        alt="Image" className="img-fluid" /></a>
                    <h3 className="my-4 text-center"><a href="#">World Economic Forum</a></h3>
                </div>
                <div>
                    <a href="#"><img
                        src="https://images.squarespace-cdn.com/content/v1/5c7ced5ac2ff614ea867b66e/1554946551916-B0GQ8W8JYYLR0V16JE7J/SBN.PNG?format=500w"
                        alt="Image" className="img-fluid" /></a>
                    <h3 className="my-4 text-center"><a href="#">Sustainable Business Network</a></h3>
                </div>
            </Slider>
        </div>
    )
}