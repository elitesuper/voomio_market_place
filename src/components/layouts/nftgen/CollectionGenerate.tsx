import * as React from 'react';

import TypeCard from './TypeCard';


export default function CollectionGenerate(){

	return(
		<div>
			<div className="row mt-5 mg-bt-50">
				<h5 className="spec-color-1">Generate Tokens</h5>
				<h6>Ready to generate your assets? Let’s get started!</h6>
			</div>
			<div className="row">
				<div className="col-sm-12 col-md-6">
					<TypeCard
					  type="1"
					  title="Generate from Preview"
					  desc="This will generate a tokenset based on the preview you have seen in the gallery. What you’ve seen is what you get. Voomio adds randomization to the token number."
					  buttontype="2"
					/>
				</div>
				<div className="col-sm-12 col-md-6">
					<TypeCard
					  type="2"
					  title="Generate New"
					  desc="This will create a set based on your rules and rarity settings, but isn’t what you saw in the gallery. This will guarantee higher randomization and less bias."
					  buttontype="2"
					/>
				</div>
			</div>
		</div>
	)
}
