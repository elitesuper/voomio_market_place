import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Verified } from "@mui/icons-material";
import WindowIcon from '@mui/icons-material/Window';


import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

function MoreCollection(props){
  const data = props.data;

  return(
    <>
      <div className='w-100 mg-t-20'>
          <div className='chart-header flex mg-bt-10'>
              <WindowIcon className="detail-meta-icon" style={{fontSize:'20px'}}></WindowIcon>
              <h5>More From This Collection</h5>
          </div>
          <div className="row morecollection-data">
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
              scrollbar={{ el:'none',draggable: true }}
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
                                                  <div className="morecollection-card w-100 flex voomio-just-between">
                                                    <div className="morecollection-card-info">
                                                      <div className="flex">
                                                        <h4 className="mb-rem-1">{item.title}</h4>
                                                        <Verified className="verified-icon about-verified"/>
                                                      </div>
                                                      <h5 className="mb-rem-1">{item.itemid}</h5>
                                                      <p>{item.time}</p>
                                                    </div>
                                                    <div className="morecollection-card-info">
                                                      <h6 className="mb-rem-1">
                                                        Price
                                                      </h6>
                                                      <p>
                                                      <img src={item.etherium_icon} alt={item.etherium_icon}></img>{item.wishlist}
                                                      </p>
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
    </>
  )
}

export default MoreCollection
