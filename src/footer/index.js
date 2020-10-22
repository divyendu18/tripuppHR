import React, { Component } from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid footer p-5">
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <div className="footCard"><h1 className="footer_head">EduTech</h1></div>
                        </div>
                    <div className="col-xs-12 col-md-2">
                        <div className="footCard">
                           <div className="footCard__top">
                                <h5>EduTech</h5>
                            </div>
                            <div className="footCard__bottom">
                                <li className="foot_list">About us</li>
                                <li className="foot_list">Blogs</li>
                                <li className="foot_list">Privacy Policy</li>
                                <li className="foot_list">Refund Policy</li>
                             </div>
                        </div>
                      
                    </div>
                    <div className="col-xs-12 col-md-2">
                        <div className="footCard">
                           <div className="footCard__top">
                                <h5>Services</h5>
                            </div>
                            <div className="footCard__bottom">
                            <li className="foot_list">Courses</li>
                                <li className="foot_list">Preparation</li>
                                <li className="foot_list">Classes</li>
                                <li className="foot_list">Events</li>
                             </div>
                        </div>
                      
                    </div>
                    <div className="col-xs-12 col-md-2">
                        <div className="footCard">
                           <div className="footCard__top">
                                <h5>Contact Us</h5>
                            </div>
                            <div className="footCard__bottom">
                                <li className="foot_list">118028388956976</li>
                                <li className="foot_list">cont@edutech.com</li>
                                
                             </div>
                        </div>
                      
                    </div>
                    <div className="col-xs-12 col-md-2">
                        <div className="footCard">
                           <div className="footCard__top">
                                <h5>Follow us on</h5>
                            </div>
                            <div className="footCard__bottom">
                            <li className="foot_icon"><InstagramIcon/><FacebookIcon/></li>
                             </div>
                        </div>
                      
                    </div>
                    
                </div>
                </div>
        )
    }
}
export default Footer;