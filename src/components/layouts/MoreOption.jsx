import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import moreoptiondata from "../../assets/fake-data/data-moreoption";

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/scrollbar/scrollbar.scss';

const data = moreoptiondata;
export const SearchCard = (props) => {

    const name = props.name
    const data = props.filters;

    const [checked, setChecked] = useState([0]);

    const handleToggle = (value) => () => {
     const currentIndex = checked.indexOf(value);
     const newChecked = [...checked];

     if (currentIndex === -1) {
       newChecked.push(value);
     } else {
       newChecked.splice(currentIndex, 1);
     }

     setChecked(newChecked);
    };

  return(
    <div className="swiper-container alpha-card show-shadow carousel4 button-arow-style">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="slider-item">
                  <Card className="search-card" sx={{ minWidth: 200,boxShadow:'none'}}>
                     <CardContent>
                       <List className="mx-auto" sx={{ width: '100%', maxWidth: 220, bgcolor: 'background.paper' }}>
                       <TextField id="outlined-search" className="search-input" label={`Search ${name}`} type="search" />
                      {data.map((item) => {
                        const labelId = `checkbox-list-label-${item.id}`;

                        return (
                            <ListItem
                              key={item.id}
                              disablePadding
                            >
                              <ListItemButton className="searchcard-checkbox" role={undefined} onClick={handleToggle(item.id)} dense>
                                <ListItemIcon className="searchcard-checkicon">
                                  <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(item.id) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                  />
                                </ListItemIcon>
                                <ListItemText id={labelId}>
                                  {item.name}<span className="spec-color-3">{item.value}</span>
                                </ListItemText>
                              </ListItemButton>
                            </ListItem>
                          );
                        })}
                        </List>
                     </CardContent>
                 </Card>
              </div>
          </div>
        </div>
      </div>
  )
}
function MoreOption(){
  return(
    <>
    <div className="row">
      <div className="col-md-12 flex more-option">
          <div className="seclect-box voomio-pl-1 voomio-mta">
              <div id="artworks" className="dropdown">
                  <Link to="#" className="btn-selector nolink voomio-select">Marketplace</Link>
                  <ul className='voomio-zindex'>
                      <li><span>Past 24 hours</span></li>
                      <li><span>Past 24 hours</span></li>
                      <li><span>Past 24 hours</span></li>
                  </ul>
              </div>
          </div>
          <div className="flex mg-l-8 mg-r-8">
            <h5 className="voomio-mta spec-color-1">Price</h5>
            <div className="input-group min-max-btn mg-l-8 mg-r-8">
              <input type="text" className="form-control" placeholder="Min" aria-label="min" aria-describedby="basic-addon1"/>
            </div>
            <h5 className="voomio-mta spec-color-1">to</h5>
            <div className="input-group min-max-btn mg-l-8 mg-r-8">
              <input type="text" className="form-control" placeholder="Max" aria-label="max" aria-describedby="basic-addon1"/>
            </div>
          </div>
          <div className="seclect-box voomio-pl-1 voomio-mta">
              <div id="artworks" className="dropdown">
                  <Link to="#" className="btn-selector nolink voomio-select">Rarity</Link>
                  <ul className='voomio-zindex'>
                      <li><span>Past 24 hours</span></li>
                      <li><span>Past 24 hours</span></li>
                      <li><span>Past 24 hours</span></li>
                  </ul>
              </div>
          </div>
      </div>
      <div className="col-md-12 mt-3">
        <div className="flex">
          <h5 className="spec-color-1 mg-l-8" > Traits: </h5>
          <div className='filter-tag traits-tag voomio-mta flex'>
            <span className="my-auto spec-color-1">Traits</span>
            <CloseIcon className="mg-l-8 spec-color-1" sx={{fontSize:'small'}}/>
          </div>
          <div className='filter-tag traits-tag voomio-mta flex'>
            <span className="my-auto spec-color-1">Traits</span>
            <CloseIcon className="mg-l-8 spec-color-1" sx={{fontSize:'small'}}/>
          </div>
          <div className='filter-tag traits-tag voomio-mta flex'>
            <span className="my-auto spec-color-1">Traits</span>
            <CloseIcon className="mg-l-8 spec-color-1" sx={{fontSize:'small'}}/>
          </div>
          <div className='filter-tag traits-tag voomio-mta flex'>
            <span className="my-auto spec-color-1">Traits</span>
            <CloseIcon className="mg-l-8 spec-color-1" sx={{fontSize:'small'}}/>
          </div>
        </div>
      </div>
      <div className="col-md-12 mt-5 mb-5">
      <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={30}
          breakpoints={{
              0: {
                  slidesPerView: 1,
                },
              500:{
                  slidesPerView: 2,
              },
              800:{
                  slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
              1600: {
                slidesPerView: 5,
              },
              1900: {
                slidesPerView: 6,
              },
            }}
          navigation
          scrollbar={{ draggable: true }}
      >
          {
              data.map((item,index) => (
                  <SwiperSlide key={index}>
                      <SearchCard name={item.keyname} filters={item.filters}/>
                  </SwiperSlide>
              ))
          }
        </Swiper>
      </div>
    </div>
    </>
  )
}

export default MoreOption;
