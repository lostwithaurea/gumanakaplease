import React from 'react';
import './css/style.css';
import './css/bootstrap.min.css';
import './Contact';
import './about';
import './Models';

class Home extends React.Component{
    render(){
        return( 
        <div>
        <header>
            <div className='banner'>
          <div className="navbarr">
            <a className="navbar-brandd" href="/">MAKE IT HOME</a>
            <ul className="navbar-navv">
              <li className="nav-itemm">
                <a className="nav-linkk" href="/">Home<span className="sr-only" /></a>
              </li>
              <li className="nav-itemm">
                <a className="nav-linkk" href="models">Models</a>
              </li>
              <li className="nav-itemm "> 
                <a className="nav-linkk" href="about">About</a>
              </li>
              <li className="nav-itemm "> 
                <a className="nav-linkk" href="contact">Contact Us</a>
              </li>
         
            </ul>
          </div>
          </div>
        </header>
        <main>
        <section className="homepage">
            <div className="content">
              <h1>MAKE<br /><span>IT</span> <br />HOME</h1>
              <p className="par">Create Your Dream Home <br /> Design your Dream Home with the use of 3D Editor</p>
            </div>
          </section>
        </main>
      </div>

        );
    }
}

export default Home;