import React from 'react';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import {heroSliderData, secondSliderData} from '../assets/fake-data/data-slider-3';
import Trending from '../components/layouts/home/Trending';
import Slider from '../components/slider/Slider';
import Alpha from '../components/layouts/home/Alpha';
import PopularCollection from '../components/layouts/home/PopularCollection';
import popularCollectionData from '../assets/fake-data/data-popular-collection';
import popularAlphaData from '../assets/fake-data/data-alpha';
import Ranking from '../components/layouts/home/Ranking';
import Creator from '../components/layouts/home/Creator';
import Mintingslider from '../components/slider/Mintingslider';

const Home = () => {
    return (
        <div className='home-3'>
            <Slider data={heroSliderData} />
            <Trending data={liveAuctionData} />
            <Creator data={liveAuctionData} />
            <PopularCollection data={popularCollectionData} />
            <Ranking></Ranking>
            <Mintingslider data={secondSliderData} />
            <Alpha data={popularAlphaData} ></Alpha>
        </div>
    );
}

export default Home;
