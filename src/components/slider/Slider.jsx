import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import imgbg from '../../assets/images/backgroup-secsion/img_bg_page_title.jpg'


const Slider = props => {
    const data = props.data
    return (
        <div className="mainslider" >
            <Swiper
                modules={[Navigation,  Scrollbar, A11y ]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    scrollbar={{ draggable: true }}
                >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index} className={item.class}>
                            <SliderItem item={item} />
                        </SwiperSlide>
                        
                    ))
                }
        </Swiper>
        </div>
    );
}

Slider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}
const SliderItem = props => (
    <div className="flat-title-page" style={{backgroundImage: `url(${imgbg})`}}>
        <div className="overlay"></div>
        <div className="swiper-container mainslider home">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="slider-item voomio-theme">
                        {(props.item.voomiotheme === true)&&(
                            <div className='image-anims'>
                                <img className='image-anim left-1' src={props.item.leftimage1}></img>
                                <img className='image-anim left-2' src={props.item.leftimage2}></img>
                                <img className='image-anim right-1' src={props.item.rightimage1}></img>
                                <img className='image-anim right-2' src={props.item.rightimage2}></img>
                            </div>
                        )}
                        <div className="themesflat-container ">
                            <div className="wrap-heading flat-slider flex">
                                {/* {(props.item.)} */}
                                <div className="content main-home">
                                    <h2 className="heading">{props.item.title_1}</h2>	
                                    <h1 className="heading mb-style"><span className="tf-text s1 voomio-text-col2">{props.item.title_2}</span>                                          
                                    </h1>
                                    <h1 className="heading">{props.item.title_3}</h1>
                                    <p className="sub-heading voomio-text-col2">{props.item.description}
                                    </p>
                                    <div className="flat-bt-slider flex style2">
                                        <Link to="/explore-01" className="sc-button header-slider style style-1 rocket fl-button pri-1"><span>Explore
                                        </span></Link>
                                        <Link to="/create-item" className="sc-button header-slider style style-1 note fl-button pri-1"><span>Create
                                        </span></Link>
                                    </div>
                                </div>
                                <div className="image">
                                    <img className="img-bg" src={props.item.imgbg} alt="axies" />
                                    <img src={props.item.img} alt="axies" />
                                </div>
                            </div>   
                        </div>					                           
                    </div>
                </div>
            </div>
        </div>        
    </div>
    
)
export default Slider;
