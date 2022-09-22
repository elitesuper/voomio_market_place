import React from 'react';
import Footer from '../components/footer/Footer';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import {heroSliderData, secondSliderData} from '../assets/fake-data/data-slider-3';
import Trending from '../components/layouts/home-3/Trending';
import Slider from '../components/slider/Slider';
import Alpha from '../components/layouts/home-3/Alpha';
import PopularCollection from '../components/layouts/home-3/PopularCollection';
import popularCollectionData from '../assets/fake-data/data-popular-collection';
import popularAlphaData from '../assets/fake-data/data-alpha';
import HeaderStyle2 from '../components/header/HeaderStyle2';
import Ranking from './Ranking';
import Creator from '../components/layouts/home-3/Creator';
import Mintingslider from '../components/slider/Mintingslider';

const Home03 = () => {
    return (
        <div className='home-3'>
            <HeaderStyle2/>
            <Slider data={heroSliderData} />
            <Trending data={liveAuctionData} />
            <Creator data={liveAuctionData} />
            <PopularCollection data={popularCollectionData} />
            <Ranking></Ranking>
            <Mintingslider data={secondSliderData} />
            <Alpha data={popularAlphaData} ></Alpha>
            <Footer />
        </div>
    );
}

export default Home03;
