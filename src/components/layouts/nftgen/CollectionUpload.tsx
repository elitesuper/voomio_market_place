import React, {useCallback, useState} from 'react';
import axios from "axios";
import {useDropzone} from 'react-dropzone';
import { Button } from '@mui/material';

function CollectionUpload(props:any){

	// const [files, setFiles] = useState([{filename:String, filepath:String}]);

	const nativeProps:any = { webkitdirectory: 'true' };

	const onDrop = useCallback((acceptedFiles:any)=> {

		const uploadedfiles = [{filename:String, filepath:String}]; 
		// Do something with the files
		acceptedFiles.map((file:any)=>{

			console.log(`file: ${file.name}, ${file.path}, ${file.type}, (${file.size} bytes)`);

            const formData = new FormData();
            formData.append("file", file);
			formData.append("filepath",file.path);

			axios.post("/upload", formData,  {headers: {
				'Content-Type': 'multipart/form-data'
			  }}).then(
				(res:any) =>{
					console.log(res);
				}
			).catch(
				(res:any) => {
					console.log(res)
				}
			)
			
		})
		// console.log(uploadedfiles);
		// setFiles(uploadedfiles);
	  }, [])
	  
	const {getRootProps, getInputProps, isDragActive} = useDropzone({useFsAccessApi: false ,onDrop})

	return(
		<div className="row">
			<div className="row">	
			<div className="collection-upload-field" {...getRootProps()}>
                <input {...getInputProps()} {...nativeProps}/>
                {
					<div className="upload-drop-zone">
						<div className="upload-info">
							<h5>Drag and drop or browse to choose your collection folder</h5>
							<Button className="voomio-btn btn-filled">Choose Files...</Button>
						</div>
					</div> 
                }
            </div>
			</div>
		</div>
	)
}

export default CollectionUpload;
