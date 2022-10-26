import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ethereum_icon from '../../../assets/images/icon/ethereum.svg';


function Widget1(){
    return(
        <div className='w-100'>
            <Card className="mg-t-15 detail-card-1" sx={{ minWidth: 275 }}>
                <CardContent>
                    <div className='flex'>
                        <AccessTimeIcon className='mg-l-8 mg-r-8' style={{fontSize:24}}/>
                        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        Sale ends November 21st at 6:30am GMT-7
                        </Typography>
                    </div>
                    <div className="flex mg-t-15">
                        <div className='flex mg-l-8'>
                            <Typography variant="h2" component="div">18</Typography>
                            <Typography className="unit-name" variant="h5" component="div">Hours</Typography>
                        </div>
                        <div className='flex mg-l-8'>
                            <Typography variant="h2" component="div">42</Typography>
                            <Typography className="unit-name" variant="h5" component="div">Minutes</Typography>
                        </div>
                        <div className='flex mg-l-8'>
                            <Typography variant="h2" component="div">54</Typography>
                            <Typography className="unit-name" variant="h5" component="div">Seconds</Typography>
                        </div>
                    </div>
                    <div className="mg-t-15 mg-l-8">
                        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                            Current Price
                        </Typography>
                        <div className='flex'>
                            <img className='voomio-mta' src={ethereum_icon} alt="ethereum" />
                            <Typography variant="h2" component="div">70</Typography>
                            <Typography className="unit-name spec-color-3" variant="h5" component="div">($20,603.77)</Typography>
                        </div>
                    </div>
                </CardContent>
                <CardActions className='mg-l-8'>
                    <Button size="large" variant="outlined">Buy now</Button>
                    <Button size="large" variant="outlined">Make Offer</Button>
                </CardActions>
            </Card>
        </div>
    )
}
export default Widget1;