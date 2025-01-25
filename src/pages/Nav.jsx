import logo from '../assets/shared/logo.svg';
import iconHamburger from '../assets/shared/icon-hamburger.svg';
import closeBtn from '../assets/shared/icon-close.svg';
import { useState } from 'react';
const Nav = () => {
    const [isNav,setIsNav] = useState(false);
    const handleNavDisplay = () => {
        setIsNav(true);
    }
    const handleNavClose = () => {
        setIsNav(false);
    };
    return (
        <>
        <div className='first-section'>
                        <div className='logo'>
                            <div className='flex'>
                                <a href="/">
                                  <img src={logo} alt="logo" />
                                </a> 
                            </div>
                        </div>

                         
                            {/* {isNav && ( */}
                                <div className={`nav ${isNav ? 'active' : ''}`}>
                                    <ul className='nav'>
                                        <li><a href="/"> <b>00 </b> Home </a></li>
                                        <li><a href="/destination"> <b>01 </b> Destination</a></li>
                                        <li><a href="/crew"><b>02 </b> Crew</a></li>
                                        <li><a href="/technology"><b>03 </b> Technology</a></li>
                                    </ul>
                                </div>    
                              {/* )}  */}
                    {/* hamburger icon */}
                      <div className='hamburger'>
                            <div className='center'>
                                <a href="#">
                                  <img src={iconHamburger} onClick={handleNavDisplay} alt="logo" width={35} height={35}/>
                                </a> 
                            </div>
                        </div>
                            {/* close-btn */}
                            {isNav && (
                                <a href="#" className='close-btn'>
                                <img src={closeBtn} onClick={handleNavClose} alt="close-btn" width={35} height={35} />
                                </a>
                            )}
                    </div>
        </>
    )
}

export default Nav;