import React from 'react';
import '../App';
import './css/product.css';
import './css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


function Models5() {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `newPath`;
    navigate("/model5");
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

          <div className='photos'>
          <img src={require('./img/model5.png')} />
          <button className="ed-button" type="button" onClick={routeChange}> Edit</button>
          <br></br>
          <a className="ed-button" type="button" href="models6"> Next</a>
          <a className="ed-button" type="button" href="Models4"> Back</a>
          <a className="ed-button" type="button" href="roofing5"> Materials</a>
          <div class="description">
            <h6 class="archi">Architect: Arvin G. Alonzo</h6>
          

          </div>
         
          </div>
          </div>
    );
}

export default Models5;