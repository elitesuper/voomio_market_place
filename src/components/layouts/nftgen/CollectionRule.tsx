import * as React from 'react';
import {TestFilter} from '../Filter';
import IconButton from '@mui/material/IconButton';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


export default function CollectionRule(props){
	const [value, setValue] = React.useState(["data"])

	const addValue = () =>{
		setValue((value) => [...value, "fff",]);
	}
	return(
		<div className="collection-container">
			<div className="row mb-5">
				<h4 className="spec-color-1">Rules</h4>
			</div>
			<div className="row mt-5 mb-5">
				<h4 className="mb-3">Create a Rule</h4>
                <div className='col-md-12 voomio-just-center voomio-pb-3'>
	                <div className='row'>
	                    <TestFilter />
	                    <TestFilter />
	                    <TestFilter />
	               		<button className="button collection-upload-btn voomio-ma col-lg-2 ruleaddbutton" onClick={addValue}>+ Add</button>
	                </div>
                </div>
			</div>
			<div className="row mt-5 mb-5">
				<h4 className="mb-3">Rules</h4>
				{
					value.map((item, index) =>
							<div className='col-md-12 voomio-just-center voomio-pb-1' key={index}>
				                <div className='row'>
				                    <TestFilter />
				                    <TestFilter />
				                    <TestFilter />
				               		<button className="button collection-upload-btn voomio-ma col-lg-2 ruleaddbutton autoshowbtn">Delete</button>
				               		<div className="autohidebtn col-lg-1 ml-3" >
					               		<IconButton aria-label="delete ">
										  <DeleteForeverOutlinedIcon sx={{fontSize:'3rem'}} />
										</IconButton>
				               		</div>
				                </div>
			                </div>
						)
				}
			</div>
		</div>
		)
}