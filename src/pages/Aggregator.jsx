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
import CachedIcon from '@mui/icons-material/Cached';
import CloseIcon from '@mui/icons-material/Close';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import VerifiedIcon from '@mui/icons-material/Verified';


import CardModal from '../components/layouts/CardModal';
import { ProfileCard } from '../components/layouts/ProfileCard';
import ChatTrending from '../components/layouts/aggregator/ChatTrending';
import MoreOption from '../components/layouts/MoreOption';
import SideBar from '../components/layouts/profile/SideBar';

import '../scss/style.scss'

import avt from '../assets/images/avatar/character1.png'
import etherium_icon from '../assets/images/icon/etherium_icon.png'
import check_icon from '../assets/images/icon/check_icon.png'
import ItemContext from '../components/layouts/profile/ItemContext';
import profiledata from '../assets/fake-data/data-profile';

const Aggregator = () => {

    const [menuTab] = useState(
        [
            {
                class: 'active',
                name: 'Collection'
            },
            {
                class: '',
                name: 'Community'
            },
            {
                class: '',
                name: 'Activity'
            },
        ]
    )
    const [panelTab] = useState(profiledata)

    const [visible , setVisible] = useState(8);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }

    const [modalShow, setModalShow] = useState(false);
    const [options, setOptions] = useState(false);


    const [alignment, setAlignment] = React.useState(true);

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    const optionexpand = () => {
      setOptions(!options)
    }
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
                                <div className="flex">
                                    <h2 className="title">Mutant Ape Yatch Club</h2>
                                    <VerifiedIcon className="spec-color-1" sx={{fontSize:"20px"}}/>
                                </div>
                                <p className="content profile-content">
                                The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale.
                                </p>
                                <div className='detail-info flex'>
                                    <div className='voomio-mta voomio-m-r-2'><h6>Items</h6><h4>10.0K</h4></div>
                                    <div className='voomio-mta voomio-m-r-2'><h6>Owners</h6><h4>6.3K</h4></div>
                                    <div className='voomio-mta voomio-m-r-2 spec-color-1'><h6>Total</h6><h4><img src={etherium_icon}></img>433.3k</h4></div>
                                    <div className='voomio-mta voomio-m-r-2 spec-color-1'><h6>Floor</h6><h4><img src={etherium_icon}></img>87</h4></div>
                                    <div className='voomio-mta voomio-m-r-2 spec-color-1'><h6>Best Offer</h6><h4><img src={etherium_icon}></img>88</h4></div>

                                </div>
                            </div>
                            <div className="widget-social style-3 voomio-justend">
                                <ul>
                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-instagram-square"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-discord"></i></Link></li>
                                    <li><Link to="#"><i className="fas fa-ellipsis-v"></i></Link></li>
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
                                (index == 0)?(
                                <div className='aggregator-container mx-auto'>
                                <div className='content-inner'>
                                    <div className='row'>
                                    <TabPanel key={index}>
                                      <div className="col-md-12 wrap-inner pad-t-8 load-more voomio-pb-2 voomio-flex voomio-just-between">
                                          <div className="flex">
                                              <IconButton onClick={()=>optionexpand()} color="primary" component="label" size="large">
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
                                      <div className="col-md-12 flex voomio-pb-2 itemnumbers-filters">
                                        <CachedIcon className="voomio-mta mg-r-8"/> <h6 className="voomio-mta">{item.dataContent.length} items</h6>
                                        <div className="flex">
                                          <h5 className="spec-color-1 mg-l-8" > Filters: </h5>
                                          <div className='filter-tag voomio-mta flex'>
                                            <span className="my-auto">Sales</span>
                                            <CloseIcon className="mg-l-8" sx={{fontSize:'small'}}/>
                                          </div>
                                          <div className='filter-tag voomio-mta flex'>
                                            <span className="my-auto">Listings</span>
                                            <CloseIcon className="mg-l-8" sx={{fontSize:'small'}}/>
                                          </div>
                                          <div className='filter-tag voomio-mta flex'>
                                            <span className="my-auto">Offers</span>
                                            <CloseIcon className="mg-l-8" sx={{fontSize:'small'}}/>
                                          </div>
                                          <div className='filter-tag voomio-mta flex'>
                                            <span className="my-auto">Transfers</span>
                                            <CloseIcon className="mg-l-8" sx={{fontSize:'small'}}/>
                                          </div>
                                        </div>
                                      </div>
                                      {options&&(<div className="col-md-12"><MoreOption/></div>)}
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
                                                      // type={alignment}
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
                                </TabPanel>
                                </div>
                                </div>
                                </div>
                                ):(
                                  <>
                                <TabPanel className="chattabpanel" key={1}>
                                  <ChatTrending/>
                                </TabPanel>
                                <TabPanel key={2} className="voomio-just-center">
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
                                </>
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

export default Aggregator;
