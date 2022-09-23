import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import shape1 from '../../assets/images/icon/Vector.png'
import shape2 from '../../assets/images/icon/Vector1.png'
import shape3 from '../../assets/images/icon/Vector2.png'
import imgbg from '../../assets/images/backgroup-secsion/img_bg_page_title.jpg'


const Mintingslider = props => {
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

Mintingslider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}
const SliderItem = props => (
    <div className="flat-title-page mintingslide" style={{backgroundImage: `url(${imgbg})`}}>
        <div className="overlay"></div>
        <div className="swiper-container mainslider home minting-home">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="slider-item voomio-theme">
                        {(props.item.voomiotheme === true)&&(
                            <div className='image-anims'>
                                <img className='image-anim l-1' src={props.item.limage1}></img>
                                <img className='image-anim l-2' src={props.item.limage2}></img>
                                <img className='image-anim l-3' src={props.item.limage3}></img>
                                <img className='image-anim l-4' src={props.item.limage4}></img>
                                <img className='image-anim r-1' src={props.item.rimage1}></img>
                                <img className='image-anim r-2' src={props.item.rimage2}></img>
                                <img className='image-anim r-3' src={props.item.rimage3}></img>
                                <img className='image-anim r-4' src={props.item.rimage4}></img>
                            </div>
                        )}
                        <div className="themesflat-container ">
                            <div className="wrap-heading flat-slider flex">
                                {/* {(props.item.)} */}
                                <div className="content minting-content">
                                    <h2 className="heading voomio-text-center">{props.item.title_1}</h2>	
                                    <h1 className="heading mb-style"><span className="tf-text s1">{props.item.title_2}</span>                                          
                                    </h1>
                                    <h2 className="heading voomio-text-center">{props.item.title_3}</h2>
                                    <div className='col-md-12 flex voomio-mt-20'>
                                        <div className='col-md-3 col-sm-3 voomio-ma'>
                                            <div className='flex'><img className='voomio-ma' src={shape1}></img></div>
                                        </div>
                                        <div className='col-md-8 col-sm-9'>
                                            <h5 className="voomio-font-1 voomio-text-col2">{props.item.subtitle_1}</h5>
                                            <p className="sub-heading minting-subhead voomio-mt-10 voomio-text-col2">{props.item.description_1}</p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 flex voomio-mt-20'>
                                        <div className='col-md-3 col-sm-3 voomio-ma'>
                                            <div className='flex'><img className='voomio-ma' src={shape2}></img></div>
                                        </div>
                                        <div className='col-md-8 col-sm-9 '>
                                            <h5 className="voomio-font-1 voomio-text-col2">{props.item.subtitle_2}</h5>
                                            <p className="sub-heading minting-subhead voomio-mt-10 voomio-text-col2">{props.item.description_2}</p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 flex voomio-mt-20'>
                                        <div className='col-md-3 col-sm-3 voomio-ma'>
                                            <div className='flex'><img className='voomio-ma' src={shape3}></img></div>
                                        </div>
                                        <div className='col-md-8 col-sm-9'>
                                            <h5 className="voomio-font-1 voomio-text-col2">{props.item.subtitle_3}</h5>
                                            <p className="sub-heading minting-subhead voomio-mt-10 voomio-text-col2">{props.item.description_3}</p>
                                        </div>
                                    </div>

                                    <div className="flat-bt-slider flex style2 voomio-mt-40">
                                        <Link to="/explore-01" className="sc-button header-slider style style-1 rocket fl-button pri-1"><span>Explore
                                        </span></Link>
                                        <Link to="/create-item" className="sc-button header-slider style style-1 note fl-button pri-1"><span>Create
                                        </span></Link>
                                    </div>
                                </div>
                            </div>   
                        </div>					                           
                    </div>
                </div>
            </div>
        </div>        
    </div>
    
)
export default Mintingslider;
