import React , { useState , Fragment } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Rating from '@mui/material/Rating';

import CardModal from '../CardModal';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

const ManageSlide = props => {
    const data = props.data;
    const title = props.title;

    return (
        <Fragment>
            <div className="row mt-5">
                <div className="w-100 d-flex justify-content-start">
                    <h5>{title}</h5>
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
                            1600: {
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
                                                        <div className="sc-card-product collection-card voomio-pb-1">
                                                            <div className="card-media voomio-mb-0">
                                                                <Link to="/aggregator"><img src={item.img} alt="axies" /></Link>
                                                            </div>
                                                            <div className="card-title voomio-pl-1 voomio-mb-0 voomio-just-left">
                                                                <h5>{item.title}</h5>
                                                            </div>
                                                            <div className="meta-info voomio-pl-1">
                                                                <Rating name="size-small" defaultValue={item.rate} size="small" />
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
        </Fragment>
    );
}

ManageSlide.propTypes = {
    data: PropTypes.array.isRequired,
}

export default ManageSlide;
