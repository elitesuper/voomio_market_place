import React from "react";
import { Link } from 'react-router-dom';

import Dialog, { DialogProps } from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Verified } from "@mui/icons-material";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import {ModalFilter} from './Filter';

import Faviconimg from '../../assets/images/icon/Favicon.png'


export function ProfileCard(props:any) {

    return (
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

export function DetailCard(props:any) {
    return (
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

export function CollectionCard(props:any) {
    return ( <
        >
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


export function TokenCard(props:any){

    const [create, setCreate] = React.useState(false);

    const handleCreate = () =>{
        setCreate(!create)
    }
    
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');;

    const handleClickOpen = (scrollType:any) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return(
        <>
            <Card  onClick={handleClickOpen('body')} sx={{marginBottom:1}}>
                <CardMedia
                    component="img"
                    height="150"
                    image={props.tokenimg}
                    alt="token img"
                />
                <CardContent className="tokencard-content">
                    <Typography gutterBottom variant="h5" component="div">
                        {`#${props.tokenid}`}
                    </Typography>
                </CardContent>
            </Card>

            <Dialog
                maxWidth='md'
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">
                    <h4>{`#1267`}</h4>
                        <IconButton

                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 15,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon sx={{fontSize:'20px'}}/>
                        </IconButton>
                </DialogTitle>
                <DialogContent className="collection-modal" dividers={scroll === 'paper'} sx={{width:'700px'}}>
                <div className="row">
                    <div className="col-sm-12 col-md-5">
                        <CardMedia
                            component="img"
                            height="180"
                            image={props.tokenimg}
                            alt="token img"
                        />
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <h5>Attributes</h5>
                        <div className="mt-3">
                            <div className="w-100 flex voomio-just-between attribute-info mb-2">
                                <h6>Clothers</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="w-100 flex voomio-just-between attribute-info mb-2">
                                <h6>Hair</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="w-100 flex voomio-just-between attribute-info mb-2">
                                <h6>Texture</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="w-100 flex voomio-just-between attribute-info mb-2">
                                <h6>Eyes</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="w-100 flex voomio-just-between attribute-info mb-2">
                                <h6>Mouth</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="w-100 flex voomio-just-between attribute-info mb-2">
                                <h6>Color Background</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="w-100 flex voomio-just-between attribute-info">
                                <h6>Body</h6>
                                <p>Lorem Ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`row mt-3`}>
                    <div className="row"> 
                        <div className={`btn-profile rule-btn ${create&&"rule-outlined"} d-flex justify-content-end`}>
                            <Link onClick={handleCreate} to="#" className="sc-button style-1 follow profile-btn profile-fill spec-bcolor-2">{create?"Close":"+ Create Rule"}</Link>
                        </div>
                    </div>
                    <div className="row">
                        <Collapse in={create} timeout="auto" unmountOnExit>
                            <div>
                                <h4 className="spec-color-1 mb-2"> Create A Rule</h4>
                                <h5>After you create a rule any existing tokens will be regenerated.</h5>
                            </div>
                            <div className='row mt-3 mb-3'>
                                <ModalFilter value="Cowboy vest" />
                                <ModalFilter value="Doesn’t mix with" />
                                <ModalFilter value="Captain Hat" />
                            </div>
                        </Collapse>
                    </div>
                </div>
                </DialogContent>
            </Dialog>
        </>
    )
}