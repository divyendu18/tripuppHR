import React, { Component } from 'react';
import './Subjects.css';

class Subjects extends Component {
    render() {
        return (
            <div className="container-fluid subjects">
                <p className="mt-3">Best SEO Company in India</p>
                <h3>Why US for SEO Services ?</h3>
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <div className="subCard">
                            <div className="subCard__top">
                                <h4>Monthly Reporting</h4>
                            </div>
                            <div className="subCard__middle">
                                <p>We share montly activity sheets that mention each and everything we do for your brand. 
                                    This keeps you in check about what's being done on your website.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                    <div className="subCard">
                    <div className="subCard__top">
                                <h4>Solid Privacy</h4>
                            </div>
                            <div className="subCard__middle">
                                <p>Other SEO Companies share link reports / keywords publically with new clients or in social media groups. 
                                    We take privacy very seriously and don't share any client info.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                    <div className="subCard">
                            <div className="subCard__top">
                                <h4>Track Record</h4>
                            </div>
                            <div className="subCard__middle">
                               <p>We've worked with more than 100 small-mid sized businesses and have helped them boost their traffic, 
                                   leads, sign-ups, trials, sales and much more. We can do that for you too !</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Subjects;