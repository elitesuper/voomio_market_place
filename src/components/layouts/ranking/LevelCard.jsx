import React from 'react'

export default function LevelCard(props){
	const data = props.data
	return(
		<div className="row my-3 mr-3 p-3 level-card" key={props.id}>
			<div className="col-2">
				<img className="level-icon" src={data.imgicon}></img>
			</div>
			<div className="col-3 flex">
				<h6 className="voomio-mta">level{data.id}</h6>
			</div>
			<div className="col-3 flex">
				<h4 className="voomio-mta">{data.name}</h4>
			</div>
			<div className="col-4 flex justify-content-end">
				<h5 className="voomio-mta">{data.PTS} PTS</h5>
			</div>
		</div>
		)
}