import React , { useState} from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import CardModal from '../components/layouts/CardModal';
import { ProfileCard } from '../components/layouts/ProfileCard';

import '../scss/style.scss'

import avt from '../assets/images/avatar/character1.png'
import img1 from '../assets/images/avatar/character1.png'
import imgCollection1 from '../assets/images/avatar/avt-18.jpg'
import img2 from '../assets/images/avatar/character2.png'
import imgCollection2 from '../assets/images/avatar/avt-18.jpg'
import img3 from '../assets/images/avatar/character3.png'
import imgCollection3 from '../assets/images/avatar/avt-18.jpg'
import img4 from '../assets/images/avatar/character4.png'
import imgCollection4 from '../assets/images/avatar/avt-18.jpg'
import img5 from '../assets/images/avatar/character1.png'
import imgCollection5 from '../assets/images/avatar/avt-18.jpg'
import img6 from '../assets/images/avatar/character2.png'
import imgCollection6 from '../assets/images/avatar/avt-18.jpg'
import img7 from '../assets/images/avatar/character3.png'
import img8 from '../assets/images/avatar/character4.png'
import etherium_icon from '../assets/images/icon/etherium_icon.png'
import check_icon from '../assets/images/icon/check_icon.png' 

const Profile = () => {
    const [menuTab] = useState(
        [
            {
                class: 'active',
                name: 'Collection'
            },
            {
                class: '',
                name: 'Created'
            },
            {
                class: '',
                name: 'Activity'
            },
            {
                class: '',
                name: 'Favorited'
            },
            {
                class: '',
                name: 'More'
            },
        ]
    )
    const [panelTab] = useState(
        [
            {
                id: 1,
                dataContent: [
                    {
                        img: img1,
                        title: "Bored Ape Yacht Club",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection1,
                        nameCollection: "Creative Art 3D",
                    },
                    {
                        img: img2,
                        title: "CryptoPunks",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection2,
                        nameCollection: "Creative Art 3D",
                    },
                    {
                        img: img3,
                        title: "Doodles",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection3,
                        nameCollection: "Creative Art 3D",
                    },
                    {
                        img: img4,
                        title: "Moonbirds",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection4,
                        nameCollection: "Creative Art 3D",
                    },
                    {
                        img: img5,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection5,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img6,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection6,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img7,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img8,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img1,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection1,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img2,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection2,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img3,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection3,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img4,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection4,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img5,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection5,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img6,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection6,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img7,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img8,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        nameCollection: "Creative Art 3D"
                    },
                ]
            },
            {
                id: 2,
                dataContent: [
                    {
                        id: 2,
                        img: img2,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection2,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 3,
                        img: img3,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection3,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 4,
                        img: img4,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection4,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 5,
                        img: img5,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection5,
                        nameCollection: "Creative Art 3D"
                    },
                ]
            },
            {
                id: 3,
                dataContent: [
                    {
                        id: 1,
                        img: img1,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection1,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 3,
                        img: img3,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection3,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 4,
                        img: img4,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection4,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 5,
                        img: img5,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection5,
                        nameCollection: "Creative Art 3D"
                    },
                ]
            },
            {
                id: 4,
                dataContent: [
                    {
                        id: 1,
                        img: img1,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",

                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection1,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 2,
                        img: img2,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection2,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 3,
                        img: img3,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection3,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 5,
                        img: img5,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection5,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 7,
                        img: img7,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        nameCollection: "Creative Art 3D"
                    },
                ]
            },
            {
                id: 5,
                dataContent: [
                    {
                        id: 2,
                        img: img2,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection2,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 3,
                        img: img3,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection3,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 4,
                        img: img4,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection4,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 6,
                        img: img5,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection6,
                        nameCollection: "Creative Art 3D"
                    },
                ]
            },
        ]
    )

    const [visible , setVisible] = useState(8);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }

    const [modalShow, setModalShow] = useState(false);

    return (
        <div className='authors-2'>
            <Header />
            <section className="flat-title-page inner profile-inner">
                <div className="overlay"></div>                   
            </section>
            <section className="tf-section authors">
                <div className="themesflat-container">
                    <div className="flat-tabs tab-authors">
                        <div className="author-profile flex">
                            <div className="feature-profile v-feature">
                                <img src={avt} alt="Axies" className="avatar" />
                            </div>
                            <div className="infor-profile">
                                <h2 className="title">Extrasoho</h2>
                                <div className='title-info flex'>
                                    <h5>@extrasoho</h5>
                                    <span>JOINED MAY 2022</span>
                                </div>
                                <p className="content profile-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                                <div className='info-panel flex'>
                                    <div className='voomio-mta voomio-m-r-1'><h6>Following</h6><h5>12</h5></div>
                                    <div className='voomio-mta voomio-m-r-1'><h6>Followers</h6><h5>1.2m</h5></div>
                                    <IconButton color="primary" aria-label="Twitter" component="label" size="large">
                                        <TwitterIcon fontSize="inherit"/>
                                    </IconButton>
                                    <IconButton color="primary" aria-label="Instagram" component="label" size="large">
                                        <InstagramIcon fontSize="inherit"/>
                                    </IconButton>
                                </div>
                            </div>
                            <div className="widget-social style-3">
                                <div className="btn-profile"><Link to="/login" className="sc-button style-1 follow profile-btn profile-out v-desktop-btn">0x007..373xys..</Link></div>
                                <div className="btn-profile"><Link to="/login" className="sc-button style-1 follow profile-btn profile-fill v-desktop-btn"> + Follow</Link></div>
                                <ul>
                                    <li><Link to="#"><i className="fas fa-envelope"></i></Link></li>
                                    <li><Link to="#"><i className="fas fa-ellipsis-v"></i></Link></li>
                                    <li className='v-mobile-btn'><Link to="#"><i className="fas fa-plus"></i></Link></li>
                                    <li className='v-mobile-btn'><Link to="#"><i className="fas fa-info v-mobile-btn"></i></Link></li>
                                </ul>    
                            </div>
                        </div>
                    </div>
                </div>
                <Tabs>
                    <TabList>
                        {
                            menuTab.map((item,index) => (
                                <Tab key={index}>{item.name}</Tab>
                            ))
                        }
                    </TabList>
                    <div className="themesflat-container content-tab">
                        <div className="content-inner">
                            <div className="row">
                            {
                                panelTab.map((item, index) => (

                                    (index != 2)?(<TabPanel key={index}>
                                        <div className="col-md-12 wrap-inner load-more voomio-pb-5 voomio-flex"> 
                                            <div className="flex">
                                                <IconButton color="primary" component="label" size="large">
                                                    <TuneIcon fontSize='inherit'/>
                                                </IconButton>
                                                <div className="input-group flex-nowrap profile-search">
            
                                                    <input type="text" class="form-control" placeholder="Search by name or attribute" aria-label="Username" aria-describedby="addon-wrapping"/>
                                                    <SearchIcon className='profile-search-icon'/>
                                                </div>
                                            </div>
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
                                            </div>
                                        </div>
                                        {
                                            item.dataContent.slice(0,visible).map((data,index) => (
                                                <div key={index} className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <ProfileCard 
                                                        mainimg={data.img} 
                                                        title={data.title} 
                                                        checkicon={check_icon} 
                                                        etheriumicon={etherium_icon} 
                                                        price={data.price}
                                                    />
                                                </div>
                                            ))
                                        }
                                        {
                                            visible < item.dataContent.length && 
                                            <div className="col-md-12 wrap-inner load-more text-center voomio-pb-5"> 
                                                <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                                            </div>
                                        }
                                        {
                                            index == 1 &&
                                            <div className="col-md-12 wrap-inner load-more text-center voomio-pb-5"> 
                                                <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>+ Create New</span></Link>
                                            </div>
                                        }
                                    </TabPanel>):(
                                        <TabPanel key={index}>
                                        {
                                            <div>Activity</div>
                                        }
                                    </TabPanel>
                                    )
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </Tabs>
            </section>
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Footer />
        </div>
    );
}

export default Profile;
