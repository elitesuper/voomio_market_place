import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {ChainFilter, TimeFilter, CategoryFilter} from '../components/layouts/Filter';
import CollectionStatRanking from '../components/layouts/CollectionStatRanking'

function CollectionStat(){

  const [value, setValue] = useState('1');

  const handleChange = (event:any, newValue:string) => {
    setValue(newValue);
  };

  return(<>
      <div className='detail-page pad-t-24'>
          <div className="themesflat-container">
              <section className="tf-section">
                <div className="row mt-21">
                  <div className="col-md-12 voomio-title">
                      <div className="">
                          <h2 className="tf-title">Collection stats</h2>
                          <div className="heading-line"></div>
                      </div>
                  </div>
                </div>
                <div className="row mt-21">
                <Box sx={{ width: '100%', typography: 'body1' }}>
                   <TabContext value={value}>
                     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                       <TabList onChange={handleChange} aria-label="Explore Collection Tabs" className="exp-col-tab">
                         <Tab label="Top" value="1" />
                         <Tab label="Trending" value="2" />
                       </TabList>
                     </Box>
                     <div className="flex mg-t-24">
                      <CategoryFilter/>
                      <ChainFilter/>
                      <TimeFilter />
                     </div>
                     <TabPanel value="1">
                      <CollectionStatRanking value="1"/>
                     </TabPanel>
                     <TabPanel value="2">
                      <CollectionStatRanking value="2"/>
                     </TabPanel>
                   </TabContext>
                 </Box>
                </div>
              </section>
          </div>
      </div>
    </>)
}

export default CollectionStat;
