import  { Link } from 'react-router-dom';
import picture from './images/Human.png';
import footer_1 from './images/linkedin.svg'
import footer_2 from './images/instargam.svg'
import footer_3 from './images/behance.svg'
import footer_4 from './images/Dribble.svg'
import port_line from './picture/port_1.png'
import game from './picture/port_2.png'
import reebok from './picture/reebok_web.png'
import image from './picture/graphic 1.svg'
import image_sero from './picture/startup 1.svg'
import image_card from './picture/browser 1.svg'
import Modal from './Modal';
import { useState } from 'react';

import './MainPage.css'

export default function MainPage(){
    const [modalActive, setModalActive] = useState(false);
    const [email, setEmail] = useState('');

    const handleButtonClick = () => {
        if (email.trim() !== '') {
            alert("Message sent!");
            setModalActive(false);
        } else {
            alert("Please enter your email before sending.");
        }
    };
    return(
        
<div className='project'>

<div className='header'>
    <div className='header-container'>
    <div className='header-nav'>
    <a href="/" class='logo'>Kelvin</a>
    <nav className='header-links'>
        <ul className='nav-list'>
        <li>
            <Link className='home' to="/"><strong>Home</strong></Link>
        </li>
        <li>
            <Link className='link' to="three">Works</Link>
        </li>
        <li>
            <Link className='link' to="/two">Services</Link>
        </li>
        <li>
            <Link className='link' to="one">About</Link>
        </li>
        <li>
            <Link className='link' to="/four">Contact</Link>
        </li>
        </ul>
        </nav>
    </div>
    <div className='header-content'>
        <div className='header-text'>
        <h1 className="header-heading"><strong>Kelvin Kramer </strong> <br></br>
                            <span><strong>Designer & Devoloper</strong></span></h1>
                        <p>I’m a portrait, fashion and lifestyle photographer living In New York City. 
                            During my thirteen year tenure here.</p>
        </div>
        <div className='header-img'>
                <img src={picture} alt='someone'></img>
        </div>
    </div>
    </div>
</div>

<div className="wrapper">
    
<div className="container">

<div className="Servise_1">
 <img src={image} alt="servise_10"></img>
 <h3>UI/UX Design</h3>
 <p>Our design is translated into comprehensive digital <br></br>
    environments built on latest development <br></br>
     standards.</p>
 </div>

 <div className="Servise_1">
 <img src={image_sero} alt="servise_20"></img>
 <h3>DEVELOPMENT</h3>
 <p>Our design is translated into comprehensive digital <br></br>
    environments built on latest development <br></br>
     standards.</p>
 </div>


 <div className="Servise_1">
 <img src={image_card} alt="servise_30"></img>
 <h3> SOFTWARE TESTING </h3>
 <p>Our design is translated into comprehensive digital <br></br>
    environments built on latest development <br></br>
     standards.</p>
 </div>

</div>



</div>

<div className="container_part_2">
            
<div className="port">
    <h5>Portfolio</h5>
<div>
    <div className="photo__line">
        <img src={port_line} alt="photo_11"></img>
      <div className="cards_man">
      <a href="/">Online fashion store - Homepage</a>
      </div>
    </div>
 </div>

 <div>
    <div className="photo__line">
       
<img src={reebok} alt="hello"></img>

      <div className="cards_man">
      <a href="/">Reebok Store - Concept</a>
      </div>
    </div>
 </div>

 <div>
    <div className="photo__line">
       
    <img src={game} alt="portal"></img> 

      <div className="cards_man">
      <a href="/">Braun Landing Page - Concept</a>
      </div>
    </div>
 </div>
</div>

        </div>

<div className='main'>
                <div className='footer'>
<div class="footer-container">
            <div class="footer-title"><h2>Contacts</h2></div>
            <div class="footer-text"><p>Want to know more or just chat?
                <br></br> 
                You are welcome!</p>
            </div>
<button class="footer-button" onClick={()=> setModalActive(true)}>Send message</button>
            
     
            <div class="footer-links">
               <a href='https://ru.linkedin.com/'><img src={footer_1} alt='LinkedIn'></img></a>
               <a href='https://www.instagram.com/'><img src={footer_2} alt='instagram'></img></a>
               <a href='https://www.behance.net/'><img src={footer_3} alt='behance'></img></a>
               <a href='https://dribbble.com/'><img src={footer_4} alt='dribble'></img></a>

            </div>
            <div class="footer-last-words">
                <p>Like me on 
                    <br></br>
                    LinkedIn, Instagram, Behance, Dribble</p>
            </div>
         </div> 
</div>



<Modal active={modalActive} setActive={setModalActive }>
    <form action=''>
        <p><strong>My email</strong>: example@gmail.com</p>
        <p>If you want, you can leave your email and I will contact you as soon as possible.</p>
        <input
                        required
                        placeholder='Your email'
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <button onClick={handleButtonClick}>Send</button>
    </form>
</Modal>
      </div>

</div>
    )
}