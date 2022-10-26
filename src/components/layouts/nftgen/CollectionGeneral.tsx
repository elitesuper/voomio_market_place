import * as React from 'react';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

export default function CollectionGeneral(props:any){

	return(
		<div className="collection-container">
			<div className="row mb-5">
				<h4 className="spec-color-1">General</h4>
			</div>
			<div className="row mt-5 mb-5">
				<div className="collection-logo">
					<div className="collection-inner flex">
						<InsertPhotoOutlinedIcon sx={{fontSize:'50px', color:'#7B61FF'}} className="voomio-ma" />
					</div>
				</div>
				<div className="col ml-1 d-flex">
					<div className="collection-upload-group">
						<h6>Collection Logo</h6>
						<button className="button collection-upload-btn"><FileUploadOutlinedIcon className="voomio-mta" sx={{fontSize:'20px'}}/> Upload</button>
					</div>
				</div>
			</div>
			<div className="form-inner">
	            <form id="contactform" noValidate={true} className="form-submit collection-form">
	            	<div className="form-group">
	            		<label htmlFor="new_collection">Email address</label>
	               		<input id="new_collection" name="collectionname" tabIndex={1} aria-required="true" required type="text" placeholder="My new Collection" />
	            	</div>
	            	<div className="form-group">
	            		<label htmlFor="collection_count">Token Count</label>
	               		<input id="collection_count" name="collectioncount" tabIndex={2} aria-required="true" required type="text" placeholder="Number" />
	            	</div>

	            	<div className="form-group">
	            		<label htmlFor="collection_description">Description</label>
	                	<textarea id="collection_description" name="description" tabIndex={3} aria-required="true" required placeholder="A short description"></textarea>
	            	</div>
	            	<div className="form-group">
	            		<label htmlFor="website_link">Website</label>
	               		<input id="website_link" name="website" tabIndex={4} aria-required="true" required type="text" placeholder="http://" />
	            	</div>
	                <div className="form-group">
	            		<label htmlFor="toke_nname">Token Name</label>
	               		<input id="token_name" name="tokenname" tabIndex={5} aria-required="true" required type="text" placeholder="Token {{id}}" />
	            	</div>
	            	<div className="form-row row">
	            		<div className="form-group col-sm-12 col-md-6">
	            			<label htmlFor="payout_wallet">Payout Wallet</label>
	               			<input id="payout_wallet" name="payoutwallet" tabIndex={6} aria-required="true" required type="text" placeholder="0x000.." />
	            		</div>
	            		<div className="form-group col-sm-12 col-md-6">
	            			<label htmlFor="royal-percent">Royalty Percentage</label>
	               			<input id="royal-percent" name="royalpercent" tabIndex={7} aria-required="true" required type="text" placeholder="%" />
	            		</div>
	            	</div>
	                <button className="submit">+ Add</button>
	            </form>
	        </div>
		</div>

		)
}