import React, { Component } from 'react';
import './Testimonials.css';

class Testimonials extends Component {
    render() {
        return (
            <div className="container-fluid testimonial">
                <h3 className="col-xs-12 col-md-6 mt-5 p-5">Experts Views</h3>
                <div className="row">
                    <div className="col-xs-12 col-md-3">
                        <div className="testCard">
                        <div className="testCard__top">
                        <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" id="avatar"/>
                            </div>
                                 <div className="testCard__bottom">
                                    <p className="test_card">This is a very nice platform to learn and grow.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-3">
                    <div className="testCard">
                    </div>
                        <div className="testCard__bottom">
                        <p className="test_card">This is a very nice platform to learn and grow.</p>

                            </div>
                    <div className="testCard__top">
                                <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" id="avatar"/>
                     </div>
                    </div>
                    <div className="col-xs-12 col-md-3">
                    <div className="testCard">
                    <div className="testCard__top">
                    <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" id="avatar"/>
                            </div>
                                 <div className="testCard__bottom">
                                 <p className="test_card">This is a very nice platform to learn and grow.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-3">
                    <div className="testCard">
                                 <div className="testCard__bottom">
                                 <p className="test_card">This is a very nice platform to learn and grow.</p>
                            </div>
                            <div className="testCard__top">
                            <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" id="avatar"/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Testimonials;