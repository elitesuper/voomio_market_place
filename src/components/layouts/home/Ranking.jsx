import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/box-item/img3rank.jpg'
import img2 from '../../../assets/images/box-item/img4rank.jpg'
import img3 from '../../../assets/images/box-item/img5rank.jpg'
import img4 from '../../../assets/images/box-item/img6rank.jpg'
import img5 from '../../../assets/images/box-item/img1rank.jpg'
import img6 from '../../../assets/images/box-item/img2rank.jpg'
import imga1 from '../../../assets/images/avatar/author_rank.jpg'

import etherium_icon from '../../../assets/images/icon/etherium_icon.png'
import check_icon from '../../../assets/images/icon/check_icon.png'

const Ranking = () => {
    const [data] = useState(
        [
            {
                img: img1,
                title: "Sample Collection",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img2,
                title: "Sample Collection",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img3,
                title: "Sample Collection",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img4,
                title: "Sample Collection",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img5,
                title: "Sample Collection",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img6,
                title: "Sample Collection",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img1,
                title: "Sample Collection",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img2,
                title: "Sample Collection",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img3,
                title: "Sample Collection",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img4,
                title: "Sample Collection",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img5,
                title: "Sample Collection",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img6,
                title: "Sample Collection",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                assets: '23k'
            },
        ]
    )
    const [visible , setVisible] = useState(6);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }
    return (
        <div>
            <section className="tf-section tf-rank">
                <div className="container-fluid voomio-nfts">
                    <div className="row">
                        <div className="col-md-12 voomio-pd-t-4">
                            <div className="">
                                <h2 className="tf-title">Top NFTs</h2>
                                <div className="heading-line"></div>
                                <div>
                        </div>
                        <div className='col-md-12 voomio-flex voomio-just-center voomio-pb-3'>
                        <div>
                            <div className="seclect-box style3 voomio-pl-1 ">
                                <div id="artworks" className="dropdown">
                                    <Link to="#" className="btn-selector nolink voomio-select">Past 24 hours</Link>
                                    <ul className='voomio-zindex'>
                                        <li><span>Past 24 hours</span></li>
                                        <li><span>Past 24 hours</span></li>
                                        <li><span>Past 24 hours</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="seclect-box style3 voomio-pl-1 ">
                                <div id="artworks" className="dropdown">
                                    <Link to="#" className="btn-selector nolink voomio-select">All Categories</Link>
                                    <ul className='voomio-zindex'>
                                        <li><span>All Categories</span></li>
                                        <li><span>All Categories</span></li>
                                        <li><span>All Categories</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="seclect-box style3 voomio-pl-1">
                                <div id="artworks" className="dropdown">
                                    <Link to="#" className="btn-selector nolink voomio-select">All Chains</Link>
                                    <ul className='voomio-zindex'>
                                        <li><span>All Chains</span></li>
                                        <li><span>All Chains</span></li>
                                        <li><span>All Chains</span></li>
                                    </ul>
                                </div>
                            </div>
                                </div>
                        </div>
                    </div>
                        </div>
                        <div className="col-md-12">
                            <div className="table-ranking">
                                        <div className="fl-item2">
                                            <div className="item flex voomio-just-center">
                                                <div className="infor-item flex column1">
                                                    <div className="content-collection pad-t-4 voomio-flex">
                                                        <h3>Collection</h3>
                                                    </div>
                                                </div>
                                                <div className="column voomio-text-center flex voomio-just-center">
                                                    <h3>Volume</h3>
                                                </div>
                                                <div className="column voomio-text-center">
                                                    <h3>24h%</h3>
                                                </div>
                                                <div className="column voomio-text-center">
                                                    <h3>7d%</h3>
                                                </div>
                                                <div className="column voomio-text-right flex voomio-just-center">
                                                    <h3>Floor Price</h3>
                                                </div>
                                            </div>
                                        </div>
                                {
                                    data.slice(0,visible).map((item,index) => (
                                        <div key={index} className="fl-item2 nfts-list-item">
                                            <div className="item flex voomio-just-center">
                                                <div className="infor-item flex column1">
                                                    <div className="content-collection pad-t-4 voomio-flex">
                                                        <h5 className="title mb-15"><Link to="/item-detail">"{item.title}"</Link></h5>
                                                        <img className='ranking-imgs' src={check_icon} alt={check_icon}></img>
                                                    </div>
                                                </div>
                                                <div className="column voomio-text-center voomio-text-col1 flex voomio-just-center">
                                                <div className='nft-icon-margin-auto'><img className='rankingetherium-imgs' src={etherium_icon} alt={etherium_icon}></img></div>
                                                    <span>{item.volume}</span>
                                                </div>
                                                <div className="column voomio-text-center">
                                                    <span className='voomio-span-1 spec-color-4'>{item.day}</span>
                                                </div>
                                                <div className="column voomio-text-center">
                                                    <span className='voomio-span-2 spec-color-5' >{item.week}</span>
                                                </div>
                                                <div className="column voomio-text-center voomio-text-col1 flex voomio-just-center">
                                                    <div className='nft-icon-margin-auto'><img className='rankingetherium-imgs' src={etherium_icon} alt={etherium_icon}></img></div>
                                                    <span>{item.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                {
                                    visible < data.length &&
                                    <div className="col-md-12 wrap-inner load-more text-center voomio-mt-40 voomio-mb-40">
                                        <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Ranking;
