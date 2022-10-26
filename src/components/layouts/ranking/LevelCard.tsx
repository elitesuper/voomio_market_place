import React from 'react'

export default function LevelCard(props:any){
	const data = props.data
	return(
		<>
		<div className="mobile-show">
			<div className="row my-3 p-3 level-card" key={props.id}>
				<div className="col-2">
					<img className="level-icon" src={data.imgicon}></img>
				</div>
				<div className="col-1"></div>
				<div className="col-5 flex">
					<h4 className="voomio-mta">{data.name}</h4>
				</div>
				<div className="col-4 flex justify-content-end">
					<div className="text-end">
						<h6 className="voomio-mta fw-500">Lvl.{data.id}</h6>
						<h5 className="voomio-mta fw-500">{data.PTS/1000}K PTS</h5>
					</div>
				</div>
			</div>
		</div>
		<div className="mobile-hidden">
			<div className="row my-3 p-3 level-card" key={props.id}>
				<div className="col-2">
					<img className="level-icon" src={data.imgicon}></img>
				</div>
				<div className="col-3 flex">
					<h6 className="voomio-mta fw-500">level{data.id}</h6>
				</div>
				<div className="col-3 flex">
					<h4 className="voomio-mta">{data.name}</h4>
				</div>
				<div className="col-4 flex justify-content-end">
					<h5 className="voomio-mta fw-500">{data.PTS.toLocaleString()} PTS</h5>
				</div>
			</div>
		</div>
		</>
		)
}