import logo from '../assets/shared/logo.svg';
import iconHamburger from '../assets/shared/icon-hamburger.svg';
import closeBtn from '../assets/shared/icon-close.svg';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


const Nav = () => {
    const [isNav,setIsNav] = useState(false);
    const location = useLocation();

    const handleNavDisplay = () => {
        setIsNav(true);
    }
    const handleNavClose = () => {
        setIsNav(false);
    };
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Destination", path: "/destination" },
        { name: "Crew", path: "/crew" },
        { name: "Technology", path: "/technology" },
    ];

    const navVariants = {
        open: { opacity: 1 },
        closed: {  opacity: 0 },
        
    };

    return (
        <>
        <div className='first-section'>
                        <div  className='logo'>
                            <div className='flex'>
                                <a href="/">
                                  <img src={logo} alt="logo" />
                                </a> 
                            </div>
                        </div>
                        
                               <div
                                className={`nav ${isNav ? 'active' : ''}`}>
                                    <ul  className='nav'>
                                      {navItems.map((item, index) => (
                                            <li >
                                                <a
                                                    key={index}
                                                    className={location.pathname === item.path ? "active" : ""}
                                                    href={item.path}>
                                                <b>0{index} </b> {item.name}
                                                </a>
                                            </li>
                                        ))} 
                                    </ul>
                                </div>  
 
                    {/* hamburger icon */}
                      <div className='hamburger'>
                            <div className='center'>
                                <a href="#" onClick={handleNavDisplay} >
                                  <img src={iconHamburger}alt="logo" width={35} height={35}/>
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