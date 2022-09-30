import React , { useState} from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import GridViewIcon from '@mui/icons-material/GridView';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CachedIcon from '@mui/icons-material/Cached';



import CardModal from '../components/layouts/CardModal';
import { ProfileCard } from '../components/layouts/ProfileCard';
import SideBar from '../components/layouts/profile/SideBar';


import '../scss/style.scss'

import profiledata from '../assets/fake-data/data-profile';

import avt from '../assets/images/avatar/character1.png'
import etherium_icon from '../assets/images/icon/etherium_icon.png'
import check_icon from '../assets/images/icon/check_icon.png'
import ItemContext from '../components/layouts/profile/ItemContext';

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
    const [panelTab] = useState(profiledata)

    const [visible , setVisible] = useState(8);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }

    const [modalShow, setModalShow] = useState(false);

    const [alignment, setAlignment] = React.useState(true);

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    const children = [
        <ToggleButton value={true} aria-label="left aligned">
            <GridViewIcon />
        </ToggleButton>,
        <ToggleButton value={false} aria-label="right aligned">
            <ViewCompactIcon />
        </ToggleButton>
    ];

    const control = {
        value: alignment,
        onChange: handleChange,
        exclusive: true,
    };

    return (
        <div className='authors-2'>
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
                <div className='tab-container'>
                    <TabList>
                        {
                            menuTab.map((item,index) => (
                                <Tab key={index}>{item.name}</Tab>
                            ))
                        }
                    </TabList>
                </div>
                    <div className="content-tab">
                        {
                            panelTab.map((item, index) => (
                                (index != 2)?(
                                <div className='themesflat-container'>
                                <div className='content-inner'>
                                    <div className='row'>
                                    <TabPanel key={index}>
                                    <div className="col-md-12 wrap-inner pad-t-8 load-more mt-3 voomio-flex voomio-just-between">
                                        <div className="flex">
                                            <IconButton color="primary" component="label" size="large">
                                                <TuneIcon fontSize='inherit'/>
                                            </IconButton>
                                            <div className="input-group flex-nowrap profile-search">
                                                <input type="text" className="form-control" placeholder="Search by name or attribute" aria-label="Username" aria-describedby="addon-wrapping"/>
                                                <SearchIcon className='profile-search-icon'/>
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <div className="seclect-box style3 voomio-pl-1 voomio-mta">
                                                <div id="artworks" className="dropdown">
                                                    <Link to="#" className="btn-selector nolink voomio-select">Past 24 hours</Link>
                                                    <ul className='voomio-zindex'>
                                                        <li><span>Past 24 hours</span></li>
                                                        <li><span>Past 24 hours</span></li>
                                                        <li><span>Past 24 hours</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='voomio-mta'>
                                            <ToggleButtonGroup size="large" {...control} aria-label="Align">
                                                {children}
                                            </ToggleButtonGroup>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 flex voomio-pb-2 mt-2">
                                      <CachedIcon className="mg-r-8"/> <h6>{item.dataContent.length} items</h6>
                                    </div>
                                    {
                                        (alignment)?
                                        item.dataContent.slice(0,visible).map((data,index) => (
                                            <div key={index} className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                <ProfileCard
                                                    mainimg={data.img}
                                                    title={data.title}
                                                    checkicon={check_icon}
                                                    etheriumicon={etherium_icon}
                                                    price={data.price}
                                                    type={alignment}
                                                />
                                            </div>
                                        )):(
                                            <div className='row voomio-5-col'>
                                            {item.dataContent.slice(0,visible).map((data,index) => (
                                                <div key={index} className="col">
                                                    <ProfileCard
                                                        mainimg={data.img}
                                                        title={data.title}
                                                        checkicon={check_icon}
                                                        etheriumicon={etherium_icon}
                                                        price={data.price}
                                                    />
                                                </div>
                                            ))}
                                            </div>
                                        )
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
                                </TabPanel>
                                </div>
                                </div>
                                </div>
                                ):(
                                <TabPanel key={index} className="voomio-just-center">
                                    {
                                        <div className="row w-100 activity-tab">
                                            <div className='col-xl-2 col-md-3 col-sm-12 v-sidebar'>
                                                <SideBar />
                                            </div>
                                            <div className='col-xl-10 col-md-9 col-sm-12'>
                                                <ItemContext checkicon={check_icon} etheriumicon={etherium_icon} />
                                            </div>
                                        </div>
                                    }
                                </TabPanel>
                                )
                            ))
                        }
                    </div>
                </Tabs>
            </section>
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default Profile;
