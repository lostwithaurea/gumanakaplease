import React from 'react';
import '../App';
import './css/style.css';

function About() {
    return (
   
        
            <div className='banner'>
          <div className="navbarr">
            <a className="navbar-brandd" href="/">MAKE IT HOME</a>
            <ul className="navbar-navv">
              <li className="nav-itemm">
                <a className="nav-linkk" href="/">Home<span className="sr-only" /></a>
              </li>
              <li className="nav-itemm">
                <a className="nav-linkk" href="/models">Models</a>
              </li>
              <li className="nav-itemm "> 
                <a className="nav-linkk" href="/about">About</a>
              </li>
           
              <li className="nav-itemm "> 
                <a className="nav-linkk" href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          

        <center>
          <div className="about">
          <h1>Keep Moving Forward!</h1>
          <p>At Make it Home, we believe everyone deserves to have a wonderful desgin when ti comes to their houses.</p>
          <p>Innovation and simplicity makes us very happy. We really want to remove any home owner problems when it comes to their house designs.</p>
          <p>We're excited excited to help you on your journey. Let's have a Happy Home Together!</p>
          <p>We are a team consisting of a students from Batangas State University that has a passion for making everyone's life easier.</p>
          </div>
        </center>

</div>

    );
}

export default About;