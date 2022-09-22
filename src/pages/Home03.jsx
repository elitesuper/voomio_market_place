import React from 'react';
import Footer from '../components/footer/Footer';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import {heroSliderData, secondSliderData} from '../assets/fake-data/data-slider-3';
import Create from '../components/layouts/home-2/Create';
import Trending from '../components/layouts/home-3/Trending';
import TopSeller from '../components/layouts/home-3/TopSeller';
import Slider from '../components/slider/Slider';
import topSellerData from '../assets/fake-data/data-top-seller';
import TodayPicks from '../components/layouts/home-3/TodayPicks';
import Alpha from '../components/layouts/home-3/Alpha';
import todayPickData from '../assets/fake-data/data-today-pick';
import PopularCollection from '../components/layouts/home-3/PopularCollection';
import popularCollectionData from '../assets/fake-data/data-popular-collection';
import popularAlphaData from '../assets/fake-data/data-alpha';
import Header from '../components/header/Header';
import HeaderStyle2 from '../components/header/HeaderStyle2';
import Ranking from './Ranking';
import Creator from '../components/layouts/home-3/Creator';
import Mintingslider from '../components/slider/Mintingslider';

const Home03 = () => {
    return (
        <div className='home-3'>
            {/* <Header /> */}
            <HeaderStyle2/>
            <Slider data={heroSliderData} />
            {/* <Create /> */}
            <Trending data={liveAuctionData} />
            <Creator data={liveAuctionData} />
            {/* <TopSeller data={topSellerData} /> */}
            {/* <TodayPicks data={todayPickData} /> */}
            <PopularCollection data={popularCollectionData} />
            <Ranking></Ranking>
            <Mintingslider data={secondSliderData} />
            <Alpha data={popularAlphaData} ></Alpha>
            <Footer />
        </div>
    );
}

export default Home03;
