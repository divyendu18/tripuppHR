import React, { Component } from 'react';
import './Exams.css';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

class Exams extends Component {
    render() {
        return (
            <div className="container exams">
                <h3 className="col" style={{margin:"2em 0em",textAlign:"center"}}>Popular Packages</h3>
                <div className="row">
                    <div className="col-xs-12 col-md-4 mb-5">
                        <div className="examCard">
                            <h1>Enterprise</h1>
                            <h5 id="examContent"><AttachMoneyIcon/>200/perMonth</h5>
                            <p className="exam_bottom">Proposal</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4 mb-5">
                    <div className="examCard">
                    <h1>Silver Plan</h1>
                            <h5 id="examContent"><AttachMoneyIcon/>75/perMonth</h5>
                            <p className="exam_bottom">Proposal</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4 mb-5">
                    <div className="examCard">
                    <h1>Gold Plan</h1>
                    <h5 id="examContent"><AttachMoneyIcon/>100/perMonth</h5>
                            <p className="exam_bottom">Proposal</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Exams;