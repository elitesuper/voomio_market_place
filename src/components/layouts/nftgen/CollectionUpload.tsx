import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import {useDropzone} from 'react-dropzone';
import { Button } from '@mui/material';

interface fileinfo {
	filename:string,
	filepath:string
}

function CollectionUpload(props:any){

	const [files, setFiles] = useState<{filename:string, filepath:string}[]>([],);
	const [uploaded, setUploaded] = useState(false);

	const nativeProps:any = { webkitdirectory: 'true' };

	const onDrop = useCallback((acceptedFiles:any)=> {

		let uploadedfiles: fileinfo[] = []; 
		// Do something with the files
		acceptedFiles.map((file:any, index:number)=>{

			console.log(`file: ${file.name}, ${file.path}, ${file.type}, (${file.size} bytes)`);

            const formData = new FormData();
            formData.append("file", file);
			formData.append("filepath",file.path);

			axios.post("/upload", formData,  {headers: {
				'Content-Type': 'multipart/form-data'
			  }}).then(
				(res:any) =>{
					console.log(res);
					// uploadedfiles.push({filename:res.data.fileName, filepath:res.data.filePath});
					setFiles(files=>[...files, {filename:res.data.fileName, filepath:res.data.filePath}]);
				}
			).catch(
				(res:any) => {
					console.log(res)
				}
			)
		})
		// console.log("uploadedfiles", uploadedfiles);
		// console.log("uploadedfiles length", uploadedfiles.length);
		// setFiles([...uploadedfiles]);
	  }, [])

	  useEffect(()=>{
		console.log(files);
	  },[files])
	  
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
			<div className='row'>
				{
					files.map((item:any) =>
						<img src={process.env.PUBLIC_URL + item.filepath} key={item.filepath}></img>
					)
				}
			</div>
		</div>
	)
}

export default CollectionUpload;
