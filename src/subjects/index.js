import React, { Component } from 'react';
import './Subjects.css';

class Subjects extends Component {
    render() {
        return (
            <div className="container-fluid subjects">
                <h3 className="mt-5 p-5">Learn with Edutech...</h3>
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <div className="subCard">
                            <div className="subCard__top">
                                <img src="https://i.pinimg.com/originals/00/c5/37/00c537bdf08547f031540521892e5aa7.gif" alt="" 
                                className="img"/>
                                <h4>Coding</h4>
                            </div>
                            <div className="subCard__middle">
                                <h5>Concentration and logical thinking</h5>
                                <h5>Concentration and logical thinking</h5>
                            </div>
                            <div className="subCard__bottom">
                                <h5>Explore Coding</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                    <div className="subCard">
                    <div className="subCard__top">
                                <img src="https://thumbs.gfycat.com/SpottedHoarseInvisiblerail-max-1mb.gif" alt="" 
                                className="img"/>
                                <h4>Science</h4>
                            </div>
                            <div className="subCard__middle">
                                <h5>Concentration and logical thinking</h5>
                                <h5>Concentration and logical thinking</h5>
                            </div>
                            <div className="subCard__bottom">
                                <h5>Explore Science</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                    <div className="subCard">
                            <div className="subCard__top">
                                <h4>Maths</h4>
                            </div>
                            <div className="subCard__middle">
                                <h5>Concentration and logical thinking</h5>
                                <h5>Concentration and logical thinking</h5>
                            </div>
                            <div className="subCard__bottom">
                                <h5>Explore Maths</h5>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Subjects;