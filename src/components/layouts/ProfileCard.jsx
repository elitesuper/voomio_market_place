import React from "react";
import { Link } from 'react-router-dom';
import Faviconimg from '../../assets/images/icon/Favicon.png'
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Verified } from "@mui/icons-material";

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
            <div className="meta-info voomio-pl-1 voomio-just-between">
                <div className="profileinfo">
                {
                  !props.type&&
                  <span className="color-spec-1 tag">#111559</span>
                }
                </div>
                <div className="info voomio-flex profileinfo">
                    <span>Floor</span>
                    <h6><img src={props.etheriumicon} alt="etherium_icon"></img>{props.price}</h6>
                </div>
            </div>
        </div>
    )
}

export function DetailCard(props){
    return(
        <div className="sc-card-product detail-card">
            <div className="card-media">
                <Link to="/item-details-01"><img src={props.mainimg} alt="axies" /></Link>
            </div>
            <div className="flex voomio-just-between">
                <div className="card-title detail-card-title">
                    <div className="flex"><h4 className="voomio-py-1 spec-color-1">{props.title}</h4><Verified className="verified-icon voomio-mta"/></div>
                    <h3 className="voomio-pb-1">{props.cardid}</h3>
                    <h6>Owned by <span className="spec-color-1">{props.auth}</span></h6>
                </div>
                <div className="meta-info voomio-pl-1 voomio-justend detail-card-meta">
                    <div>
                        <div className="info voomio-flex voomio-py-1">
                            <VisibilityIcon className="detail-meta-icon"/>
                            <h6>{props.view}<span> views</span></h6>
                        </div>
                        <div className="info voomio-flex">
                            <FavoriteBorderIcon className="detail-meta-icon"/>
                            <h6>{props.favor}<span> favorites</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function CollectionCard(props){
  return(
    <>
      <div className="slider-item">
          <div className="sc-card-collection collection-card">
              <Link to="/authors-01">
                  <div className="media-images-box">
                      <img src={props.imgtop} alt="Axies" />
                  </div>
              </Link>
              <div className="card-bottom collection-card-bottom">
                  <div className="author">
                      <div className="sc-author-box style-2">
                          <div className="author-avatar">
                              <img src={props.imgAuthor} alt="Axies" className="avatar" />
                              <div className="badge"><i className="ripple"></i></div>
                          </div>
                      </div>
                      <div className="content">
                          <h4><Link to="/authors-01">{props.title}</Link></h4>
                          <div className="infor">
                              <span>Created by</span>
                              <span className="name"><Link to="/authors-01">{props.name}</Link></span>
                          </div>
                      </div>
                  </div>
                  {/* <Link to="/login" className="wishlist-button public heart"><span className="number-like">{props.item.wishlist}</span></Link> */}
              </div>
          </div>
      </div>
    </>
  )
}
