import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './landingPage';
import Courses from './courses';
import States from './states';
import Exams from './popularexams';
import Subjects from './subjects';
import Testimonials from './testimonials';
import Footer from './footer';
import Success from './success';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Landing/>
        <Success/>
        <Courses/>
        <States/>
        <Exams/>
        <Subjects/>
        <Testimonials/>
        <Footer/>
      </div>
    )
  }
}

export default App;