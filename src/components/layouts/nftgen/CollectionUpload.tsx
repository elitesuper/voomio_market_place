
import React, {useState} from 'react';
import Uploady, {useItemProgressListener, useItemFinalizeListener, useItemStartListener } from "@rpldy/uploady";
import UploadDropZone from "@rpldy/upload-drop-zone";
import UploadButton from "@rpldy/upload-button";
import Wave from "react-wavify";
import { createMockSender } from "@rpldy/mock-sender";

const UploadProgress = (props:any) => {
	const {setupload} = props;
	const [loading, setLoading] = useState(false);
	const [progress, setProgess] = useState(0);
	const progressData = useItemProgressListener();
  
	if (progressData && progressData.completed > progress) {
	  setProgess(() => progressData.completed);
	  setLoading(true);
	  setupload(true);
	}
  
	return (
		<>
		{
		(loading==true)?
			(<div  className="collection-upload-field wave-div">
			<div className='upload-drop-zone'>
				<div className='wave-upload-main'>
					<Wave mask="url(#mask)" fill="#bbdbf8" options={{speed: 0.2, amplitude: 40 }} >
						<defs>
							<linearGradient id="gradient" gradientTransform="rotate(90)">
								<stop offset="0" stopColor="white" />
								<stop offset="0.5" stopColor="black" />
							</linearGradient>
							<mask id="mask">
								<rect x="0" y="0" width="2000" height="300" fill="url(#gradient)"  />
							</mask>
						</defs>
					</Wave>
				</div>
			</div>
			<div className='wave-upload-title'>Uploading...</div>
		</div>):null
		}
	  </>
	  );
  };

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
					<UploadProgress setupload={setLoading}/>
			    </Uploady>
			</div>
		</div>
	)
}

export default CollectionUpload;