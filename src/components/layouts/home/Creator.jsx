import React , { useState , Fragment } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Countdown from "react-countdown";
import CardModal from '../CardModal';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

const Creator = props => {
    const data = props.data;

    const [modalShow, setModalShow] = useState(false);

    return (
        <Fragment>
            <section className="tf-section live-auctions">
                <div className="themesflat-container ">
                    <div className="row">
                        <div className="col-md-12 voomio-title">
                            <div className="">
                                <h2 className="tf-title">Top Creators</h2>
                                <div className="heading-line"></div>
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
                                                                <div className="sc-card-product voomio-pd-none">
                                                                    <div className="card-media voomio-creator-card">
                                                                        <Link to="/item-details-01"><img className='voomio-radius-1' src={item.img} alt="axies" /></Link>
                                                                        <div className='featured-countdown voomio-bottom-20'>
                                                                            Gordon Gonner
                                                                        </div>
                                                                        <div className="featured-countdown">
                                                                            @gordongonner
                                                                        </div>
                                                                    </div>
                                                                    <div className="meta-info voomio-pl-1">
                                                                        <div className="author">
                                                                            <div className="info">
                                                                                <h6>12</h6>
                                                                                <span>Following</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="author">
                                                                            <div className="info">
                                                                                <h6>12.m</h6>
                                                                                <span>Followers</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="author">
                                                                            <div className="info">
                                                                                <h6>12</h6>
                                                                                <span>Collections</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <button className="sc-button fl-button pri-3 no-bg creator-btn"><span>+ Follow</span></button>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <button className="sc-button fl-button pri-3 no-bg creator-btn"><span>0x007..373xys..</span></button>
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

Creator.propTypes = {
    data: PropTypes.array.isRequired,
}


export default Creator;
