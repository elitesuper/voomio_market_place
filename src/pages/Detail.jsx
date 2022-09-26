import React from 'react';

import { DetailCard } from '../components/layouts/ProfileCard';
import DetailChart from '../components/layouts/detail/DetailChart';
import Widget1 from '../components/layouts/detail/Widget1';
import Traits from '../components/layouts/detail/Traits';
import DetailAbout from '../components/layouts/detail/DetailAbout';
import Widget2 from '../components/layouts/detail/Widget2';
import Listings from '../components/layouts/detail/Listings';
import Offers from '../components/layouts/detail/Offers';
import ItemActivity from '../components/layouts/detail/ItemActivity';
import MoreCollection from '../components/layouts/detail/MoreCollection';

import liveAuctionData from '../assets/fake-data/data-live-auction';
import img1 from '../assets/images/avatar/character1.png'
import etherium_icon from '../assets/images/icon/etherium_icon.png'
import check_icon from '../assets/images/icon/check_icon.png'

function Detail(){
    return(
        <div className='detail-page pad-t-24'>
            <div className="themesflat-container">
                <section className="tf-section">
                    <div className='row'>
                        <div className='col-sm-12 col-md-5 voomio-pl-1'>
                            <DetailCard
                                mainimg={img1}
                                title="Doodles"
                                cardid="#5543"
                                auth="AVDR3W_WC"
                                checkicon={check_icon}
                                etheriumicon={etherium_icon}
                                view="7.3k"
                                favor="46"
                            />
                            <Traits/>
                            <DetailAbout/>
                            <Widget2/>
                        </div>
                        <div className='col-sm-12 col-md-7 voomio-pl-1'>
                            <div className='col-sm-12 col-md-12'>
                                <DetailChart />
                            </div>
                            <div className='col-sm-12 col-md-12'>
                                <Widget1 />
                            </div>
                            <div className='col-sm-12 col-md-12'>
                                <Listings/>
                            </div>
                            <div className='col-sm-12 col-md-12'>
                                <Offers></Offers>
                            </div>
                        </div>
                        <div className='col-12'>
                            <ItemActivity/>
                        </div>
                        <div className='col-12'>
                            <MoreCollection data={liveAuctionData}/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Detail;
