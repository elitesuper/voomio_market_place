import * as React from 'react'
import img from '../../../assets/images/avatar/character1.png'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DensityLargeIcon from '@mui/icons-material/DensityLarge';
import IconButton from '@mui/material/IconButton';

export default function CollectionLayer(props:any){
	return(
		<div className="collection-layer">
			<div className="row">
				<h4 className="spec-color-1">Layers</h4>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-6 col-md-5 col-lg-4 mt-5 mb-2 p-4">
					<h4>Preview</h4>
					<div className="img-preview w-100 mb-2">
						<img className="w-100" src={img} alt="Hero"></img>
					</div>
					<div className="w-100">
						<Button className="w-100 shuffle-button" variant="contained" endIcon={<ShuffleIcon />}>
							Shuffle Order
						</Button>
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-5 col-lg-4 mt-5 mb-2 p-4">
					<h4>Attributes Order</h4>
					    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
					      {["Body", "Clothes", "Color","Eyes","Hair","Mouth","Texture"].map((item, index) => (
					        <ListItem
					          className="attribute-item"
					          key={index}
					          secondaryAction={
					            <IconButton aria-label={item}>
					              <DensityLargeIcon />
					            </IconButton>
					          }
					        >
					          <ListItemText primary={`${item}`} />
					        </ListItem>
					      ))}
					    </List>
				</div>
			</div>
		</div>
		)
}