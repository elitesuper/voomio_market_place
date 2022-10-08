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

const MyWallet: React.FC = () => {
    const { connection } = useConnection();
    let walletAddress = "";

    // if you use anchor, use the anchor hook instead
    // const wallet = useAnchorWallet();
    // const walletAddress = wallet?.publicKey.toString();

    const wallet = useWallet();
    if (wallet.connected && wallet.publicKey) {
        walletAddress = wallet.publicKey.toString()
    }

    return ( 
        <> 
        {
            wallet.connected &&
            <p>Your wallet is {walletAddress}</p> ||
            <p>Solana Wallet Connect</p>
        }
        <div className="multi-wrapper">
            <span className="button-wrapper d-flex voomio-just-center">
                <WalletModalProvider>
                    <WalletMultiButton />
                </WalletModalProvider>
            </span>
            {wallet.connected && <WalletDisconnectButton />}
        </div> 
        </>
    );
};

export default MyWallet;