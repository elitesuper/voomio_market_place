import authereumicon from '../images/wallet/authereum.webp'
import bitskiicon from '../images/wallet/bitski.webp'
import coinbaseicon from '../images/wallet/coinbase.webp'
import dappericon from '../images/wallet/dapper.webp'
import fortmaticicon from '../images/wallet/fortmatic.webp'
import glowicon from '../images/wallet/glow.svg'
import kaikasicon from '../images/wallet/kaikas.png'
import metamaskicon from '../images/wallet/metamask.svg'
import operatouchicon from '../images/wallet/operatouch.svg'
import phantomicon from '../images/wallet/phantom.svg'
import portisicon from '../images/wallet/portis.svg'
import solflareicon from '../images/wallet/solflare.png'
import torusicon from '../images/wallet/torus.webp'
import trusticon from '../images/wallet/trust.webp'
import venlyicon from '../images/wallet/venly.svg'
import narmiicon from '../images/wallet/narmi.svg'
import eternlicon from '../images/wallet/eternl.svg'
import geroicon from '../images/wallet/gero.svg'
import typhonicon from '../images/wallet/typhon.svg'
import flinticon from '../images/wallet/flint.svg'
import walletconnecticon from '../images/wallet/walletconnect.webp'
import { connectors } from "../../utils/connectors";



export const walletdata = [
  {
    name:"MetaMask",
    img:metamaskicon,
    avaliable:true,
    connector:connectors.injected,
    type:'popular',
    environment:'0'
  },{
    name:"Coinbase Wallet",
    img:coinbaseicon,
    avaliable:true,
    connector:connectors.coinbaseWallet,
    type:'normal',
    environment:'0'
  },{
    name:"WalletConnect",
    img:walletconnecticon,
    avaliable:true,
    connector:connectors.walletConnect,
    type:'normal',
    environment:'0'
  },{
    name:"Authereum",
    img:authereumicon,
    avaliable:true,
    connector:connectors.authereum,
    type:'normal',
    environment:'0'
  },{
    name:"Fortmatic",
    img:fortmaticicon,
    avaliable:true,
    connector:connectors.fortmatic,
    type:'normal',
    environment:'0'
  },{
    name:"Portis",
    img:portisicon,
    avaliable:true,
    connector:connectors.portis,
    type:'normal',
    environment:'0'
  },{
    name:"Nami",
    img:narmiicon,
    avaliable:false,
    type:'cardano',
    environment:'0'
  },{
    name:"Phantom",
    img:phantomicon,
    avaliable:false,
    type:'solana',
    environment:'0'
  },{
    name:"Eternl",
    img:eternlicon,
    avaliable:false,
    type:'cardano',
    environment:'0'
  },{
    name:"Flint Wallet",
    img:flinticon,
    avaliable:false,
    type:'cardano',
    environment:'0'
  },{
    name:"Gero Wallet",
    img:geroicon,
    avaliable:false,
    type:'cardano',
    environment:'0'
  },{
    name:"Typhon Wallet",
    img:typhonicon,
    avaliable:false,
    type:'cardano',
    environment:'0'
  },{
    name:"Glow",
    img:glowicon,
    avaliable:false,
    type:'solana',
    environment:'0'
  },{
    name:"Kaikas",
    img:kaikasicon,
    avaliable:false,
    type:'normal',
    environment:'0'
  },{
    name:"Bitski",
    img:bitskiicon,
    avaliable:false,
    type:'normal',
    environment:'0'
  },{
    name:"Solflare",
    img:solflareicon,
    avaliable:false,
    type:'solana',
    environment:'0'
  },{
    name:"Venly",
    img:venlyicon,
    avaliable:false,
    type:'normal',
    environment:'0'
  },{
    name:"Torus",
    img:torusicon,
    avaliable:false,
    type:'normal',
    environment:'0'
  },{
    name:"OperaTouch",
    img:operatouchicon,
    avaliable:false,
    type:'normal',
    environment:'1'
  },{
    name:"Trust",
    img:trusticon,
    avaliable:false,
    type:'normal',
    environment:'1'
  }
]
