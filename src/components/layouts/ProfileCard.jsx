import React from "react";
import { Link } from 'react-router-dom';
import Faviconimg from '../../assets/images/icon/Favicon.png'

export function ProfileCard(props){

    return(
        <div className="sc-card-product collection-card">
            <div className="card-media">
                <Link to="/item-details-01"><img src={props.mainimg} alt="axies" /></Link>
                {!props.type&&
                <div className="faviconmark">
                    <img src={Faviconimg} alt="Faviconimg"></img>
                </div>
                }
            </div>
            <div className="card-title voomio-pl-1 voomio-just-left">
                <h5>{props.title}</h5>
                <img src={props.checkicon} alt="check_icon"></img>
            </div>
            <div className="meta-info voomio-pl-1 voomio-justend">
                <div className="info voomio-flex">
                    <span>Floor</span>
                    <h6><img src={props.etheriumicon} alt="etherium_icon"></img>{props.price}</h6>
                </div>
            </div>
        </div>
    )
}