import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation, Scrollbar, A11y } from 'swiper';

const Alpha = props => {
    const data = props.data;
    return (
        <section className="tf-section popular-collection bg-home-3">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12 voomio-title">
                        <div className="">
                            <h2 className="tf-title style2">Alpha</h2>
                            <div className="heading-line"></div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="collection">
                        <Swiper
                            modules={[Navigation, Scrollbar, A11y]}
                            spaceBetween={30}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                  },
                                500:{
                                    slidesPerview: 2,
                                },
                                771:{
                                    slidesPerView: 3,
                                },
                                1000:{
                                    slidesPerview:4
                                },
                                1200: {
                                  slidesPerView: 6,
                                },
                              }}
                            navigation
                            scrollbar={{el:'none', draggable: true }}
                        >
                            {
                                data.map((item,index) => (
                                    <SwiperSlide key={index}>
                                        <PopularCollectionItem item={item} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
Alpha.propTypes = {
    data: PropTypes.array.isRequired,
}


const PopularCollectionItem = props => (
    <div className="swiper-container alpha-card show-shadow carousel4 button-arow-style">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="slider-item">
                    <div className="sc-card-collection collection-card card-color-trans">
                        <Link to="/authors-01">
                            <div className="media-images-box">
                                <img src={props.item.imgtop} alt="Axies" />
                            </div>
                        </Link>
                        <div className="card-bottom collection-card-bottom">
                            <div className="author">
                                <div className="content">
                                    <h4><Link to="/authors-01">{props.item.title}</Link></h4>
                                    <div className="infor">
                                    <h6>{props.item.name}</h6>
                                    <div>{props.item.period}</div>
                                    </div>
                                </div>
                            </div>
                            {/* <Link to="/login" className="wishlist-button public heart"><span className="number-like">{props.item.wishlist}</span></Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
// const PopularCollectionItem = props => (
//     <div className="swiper-container show-shadow carousel4 button-arow-style">
//         <div className="swiper-wrapper">
//             <div className="swiper-slide">
//                 <div className="slider-item">
//                     <div className="sc-card-collection">
//                         <Link to="/authors-01">
//                             <div className="media-images-box">
//                                 <img src={props.item.imgtop} alt="Axies" />
//                                 <div className="bottom-media">
//                                     <img src={props.item.imgright1} alt="Axies" />
//                                     <img src={props.item.imgright2} alt="Axies" />
//                                     <img src={props.item.imgright3} alt="Axies" />
//                                 </div>
//                             </div>
//                         </Link>
//                         <div className="card-bottom">
//                             <div className="author">
//                                 <div className="sc-author-box style-2">
//                                     <div className="author-avatar">
//                                         <img src={props.item.imgAuthor} alt="Axies" className="avatar" />
//                                         <div className="badge"><i className="ripple"></i></div>
//                                     </div>
//                                 </div>
//                                 <div className="content">
//                                     <h4><Link to="/authors-01">{props.item.title}</Link></h4>
//                                     <div className="infor">
//                                         <span>Created by</span>
//                                         <span className="name"><Link to="/authors-01">{props.item.name}</Link></span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <Link to="/login" className="wishlist-button public heart"><span className="number-like">{props.item.wishlist}</span></Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// )

export default Alpha;
