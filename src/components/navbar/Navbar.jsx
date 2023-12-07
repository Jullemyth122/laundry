import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {

    const { account } = useAuth()

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
                    {/* <li>
                        <Link to={'/service'}> 
                            <h5> Service </h5>
                        </Link>
                    </li> */}
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
                    <div className="profile flex items-center justify-center gap-2">
                        {/* <svg onClick={() => handleShowProfile()}  width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 0.5C17.4891 0.5 19.3968 1.29018 20.8033 2.6967C22.2098 4.10322 23 6.01088 23 8C23 9.98912 22.2098 11.8968 20.8033 13.3033C19.3968 14.7098 17.4891 15.5 15.5 15.5C13.5109 15.5 11.6032 14.7098 10.1967 13.3033C8.79018 11.8968 8 9.98912 8 8C8 6.01088 8.79018 4.10322 10.1967 2.6967C11.6032 1.29018 13.5109 0.5 15.5 0.5ZM15.5 4.25C14.5054 4.25 13.5516 4.64509 12.8484 5.34835C12.1451 6.05161 11.75 7.00544 11.75 8C11.75 8.99456 12.1451 9.94839 12.8484 10.6516C13.5516 11.3549 14.5054 11.75 15.5 11.75C16.4946 11.75 17.4484 11.3549 18.1516 10.6516C18.8549 9.94839 19.25 8.99456 19.25 8C19.25 7.00544 18.8549 6.05161 18.1516 5.34835C17.4484 4.64509 16.4946 4.25 15.5 4.25ZM15.5 17.375C20.5063 17.375 30.5 19.8687 30.5 24.875V30.5H0.5V24.875C0.5 19.8687 10.4937 17.375 15.5 17.375ZM15.5 20.9375C9.93125 20.9375 4.0625 23.675 4.0625 24.875V26.9375H26.9375V24.875C26.9375 23.675 21.0688 20.9375 15.5 20.9375Z" fill="#FFC530"/>
                        </svg> */}
                        <h4> { account?.email && account?.type == 'admin'  ? 'John Doe' : 'Guest' }  </h4>
                        <svg onClick={() => handleShowProfile()} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 6.38477C7.82467 6.38477 8.531 6.09077 9.119 5.50277C9.707 4.91477 10.0007 4.20877 10 3.38477C10 2.55943 9.70633 1.85277 9.119 1.26477C8.53167 0.678099 7.82533 0.384766 7 0.384766C6.17467 0.384766 5.46833 0.678099 4.881 1.26477C4.29367 1.85277 4 2.55943 4 3.38477C4 4.20943 4.29367 4.91543 4.881 5.50277C5.46833 6.0901 6.17467 6.3841 7 6.38477ZM14 13.6148L14 11.9698C14 11.5571 13.88 11.1711 13.64 10.8118C13.3993 10.4518 13.076 10.1724 12.67 9.97377C11.726 9.5211 10.7817 9.18177 9.837 8.95577C8.89167 8.7291 7.946 8.61577 7 8.61577C6.05333 8.61577 5.10767 8.7291 4.163 8.95577C3.21833 9.18243 2.27433 9.52177 1.331 9.97377C0.924333 10.1724 0.601 10.4518 0.361 10.8118C0.120333 11.1711 0 11.5571 0 11.9698L0 13.6158L14 13.6148ZM13 12.6148L1 12.6148V11.9688C1 11.7474 1.07133 11.5391 1.214 11.3438C1.35733 11.1491 1.55533 10.9844 1.808 10.8498C2.63067 10.4511 3.47933 10.1458 4.354 9.93377C5.22733 9.7211 6.10933 9.61477 7 9.61477C7.89 9.61477 8.772 9.7211 9.646 9.93377C10.5207 10.1458 11.3693 10.4511 12.192 10.8498C12.4453 10.9844 12.6433 11.1491 12.786 11.3438C12.9287 11.5391 13 11.7478 13 11.9698V12.6148ZM7 5.38477C6.45 5.38477 5.979 5.18877 5.587 4.79677C5.195 4.40477 4.99933 3.9341 5 3.38477C5 2.83477 5.19567 2.36377 5.587 1.97177C5.97833 1.57977 6.44933 1.3841 7 1.38477C7.55 1.38477 8.02067 1.58043 8.412 1.97177C8.80333 2.3631 8.99933 2.8341 9 3.38477C9 3.93477 8.804 4.40543 8.412 4.79677C8.02 5.1881 7.54933 5.3841 7 5.38477Z" fill="white"/>
                        </svg>

                        <div className={`drop-profile ${showProfile ? 'show' : ''}`}>
                            <Link to={'/register'} className="drops-item">
                                <h5> Sign Up </h5>
                            </Link>
                            <Link to={'/cart'} className="drops-item">
                                <h5> Carts </h5>
                            </Link>
                        </div>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar