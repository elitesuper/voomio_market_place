import React from 'react';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import '../scss/style.scss';


function NFTGeneratorUpload(props){

	const [tabvalue, setTabValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
	   setTabValue(newValue);
	};


	return(
		<div className='detail-page pad-t-24'>
	        <div className="nftgenerator-container">
		        <section className="tf-section">
		            <div className="row mt-21">
		              	<div className="col-md-12 voomio-title">
		                  	<div className="">
			                    <h2 className="tf-title">NFT Generator</h2>
			                    <div className="heading-line"></div>
		                  	</div>
		              	</div>
		            </div>
		            <div className="row">
		            	<div className="col-xs-12 col-sm-3">
		            		<div className="col-12 mb-5">
		            			<h4 className="mb-4 spec-color-7">Current NFT</h4>
		            			<h5 className="spec-color-2">Single-item</h5>
		            		</div>
		            		<div className="col-12 nft-setting">
		            			<h4 className="mb-4 spec-color-7">Settings</h4>
		            			<h5 className="spec-color-2 mb-3">General</h5>
		            			<h5 className="spec-color-2 mb-3">Layers</h5>
		            			<h5 className="spec-color-2 mb-3">Rules</h5>
		            		</div>
		            	</div>
		            	<div className="col-xs-12 col-sm-9">
			            	<Box sx={{ width: '100%', typography: 'body1' }}>
				            	<TabContext value={tabvalue}>
								    <Tabs className="nftgenerator-tabs" value={tabvalue} onChange={handleChange}  variant="scrollable" scrollButtons="auto" aria-label="icon label tabs example">
								      <Tab icon={<CloudUploadOutlinedIcon sx={{fontSize:30}} />} label="Upload" />
								      <Tab icon={<RemoveRedEyeOutlinedIcon sx={{fontSize:30}} />} label="Preview" />
								      <Tab icon={<SettingsOutlinedIcon sx={{fontSize:30}} />} label="Manage" />
								      <Tab icon={<AutoAwesomeOutlinedIcon sx={{fontSize:30}} />} label="Generate" />
								    </Tabs>
								    <TabPanel value={0}>Item One</TabPanel>
							        <TabPanel value={1}>Item Two</TabPanel>
							        <TabPanel value={2}>Item Three</TabPanel>
							        <TabPanel value={3}>Item Four</TabPanel>
				            	</TabContext>
				            </Box>
		            	</div>
		            </div>
		        </section>
			</div>
		</div>
	)
}

export default NFTGeneratorUpload;