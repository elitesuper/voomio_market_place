import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { HiOutlineViewGridAdd } from "react-icons/hi";
import {MdOutlineAutoAwesome} from "react-icons/md";


function TypeCard(props:any){
  const navigate = useNavigate();

  const nextpage = () => {
    navigate("/nftgenerator/upload/0");
  }
  
  return(
    <Box sx={{m:1, border: 2, borderColor:'#7B61FF', borderRadius: 3}} className="animation-card">
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
       {props.buttontype==2?(
         <div className="w-100 flex">
          <Button className="voomio-btn btn-filled mr-3" variant="contained" size="large">Generate Preview Set</Button>
          <Button className="voomio-btn" variant="contained" size="large">View Preview</Button>
         </div>
       ):<Button onClick={()=>nextpage()} className="voomio-btn btn-filled" variant="contained" size="large">Get Started</Button>}
       </CardActions>
    </Box>
  )
}

export default TypeCard;
