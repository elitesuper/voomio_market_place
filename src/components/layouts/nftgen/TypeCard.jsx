import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { HiOutlineViewGridAdd } from "react-icons/hi";
import {MdOutlineAutoAwesome} from "react-icons/md";


function TypeCard(props){
  return(
    <Box sx={{m:1, border: 2, borderColor:'#7B61FF', borderRadius: 3}}>
      <CardContent>
        {
          ((props.type==="1")?(
            <MdOutlineAutoAwesome  className="nft-card-icon mb-3"/>
          ):(
            <HiOutlineViewGridAdd className="nft-card-icon mb-3" />
          ))
        }

         <Typography variant="h4" sx={{mb:1}}>
          {props.title}
         </Typography>
         <Typography sx={{ fontSize: '16px' }} color="text.secondary">
           {props.desc}
         </Typography>
       </CardContent>
       <CardActions>
         <Button className="voomio-btn" variant="contained" size="large">Get Started</Button>
       </CardActions>
    </Box>
  )
}

export default TypeCard;
