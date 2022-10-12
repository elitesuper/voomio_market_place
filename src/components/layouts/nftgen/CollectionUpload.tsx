import React, {useRef} from 'react';
import Button from '@mui/material/Button';
import Uploady from "@rpldy/uploady";
import UploadDropZone from "@rpldy/upload-drop-zone";
import UploadPreview from "@rpldy/upload-preview";
import UploadButton from "@rpldy/upload-button";

function CollectionUpload(props){

	const indicatorRef = useRef(null);

	return(
		<div className="row">
			<div className="row">
			    <Uploady destination={{url: "http://localhost:3000/upload"}}>
			        <UploadDropZone
			          className="collection-upload-field"
			          onDragOverClassName="drag-over"
			          htmlDirContentParams={{ recursive: true }}
			        >
			        <div className="upload-drop-zone">
				        <div className="upload-info">
				        	<h5>Drag and drop or browse to choose your collection folder</h5>
	         				<UploadButton text="Choose files..." className="voomio-btn btn-filled"/>
	         			</div>    
			        </div>    
			        </UploadDropZone>
			        <UploadPreview/>
			    </Uploady>
			</div>
		</div>
	)
}

export default CollectionUpload;
