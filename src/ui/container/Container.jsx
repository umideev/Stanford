import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FcNext } from 'react-icons/fc'
import { IoIosArrowBack } from 'react-icons/io'

class Container extends React.Component {
    render() {

        return (
            <div className="main">
                <CarouselProvider className='Carusel'
                    naturalSlideWidth={100}
                    interval={2000}
                    isPlaying={true}
                    infinite={true}
                    naturalSlideHeight={15}
                    totalSlides={3}
                >
                    <Slider className='slider'>
                        <Slide className='slide' index={0}>

                            <div className="name">
                                <h2>Transport & Logistics Solution</h2>
                            </div>

                            <div className="place">
                                <h2>#1 Place For Your <span>Logistics</span> Sulotion</h2>

                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi est a reprehenderit aliquid obcaecati. Earum cumque sed eligendi possimus, praesentium quasi, odit dolor vel nam, quibusdam voluptas. Sequi, nam perferendis.</p>
                            </div>

                            <div className="btn-button">
                                <button>Read More</button>
                                <button>Free Quote</button>

                            </div>

                        </Slide>
                        <Slide className='slide' index={1}>
                            <div className="name">
                                <h2>Transport & Logistics Solution</h2>
                            </div>

                            <div className="place">
                                <h2>#1 Place For Your <span>Logistics</span> Sulotion</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi est a reprehenderit aliquid obcaecati. Earum cumque sed eligendi possimus, praesentium quasi, odit dolor vel nam, quibusdam voluptas. Sequi, nam perferendis.</p>

                            </div>

                            
                            <div className="btn-button">
                                <button>Read More</button>
                                <button>Free Quote</button>
                            </div>
                        </Slide>
                        <Slide className='slide' index={2}>
                            <div className="name">
                                <h2>Transport & Logistics Solution</h2>
                            </div>

                            <div className="place">
                                <h2>#1 Place For Your <br/> <span>Logistics</span> Sulotion</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi est a reprehenderit aliquid obcaecati. Earum cumque sed eligendi possimus, praesentium quasi, odit dolor vel nam, quibusdam voluptas. Sequi, nam perferendis.</p>

                                <div className="btn-button">
                                <button>Read More</button>
                                <button>Free Quote</button>
                            </div>
                            
                            </div>

                          
                            
                        </Slide>
                    </Slider>

                    <div className="button">
                        <ButtonBack className='btn'><IoIosArrowBack /></ButtonBack>
                        <ButtonNext className='btn'><FcNext /></ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        );
    }

}
export default Container