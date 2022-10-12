import React from 'react';
import Button from '@mui/material/Button';

function CollectionUpload(props){
	return(
		<div className="row">
			<div className="row">
				<div className="card collection-upload-field">
					<div className="upload-info">
						<h5>Drag and drop or browse to choose your collection folder</h5>
						<Button className="voomio-btn btn-filled" variant="contained" size="large">Choose files...</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CollectionUpload;
