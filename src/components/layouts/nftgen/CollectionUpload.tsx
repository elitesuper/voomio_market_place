import React, {useRef} from 'react';
import Button from '@mui/material/Button';
import Uploady from "@rpldy/uploady";
import UploadDropZone from "@rpldy/upload-drop-zone";
import UploadPreview from "@rpldy/upload-preview";

function CollectionUpload(props){

	const indicatorRef = useRef(null);

	return(
		<div className="row">
			<div className="row">
				<div className="card collection-upload-field">
					<div className="upload-info">
					    <Uploady destination={{url: "http://localhost:3000/upload"}}>
					        <UploadDropZone 
					          onDragOverClassName="drag-over"
					          htmlDirContentParams={{ recursive: true }}
					        >
					            <span>Drag&Drop File(s) or Folder(s) Here</span>            
					        </UploadDropZone>
					        <UploadPreview/>
					    </Uploady>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CollectionUpload;
