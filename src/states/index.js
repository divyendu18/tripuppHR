import React, { Component } from 'react';
import './States.css';

class States extends Component {
    render() {
        return (
            <div className="container states">
                <h3 className="mt-5 p-5">Unlimit your Business</h3>
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <div className="cardd mt-5 mb-5">
                            Uttar Pradesh
                        </div>
                        <div className="cardd mt-5 mb-5">
                            Bihar
                        </div>
                        <div className="cardd mt-5 mb-5">
                            Jharkhand
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                    <div className="cardd mt-5 mb-5">
                            West Bengal
                        </div>
                        <div className="cardd mt-5 mb-5">
                            Delhi
                        </div>
                        <div className="cardd mt-5 mb-5">
                            Punjab
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                    <div className="cardd mt-5 mb-5">
                            Haryana
                        </div>
                        <div className="cardd mt-5 mb-5">
                            Kerala
                        </div>
                        <div className="cardd mt-5 mb-5">
                            Karnataka
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default States;