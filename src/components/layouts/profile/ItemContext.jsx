import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/avatar/character1.png'
import img2 from '../../../assets/images/avatar/character2.png'
import img3 from '../../../assets/images/avatar/character3.png'
import img4 from '../../../assets/images/avatar/character4.png'
import imga1 from '../../../assets/images/avatar/author_rank.jpg'

const ItemContext = (props) => {
    const [data] = useState(
        [
            {
                img: img1,
                title: 'Bored Ape #21415',
                imgAuthor: imga1,
                nameAuthor: 'Bored Ape Yacht Club',
                volume: '0.078',
                volume_2:'$153163',
                quantity: '1',
                from: 'WillByers...',
                to: '---',
                time: '21 seconds ago',
                assets: '23k'
            },
            {
                img: img2,
                title: "CryptoPunks #45633",
                imgAuthor: imga1,
                nameAuthor: 'CryptoPunks',
                volume: '0.074',
                volume_2:'$153163',
                quantity: '1',
                from: 'WillByers...',
                to: '---',
                time: '21 seconds ago',
                assets: '23k'
            },
            {
                img: img3,
                title: "Doodles #69332",
                imgAuthor: imga1,
                nameAuthor: 'Doodles',
                volume: '0.089',
                volume_2:'$153163',
                quantity: '1',
                from: 'WillByers...',
                to: '---',
                time: '21 seconds ago',
                assets: '23k'
            },
            {
                img: img4,
                title: "Moonbirds #55511",
                imgAuthor: imga1,
                nameAuthor: 'Moonbirds',
                volume: '0.090',
                volume_2:'$153163',
                quantity: '1',
                from: 'WillByers...',
                to: '---',
                time: '21 seconds ago',
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
            <section className="tf-rank">
                <div className='container-fluid filter-view pd-t-20'>
                    <div className='flex'>
                        <h5 className="spec-color-1" > Filters : </h5>
                        <div className='filter-tag voomio-mta'><span>Sales</span></div>
                        <div className='filter-tag voomio-mta'><span>Listings</span></div>
                        <div className='filter-tag voomio-mta'><span>Offers</span></div>
                        <div className='filter-tag voomio-mta'><span>Transfers</span></div>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-ranking">
                                <div className="item flex itemcontext-header">
                                    <div className="column1 text-center">
                                        <h6>Item</h6>
                                    </div>
                                    <div className="column">
                                        <h6>Price</h6>
                                    </div>
                                    <div className="column text-center">
                                    <h6>Quantity</h6>
                                    </div>
                                    <div className="column">
                                    <h6>From</h6>
                                    </div>
                                    <div className="column">
                                    <h6>To</h6>
                                    </div>
                                    <div className="column">
                                    <h6>Time</h6>
                                    </div>
                                </div>
                                {
                                    data.slice(0,visible).map((item,index) => (
                                        <div key={index} className="fl-item2">
                                            <div className="item flex profile-list-item">
                                                <div className="infor-item flex column1">
                                                    <div className="media">
                                                        <img className='voomio-mta' src={item.img} alt="Axies" />
                                                    </div>
                                                    <div className="content-collection voomio-mta">
                                                        <div className="author flex">
                                                                <div className="content">
                                                                    <p className='mb-0'>{item.nameAuthor}</p>
                                                                </div>
                                                                <img className='voomio-mta' src={props.checkicon} alt={"check_icon"}></img>
                                                        </div>
                                                        <h6 className="title"><Link to="/item-detail">{item.title}</Link></h6>
                                                    </div>
                                                </div>
                                                <div className="column">
                                                    <div className='profile-item-text'>
                                                        <div className='flex'>
                                                            <img className='voomio-mta' src={props.etheriumicon}></img>
                                                            <span className="spec-color-1">{item.volume}</span>
                                                        </div>
                                                        <p className='spec-color-3'>{item.volume_2}</p>
                                                    </div>
                                                </div>
                                                <div className="column profile-item-text text-center">
                                                    <span>{item.quantity}</span>
                                                </div>
                                                <div className="column profile-item-text">
                                                    <span className="spec-color-1" >{item.from}</span>
                                                </div>
                                                <div className="column profile-item-text">
                                                    <span>{item.to}</span>
                                                </div>
                                                <div className="column profile-item-text">
                                                    <span>{item.time}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                {
                                    visible < data.length && 
                                    <div className="col-md-12 wrap-inner load-more text-center"> 
                                        <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    );
}

export default ItemContext;
