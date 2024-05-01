import React, { Fragment } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {



    return (
        <Fragment>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button id='btnslide' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button id='btnslide' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button id='btnslide' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button id='btnslide' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner" id='crslitemActive'>
                    <div className="carousel-item active" id='caruselitem_1'>
                        <div  className="d-block w-100 " id='caluselitem_child'> 
                        <h1>START YOUR OWN BEAUTIFUL BLOG WIDTH YOUR IMPRESSIONS</h1>
                        </div>
                    </div>
                    <div className="carousel-item" id='crslitem'>
                        <div  className="d-block w-100 "> 
                        <h1 >WHAT COULD POSSIBLY GO WRONG</h1>
                        </div>
                    </div>
                    <div className="carousel-item" id='crslitem'>
                        <div  className="d-block w-100 "> 
                        <h1 >THE SIMPLEST WAYS TO CHOOSE THE BEST COFFEE</h1>
                        </div>
                    </div>
                    <div className="carousel-item" id='crslitem'>
                        <div  className="d-block w-100 " id='crslitem_child'> 
                        <h1 >WHAT DOES YOUR PET REALLY THINK ABOUT YOU</h1>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </Fragment>
    )

    //კარუსელი

    /* const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 3,
       slidesToScroll: 1,
       responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
     };
   
     return (
       <div>
         <h2>React Slick Carousel Example</h2>
         <Slider {...settings}>
           <div>
             <img src="image1.jpg" alt="Slide 1" />
           </div>
           <div>
             <img src="image2.jpg" alt="Slide 2" />
           </div>
           <div>
             <img src="image3.jpg" alt="Slide 3" />
           </div>
           { Add more slides here } 
         </Slider>
       </div>
     ); */
};

export default Carousel;
