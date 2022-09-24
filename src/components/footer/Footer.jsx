import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom'
import logodark from '../../assets/images/logo/voomio_logo.png'
import logofooter from '../../assets/images/logo/voomio_logo.png'
const Footer = () => {
    const accountList = [
        {
            title: "Marketing",
            link: "/#"
        },
        {
            title: "Analytics",
            link: "/#"
        },
        {
            title: "Commerce",
            link: "/#"
        },
        {
            title: "Insights",
            link: "/#"
        },
    ]
    const resourcesList = [
        {
            title: "Pricing",
            link: "/help-center"
        },
        {
            title: "Documentation",
            link: "/live-auctions"
        },
        {
            title: "Guides",
            link: "/item-details-01"
        },
        {
            title: "API Status",
            link: "/activity-01"
        },
    ]
    const companyList = [
        {
            title: "About",
            link: "/explore-01"
        },
        {
            title: "Blog",
            link: "/contact-01"
        },
        {
            title: "Our Blog",
            link: "/Jobs"
        },
        {
            title: "Press",
            link: "/faq"
        },
        {
            title: "Partnerrs",
            link: "/faq"
        },
    ]
    const legalList = [
        {
            title: "Claim",
            link: "/faq"
        },
        {
            title: "Privacy",
            link: "/faq"
        },
        {
            title: "Terms",
            link: "/faq"
        },
    ] 
    const socialList = [

        {
            icon: "fab fa-facebook",
            link: "#"
        },
        {
            icon: "fab fa-telegram-plane",
            link: "#"
        },
        {
            icon: "fab fa-youtube",
            link: "#"
        },
        {
            icon: "icon-fl-tik-tok-2",
            link: "#"
        },
        {
            icon: "icon-fl-vt",
            link: "#"
        },
        

    ]

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

      
    return (
        <div>
            <footer id="footer" className="footer-light-style clearfix bg-style">
                <div className="themesflat-container">
                    <div className="row voomio-border-bottom">
                        <div className="col-12 voomio-pb-3 voomio-border-bottom">
                            <div className="widget widget-subcribe sign-up">
                                <h5 className="title-widget voomio-text-col1">Stay in the Loop</h5>
                                <h6 className='voomio-pb-3'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops and tips and tricks for navigating Voomio.</h6>
                                <div className="form-subcribe flex voomio-just-center">
                                    <form id="subscribe-form" action="#" method="GET" acceptCharset="utf-8" className="form-submit voomio-m-r-1 voomio-wp-70">
                                        <input name="email"  className="email" type="email" placeholder="info@yourgmail.com" required />
                                        <button id="submit" name="submit" type="submit" className='mobilesignbtn'><i className="icon-fl-send"></i></button>
                                    </form>
                                    <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3 voomio-wp-30 text-center signup-btn"><span>Sign up</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 voomio-pb-3'></div>
                        <div className="col-lg-3 col-md-12 col-12">
                            <div className="widget widget-logo">
                                <div className="logo-footer" id="logo-footer">
                                    <Link to="/">
                                        <img className='logo-dark' id="logo_footer" src={logodark} alt="nft-gaming" />
                                        <img className='logo-light' id="logo_footer" src={logofooter} alt="nft-gaming" />
                                    </Link>
                                </div>
                                <p className="sub-widget-logo">Voomio is an omni-friendly shop for buying and selling NFTs.</p>
                                <div className="widget-social style-1 mg-t32">
                                    <ul>
                                        {
                                            socialList.map((item,index) =>(
                                                <li key={index}><Link to={item.link}><i className={item.icon}></i></Link></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="widget widget-menu style-1">
                                <h5 className="title-widget">SOLUTIONS</h5>
                                <ul>
                                    {
                                        accountList.map((item,index) =>(
                                            <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="widget widget-menu style-2">
                                <h5 className="title-widget">SUPPORT</h5>
                                <ul>
                                    {
                                        resourcesList.map((item,index) =>(
                                            <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="widget widget-menu fl-st-3">
                                <h5 className="title-widget">COMPANY</h5>
                                <ul>
                                    {
                                        companyList.map((item,index) =>(
                                            <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-5 col-5">
                            <div className="widget widget-menu fl-st-3">
                                <h5 className="title-widget">LEGAL</h5>
                                <ul>
                                    {
                                        legalList.map((item,index) =>(
                                            <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='row text-center voomio-pt-20'>
                        <h6 className='voomio-end'>© 2022 Voomio, LLC. All rights reserved.</h6>
                    </div>
                </div>
            </footer>
            {
                isVisible && 
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
            }
            
            <div className="modal fade popup" id="popup_bid" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body space-y-20 pd-40">
                            <h3>Place a Bid</h3>
                            <p className="text-center">You must bid at least <span className="price color-popup">4.89 ETH</span>
                            </p>
                            <input type="text" className="form-control"
                                placeholder="00.00 ETH" />
                            <p>Enter quantity. <span className="color-popup">5 available</span>
                            </p>
                            <input type="number" className="form-control" placeholder="1" />
                            <div className="hr"></div>
                            <div className="d-flex justify-content-between">
                                <p> You must bid at least:</p>
                                <p className="text-right price color-popup"> 4.89 ETH </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p> Service free:</p>
                                <p className="text-right price color-popup"> 0,89 ETH </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p> Total bid amount:</p>
                                <p className="text-right price color-popup"> 4 ETH </p>
                            </div>
                            <Link to="#" className="btn btn-primary" data-toggle="modal" data-target="#popup_bid_success" data-dismiss="modal" aria-label="Close"> Place a bid</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Footer;
