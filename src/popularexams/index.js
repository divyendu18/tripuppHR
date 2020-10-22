import React, { Component } from 'react';
import './Exams.css';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

class Exams extends Component {
    render() {
        return (
            <div className="container-fluid exams">
                <h3 className="col-xs-12 col-md-6 mt-5 mb-5 p-5 " >Popular Exams</h3>
                <div className="row">
                    <div className="col-xs-12 col-md-3 mb-5">
                        <div className="examCard">
                            <h1>JEE</h1>
                            <h5 id="examContent"><DoneAllIcon/>Test Series</h5>
                            <h5><DoneAllIcon/>Test Series</h5>
                            <h5><DoneAllIcon/>Test Series</h5>
                            <p className="exam_bottom"><AttachMoneyIcon/>12000</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-3 mb-5">
                    <div className="examCard">
                    <h1>JEE</h1>
                            <h5 id="examContent"><DoneAllIcon/>Test Series</h5>
                            <h5><DoneAllIcon/>Test Series</h5>
                            <h5><DoneAllIcon/>Test Series</h5>
                            <p className="exam_bottom"><AttachMoneyIcon/>12000</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-3 mb-5">
                    <div className="examCard">
                    <h1>JEE</h1>
                            <h5 id="examContent"><DoneAllIcon/>Test Series</h5>
                            <h5><DoneAllIcon/>Test Series</h5>
                            <h5><DoneAllIcon/>Test Series</h5>
                            <p className="exam_bottom"><AttachMoneyIcon/>12000</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-3 mb-5">
                    <div className="examCard">
                    <h1>JEE</h1>
                            <h5 id="examContent"><DoneAllIcon/>Test Series</h5>
                            <h5><DoneAllIcon/>Test Series</h5>
                            <h5><DoneAllIcon/>Test Series</h5>
                            <p className="exam_bottom"><AttachMoneyIcon/>12000</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Exams;