import './HeroSection.css'
import {Link} from 'react-scroll'
import React, { Component } from 'react';


class HeroSection extends Component {
    
    render() {
        return (
            <div>
        <div className="hero-container">
          <h1 className="Sitetitle" >The Wing Chun Academy  </h1>
          <div className="subheading">
                  <ul className="words">
                        <li className="each-word">  Wing-Chun </li>
                        <li className="each-word"> | BJJ | </li>
                        <li className="each-word"> Fitness </li>
                  </ul>
                </div>
          <div className="hero-btns">
           <Link to="this"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500} >
                <button className="main-btn">Get Started</button>
           </Link> 
          </div>
    
        </div>
                <div className="this" ></div>
            </div>
        );
    }
}



export default HeroSection;