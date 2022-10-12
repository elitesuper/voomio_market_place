import * as React from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';

import { TokenCard } from '../ProfileCard';
import { TokenFilter } from '../Filter';

import {gallery_tokens, filter_tokens} from '../../../assets/fake-data/data-token-gallery';


export default function CollectionPreview(){
	const [value, setValue] = React.useState('1');
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	}

	return(
		<div>
			<TabContext value={value}>
		        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
		          <TabList onChange={handleChange} aria-label="lab API tabs example">
		            <Tab sx={{fontSize:18}} label="Token Gallery" value="1" />
		            <Tab sx={{fontSize:18}} label="Metadata" value="2" />
		          </TabList>
		        </Box>
		        <TabPanel value="1">
		        	<div className="row">
		        		<div className="col-md-5 col-lg-4 col-xl-3">
		        			<div className="row mb-5">
		        				<h5 className="mb-2">Tokens</h5>
		        				<div className="w-100 flex voomio-just-center">
		        					<Button className="voomio-btn btn-gen-filled" variant="contained">Regenerate Tokens</Button>
		        				</div>
		        			</div>
		        			<div className="row mt-5">
		        				<h5 className="mb-2">Filters</h5>
		        				{filter_tokens.map((filter,index) => (
		        					<div className="flex voomio-just-center mb-2" key={filter.name}>
		        						<TokenFilter defaultvalue={filter.default} name={filter.name} filterdata={filter.type}/>
		        					</div>
		        				))}
		        			</div>
		        		</div>
		        		<div className="col-md-7 col-lg-8 col-xl-9 token-gallery-view">
			        		<div className="row">
				        		{gallery_tokens.map((item, index) => (
				        			<div key={index} className="col-sm-6 col-md-6 col-xl-3">
				        				<TokenCard tokenimg={item.img} tokenid={item.id}/>
				        			</div>
				        		))}
			        		</div>
		        		</div>
		        	</div>
		        </TabPanel>
		        <TabPanel value="2">Item Two</TabPanel>
		    </TabContext>
		</div>	
	)
}