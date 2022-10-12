import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

import { useWeb3React } from "@web3-react/core";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
    getLedgerWallet,
    getPhantomWallet,
    getSlopeWallet,
    getSolflareWallet,
    getSolletExtensionWallet,
    getSolletWallet,
    getTorusWallet,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

import CardanoWallet from "./CardanoWallet";

import SolanaWallet from "./SolanaWallet";

import { walletdata } from '../../assets/fake-data/data-wallets';



export default function WalletConnectModal(props) {

    // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
    const network = WalletAdapterNetwork.Mainnet;

    // You can also provide a custom RPC endpoint
    const endpoint = React.useMemo(() => clusterApiUrl(network), [network]);

    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
    // Only the wallets you configure here will be compiled into your application
    const wallets = React.useMemo(
        () => [
            getPhantomWallet(),
            getSlopeWallet(),
            getSolflareWallet(),
            getLedgerWallet(),
            getSolletWallet({ network }),
            getSolletExtensionWallet({ network }),
            getTorusWallet(),
        ],
        [network]
    );

    const getLibrary = (provider) => {
        const library = new ethers.providers.Web3Provider(provider);
        library.pollingInterval = 8000; // frequency provider is polling
        return library;
    };


    const [visible, setVisible] = useState(6);
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

              <Web3ReactProvider getLibrary={getLibrary}>
                <Web3ReactWalletList />
              </Web3ReactProvider>

              <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets}>
                    <SolanaWallet />
                </WalletProvider>
              </ConnectionProvider>

              <CardanoWallet walletdata={walletdata.filter(item => item.type === 'cardano')}/>
            </List>
          </DialogContent>
          <DialogActions>
            <Button className="voomio-w-btn" variant="outlined" onClick={props.onHide}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}


export function Web3ReactWalletList(props) {

    const { activate } = useWeb3React();

    return ( 
      <> {
            walletdata.filter(item => item.type === 'web3react').map((item, index) => (
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
            ))
        } </>
    )
}