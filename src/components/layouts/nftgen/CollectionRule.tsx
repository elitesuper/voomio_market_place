import * as React from 'react';
import {TestFilter} from '../Filter';


export default function CollectionRule(props){
	return(
		<div className="collection-container">
			<div className="row mb-5">
				<h4 className="spec-color-1">Rules</h4>
			</div>
			<div className="row mt-5 mb-5">
				<h4 className="mb-5">Create a Rule</h4>
                <div className='col-md-12 voomio-just-center voomio-pb-3'>
	                <div className='row'>
	                    <TestFilter />
	                    <TestFilter />
	                    <TestFilter />
	               		<button className="button collection-upload-btn voomio-ma col-lg-2">+ Add</button>
	                </div>
                </div>
			</div>
		</div>
		)
}