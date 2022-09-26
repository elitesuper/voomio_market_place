import React, {useState} from 'react';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import { Link } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { BiSortAlt2 } from "react-icons/bi";



function ItemActivity(){

    const [data] = useState(
        [
            {
                title: 'Sale',
                nameAuthor: 'Bored Ape Yacht Club',
                volume: '0.078',
                volume_2:'14.3',
                quantity: '25 days',
                from: 'E98DE7',
                to: 'adn-vault',
                time: '21 seconds ago',
                assets: '23k',
                floor:'8% below'
            },
            {
                title: "Transfer",
                nameAuthor: 'CryptoPunks',
                volume: '0.074',
                volume_2:'---',
                quantity: '25 days',
                from: 'E98DE7',
                to: 'adn-vault',
                time: '21 seconds ago',
                assets: '23k',
                floor:'8% below'
            },
            {
                title: "Sale",
                nameAuthor: 'Doodles',
                volume: '0.089',
                volume_2:'7.289',
                quantity: '25 days',
                from: 'E98DE7',
                to: 'adn-vault',
                time: '21 seconds ago',
                assets: '23k',
                floor:'8% below'
            },
            {
                title: "Transfer",
                nameAuthor: 'Moonbirds',
                volume: '0.090',
                volume_2:'---',
                quantity: '25 days',
                from: 'E98DE7',
                to: 'adn-vault',
                time: '21 seconds ago',
                assets: '23k',
                floor:'8% below'
            },
        ]
    )

    const [visible , setVisible] = useState(6);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }

    const [open, setOpen] = useState(true);

    const handleClick = () => () => {
        setOpen(!open)
    };
    
    return(<>
    <div className='w-100 mg-t-20'>
        <div className='chart-header flex mg-bt-10' onClick={handleClick()}>
            <BiSortAlt2 className="detail-meta-icon" style={{fontSize:'20px'}}></BiSortAlt2>
            <h5>Item Activity</h5>
            {open ? <ExpandLess className="detail-meta-icon" style={{fontSize:'20px'}}/> : <ExpandMore className="detail-meta-icon" style={{fontSize:'20px'}}/>}
        </div>
        <Collapse className="w-100" in={open} timeout="auto" unmountOnExit>
        <div className='chart-panel row detail-about-card voomio-just-center'>
            <div className="table-ranking">
                <div className="item flex itemcontext-header">
                    <div className="column1 text-left">
                        <h6>Event</h6>
                    </div>
                    <div className="column">
                        <h6>Price</h6>
                    </div>
                    <div className="column">
                    <h6>From</h6>
                    </div>
                    <div className="column">
                    <h6>To</h6>
                    </div>
                    <div className="column">
                    <h6>Date</h6>
                    </div>
                </div>
                {
                    data.slice(0,visible).map((item,index) => (
                        <div key={index} className="fl-item2">
                            <div className="item flex profile-list-item listing">
                                <div className="infor-item flex column1">
                                    <div className="content-collection voomio-mta">
                                        <div className='flex'>
                                            {(item.title=="Sale")?(
                                                <ShoppingCartOutlinedIcon className="detail-meta-icon" style={{fontSize:'15px'}}/>
                                            ):(
                                                <SyncAltIcon className="detail-meta-icon" style={{fontSize:'15px'}}/>
                                            )}
                                            <h6 className="title">{item.title}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className='profile-item-text'>
                                        <p>{item.volume_2}</p>
                                    </div>
                                </div>
                                <div className="column profile-item-text">
                                    <span className="spec-color-1">{item.from}</span>
                                </div>
                                <div className="column profile-item-text">
                                    <span className="spec-color-1">{item.to}</span>
                                </div>
                                <div className="column profile-item-text flex">
                                    <span className="spec-color-1 voomio-mta" >{item.time}</span>
                                    <OpenInNewOutlinedIcon className="detail-meta-icon spec-color-1 mg-l-8" style={{fontSize:'20px'}}/>
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
        </Collapse>
    </div>
    </>)
}

export default ItemActivity