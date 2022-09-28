import React , { useState , Fragment } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import CardModal from '../CardModal';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

const Trending = props => {
    const data = props.data;

    const [modalShow, setModalShow] = useState(false);

    return (
        <Fragment>
            <section className="tf-section live-auctions">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12 voomio-title voomio-just-between">
                            <div className="">
                                <h2 className="tf-title">Trending</h2>
                                <div className="heading-line"></div>
                            </div>
                            <div className="seclect-box style3">
                                <div id="artworks" className="dropdown">
                                    <Link to="#" className="btn-selector nolink voomio-select">Past 24 hours</Link>
                                    <ul className='voomio-zindex'>
                                        <li><span>Past 24 hours</span></li>
                                        <li><span>Past 24 hours</span></li>
                                        <li><span>Past 24 hours</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={30}

                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    767: {
                                    slidesPerView: 2,
                                    },
                                    991: {
                                    slidesPerView: 3,
                                    },
                                    1300: {
                                        slidesPerView: 4,
                                    },
                                }}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ el:'none', draggable: true }}
                            >
                                    {
                                        data.slice(0,7).map((item,index) => (
                                            <SwiperSlide key={index}>
                                                <div className="swiper-container show-shadow carousel auctions">
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <div className="slider-item">
                                                                <div className="sc-card-product collection-card">
                                                                    <div className="card-media">
                                                                        <Link to="/profile"><img src={item.img} alt="axies" /></Link>
                                                                    </div>
                                                                    <div className="card-title voomio-pl-1 voomio-just-left">
                                                                        <h5>{item.title}</h5>
                                                                        <img src={item.checkicon} alt={item.etherium_icon}></img>
                                                                    </div>
                                                                    <div className="meta-info voomio-pl-1">
                                                                        <div className="author">
                                                                            <div className="info voomio-flex">
                                                                                <span>Vol</span>
                                                                                <h6><img src={item.etherium_icon} alt={item.etherium_icon}></img>{item.vol}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="info voomio-flex">
                                                                            <span>Floor</span>
                                                                            <h6><img src={item.etherium_icon} alt={item.etherium_icon}></img>{item.price}</h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
        </Fragment>
    );
}

Trending.propTypes = {
    data: PropTypes.array.isRequired,
}


export default Trending;
