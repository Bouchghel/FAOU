import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "/favicon.ico"

const NavItems = () => {
    const [menuToggle,setMenuToggle]=useState(false);
    const [socialToggle,setSocialToggle]=useState(false);
    const [headerFixed,setHeaderFixed]=useState(false);
    
    // addeventListener
    window.addEventListener("scroll",()=>{
        if(window.scrollY>200){
            setHeaderFixed(true);
        }else{
            setHeaderFixed(false)
        }
    })
  return (
    <header className={`header-section style-4 ${headerFixed?"header-fixed fadeInUp":""}`}>
        {/* header top start */}
        <div className={`header-top d-md-none ${socialToggle?"open":""}`}>
            <div className='container'>
                <div className='header-top-area'>
                    <Link to="/signup" className='lab-btn me-3'><span>Create Account</span></Link>
                    <Link to="/login">Log in</Link>
                </div>
            </div>
        </div>
        {/* header botton */}
        <div className='header-botton'>
            <div className='container'>
                <div className='header-wrapper'>
                    {/*logo*/}
                    <div className='logo-search-acte'>
                        <div className='logo'>
                            <Link to={"/"}>
                                <img src={logo} alt="FAOU" height="90" width="90"/>
                            </Link>
                        </div>
                    </div>
                    {/* menu area */}
                    <div className='menu-area'>
                        <div className='menu'>
                            <ul className={`lab-ul ${menuToggle?"active":""}`}>
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"/About"}>About</Link></li>
                                <li><Link to={"/product"}>Product</Link></li>
                                <li><Link to={"/blog"}>Blog</Link></li>
                                <li><Link to={"/Contact"}>Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Sign In */}
                        <Link to="sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                        <Link to="/login" className='d-none d-md-block'>Log In</Link>

                        {/*menu toggler */}
                        <div onClick={()=>setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active":""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        {/*social Toggler*/}
                        <div className='ellepsis-bar d-md-none'
                        onClick={()=>setSocialToggle(!socialToggle)}>
                            <i className="icofont-info-square"></i>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavItems