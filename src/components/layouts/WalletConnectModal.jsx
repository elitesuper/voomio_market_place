import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { useWeb3React } from "@web3-react/core";
import {walletdata} from '../../assets/fake-data/data-wallets';

export default function WalletConnectModal(props) {

  const { activate } = useWeb3React();


  const [visible , setVisible] = useState(6);
  const showMoreItems = () => {
      setVisible((prevValue) => prevValue + 4);
  }

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (props.show) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [props]);

  // const actionprepare = (type) =>{
  //   if(type === "popular")
  //   {
  //     return <Button sx={{width:'80px'}} onClick={() => {activate(connectors.injected)}} className="voomio-w-btn" variant="outlined" size="large">Connect</Button>
  //   }
  //   else if (type === "solana" || type==="cardano") {
  //     return <Button sx={{width:'80px'}} className="voomio-w-btn voomio-w-btn-filled" variant="contained" size="large">{type}</Button>
  //   }else{
  //     return <></>;
  //   }
  // }

  return (
    <div>
      <Dialog
        sx={{Width:'600px'}}
        className="chat-modal"
        open={props.show}
        onClose={props.onHide}
        scroll={'body'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <div className='dialogtitle-header flex mx-5 mt-5 mb-3' id="scroll-dialog-title">
          <div>
            <AccountBalanceWalletOutlinedIcon sx={{color:'#7B61FF', fontSize:'50px', mr:3}} />
          </div>
          <div className="mr-5">
            <Typography className="font-termina" variant="h4" sx={{mb:1}}>
              My Wallet
            </Typography>
            <Typography className="spec-color-3" variant="h6" sx={{mb:1}}>
              Connect or Create a wallet
            </Typography>
          </div>
        </div>
         <Divider />
        <DialogContent dividers={false} className="text-center" ref={descriptionElementRef} tabIndex={-1}>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {walletdata.slice(0,visible).map((item, index) => (
              <React.Fragment key={index}>
              <ListItem
                disableGutters
                secondaryAction={
                  (item.avaliable)?<Button sx={{width:'80px'}} onClick={() => {activate(item.connector)}} className="voomio-w-btn" variant="outlined" size="large">Connect</Button>:<></>
                }
              >
              <ListItemAvatar>
                <Avatar>
                  <img className="wallet_icons" src={item.img} alt={item.name}/>
                </Avatar>
                </ListItemAvatar>
                <ListItemText sx={{fontWeight:'600'}} primary={item.name}/>
              </ListItem>
              <Divider />
              </React.Fragment>
            ))}
          </List>
          {
              visible < walletdata.length &&
                  <Button className="voomio-w-btn mx-auto" variant="outlined" size="large" onClick={showMoreItems}>Show more</Button>
          }
        </DialogContent>
        <DialogActions>
          <Button className="voomio-w-btn" variant="outlined" onClick={props.onHide}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
