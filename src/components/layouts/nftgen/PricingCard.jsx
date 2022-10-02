import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';


function PricingCard(props){
  return(
    <Box sx={{m:1, border: 2, borderColor:'#7B61FF', borderRadius: 3}}>
      <CardContent>
         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           {props.data.type}
         </Typography>
         <Box sx={{display:'flex', flexDirection:'row'}}>
           <Typography variant="h1" sx={{fontWeight:700}}>
            {props.data.price}
           </Typography>
           <Typography className="unit-name spec-color-3" sx={{fontWeight:600}} variant="h3" component="div">/mo</Typography>
         </Box>
         <Typography sx={{ fontSize: '18px', mb: 1.5 }} color="text.secondary">
           {props.data.description}
         </Typography>
       </CardContent>
       <Box className="pricing-data" sx={{bgcolor:'#F4EEFF', p:'16px'}}>
       {
         props.data.functions.map((item, index) =>(
           <Typography sx={{ fontSize: '16px', mb: 1.5 }}  className="flex" key={index}  component='div'>
            <CheckIcon sx={{color:'#10B981'}} className="my-auto mr-1"/>{item}
           </Typography>
         ))
       }
       <CardActions className="justify-center">
         <Button className="voomio-btn" sx={{width:'100%'}} variant="contained" size="large">Select</Button>
       </CardActions>
       </Box>
    </Box>
  );
}

export default PricingCard;
