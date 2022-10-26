import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PointSystem(props){
	const data = props.data;
	return(
		<>
			{data.map(item=>
				<div className="row mt-5" key={item.type}>
					<div className="w-100 flex mb-2">
						<span className="point-tag">{item.type}</span>
					</div>
					<FormGroup>
						{item.datas.map(checkitem=>
							<FormControlLabel key={checkitem.id}className="point-system-check" control={<Checkbox />} label={`${checkitem.pts} PTS - ${checkitem.desc}`} />
							)}
					</FormGroup>
				</div>
				)}
		</>
		)
}