import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Verified } from "@mui/icons-material";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';

import Faviconimg from '../../assets/images/icon/Favicon.png'


export function ProfileCard(props) {

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

export function DetailCard(props) {
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

export function CollectionCard(props) {
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
      </div> <
        />
    )
}


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export function TokenCard(props){

    const [create, setCreate] = React.useState(false);

    const handleCreate = () =>{
        setCreate(!create)
    }
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
            <Card onClick={handleClickOpen} sx={{marginBottom:1}}>
                <CardMedia
                    sx={{ maxHeight: 150 }}
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
            <BootstrapDialog
            sx={{minWidth:'500px'}}
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <h4>{`#${props.tokenid}`}</h4>
                </BootstrapDialogTitle>
                <DialogContent sx={{width:'500px', height:'400px'}}>
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
                                <div className="w-100 flex voomio-just-between attribute-info mb-1">
                                    <h6>Clothers</h6>
                                    <p>Lorem Ipsum</p>
                                </div>
                                <div className="w-100 flex voomio-just-between attribute-info mb-1">
                                    <h6>Hair</h6>
                                    <p>Lorem Ipsum</p>
                                </div>
                                <div className="w-100 flex voomio-just-between attribute-info mb-1">
                                    <h6>Texture</h6>
                                    <p>Lorem Ipsum</p>
                                </div>
                                <div className="w-100 flex voomio-just-between attribute-info mb-1">
                                    <h6>Eyes</h6>
                                    <p>Lorem Ipsum</p>
                                </div>
                                <div className="w-100 flex voomio-just-between attribute-info mb-1">
                                    <h6>Mouth</h6>
                                    <p>Lorem Ipsum</p>
                                </div>
                                <div className="w-100 flex voomio-just-between attribute-info mb-1">
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
                </DialogContent>
                <div className="row">
                    <div className="row"> 
                        <div className={`btn-profile rule-btn ${create&&"rule-outlined"}`} onClick={handleCreate}>
                            <Link to="#" className="sc-button style-1 follow profile-btn profile-fill v-desktop-btn">{create?"Close":"+ Create Rule"}</Link>
                        </div>
                    </div>
                    <div className="row">
                        <Collapse className="w-100" in={create} timeout="auto" unmountOnExit>
                            <div>
                                <h4 className="spec-color-1"> Create A Rule</h4>
                                <h5>After you create a rule any existing tokens will be regenerated.</h5>
                            </div>
                            <div className="flex">

                            </div>
                        </Collapse>
                    </div>
                </div>
            </BootstrapDialog>
        </>
    )
}