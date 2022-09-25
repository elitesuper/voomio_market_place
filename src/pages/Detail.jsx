import React from 'react';

import img1 from '../assets/images/avatar/character1.png'
import etherium_icon from '../assets/images/icon/etherium_icon.png'
import check_icon from '../assets/images/icon/check_icon.png' 
import { DetailCard } from '../components/layouts/ProfileCard';

function Detail(){
    return(
        <div className='detail-page pad-t-24'>
            <div className="themesflat-container">
                <section className="tf-section">
                    <div className='row'>
                        <div className='col-sm-12 col-md-5'>
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
                        </div>
                        <div className='col-sm-12 col-md-7'>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Detail;