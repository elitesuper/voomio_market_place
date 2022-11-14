
import React, {useRef} from 'react';
import Button from '@mui/material/Button';
import Uploady, {useItemProgressListener} from "@rpldy/uploady";
import UploadDropZone from "@rpldy/upload-drop-zone";
import UploadPreview from "@rpldy/upload-preview";
import UploadButton from "@rpldy/upload-button";

function CollectionUpload(props:any){

	const nativeProps:any = { webkitdirectory: 'true' };

	const customIsSuccess = (xhr:any) => [308, 418].includes(xhr.status);

	const LogProgress = (item:any) =>{
		useItemProgressListener((item:any) => {
			console.log(item)
		});

		return null;
	}

	return(
		<div className="row">
			<div className="row">
			    <Uploady isSuccessfulCall={customIsSuccess} destination={{url: "http://localhost:5000/upload"}} {...nativeProps} >
			        <UploadDropZone
			          className="collection-upload-field"
			          onDragOverClassName="drag-over"
			          htmlDirContentParams={{ recursive: true, withFullPath: true }}
			        >
			        <div className="upload-drop-zone">
				        <div className="upload-info">
				        	<h5>Drag and drop or browse to choose your collection folder</h5>
	         				<UploadButton text="Choose files..." className="voomio-btn btn-filled"/>
	         			</div>    
			        </div>    
			        </UploadDropZone>
					<LogProgress />
			    </Uploady>
			</div>
		</div>
	)
}

export default CollectionUpload;