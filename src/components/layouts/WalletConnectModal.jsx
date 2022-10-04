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
import {walletdata} from '../../assets/fake-data/data-wallets';

export default function WalletConnectModal(props) {


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

  const actionprepare = (type) =>{
    if(type === "popular")
    {
      return <Button sx={{width:'80px'}} className="voomio-w-btn" variant="outlined" size="large">Connect</Button>
    }
    else if (type === "solana" || type==="cardano") {
      return <Button sx={{width:'80px'}} className="voomio-w-btn voomio-w-btn-filled" variant="contained" size="large">{type}</Button>
    }else{
      return <></>;
    }
  }

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
        <DialogTitle className='dialogtitle-header flex mr-5 mt-3 mb-3' id="scroll-dialog-title">
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
        </DialogTitle>
         <Divider />
        <DialogContent dividers={false} className="text-center">
          <DialogContentText
            className="d-flex justify-content-center"
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {walletdata.slice(0,visible).map((item, index) => (
                <>
                <ListItem
                  key={index}
                  disableGutters
                  secondaryAction={
                    actionprepare(item.type)
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
                </>
              ))}
            </List>
          </DialogContentText>
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
