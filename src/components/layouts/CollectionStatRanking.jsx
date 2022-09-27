import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import img1 from '../../assets/images/box-item/img3rank.jpg'
import img2 from '../../assets/images/box-item/img4rank.jpg'
import img3 from '../../assets/images/box-item/img5rank.jpg'
import img4 from '../../assets/images/box-item/img6rank.jpg'
import img5 from '../../assets/images/box-item/img1rank.jpg'
import img6 from '../../assets/images/box-item/img2rank.jpg'
import imga1 from '../../assets/images/avatar/author_rank.jpg'

import etherium_icon from '../../assets/images/icon/etherium_icon.png'
import check_icon from '../../assets/images/icon/check_icon.png'

const CollectionStatRanking = (props) => {
    const data =
        [
            {
                img: img1,
                title: "Sample Collection 1",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                state:'1',
                assets: '23k'
            },
            {
                img: img2,
                title: "Sample Collection 2",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                state:'2',
                assets: '23k'

            },
            {
                img: img3,
                title: "Sample Collection 3",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                state:'2',
                assets: '23k'

            },
            {
                img: img4,
                title: "Sample Collection 4",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                state:'1',
                assets: '23k'
            },
            {
                img: img5,
                title: "Sample Collection 5",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                state:'2',
                assets: '23k'

            },
            {
                img: img6,
                title: "Sample Collection 6",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                state:'1',
                assets: '23k'

            },
            {
                img: img1,
                title: "Sample Collection 7",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                state:'2',
                assets: '23k'

            },
            {
                img: img2,
                title: "Sample Collection 8",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                state:'1',
                assets: '23k'

            },
            {
                img: img3,
                title: "Sample Collection 9",
                imgAuthor: imga1,
                nameAuthor: 'SalvadorDali',
                volume: '134',
                day: '+3456%',
                week: '-564%',
                price: '134',
                owners: '3.3k',
                state:'2',
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
                state:'1',
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
                state:'2',
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
                state:'2',
                assets: '23k'

            },
        ]
    const filtereddata = data.filter(item=>item.state === props.value)
    const [visible , setVisible] = useState(6);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }
    const [open, setOpen] = useState(true);

    const handleClick = () => () => {
        setOpen(!open)
    };

    return (
        <div>
            <section className="tf-rank mgt-15">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-ranking collection-stat-table">
                                        <div className="fl-item2">
                                            <div className="item flex voomio-just-center collection-stat-item item-header">
                                                <div className="infor-item flex column1">
                                                    <div className="content-collection pad-t-4 voomio-flex">
                                                        <h4>Collection</h4>
                                                    </div>
                                                </div>
                                                <div className="column voomio-text-center flex voomio-just-center" >
                                                    <h4>Volume</h4>
                                                    {open ? <ExpandLess className="detail-meta-icon mg-l-25" onClick={handleClick()} style={{fontSize:'20px'}}/> : <ExpandMore className="detail-meta-icon mg-l-25" onClick={handleClick()} style={{fontSize:'20px'}}/>}
                                                </div>
                                                <div className="column voomio-text-center">
                                                    <h4>24h</h4>
                                                </div>
                                                <div className="column voomio-text-center">
                                                    <h4>7d</h4>
                                                </div>
                                                <div className="column voomio-text-right flex voomio-just-center">
                                                    <h4>Floor Price</h4>
                                                </div>
                                            </div>
                                        </div>
                                {
                                    filtereddata.slice(0,visible).map((item,index) => (
                                        <div key={index} className="fl-item2 nfts-list-item">
                                            <div className="item flex voomio-just-center collection-stat-item">
                                                <div className="infor-item flex column1">
                                                    <div className="content-collection pad-t-4 voomio-flex">
                                                        <RadioButtonUncheckedIcon className="mg-r-8" style={{fontSize:'30px'}}/>
                                                        <h5 className="title voomio-mta"><Link to="/item-detail">{item.title}</Link></h5>
                                                        <img className='ranking-imgs voomio-mta' src={check_icon} alt={check_icon}></img>
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
            </section>
        </div>
    );
}

export default CollectionStatRanking;
