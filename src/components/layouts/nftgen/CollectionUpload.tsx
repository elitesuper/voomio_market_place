import React, {useCallback} from 'react';
import Button from '@mui/material/Button';
import {useDropzone} from 'react-dropzone';
import UploadPanel from './UploadPanel';

function CollectionUpload(props:any){

	const onDrop = useCallback((acceptedFiles:any)=> {
		// Do something with the files
		console.log(acceptedFiles);
	  }, [])
	const {getRootProps, getInputProps, isDragActive} = useDropzone({useFsAccessApi: false ,onDrop})

	return(
		<div className="row">
			<div className="row">
				<UploadPanel></UploadPanel>
			</div>
		</div>
	)
}

export default CollectionUpload;
