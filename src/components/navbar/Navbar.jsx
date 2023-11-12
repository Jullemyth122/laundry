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
                        <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.25 0.75C0.25 0.335786 0.585786 0 1 0H4.75C5.16421 0 5.5 0.335786 5.5 0.75C5.5 1.16421 5.16421 1.5 4.75 1.5H1C0.585786 1.5 0.25 1.16421 0.25 0.75ZM9 0.75C9 0.335786 9.33579 0 9.75 0H21C21.4142 0 21.75 0.335786 21.75 0.75C21.75 1.16421 21.4142 1.5 21 1.5H9.75C9.33579 1.5 9 1.16421 9 0.75ZM0.25 7C0.25 6.58579 0.585786 6.25 1 6.25H21C21.4142 6.25 21.75 6.58579 21.75 7C21.75 7.41421 21.4142 7.75 21 7.75H1C0.585786 7.75 0.25 7.41421 0.25 7ZM0.25 13.25C0.25 12.8358 0.585786 12.5 1 12.5H12.25C12.6642 12.5 13 12.8358 13 13.25C13 13.6642 12.6642 14 12.25 14H1C0.585786 14 0.25 13.6642 0.25 13.25ZM16.5 13.25C16.5 12.8358 16.8358 12.5 17.25 12.5H21C21.4142 12.5 21.75 12.8358 21.75 13.25C21.75 13.6642 21.4142 14 21 14H17.25C16.8358 14 16.5 13.6642 16.5 13.25Z" fill="#fff"/>
                        </svg>
                    </div>
                    <div className="profile flex items-center justify-center">
                        <svg width="45" height="45" viewBox="0 0 45 45" 
                            fill="none" xmlns="http://www.w3.org/2000/svg"
                            onClick={() => handleShowProfile()}
                        >
                        <path d="M22.5 7.5C24.4891 7.5 26.3968 8.29018 27.8033 9.6967C29.2098 11.1032 30 13.0109 30 15C30 16.9891 29.2098 18.8968 27.8033 20.3033C26.3968 21.7098 24.4891 22.5 22.5 22.5C20.5109 22.5 18.6032 21.7098 17.1967 20.3033C15.7902 18.8968 15 16.9891 15 15C15 13.0109 15.7902 11.1032 17.1967 9.6967C18.6032 8.29018 20.5109 7.5 22.5 7.5ZM22.5 11.25C21.5054 11.25 20.5516 11.6451 19.8484 12.3483C19.1451 13.0516 18.75 14.0054 18.75 15C18.75 15.9946 19.1451 16.9484 19.8484 17.6516C20.5516 18.3549 21.5054 18.75 22.5 18.75C23.4946 18.75 24.4484 18.3549 25.1516 17.6516C25.8549 16.9484 26.25 15.9946 26.25 15C26.25 14.0054 25.8549 13.0516 25.1516 12.3483C24.4484 11.6451 23.4946 11.25 22.5 11.25ZM22.5 24.375C27.5063 24.375 37.5 26.8687 37.5 31.875V37.5H7.5V31.875C7.5 26.8687 17.4937 24.375 22.5 24.375ZM22.5 27.9375C16.9313 27.9375 11.0625 30.675 11.0625 31.875V33.9375H33.9375V31.875C33.9375 30.675 28.0687 27.9375 22.5 27.9375Z" fill="#ffcc00"/>
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