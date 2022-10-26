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
import CollectionUpload from '../components/layouts/nftgen/CollectionUpload';
import CollectionPreview from '../components/layouts/nftgen/CollectionPreview';
import CollectionManage from '../components/layouts/nftgen/CollectionManage';
import CollectionGenerate from '../components/layouts/nftgen/CollectionGenerate';
import CollectionGeneral from '../components/layouts/nftgen/CollectionGeneral';
import CollectionRule from '../components/layouts/nftgen/CollectionRule';
import CollectionLayer from '../components/layouts/nftgen/CollectionLayer';

import '../scss/style.scss';


function NFTGeneratorUpload(props:any){

	const [tabvalue, setTabValue] = React.useState("0");

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
	   setTabValue(newValue);
	};
	const otherTabsClick = (value: string) => {
	   setTabValue(value);
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
		            	<div className="col-xs-12 col-sm-2 sub-tab">
		            		<div className="col-12 mb-5">
		            			<h4 className="mb-4 spec-color-7">Current NFT</h4>
		            			<h5 className="spec-color-2">Single-item</h5>
		            		</div>
		            		<div className="col-12 nft-setting">
		            			<h4 className="mb-4 spec-color-7">Settings</h4>
		            			<h5 className="spec-color-2 mb-3 virtual-tab" onClick={()=>otherTabsClick("4")}>General</h5>
		            			<h5 className="spec-color-2 mb-3 virtual-tab" onClick={()=>otherTabsClick("5")}>Layers</h5>
		            			<h5 className="spec-color-2 mb-3 virtual-tab" onClick={()=>otherTabsClick("6")}>Rules</h5>
		            		</div>
		            	</div>
		            	<div className="col-xs-12 col-sm-10">
			            	<Box sx={{ width: '100%', typography: 'body1' }}>
				            	<TabContext value={tabvalue}>
								    <Tabs className="nftgenerator-tabs" value={tabvalue} onChange={handleChange}  variant="scrollable" scrollButtons="auto" aria-label="icon label tabs example">
								      <Tab sx={{fontSize:15}} icon={<CloudUploadOutlinedIcon sx={{fontSize:30}} />} label="Upload" value="0"/>
								      <Tab sx={{fontSize:15}} icon={<RemoveRedEyeOutlinedIcon sx={{fontSize:30}} />} label="Preview" value="1"/>
								      <Tab sx={{fontSize:15}} icon={<SettingsOutlinedIcon sx={{fontSize:30}} />} label="Manage" value="2"/>
								      <Tab sx={{fontSize:15}} icon={<AutoAwesomeOutlinedIcon sx={{fontSize:30}} />} label="Generate" value="3"/>
								      <Tab sx={{display:"none"}} value="4"/>
								      <Tab sx={{display:"none"}} value="5"/>
								      <Tab sx={{display:"none"}} value="6"/>

								    </Tabs>
								    <TabPanel value="0">
								    	<CollectionUpload />
								    </TabPanel>
							        <TabPanel value="1">
							        	<CollectionPreview />
							        </TabPanel>
							        <TabPanel value="2">
							        	<CollectionManage />
							        </TabPanel>
							        <TabPanel value="3">
							        	<CollectionGenerate />
							        </TabPanel>
							    	<TabPanel value="4">
							        	<CollectionGeneral />
							        </TabPanel>
							        <TabPanel value="5">
								        <CollectionLayer />
							        </TabPanel>
							        <TabPanel value="6">
							        	<CollectionRule />
							        </TabPanel>
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