import React from 'react';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import avatar_icon from '../../../assets/images/avatar/character3.png';
import { Verified } from "@mui/icons-material";



function DetailAbout(){

    const socialList = [

        {
            icon: "fab fa-facebook",
            link: "#"
        },
        {
            icon: "fab fa-telegram-plane",
            link: "#"
        },
        {
            icon: "fab fa-youtube",
            link: "#"
        },
        {
            icon: "icon-fl-tik-tok-2",
            link: "#"
        },
        {
            icon: "icon-fl-vt",
            link: "#"
        },
        

    ]

    return(<>
    <div className='w-100 mg-t-15'>
        <div className='chart-header flex'>
            <LabelOutlinedIcon className="detail-meta-icon" style={{fontSize:'20px'}}></LabelOutlinedIcon>
            <h5>About</h5>
        </div>
        <div className='chart-panel row detail-about-card'>
            <div className='flex w-100 voomio-just-between'>
                <div className='flex'>
                    <Avatar
                        alt="Remy Sharp"
                        src={avatar_icon}
                        sx={{ width: 56, height: 56 }}
                    />
                    <Typography className="text-center spec-color-1 about-detail-name" variant="h4" component="div" gutterBottom>
                        Doodles <Verified className="verified-icon about-verified"/>
                    </Typography>
                </div>
                <div className="widget-social style-1 voomio-mta">
                    <ul>
                        {
                            socialList.map((item,index) =>(
                                <li className='mg-bottom-0' key={index}><Link to={item.link}><i className={item.icon}></i></Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <Typography className="mg-t-15" sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury.
            </Typography>
        </div>
    </div>
    </>)
}

export default DetailAbout