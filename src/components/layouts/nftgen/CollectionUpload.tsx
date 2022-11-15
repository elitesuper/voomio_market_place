
import React, {useEffect, useState} from 'react';
import Uploady from "@rpldy/uploady";
import UploadDropZone from "@rpldy/upload-drop-zone";
import UploadButton from "@rpldy/upload-button";
import { createMockSender } from "@rpldy/mock-sender";
import UploadProgress from './UploadProgress';

function CollectionUpload(props:any){

	const nativeProps:any = { webkitdirectory: 'true' };
	const [loading, setLoading] = useState(false);


	const customIsSuccess = (xhr:any) => [308, 418].includes(xhr.status);

	return(
		<div className="row">
			<div className="row">
			    <Uploady 
					isSuccessfulCall={customIsSuccess} 
					destination={{url: "http://localhost:5000/upload"}} 
					{...nativeProps}>
					{
						(loading==false)?(<UploadDropZone
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
					  </UploadDropZone>):null	
					}
					<UploadProgress uploadstat={loading} setupload={setLoading}/>
			    </Uploady>
			</div>
		</div>
	)
}

export default CollectionUpload;