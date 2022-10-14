import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {ManageTokenFilter, TokenFilter} from '../Filter';

import ManageSilde from './ManageSlide';

import liveAuctionData from '../../../assets/fake-data/data-live-auction';
import {token_manage_filter} from '../../../assets/fake-data/data-token-gallery';
import {texturedata} from '../../../assets/fake-data/data-collection';
import {filter_tokens} from '../../../assets/fake-data/data-token-gallery';




export default function CollectionManage(){

	const data = token_manage_filter;

	const [value, setValue] = React.useState('1');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	}

	return(
		<div>
		<TabContext value={value}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
	          <TabList onChange={handleChange} aria-label="lab API tabs example">
	            <Tab sx={{fontSize:18}} label="Components" value="1" />
	            <Tab sx={{fontSize:18}} label="One-of-Ones" value="2" />
	          </TabList>
	        </Box>
	        <TabPanel value="1">
	        <div className="w-100 d-flex justify-content-end">
	        	<ManageTokenFilter defaultvalue={data.default} filterdata={data.type} />
	        </div>
			    <ManageSilde title="Clothes" data={liveAuctionData} />
			    <ManageSilde title="Texture" data={texturedata} />
	        </TabPanel>
	        <TabPanel value="2">
	        	<div className='row'>
	        		<h4 className="spec-color-1">Manage</h4>
	        	</div>
	        	<div className="themesflat-container d-flex justify-content-center">
		        	<div className="manage-filter-group">
			        	{filter_tokens.map((filter,index) => (
							<div className="flex voomio-just-center mb-2 manage-filter" key={filter.name}>
								<TokenFilter defaultvalue={filter.default} name={filter.name} filterdata={filter.type}/>
							</div>
						))}
	        		</div>
				</div>
	        </TabPanel>
		</TabContext>
		</div>
		)
}