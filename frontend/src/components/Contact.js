import '../App';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './css/form.css';


export const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_4j072ry', 'template_i88ypc4', form.current, '-CErZVE55m3ETpe7X')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
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
    <form ref={form} onSubmit={sendEmail}>
    <text>Name</text>
    <input type="text" name="user_name" />
    <text>Email</text>
    <input type="email" name="user_email" />
    <text>Message</text>
    <textarea name="message" />
    <br></br>
    <input type="submit" value="Send" />
  </form>
  </center>
   
  </div>
  
)
}
  


export default Contact;
  




