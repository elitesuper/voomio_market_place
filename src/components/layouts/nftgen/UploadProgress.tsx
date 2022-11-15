import React, {useState, useEffect} from 'react'
import { useItemProgressListener } from '@rpldy/uploady';
import Wave from "react-wavify";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ListItem, IconButton,ListItemText } from '@mui/material';
import DensityLargeIcon from '@mui/icons-material/DensityLarge';

export default function UploadProgress (props:any){
	const {uploadstat,setupload} = props;
	const [progress, setProgess] = useState(0);
	const [step, setstep] = useState(0);
	const progressData = useItemProgressListener();
  
	if (progressData && progressData.completed > progress) {
	  setProgess(() => progressData.completed);
	  setupload(true);
	}

	useEffect(()=>{
		if(uploadstat==true){
			setstep(1);
		}
	},[uploadstat])

	useEffect(()=>{
		if(step === 1){
			const interval = setInterval(() => {
				setstep(2);
			  }, 5000);
			  return () => clearInterval(interval);
		}
	},[step])
  
	return (
		<>
		{
		(step===1)?
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
		{
		(step===2)?
		(<div  className="collection-upload-field wave-div">
			<div className='upload-drop-zone'>
				<div className="uploaded-info">
					<h3><CheckCircleIcon sx={{ fontSize: 100, color:'green' }} /></h3>
					<h3>Success</h3>
					<p>Your upload has been completed</p>
					<div className='row mt-5'>
                            <div className='col-md-6 col-sm-12'> 
                                <ListItem className="attribute-item upload-attribute">
                                    <ListItemText primary="Upload More" />
                                </ListItem>
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <ListItem
                                className="attribute-item upload-attribute"
                                secondaryAction={
                                    <IconButton aria-label={'sort-layer'}>
                                    <DensityLargeIcon />
                                    </IconButton>
                                }
                                >
                                <ListItemText primary="Sort Layers" />
                                </ListItem>
                            </div>
					</div>
				</div>   
			</div>
	</div>):null
		}
	  </>
	  );
  };
