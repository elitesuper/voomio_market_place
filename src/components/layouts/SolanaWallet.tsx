import React from 'react';
import {
    useAnchorWallet,
    useConnection,
    useWallet,
} from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

export default function SolanaWallet () {

    const { connection } = useConnection();
    let walletAddress = "";

    // if you use anchor, use the anchor hook instead
    // const wallet = useAnchorWallet();
    // const walletAddress = wallet?.publicKey.toString();

    const wallet = useWallet();
    if (wallet.connected && wallet.publicKey) {
        walletAddress = wallet.publicKey.toString()
    }

    const handleWalletClick = (walletname:any) =>{
        console.log(walletname);
        wallet.select(walletname);
        wallet.connect();
        console.log(wallet);
    }

    return ( 
        <> 
            <div>
                {wallet.wallets.map((item, index) => (
                    <React.Fragment key={item.name}>
                        <ListItem
                          disableGutters
                          secondaryAction={
                            <Button sx={{width:'80px'}} className="voomio-w-btn" onClick={() => handleWalletClick(item.name)} variant="outlined" size="large">Solana</Button>
                          }
                        >
                        <ListItemAvatar>
                          <Avatar>
                            <img className="wallet_icons" src={item.icon} alt={item.name}/>
                          </Avatar>
                          </ListItemAvatar>
                          <ListItemText sx={{fontWeight:'600'}} primary={item.name}/>
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                    ))
                }
                {wallet.connected && <WalletDisconnectButton />}
            </div> 
        </>
    );
};