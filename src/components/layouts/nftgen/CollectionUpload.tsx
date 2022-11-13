import React, {useCallback} from 'react';
import Button from '@mui/material/Button';
import axios from "axios";
import {useDropzone} from 'react-dropzone';

function CollectionUpload(props:any){

	const nativeProps:any = { webkitdirectory: 'true' };

	const onDrop = useCallback((acceptedFiles:any)=> {
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
					// console.log(res);
				}
			).catch(
				(res:any) => {
					console.log(res)
				}
			)
		})

	  }, [])
	const {getRootProps, getInputProps, isDragActive} = useDropzone({useFsAccessApi: false ,onDrop})

	return(
		<div className="row">
			<div className="row">
			<div {...getRootProps()}>
                <input {...getInputProps()} {...nativeProps}/>
                {
                    <div>
                        <div className="upload-info">
                            <h5>Drag and drop or browse to choose your collection folder</h5>
                        </div>    
                    </div> 
                }
            </div>
			</div>
		</div>
	)
}

export default CollectionUpload;
