import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { CollectionCard } from '../components/layouts/ProfileCard';
import {ChainFilter, CategoryFilter} from '../components/layouts/Filter';

import popularCollectionData from '../assets/fake-data/data-popular-collection';
import SwipeableViews from 'react-swipeable-views';



interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const ExploreCollection = () => {

      const data = popularCollectionData;

      const [value, setValue] = React.useState(0);


      const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };

      const handleChangeIndex = (index: number) => {
        setValue(index);
      };

    return (
        <div>
            <section className="flat-title-page inner">
                <div className="overlay"></div>
            </section>
            <section className="tf-section">
              <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12 voomio-title">
                        <div className="">
                            <h2 className="tf-title">Explore collections</h2>
                            <div className="heading-line"></div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-21">
                      <Box sx={{ width: '100%', typography: 'body1' }}>
                           <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                             <Tabs value={value} onChange={handleChange} aria-label="Explore Collection Tabs" className="exp-col-tab">
                               <Tab label="Top" {...a11yProps(0)} />
                               <Tab label="Trending" {...a11yProps(1)} />
                             </Tabs>
                           </Box>
                           <div className="flex mg-t-24 filters-group">
                                 <CategoryFilter/>
                                 <ChainFilter/>
                           </div>
                           <SwipeableViews
                            index={value}
                            onChangeIndex={handleChangeIndex}
                           >
                           <TabPanel value={value} index={0} >
                             <div className="row">
                               {data.filter(item => item.collectiontype==="1").map((item,index) => (
                                 <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" key={index}>
                                   <CollectionCard
                                    imgtop = {item.imgtop}
                                    imgAuthor = {item.imgAuthor}
                                    title = {item.title}
                                    name= {item.name}
                                   />
                                 </div>
                               ))}
                            </div>
                           </TabPanel>
                           <TabPanel value={value} index={1} >
                             <div className="row">
                               {data.filter(item => item.collectiontype==="2").map((item,index) => (
                                 <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" key={index}>
                                 <CollectionCard
                                  imgtop = {item.imgtop}
                                  imgAuthor = {item.imgAuthor}
                                  title = {item.title}
                                  name= {item.name}
                                 />
                                 </div>
                               ))}
                            </div>
                           </TabPanel>
                           </SwipeableViews>
                       </Box>
                    </div>
                </div>
              </div>
            </section>
        </div>
    );
}
export default ExploreCollection;
