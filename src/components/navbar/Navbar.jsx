import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const handleShowProfile = () => {
        setShowProfile(!showProfile)
        setShowLinks(false)
    }

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
        setShowProfile(false)
    }

    return (
        <div className='navbar-comp'>
            <nav>
                <div className="logo">
                    <img src="./img/logo.jpg" alt="" />
                </div>
                <div className={`links ${showLinks ? 'show' : ''}`}>
                    <li>
                        <Link to={'/'}> 
                            <h5> Home </h5>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'}> 
                            <h5> About Us </h5>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/book'}> 
                            <h5> Book </h5>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/service'}> 
                            <h5> Service </h5>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/contact'}> 
                            <h5> Contact </h5>
                        </Link>
                    </li>
                </div>
                <ul>
                    <div className="hamburger" onClick={() => handleShowLinks()}>
                        <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 23.9998V27.3332H5V23.9998H25ZM30 12.3332V15.6665H0V12.3332H30ZM25 0.666504V3.99984H5V0.666504H25Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="profile flex items-center justify-center">
                        <svg onClick={() => handleShowProfile()}  width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 0.5C17.4891 0.5 19.3968 1.29018 20.8033 2.6967C22.2098 4.10322 23 6.01088 23 8C23 9.98912 22.2098 11.8968 20.8033 13.3033C19.3968 14.7098 17.4891 15.5 15.5 15.5C13.5109 15.5 11.6032 14.7098 10.1967 13.3033C8.79018 11.8968 8 9.98912 8 8C8 6.01088 8.79018 4.10322 10.1967 2.6967C11.6032 1.29018 13.5109 0.5 15.5 0.5ZM15.5 4.25C14.5054 4.25 13.5516 4.64509 12.8484 5.34835C12.1451 6.05161 11.75 7.00544 11.75 8C11.75 8.99456 12.1451 9.94839 12.8484 10.6516C13.5516 11.3549 14.5054 11.75 15.5 11.75C16.4946 11.75 17.4484 11.3549 18.1516 10.6516C18.8549 9.94839 19.25 8.99456 19.25 8C19.25 7.00544 18.8549 6.05161 18.1516 5.34835C17.4484 4.64509 16.4946 4.25 15.5 4.25ZM15.5 17.375C20.5063 17.375 30.5 19.8687 30.5 24.875V30.5H0.5V24.875C0.5 19.8687 10.4937 17.375 15.5 17.375ZM15.5 20.9375C9.93125 20.9375 4.0625 23.675 4.0625 24.875V26.9375H26.9375V24.875C26.9375 23.675 21.0688 20.9375 15.5 20.9375Z" fill="#FFC530"/>
                        </svg>

                        <div className={`drop-profile ${showProfile ? 'show' : ''}`}>
                            <div className="drops-item">
                                <h5> Sign Up </h5>
                            </div>
                            <div className="drops-item">
                                <h5> Carts </h5>
                            </div>
                        </div>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar