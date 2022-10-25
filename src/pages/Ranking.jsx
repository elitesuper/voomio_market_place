import React from 'react';
import LevelCard from '../components/layouts/ranking/LevelCard';
import PointSystem from '../components/layouts/ranking/PointSystem';


import {levels, pointsystems} from '../assets/fake-data/data-ranking';


const Ranking = () =>{
	return(
		<div className='detail-page pad-t-24'>
			<div className="themesflat-container">
				<section className="tf-section">
					<div className="row mt-21">
					  <div className="col-md-12 voomio-title">
					      <div className="">
							<h2 className="tf-title">Rule the sea</h2>
							<div className="heading-line"></div>
					      </div>
					  </div>
					  <p>Earn points to level up in your ranking</p>
					</div>
					<div className="row">
						<div className="col-md-6 col-sm-12">
							{levels.map(item =>
								<LevelCard data={item} key={item.id}/>
								)}
						</div>
						<div className="col-md-6 col-sm-12">
							<div className="row">
								<h3 className="spec-color-1">Point System</h3>
								<p>Earn points for your activity in different ways</p>
							</div>
							<div className="row">
								<PointSystem data={pointsystems}/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
		)
} 

export default Ranking;