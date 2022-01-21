import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {IconContext} from 'react-icons';
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa' 
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  function getScrollPercent() {
 
    var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    return height;
}
var per = getScrollPercent();
  window.addEventListener('resize', showButton);
  function scrollExperience(){
    console.log(per)
    window.scrollTo({top: per*0.5, behavior:'smooth'})
  }
  function scrollWork(){
    window.scrollTo({top: per, behavior:'smooth'})
  }
  function scrollAboutMe(){
    window.scrollTo({top: per*0.2, behavior:'smooth'})
  }
  function scrollTop(){
    window.scrollTo({top: 0, behavior:'smooth'})
  }
  return (
    <>
    <IconContext.Provider value={{className: 'react-icon'}}>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={scrollTop}>
            <p className='Namelogo'>Alex Yu</p>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={scrollAboutMe}>
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={scrollExperience}
              >
                Experience
              </Link>
            </li>

            <li>
              <Link
                to='/'
                className='nav-links'
                onClick={scrollWork}
              >
                Work
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--resume'>Resume</Button>}
        </div>
        <div className='iconBar'>
          <ul className='iconList'>
            
            <li>
            <a className='git' href = "https://github.com/ay3xqa" target="_blank" rel="noreferrer">
              <FaGithub className='react-icon' size='1.5em'/>
            </a>
            </li>


            <li>
            <a href='https://www.instagram.com/al3xyu/' target='_blank' rel="noreferrer">
            <FaInstagram className='react-icon' size='1.5em'/>
            </a>
            </li>


            <li>
              <a href='https://www.linkedin.com/in/alex-yu-590b871b7/' target='_blank' rel="noreferrer">
            <FaLinkedin className='react-icon' size='1.5em'/>
            </a>
            </li>
            <li>
              <a href='https://twitter.com/theyvnglex' target='_blank' rel="noreferrer">
            <FaTwitter className='react-icon' size='1.5em'/>
            </a>
            </li>
          </ul>
        </div>
      </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;