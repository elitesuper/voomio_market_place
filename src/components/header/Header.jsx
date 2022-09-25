import React , { useRef , useState , useEffect } from 'react';
import { Link , useLocation } from "react-router-dom";
import menus from "../../pages/menu";
import DarkMode from './DarkMode';
import voomio_logo from '../../assets/images/logo/voomio_logo.png'
import voomio_logo2x from '../../assets/images/logo/voomio_logo@2x.png'

// import Web3 from "web3"
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

let web3Modal;
let provider;
let selectedAccount;

function init() {
    const providerOptions = {
        walletconnect: {
        package: WalletConnectProvider,
        options: {
            networ:'rinkeby',
            rpc: {
                4:"https://rinkeby.infura.io/v3/"
            },
            chainId:4
        }
        },           
    };

    web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions // required
    });

    window.w3m = web3Modal;
}

async function fetchAccountData() {
    const web3Provider = new ethers.providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();
    selectedAccount = await signer.getAddress();
    console.log(selectedAccount);    
    return selectedAccount;
}

async function refreshAccountData() {
    await fetchAccountData(provider);
    window.location.reload();
}

async function onConnect() {
    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect({ cacheProvider: true });
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }

    provider.on("accountsChanged", (accounts) => {
        console.log('chainchan',accounts)
        fetchAccountData();
        window.location.reload();
    });

    provider.on("chainChanged", (chainId) => {
        fetchAccountData();
        window.location.reload();
    });

    provider.on("networkChanged", (networkId) => {
        fetchAccountData();
        window.location.reload();
    });
    // window.location.reload()

    await refreshAccountData();
}

async function disconnet() {
    console.log("Opening a dialog", web3Modal);
    try {
        // provider = await web3Modal.connect();
        await web3Modal.clearCachedProvider();
        // await window.ethereum.disable()
        window.location.reload()
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }   
}

const Header = (props) => {
    const { pathname } = useLocation();

    const headerRef = useRef (null);
// ********************************Wallet Connection********************************
    const [acc,setacc] = useState()
    const [accountid, setaccountid] = useState();
    const [web3, setWeb3] = useState();

     
    // // iniit web3 provider
    // useEffect(async () => {
    //     if (acc) {
    //         // const accounts1 = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //         // setaccountid(accounts1[0])
    //         provider = await web3Modal.connect();
    //         let web3_2 = new Web3(provider);
    //         const accounts = await web3_2.eth.getAccounts();
    //         setWeb3(web3_2);
    //         props.setWeb3Api(web3_2);
    //         setaccountid(accounts[0]);
    //         props.setAccount(accounts[0]);
    //         setProviderEvent();
    //     }

    // }, [acc]);
    useEffect(() => {
        init();
        getAccount();
        if (web3Modal.cachedProvider) {
            setacc(true)
        }
    }, []); 

    function setProviderEvent() {
        provider.on("accountsChanged", (accounts) => {
            console.log('chainchan',accounts)
            fetchAccountData();
            window.location.reload();
        });
    
        provider.on("chainChanged", (chainId) => {
            fetchAccountData();
            window.location.reload();
        });
    
        provider.on("networkChanged", (networkId) => {
            fetchAccountData();
        });
    }

    async function getAccount() {
        // const web3_2 = new Web3(window.ethereum, null, { transactionConfirmationBlocks: 1 })
        if (window.ethereum) {
            // request change chain
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x04' }],
                });
            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        const data = [{
                            chainId: '0x01',
                            chainName: 'Ethereum Chain',
                            nativeCurrency: {
                            name: 'ETH',
                            symbol: 'ETH',
                            decimals: 18,
                            },
                            rpcUrls: ['https://mainnet.infura.io/v3/'],
                            blockExplorerUrls: ['https://etherscan.io'],
                        }]

                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: data,
                        });
                    } catch (addError) {
                        
                    }
                }
            }
        } 
    }

    /****************************  wallet connection end *************************/

    /**************************  get all tokens for wallet ***********************/
    const [tokensSmall, setTokensSmall] = useState();
    const [tokensMedium, setTokensMedium] = useState();
    const [tokensLarge, setTokensLarge] = useState();

    const getAllTokens = async () => {
         //Paths of Json File
         const nftContratFile = await fetch("/abis/BGLandNFT.json");
         //Convert all to json
         const convertNftContratFileToJson = await nftContratFile.json();
         //Get The ABI
         const nFTAbi = convertNftContratFileToJson.abi;
         const netWorkId = await web3.eth.net.getId();
         const nftNetWorkObject = convertNftContratFileToJson.networks[netWorkId];        

         if (nftNetWorkObject) {
             const nftAddress = nftNetWorkObject.address;
             console.log('nftAddress -- ', nftAddress);
             const deployedNftContract = await new web3.eth.Contract(nFTAbi, nftAddress);
             const tokensSmall = await deployedNftContract.methods.readTokenIdsByType(accountid, 's').call();
             const tokensMedium = await deployedNftContract.methods.readTokenIdsByType(accountid, 'm').call();
             const tokensLarge = await deployedNftContract.methods.readTokenIdsByType(accountid, 'l').call();
             setTokensSmall(tokensSmall);
             setTokensMedium(tokensMedium);
             setTokensLarge(tokensLarge);
             
         } else {
             window.alert("You are at Wrong Netweok, Connect with Rinkeby Please")
         }
    }

    // useEffect(() => {
    //     web3 && getAllTokens();
    // }, [modalShow]);

// *******************************************wallet connection end**************************
    useEffect(() => {
        init();
    }, []); 
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const header = document.querySelector('.js-header');
        const scrollTop = window.scrollY;
        scrollTop >= 300 ? header.classList.add('is-fixed') : header.classList.remove('is-fixed');
        scrollTop >= 400 ? header.classList.add('is-small') : header.classList.remove('is-small');
    };

    const menuLeft = useRef(null)
    const btnToggle = useRef(null)
    const btnSearch = useRef(null)

    const menuToggle = () => {
        menuLeft.current.classList.toggle('active');
        btnToggle.current.classList.toggle('active');
    }

    const searchBtn = () => {
        btnSearch.current.classList.toggle('active');
    }

    const [activeIndex, setActiveIndex] = useState(null);
    const handleOnClick = index => {
        setActiveIndex(index); 
    };

    return (
        <header id="header_main" className="header_1 js-header" ref={headerRef}>
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">                              
                        <div id="site-header-inner"> 
                            <div className="wrap-box flex">
                                <div id="site-logo" className="clearfix">
                                    <div id="site-logo-inner">
                                        <Link to="/" rel="home" className="main-logo">
                                            <img className='logo-dark'  id="logo_header" src={voomio_logo} srcSet={`${voomio_logo2x}`} alt="nft-gaming" />
                                            <img className='logo-light'  id="logo_header" src={voomio_logo} srcSet={`${voomio_logo2x}`} alt="nft-gaming" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="mobile-button" ref={btnToggle} onClick={menuToggle}><span></span></div>
                                <nav id="main-nav" className="main-nav" ref={menuLeft} >
                                    <ul id="menu-primary-menu" className="menu">
                                        {
                                            menus.map((data,index) => (
                                                <li key={index} onClick={()=> handleOnClick(index)} className={`menu-item ${data.namesub ? 'menu-item-has-children' : '' } ${activeIndex === index ? 'active' : ''} ` }   >
                                                    <Link to={data.links}>{data.name}</Link>
                                                    {
                                                         data.namesub &&
                                                         <ul className="sub-menu" >
                                                            {
                                                                data.namesub.map((submenu) => (
                                                                    <li key={submenu.id} className={
                                                                        pathname === submenu.links
                                                                        ? "menu-item current-item"
                                                                        : "menu-item"
                                                                    }><Link to={submenu.links}>{submenu.sub}</Link></li>
                                                                ))
                                                            }
                                                        </ul>
                                                    }
                                                    
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </nav>
                                <div className="flat-search-btn flex">
                                    <div className="header-search flat-show-search" id="s1">
                                        <Link to="#" className="show-search header-search-trigger" onClick={searchBtn}>
                                            <i className="far fa-search"></i>
                                        </Link>
                                        <div className="top-search" ref={btnSearch}>
                                            <form action="#" method="get" role="search" className="search-form">
                                                <input type="search" id="s" className="search-field" placeholder="Search..." name="s" title="Search for" required="" />
                                                <button className="search search-submit" type="submit" title="Search">
                                                    <i className="icon-fl-search-filled"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="sc-btn-top mg-r-12" id="site-header">
                                        <button onClick={onConnect} className="sc-button header-slider style style-1 wallet fl-button pri-1"><span>Wallet connect
                                        </span></button>
                                    </div>

                                    <div className="admin_active" id="header_admin">
                                        <div className="header_avatar">
                                            <div className="price">
                                                <span>2.45 <strong>ETH</strong> </span>
                                            </div>
                                            <img
                                                className="avatar"
                                                src="avatar"
                                                alt="avatar"
                                                />
                                            <div className="avatar_popup mt-20">
                                                <div className="d-flex align-items-center copy-text justify-content-between">
                                                    <span> 13b9ebda035r178... </span>
                                                    <Link to="/" className="ml-2">
                                                        <i className="fal fa-copy"></i>
                                                    </Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-10">
                                                    <img
                                                        className="coin"
                                                        src="imgsun"
                                                        alt="/"
                                                        />
                                                    <div className="info ml-10">
                                                        <p className="text-sm font-book text-gray-400">Balance</p>
                                                        <p className="w-full text-sm font-bold text-green-500">16.58 ETH</p>
                                                    </div>
                                                </div>
                                                <div className="hr"></div>
                                                <div className="links mt-20">
                                                    <Link to="#">
                                                        <i className="fab fa-accusoft"></i> <span> My items</span>
                                                    </Link>
                                                    <a className="mt-10" href="/edit-profile">
                                                        <i className="fas fa-pencil-alt"></i> <span> Edit Profile</span>
                                                    </a>
                                                    <a className="mt-10" href="/login" id="logout">
                                                        <i className="fal fa-sign-out"></i> <span> Logout</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <DarkMode />
        </header>
    );
}

export default Header;
