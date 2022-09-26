import React from 'react';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function Traits(){

    const traitsdata =[
        {
            category:"Background",
            Name:"Pink",
            desc:"13% have this trait",
        },
        {
            category:"Body",
            Name:"Navy Sweater",
            desc:"22% have this trait",
        },
        {
            category:"Face",
            Name:"Rainbow Puke",
            desc:"11% have this trait",
        },
        {
            category:"Hair",
            Name:"Purple",
            desc:"27% have this trait",
        },
        {
            category:"Head",
            Name:"Med",
            desc:"31% have this trait",
        }
    ]

    return(<>
    <div className='w-100'>
        <div className='chart-header flex mg-bt-10'>
            <LabelOutlinedIcon className="detail-meta-icon" style={{fontSize:'20px'}}></LabelOutlinedIcon>
            <h5>Traits</h5>
        </div>
        <div className='chart-panel row'>
            {
                traitsdata.map((item, index) => (
                    <div className='col-md-6 col-xl-4 mg-t-15'>
                    <Card className="trait-card">
                            <CardContent>
                                <Typography className="text-center spec-color-1" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {item.category}
                                </Typography>
                                <Typography className="text-center" variant="h5" component="div">
                                    {item.Name}
                                </Typography>
                                <Typography className="text-center spec-color-3" sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                                    {item.desc}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                ))
            }
        </div>
    </div>
    </>)
}

export default Traits