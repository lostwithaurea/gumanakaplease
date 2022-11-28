import React from 'react';
import '../App';
import './css/product.css';
import './css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


function Models() {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `newPath`;
    navigate("/model1");
  };
    return (
      <div className='banner'>
      <div className="navbarr">
        <a className="navbar-brandd" href="/">MAKE IT HOME</a>
        <ul className="navbar-navv">
          <li className="nav-itemm">
            <a className="nav-linkk" href="/">Home<span className="sr-only" /></a>
          </li>
          <li className="nav-itemm">
                   <a className="nav-linkk" href="Models">Models</a>
                 </li>
          <li className="nav-itemm "> 
            <a className="nav-linkk" href="About">About</a>
          </li>
          <li className="nav-itemm "> 
            <a className="nav-linkk" href="Contact">Contact Us</a>
          </li>
       
          </ul>
        
          </div>

          <div className='photos'>
          <img src={require('./img/model1.jpg')} />
          <button className="ed-button" type="button" onClick={routeChange}> Edit</button>
          <br></br>
          <a className="ed-button" type="button" href="models2"> Next</a>
          <a className="ed-button" type="button" href="Home"> Back</a>
          <a className="ed-button" type="button" href="roofing"> Materials</a>

          <div class="description">
            <h6 class="archi">Architect: Arvin G. Alonzo</h6>
          

          </div>
         
          </div>
          </div>
    );
}

export default Models;