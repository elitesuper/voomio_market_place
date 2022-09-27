import React , { useRef , useState , useEffect } from 'react';
import { Link , useLocation } from "react-router-dom";
import { Modal } from "react-bootstrap";
import menus from "../../pages/menu";
import DarkMode from './DarkMode';
import voomio_logo from '../../assets/images/logo/voomio_logo.png'
import voomio_logo2x from '../../assets/images/logo/voomio_logo@2x.png'

import img1 from '../../assets/images/avatar/ic_land_1.png'
import img2 from '../../assets/images/avatar/ic_land_2.png'
import img3 from '../../assets/images/avatar/ic_land_3.png'

import Web3 from 'web3';
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
        cacheProvider: true,
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

const HeaderStyle2 = (props) => {


    const [modalShow, setModalShow] = useState(false);

   /*****************************  wallet connection ***************************/
   const [acc,setacc] = useState()
   const [accountid, setaccountid] = useState();
   const [web3, setWeb3] = useState();

   // iniit web3 provider
   useEffect(async () => {
       if (acc) {
           // const accounts1 = await window.ethereum.request({ method: 'eth_requestAccounts' });
           // setaccountid(accounts1[0])
           provider = await web3Modal.connect();
           let web3_2 = new Web3(provider);
           const accounts = await web3_2.eth.getAccounts();
           setWeb3(web3_2);
           props.setWeb3Api(web3_2);
           setaccountid(accounts[0]);
           props.setAccount(accounts[0]);
           setProviderEvent();
       }

   }, [acc]);

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

    useEffect(() => {
        web3 && getAllTokens();
    }, [modalShow]);
//***************************************************************** */

    const { pathname } = useLocation();

    const headerRef = useRef (null)
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    useEffect(() => {
        init();
    }, []);
    const isSticky = (e) => {
        const header = document.querySelector('.js-header');
        const scrollTop = window.scrollY;
        scrollTop >= 300 ? header.classList.add('is-fixed') : header.classList.remove('is-fixed');
        scrollTop >= 400 ? header.classList.add('is-small') : header.classList.remove('is-small');
    };

    const menuLeft = useRef(null)
    const btnToggle = useRef(null)

    const menuToggle = () => {
        menuLeft.current.classList.toggle('active');
        btnToggle.current.classList.toggle('active');
    }



    let totalNfts = tokensSmall?.length + tokensMedium?.length + tokensLarge?.length;


    const [activeIndex, setActiveIndex] = useState(null);
    const handleOnClick = index => {
        setActiveIndex(index);
    };


    const onHideModal = () => {
        setModalShow(false);
    }

    return (
        <header id="header_main" className="header_1 header_2 style2 js-header" ref={headerRef}>
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="site-header-inner">
                            <div className="wrap-box flex">
                                <div id="site-logo" className="clearfix">
                                    <div id="site-logo-inner">
                                        <Link to="/" rel="home" className="main-logo">
                                            <img className='logo_header' id='logo_header' src={voomio_logo} srcSet={`${voomio_logo2x}`} alt="voomio"></img>
                                        </Link>
                                    </div>
                                </div>
                                <div className="mobile-button" ref={btnToggle} onClick={menuToggle}><span></span></div>
                                <div className="question-form">
                                    <form action="#" method="get">
                                        <input type="text" placeholder="Type to search..." required />
                                        <button type="submit">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_334_638"  maskUnits="userSpaceOnUse" x="1" y="1" width="18" height="17">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M1.66699 1.66666H17.6862V17.3322H1.66699V1.66666Z" fill="white" stroke="white"/>
                                                </mask>
                                                <g mask="url(#mask0_334_638)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.67711 2.87312C5.9406 2.87312 2.90072 5.84505 2.90072 9.49903C2.90072 13.153 5.9406 16.1257 9.67711 16.1257C13.4128 16.1257 16.4527 13.153 16.4527 9.49903C16.4527 5.84505 13.4128 2.87312 9.67711 2.87312ZM9.67709 17.3322C5.26039 17.3322 1.66699 13.8182 1.66699 9.49902C1.66699 5.17988 5.26039 1.66666 9.67709 1.66666C14.0938 1.66666 17.6864 5.17988 17.6864 9.49902C17.6864 13.8182 14.0938 17.3322 9.67709 17.3322Z" fill="white"/>
                                                <path d="M9.67711 2.37312C5.67512 2.37312 2.40072 5.55836 2.40072 9.49903H3.40072C3.40072 6.13174 6.20607 3.37312 9.67711 3.37312V2.37312ZM2.40072 9.49903C2.40072 13.4396 5.67504 16.6257 9.67711 16.6257V15.6257C6.20615 15.6257 3.40072 12.8664 3.40072 9.49903H2.40072ZM9.67711 16.6257C13.6784 16.6257 16.9527 13.4396 16.9527 9.49903H15.9527C15.9527 12.8664 13.1472 15.6257 9.67711 15.6257V16.6257ZM16.9527 9.49903C16.9527 5.5584 13.6783 2.37312 9.67711 2.37312V3.37312C13.1473 3.37312 15.9527 6.1317 15.9527 9.49903H16.9527ZM9.67709 16.8322C5.52595 16.8322 2.16699 13.5316 2.16699 9.49902H1.16699C1.16699 14.1048 4.99484 17.8322 9.67709 17.8322V16.8322ZM2.16699 9.49902C2.16699 5.46656 5.52588 2.16666 9.67709 2.16666V1.16666C4.9949 1.16666 1.16699 4.8932 1.16699 9.49902H2.16699ZM9.67709 2.16666C13.8282 2.16666 17.1864 5.46649 17.1864 9.49902H18.1864C18.1864 4.89327 14.3593 1.16666 9.67709 1.16666V2.16666ZM17.1864 9.49902C17.1864 13.5316 13.8282 16.8322 9.67709 16.8322V17.8322C14.3594 17.8322 18.1864 14.1047 18.1864 9.49902H17.1864Z" fill="white"/>
                                                </g>
                                                <mask id="mask1_334_638"  maskUnits="userSpaceOnUse" x="13" y="13" width="6" height="6">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M14.2012 14.2999H18.3333V18.3333H14.2012V14.2999Z" fill="white" stroke="white"/>
                                                </mask>
                                                <g mask="url(#mask1_334_638)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M17.7166 18.3333C17.5596 18.3333 17.4016 18.2746 17.2807 18.1572L14.3823 15.3308C14.1413 15.0952 14.1405 14.7131 14.3815 14.4774C14.6217 14.2402 15.0123 14.2418 15.2541 14.4758L18.1526 17.303C18.3935 17.5387 18.3944 17.9199 18.1534 18.1556C18.0333 18.2746 17.8746 18.3333 17.7166 18.3333Z" fill="white"/>
                                                <path d="M17.7166 18.3333C17.5595 18.3333 17.4016 18.2746 17.2807 18.1572L14.3823 15.3308C14.1413 15.0952 14.1405 14.7131 14.3815 14.4774C14.6217 14.2402 15.0123 14.2418 15.2541 14.4758L18.1526 17.303C18.3935 17.5387 18.3944 17.9199 18.1534 18.1556C18.0333 18.2746 17.8746 18.3333 17.7166 18.3333" stroke="white"/>
                                                </g>
                                                </svg>
                                        </button>
                                        <div className="seclect-box style3 voomio-pl-1 header-selector">
                                            <div id="artworks" className="dropdown">
                                                <Link to="#" className="btn-selector nolink voomio-select">ETH</Link>
                                                <ul className='voomio-zindex'>
                                                    <li><span>Polygon</span></li>
                                                    <li><span>ADA</span></li>
                                                    <li><span>SOL</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <nav id="main-nav" className="main-nav" ref={menuLeft} >
                                    <ul id="menu-primary-menu" className="menu">
                                        {
                                            menus.map((data,index) => (
                                                <li key={index} onClick={()=> handleOnClick(index)} className={`menu-item ${data.namesub ? 'menu-item-has-children' : '' } ${activeIndex === index ? 'active' : ''} ` }   >
                                                    <Link to="#">{data.name}</Link>
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
                                    {
                                        !accountid ? <div className="sc-btn-top mg-r-12" id="site-header">
                                        <button onClick={onConnect} className="sc-button header-slider style style-1 wallet fl-button pri-1"><span>Wallet connect
                                        </span></button>
                                        </div> : <div className="sc-btn-top mg-r-12" id="site-header">
                                        <button onClick={()=> setModalShow(true)} className="sc-button header-slider style style-1 fl-button pri-1"><span>{accountid?.substr(0, 6) + '....' + accountid?.substr(accountid?.length - 4, accountid?.length)}
                                        </span></button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DarkMode />
            <Modal
                show={modalShow}
                onHide={onHideModal}
            >
                <Modal.Header closeButton></Modal.Header>

                <div className="modal-body space-y-20 pd-40">
                <h2>My Account</h2>
                    <div className="" id="header_admin">

                        <div className="header_avatar">
                            <div className="flex justify-content-between">
                                <span className='fs-16'> {accountid?.substr(0, 6) + '....' + accountid?.substr(accountid?.length - 4, accountid?.length)}</span>
                                <i className="fal fa-copy fs-16"></i>
                            </div>
                            {/* <img
                                className="avatar"
                                src={avt}
                                alt="avatar"
                                /> */}
                            <div className="avatar_popup mt-20">
                                <div className="d-flex align-items-center copy-text justify-content-between">

                                </div>
                                <div className='item-title'>
                                    <span className='fs-18'> My Land NFTs ( {totalNfts} )</span>
                                </div>
                                <div style={{minHeight:180}} className='col-md-12 flex mg-t-10'>
                                    {
                                        <div className='col-md-4 nft-item-wrap'>
                                            {tokensSmall?.map(tokenid=> (
                                                <div className='mg-t-10'>
                                                    <img src={img1} className='ic-nft-item'></img>
                                                    <span className='fs-16'>Small #{tokenid}</span>
                                                </div>
                                            ))}
                                        </div>
                                    }

                                    {
                                        <div className='col-md-4 nft-item-wrap'>
                                            {tokensMedium?.map(tokenid=> (
                                                <div className='mg-t-10'>
                                                    <img src={img2} className='ic-nft-item'></img>
                                                    <span className='fs-16'>Medium #{tokenid}</span>
                                                </div>
                                            ))}
                                        </div>
                                    }

                                    {
                                        <div className='col-md-4 nft-item-wrap'>
                                            {tokensLarge?.map(tokenid=> (
                                                <div className='mg-t-10'>
                                                    <img src={img3} className='ic-nft-item'></img>
                                                    <span className='fs-16'>Large #{tokenid}</span>
                                                </div>
                                            ))}
                                        </div>
                                    }

                                </div>
                                <div className="hr"></div>
                                <div className='card-bottom flex justify-content-center'>
                                    {/* <button className="mt-10" href="/edit-profile">
                                        <i className="fas fa-pencil-alt"></i> <span> Edit Profile</span>
                                    </button> */}
                                    <button onClick={()=> disconnet()} id="logout" className='mt-10'>
                                        <i className="fal fa-sign-out"></i> <span>{'  '} Logout</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </header>
    );
}

export default HeaderStyle2;
