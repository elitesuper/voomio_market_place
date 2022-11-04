import {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

function UploadPanel(){

	const onDrop = useCallback((acceptedFiles)=> {
		// Do something with the files
		console.log(acceptedFiles);
	  }, [])
	const {getRootProps, getInputProps, isDragActive} = useDropzone({useFsAccessApi: false ,onDrop})

	return(
        <div className="upload-drop-zone">
            <div {...getRootProps()}>
                <input {...getInputProps({webkitdirectory: "true"})}/>
                {
                    <div>
                        <div className="upload-info">
                            <h5>Drag and drop or browse to choose your collection folder</h5>
                        </div>    
                    </div> 
                }
            </div>
        </div>
	)
}

export default UploadPanel;
