import React from 'react';
import useCardanoWallet, {WalletName} from '@asterium-dev/use-cardano-wallet';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

function CardanoWallet(props){

	const {
	    connect,
	    isConnecting,
	    isConnected,
	    lovelaceBalance,
	    address,
	    network,
	    selectedWallet,
	    connectedWallet,
	    api,
	    disconnect,
	    isRefetchingBalance,
	    refetchBalance,
	} = useCardanoWallet();

	return(
		<>
	      {Object.values(WalletName).filter(walletName => walletName != "begin").map(walletName => (
            <React.Fragment key={walletName}>
                <ListItem
                  disableGutters
                  secondaryAction={
                    <Button sx={{width:'80px'}} className="voomio-w-btn" onClick={() => connect(walletName)} variant="outlined" size="large">Cardano</Button>
                  }
                >
                <ListItemAvatar>
                  <Avatar>
                    <img className="wallet_icons" src={props.walletdata.filter(item => item.key === walletName)[0].img} alt={walletName}/>
                  </Avatar>
                  </ListItemAvatar>
                  <ListItemText sx={{fontWeight:'600'}} primary={props.walletdata.filter(item => item.key === walletName)[0].name}/>
                </ListItem>
                <Divider />
            </React.Fragment>
          ))}
		</>
	);
}

export default CardanoWallet;