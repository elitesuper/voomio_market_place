import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { CollectionCard } from '../components/layouts/ProfileCard';
import {ChainFilter, CategoryFilter} from '../components/layouts/Filter';

import popularCollectionData from '../assets/fake-data/data-popular-collection';



const ExploreCollection = () => {

      const data = popularCollectionData;

      const [value, setValue] = React.useState('1');

      const handleChange = (event:any, newValue:string) => {
        setValue(newValue);
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
                         <TabContext value={value}>
                           <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                             <TabList onChange={handleChange} aria-label="Explore Collection Tabs" className="exp-col-tab">
                               <Tab label="Top" value="1" />
                               <Tab label="Trending" value="2" />
                             </TabList>
                           </Box>
                           <div className="flex mg-t-24 filters-group">
                                 <CategoryFilter/>
                                 <ChainFilter/>
                           </div>
                           <TabPanel value="1">
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
                           <TabPanel value="2">
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
                         </TabContext>
                       </Box>
                    </div>
                </div>
              </div>
            </section>
        </div>
    );
}
export default ExploreCollection;
