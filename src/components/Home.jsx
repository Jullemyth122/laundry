import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Home = () => {

    const ctx = useRef(gsap.context(() => {}))
    const imgRefs = useRef([])
    const textRefs = useRef([])

    const [serviceDropdownVisible, setServiceDropdownVisible] = useState(false);

    const toggleServiceDropdown = () => {
        setServiceDropdownVisible(!serviceDropdownVisible);
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const lists = [
            0, 1, 1
        ]
        ctx.current.add(() => {
            const tl = gsap.timeline({ 
                defaults: {
                    ease:"power4.inOut"
                },
                scrollTrigger: {
                    trigger:'.about-us',
                    scrub:1,
                    pin:true,
                    // markers:true,
                    end:"+=600%",
                    invalidateOnRefresh:true,

                }    
            })

            
            imgRefs.current.map((elem,i) => {
                // const offset =  lists[i] + i * 50; // Adjust this offset to control the staggered start of animations
                const offset =   i * 150; // Adjust this offset to control the staggered start of animations
                tl.fromTo(elem, {
                    translateX: `${-10 + 10 * i}%`,
                    translateY: `${-10 + 10 * i}%`,
                }, {
                    opacity: 1,
                    translateX: `${10 * i}%`,
                    translateY: `${10 * i}%`,
                    scrollTrigger: {
                        trigger: elem,
                        scrub: 1,
                        start: `+=${offset}%`, // Start animations staggered
                        end: `+=${offset + 100}%`, // End animations staggered
                        invalidateOnRefresh: true,
                    }
                });
                tl.fromTo('.about-section',{
                    "--conic-percent":`${ i * 25 }`,
                    "--conic-percent2":`${ i * 20 }`,
                },{
                    "--conic-percent":`${(i + 1)* 25}%`,
                    "--conic-percent2":`${(i + 1)* 20}%`,
                    // scrollTrigger: {
                    //     trigger: '.about-section',
                    //     scrub: 1,
                    //     start: `+=${offset}%`, // Start animations staggered
                    //     end: `+=${offset + 100}%`, // End animations staggered
                    //     invalidateOnRefresh: true,
                    // }
                })
                tl.fromTo(textRefs.current[i],{
                    translateX: `${-2.5 + 2.5 * i}%`,
                    translateY: `${-2.5 + 2.5 * i}%`,
                },{
                    translateX: `${2.5 * i}%`,
                    translateY: `${2.5 * i}%`,
                    opacity:1,
                    scrollTrigger: {
                        trigger: textRefs.current[i],
                        scrub: 1,
                        start: `+=${offset}%`, // Start animations staggered
                        end: `+=${offset + 100}%`, // End animations staggered
                        invalidateOnRefresh: true,
                    }
                })
                tl.fromTo(textRefs.current[i].querySelector('.tx1'),{
                    translateX: `-30%`,
                },{
                    translateX: `0%`,
                    scrollTrigger: {
                        trigger: elem,
                        scrub: 1,
                        start: `+=${offset}%`, // Start animations staggered
                        end: `+=${offset + 100}%`, // End animations staggered
                        invalidateOnRefresh: true,
                    }
                })
                tl.fromTo(textRefs.current[i].querySelector('.tx2'),{
                    translateX: `30%`,
                },{
                    translateX: `0%`,
                    scrollTrigger: {
                        trigger: elem,
                        scrub: 1,
                        start: `+=${offset}%`, // Start animations staggered
                        end: `+=${offset + 100}%`, // End animations staggered
                        invalidateOnRefresh: true,
                    }
                })
            })
        })

    },[])

    return (
        <div className='main-component'>
            <section>
                <div className="banner">
                    <img src="./img/laundry.jpg" alt="" />
                    <div className="left-shadow"></div>
                    <div className="container-banner">
                        <div className="container-comp flex items-center justify-center flex-col">
                            <h1>
                                Clean are always the <br/> best!
                            </h1>
                            <svg width="591" height="38" viewBox="0 0 591 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M573.859 1.34161L589.769 17.2515C590.746 18.2278 590.746 19.8107 589.769 20.787L573.859 36.6969C572.883 37.6733 571.3 37.6733 570.324 36.6969C569.347 35.7206 569.347 34.1377 570.324 33.1614L581.966 21.5193H-0.00195313L-0.00195313 16.5193H581.966L570.324 4.87714C569.347 3.90083 569.347 2.31792 570.324 1.34161C571.3 0.365297 572.883 0.365297 573.859 1.34161Z" fill="white"/>
                            </svg>
                            <div className="book-cd flex items-center justify-center">
                                <button className='bg-white hover:bg-blue-400 text-black hover:text-white font-thin py-2 px-4 rounded'>
                                    Book Now!
                                </button>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 0.078125C16.0598 0.078125 12.2081 1.24652 8.93201 3.43557C5.65587 5.62461 3.10244 8.73598 1.5946 12.3762C0.0867565 16.0165 -0.307763 20.0221 0.460927 23.8866C1.22962 27.751 3.12699 31.3008 5.91312 34.0869C8.69924 36.873 12.249 38.7704 16.1134 39.5391C19.9779 40.3078 23.9835 39.9132 27.6238 38.4054C31.264 36.8976 34.3754 34.3441 36.5644 31.068C38.7535 27.7919 39.9219 23.9402 39.9219 20C39.9157 14.7183 37.8148 9.65469 34.0801 5.91996C30.3453 2.18523 25.2817 0.0843278 20 0.078125ZM20 37.5781C16.5234 37.5781 13.1248 36.5472 10.2341 34.6157C7.34342 32.6842 5.09039 29.9388 3.75994 26.7269C2.42949 23.5149 2.08139 19.9805 2.75964 16.5707C3.4379 13.1609 5.11205 10.0287 7.5704 7.57039C10.0287 5.11204 13.1609 3.43789 16.5707 2.75963C19.9805 2.08138 23.5149 2.42948 26.7269 3.75993C29.9389 5.09038 32.6842 7.34341 34.6157 10.2341C36.5472 13.1248 37.5781 16.5234 37.5781 20C37.573 24.6604 35.7193 29.1285 32.4239 32.4239C29.1285 35.7193 24.6604 37.573 20 37.5781ZM27.0781 20.7344C27.2976 20.9541 27.4209 21.2519 27.4209 21.5625C27.4209 21.873 27.2976 22.1709 27.0781 22.3906L20.8281 28.6406C20.6084 28.8601 20.3106 28.9833 20 28.9833C19.6895 28.9833 19.3916 28.8601 19.1719 28.6406L12.9219 22.3906C12.7149 22.1685 12.6022 21.8747 12.6075 21.5711C12.6129 21.2675 12.7359 20.9778 12.9506 20.7631C13.1653 20.5484 13.455 20.4254 13.7586 20.42C14.0622 20.4147 14.356 20.5274 14.5781 20.7344L18.8281 24.9824V12.1875C18.8281 11.8767 18.9516 11.5786 19.1714 11.3589C19.3911 11.1391 19.6892 11.0156 20 11.0156C20.3108 11.0156 20.6089 11.1391 20.8287 11.3589C21.0484 11.5786 21.1719 11.8767 21.1719 12.1875V24.9824L25.4219 20.7344C25.6416 20.5149 25.9395 20.3917 26.25 20.3917C26.5606 20.3917 26.8584 20.5149 27.0781 20.7344Z" fill="#fff"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="about-us">
                    <div className="title">
                        <h1> About Us </h1>
                        <svg width="854" height="12" viewBox="0 0 854 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0.226562L10 5.00007H843.15L853.15 0.226562V11.7736L843.15 7.00007H10L0 11.7736V0.226562Z" fill="#4d89e2b6"/>
                        </svg>
                        <svg width="854" height="12" viewBox="0 0 854 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0.226562L10 5.00007H843.15L853.15 0.226562V11.7736L843.15 7.00007H10L0 11.7736V0.226562Z" fill="#4d89e2b6"/>
                        </svg>
                    </div>

                    <div className="about-section">

                        <div className="right-side">
                            <div className="right-img">
                                <img src="./img/laundry.jpg" ref={e => imgRefs.current.push(e)} alt="" />
                                <img src="./img/laundry2.jpg" ref={e => imgRefs.current.push(e)} className='p2' alt="" />
                                <img src="./img/laundry3.jpg" ref={e => imgRefs.current.push(e)} className='p2' alt="" />
                            </div>
                        </div>

                        <div className="left-side">
                            <div className="left-text t1" ref={e => textRefs.current.push(e)}>
                                <h5 className='tx1'> Laundry day is a necessity for every household, but it can be such a huge time-sink.  </h5>
                                <h5> Picks up your dirty clothing from the location of your choice. </h5>
                                <h5 className='tx2'> Get it washed at a professional laundromat or dry cleaner near you. </h5>
                            </div>
                            <div className="left-text absolute t2" ref={e => textRefs.current.push(e)}>
                                <h5 className='tx1'> Laundry day is a necessity for every household, but it can be such a huge time-sink.  </h5>
                                <h5> Picks up your dirty clothing from the location of your choice. </h5>
                                <h5 className='tx2'> Get it washed at a professional laundromat or dry cleaner near you. </h5>
                            </div>
                            <div className="left-text absolute t3" ref={e => textRefs.current.push(e)}>
                                <h5 className='tx1'> Laundry day is a necessity for every household, but it can be such a huge time-sink.  </h5>
                                <h5> Picks up your dirty clothing from the location of your choice. </h5>
                                <h5 className='tx2'> Get it washed at a professional laundromat or dry cleaner near you. </h5>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
            <section>
                <div className="book-section">
                    <div className="bg-gray-100 min-h-screen flex gap-3 p-2 flex-col sm:flex-row items-center justify-center">
                        <div className="w-full sm:w-1/2 relative flex items-center justify-center">
                            <img src="./img/laundry3.jpg" alt="Book Image"/>
                            <div className="title">
                                <h2> Book Now! </h2>
                            </div>
                        </div>
                        <div className="book-plan w-full sm:w-1/2 p-4">
                            <h2 className="text-2xl font-semibold mb-4">Book Plan</h2>
                            <div className="mb-4">
                                <label for="service" className="block text-gray-700">Service</label>
                                <div className="relative book-toggle">
                                    <div className="w-full p-2 border border-gray-300 rounded-md cursor-pointer"
                                    >
                                        <div className="flex items-center">
                                            <div className="w-6 h-6 mr-2 rounded-full">
                                                <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M16.5 3.37467C14.4865 3.37467 12.8542 5.00697 12.8542 7.02051C12.8542 9.03405 14.4865 10.6663 16.5 10.6663C18.5135 10.6663 20.1458 9.03405 20.1458 7.02051C20.1458 5.00697 18.5135 3.37467 16.5 3.37467ZM9.9375 7.02051C9.9375 3.39614 12.8756 0.458008 16.5 0.458008C20.1244 0.458008 23.0625 3.39614 23.0625 7.02051C23.0625 10.6449 20.1244 13.583 16.5 13.583C12.8756 13.583 9.9375 10.6449 9.9375 7.02051Z" fill="#4D89E2"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.0413 18.6872C8.43185 18.6872 3.37467 23.414 3.37467 28.8955C3.37467 29.7009 2.72176 30.3538 1.91634 30.3538C1.11093 30.3538 0.458008 29.7009 0.458008 28.8955C0.458008 21.4897 7.15354 15.7705 15.0413 15.7705C15.8468 15.7705 16.4997 16.4234 16.4997 17.2288C16.4997 18.0343 15.8468 18.6872 15.0413 18.6872ZM24.9476 18.3851C25.5172 17.8156 26.4405 17.8156 27.01 18.3851L29.9267 21.3018C30.4962 21.8713 30.4962 22.7947 29.9267 23.3642L22.635 30.6559C22.3615 30.9294 21.9906 31.083 21.6038 31.083H18.6872C17.8818 31.083 17.2288 30.4301 17.2288 29.6247V26.708C17.2288 26.3212 17.3825 25.9503 17.656 25.6768L24.9476 18.3851ZM20.1455 27.3121V28.1663H20.9998L26.8331 22.333L25.9788 21.4787L20.1455 27.3121Z" fill="#4D89E2"/>
                                                </svg>

                                            </div>
                                            <input
                                                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                type="text"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full p-2 border border-gray-300 rounded-md cursor-pointer"
                                        onClick={toggleServiceDropdown}
                                    >
                                        <div className="flex items-center">
                                            <div className="w-6 h-6 mr-2 rounded-full">
                                                <svg width="13" height="31" viewBox="0 0 13 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.12533 8.20866L3.58366 5.29199V3.83366H2.12533V0.916992H10.8753C11.2885 0.916992 11.6351 1.05699 11.9151 1.33699C12.1951 1.61699 12.3346 1.9631 12.3337 2.37533V3.83366L10.8753 6.75033H6.50033V5.29199L3.58366 8.20866H2.12533ZM0.666992 30.0837V20.0941C0.666992 19.8267 0.70977 19.5409 0.795326 19.2366C0.880882 18.9323 0.983937 18.6591 1.10449 18.417L6.50033 8.20866H10.8753C11.2156 8.54894 11.5437 9.00491 11.8597 9.57658C12.1757 10.1482 12.3337 10.6645 12.3337 11.1253V30.0837H0.666992ZM3.58366 27.167H9.41699V11.1253H8.25033L3.58366 20.0212V27.167Z" fill="#4D89E2"/>
                                                </svg>

                                            </div>
                                            <div>Dry & Clean</div>
                                        </div>
                                    </div>
                                    {serviceDropdownVisible && ( 
                                        // <h1> Tite </h1>
                                        <div className="top-12 left-0 w-full bg-white border border-gray-300 rounded-md mt-2">
                                            <div className="p-2 hover:bg-gray-100 cursor-pointer drop-book">
                                                <div className="w-6 h-6 mr-2 rounded-full">
                                                    <svg width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.799503 0.551379C1.20859 0.486431 1.59288 0.765413 1.65783 1.1745L4.50884 19.1323C4.50885 19.1323 4.50883 19.1322 4.50884 19.1323C4.58983 19.6415 4.84976 20.1052 5.24189 20.44C5.63405 20.7748 6.13274 20.9587 6.64835 20.9588C6.64838 20.9588 6.64833 20.9588 6.64835 20.9588H24.3525C24.8683 20.959 25.3676 20.7751 25.76 20.4403C26.1524 20.1055 26.4125 19.6417 26.4935 19.1323L29.343 1.17456C29.408 0.765467 29.7922 0.486454 30.2013 0.55137C30.6104 0.616286 30.8894 1.00055 30.8245 1.40964L27.9749 19.3676C27.8379 20.2297 27.3977 21.0148 26.7336 21.5814C26.0697 22.148 25.2253 22.459 24.3525 22.4588C24.3524 22.4588 24.3526 22.4588 24.3525 22.4588H6.64835C5.77573 22.4587 4.93167 22.1474 4.26799 21.5808C3.60431 21.0143 3.16445 20.2296 3.02744 19.3678L0.176379 1.4097C0.111431 1.00061 0.390413 0.616327 0.799503 0.551379Z" fill="#4D89E2"/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.54721 5.23024L9.55266 5.23774L9.57571 5.26904C9.59683 5.29748 9.6293 5.34069 9.67244 5.39655C9.75878 5.50834 9.8875 5.67037 10.0531 5.86587C10.3851 6.25796 10.8607 6.77899 11.4355 7.29768C12.619 8.36567 14.079 9.29199 15.5 9.29199C16.921 9.29199 18.381 8.36567 19.5645 7.29768C20.1393 6.77899 20.6149 6.25796 20.9469 5.86587C21.1125 5.67037 21.2412 5.50834 21.3276 5.39655C21.3707 5.34069 21.4032 5.29748 21.4243 5.26904L21.4473 5.23774L21.4523 5.23091C21.4524 5.23083 21.4529 5.23006 21.453 5.22998C21.4529 5.2301 21.4528 5.23024 22.0625 5.66699C22.6722 6.10375 22.6721 6.10392 22.672 6.10411L22.6681 6.10941L22.6595 6.12135L22.6286 6.16321C22.6022 6.19885 22.564 6.24964 22.5147 6.31341C22.4173 6.43951 22.2764 6.61677 22.0974 6.82837C22.0955 6.83068 22.0935 6.83299 22.0916 6.83531C21.7289 7.26353 21.2067 7.83624 20.5694 8.4113C19.3288 9.53082 17.5075 10.792 15.5 10.792C13.4925 10.792 11.6712 9.53082 10.4306 8.4113C9.79333 7.83624 9.27112 7.26353 8.90844 6.83531C8.90647 6.83299 8.90452 6.83068 8.90256 6.82837C8.89103 6.84064 8.87935 6.85304 8.86753 6.86555C8.46776 7.28883 7.90155 7.85526 7.23809 8.42393C6.57707 8.99053 5.80392 9.57286 4.99 10.0168C4.18438 10.4562 3.28124 10.792 2.375 10.792C1.96079 10.792 1.625 10.4562 1.625 10.042C1.625 9.62778 1.96079 9.29199 2.375 9.29199C2.92709 9.29199 3.57343 9.08086 4.27172 8.69998C4.9617 8.32362 5.64689 7.81221 6.26191 7.28505C6.87449 6.75997 7.40203 6.23265 7.77701 5.83562C7.96404 5.63758 8.11199 5.47316 8.21238 5.35921C8.26255 5.30226 8.30076 5.258 8.32595 5.22855L8.35383 5.19578L8.36018 5.18823L8.36133 5.18685C8.50998 5.00858 8.73295 4.90901 8.96492 4.91749C9.19679 4.92598 9.41197 5.04173 9.54721 5.23024ZM22.6387 5.18685L22.6398 5.18823L22.6462 5.19578L22.674 5.22855C22.6992 5.258 22.7375 5.30226 22.7876 5.35921C22.888 5.47316 23.036 5.63758 23.223 5.83562C23.598 6.23265 24.1255 6.75997 24.7381 7.28505C25.3531 7.81221 26.0383 8.32362 26.7283 8.69998C27.4266 9.08086 28.0729 9.29199 28.625 9.29199C29.0392 9.29199 29.375 9.62778 29.375 10.042C29.375 10.4562 29.0392 10.792 28.625 10.792C27.7188 10.792 26.8156 10.4562 26.01 10.0168C25.1961 9.57286 24.4229 8.99053 23.7619 8.42393C23.0985 7.85526 22.5322 7.28883 22.1325 6.86555C22.1207 6.85304 22.109 6.84064 22.0974 6.82837M22.6387 5.18685C22.49 5.00859 22.267 4.90901 22.0351 4.91749C21.8031 4.92598 21.5882 5.04137 21.453 5.22998" fill="#4D89E2"/>
                                                    </svg>
                                                </div> 
                                                <div>Wash & Fold</div>
                                            </div>
                                            <div className="p-2 hover:bg-gray-100 cursor-pointer drop-book">
                                                <div className="w-6 h-6 mr-2 rounded-full">
                                                    <svg width="13" height="31" viewBox="0 0 13 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.12533 8.20866L3.58366 5.29199V3.83366H2.12533V0.916992H10.8753C11.2885 0.916992 11.6351 1.05699 11.9151 1.33699C12.1951 1.61699 12.3346 1.9631 12.3337 2.37533V3.83366L10.8753 6.75033H6.50033V5.29199L3.58366 8.20866H2.12533ZM0.666992 30.0837V20.0941C0.666992 19.8267 0.70977 19.5409 0.795326 19.2366C0.880882 18.9323 0.983937 18.6591 1.10449 18.417L6.50033 8.20866H10.8753C11.2156 8.54894 11.5437 9.00491 11.8597 9.57658C12.1757 10.1482 12.3337 10.6645 12.3337 11.1253V30.0837H0.666992ZM3.58366 27.167H9.41699V11.1253H8.25033L3.58366 20.0212V27.167Z" fill="#4D89E2"/>
                                                    </svg>
                                                </div> 
                                                <div>Dry & Clean</div>
                                            </div>
                                            <div className="p-2 hover:bg-gray-100 cursor-pointer drop-book">
                                                <div className="w-6 h-6 mr-2 rounded-full">
                                                    <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.66699 2.83301C9.66699 1.72844 10.5624 0.833008 11.667 0.833008H29.167C30.1756 0.833008 31.0264 1.58408 31.1515 2.58494L34.0682 25.9183C34.1394 26.4875 33.9627 27.0599 33.583 27.4899C33.2034 27.92 32.6573 28.1663 32.0837 28.1663H2.91699C1.81242 28.1663 0.916992 27.2709 0.916992 26.1663C0.916992 18.6181 7.03544 12.4997 14.5837 12.4997H28.3598L27.4014 4.83301H11.667C10.5624 4.83301 9.66699 3.93758 9.66699 2.83301ZM28.8598 16.4997H14.5837C9.93027 16.4997 6.04525 19.7871 5.1241 24.1663H29.8181L28.8598 16.4997ZM10.3962 20.333C10.3962 19.2284 11.2916 18.333 12.3962 18.333H13.8545C14.9591 18.333 15.8545 19.2284 15.8545 20.333C15.8545 21.4376 14.9591 22.333 13.8545 22.333H12.3962C11.2916 22.333 10.3962 21.4376 10.3962 20.333ZM16.2295 20.333C16.2295 19.2284 17.1249 18.333 18.2295 18.333H19.6878C20.7924 18.333 21.6878 19.2284 21.6878 20.333C21.6878 21.4376 20.7924 22.333 19.6878 22.333H18.2295C17.1249 22.333 16.2295 21.4376 16.2295 20.333ZM22.0628 20.333C22.0628 19.2284 22.9583 18.333 24.0628 18.333H25.5212C26.6257 18.333 27.5212 19.2284 27.5212 20.333C27.5212 21.4376 26.6257 22.333 25.5212 22.333H24.0628C22.9583 22.333 22.0628 21.4376 22.0628 20.333Z" fill="#4D89E2"/>
                                                    </svg>
                                                </div> 
                                                <div>Wash & Iron</div>
                                            </div>
                                        </div>
                                    ) }
                                </div>
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                                Book
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-blue-500 py-16">
                <div class="container mx-auto text-white">
                    <h2 class="text-3xl font-semibold text-center mb-8">Our Services</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="p-4 rounded-lg bg-white text-blue-500">
                            <div class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                            </div>
                            <h3 class="text-lg font-semibold mb-2">Laundry Dry & Clean</h3>
                            <p class="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div class="p-4 rounded-lg bg-white text-blue-500">
                            <div class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M2 5a5 5 0 0110 0 5 5 0 01-10 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21a5 5 0 01-10 0 5 5 0 0110 0z"
                                    />
                                </svg>
                            </div>
                            <h3 class="text-lg font-semibold mb-2">Laundry Wash & Fold</h3>
                            <p class="text-sm">
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="p-4 rounded-lg bg-white text-blue-500">
                            <div class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M7 20l4-16m2 16l4-16M6 9h14m-12 0a2 2 0 100-4 2 2 0 000 4z"
                                    />
                                </svg>
                            </div>
                            <h3 class="text-lg font-semibold mb-2">Laundry Iron and Wash</h3>
                            <p class="text-sm">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact-us">
                <div className="bg-img">
                    <img src="./img/laundry3.jpg" alt="" />
                </div>
                <div className="contact-us-comp flex flex-col justify-center">
                    <div class="container mx-auto text-white">
                        <h2 class="text-3xl font-semibold text-center mb-8">Contact Us</h2>
                        <div class="flex flex-col md:flex-row">
                            <div class="w-full md:w-1/2 p-4">
                                <h3 class="text-lg font-semibold mb-2">Get in Touch</h3>
                                <p class="text-sm mb-4">
                                    If you have any questions or need assistance, please don't hesitate to contact us.
                                </p>
                                <div class="flex items-center mb-4">
                                    <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                    </div>
                                    <span>123 Main Street, City, Country</span>
                                </div>
                                <div class="flex items-center mb-4">
                                    <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M2 5a5 5 0 0110 0 5 5 0 01-10 0z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M21 21a5 5 0 01-10 0 5 5 0 0110 0z"
                                            />
                                        </svg>
                                    </div>
                                    <span>contact@laundry.com</span>
                                </div>
                                <div class="flex items-center">
                                    <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M7 20l4-16m2 16l4-16M6 9h14m-12 0a2 2 0 100-4 2 2 0 000 4z"
                                            />
                                        </svg>
                                    </div>
                                    <span>(123) 456-7890</span>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 p-4">
                                <h3 class="text-lg font-semibold mb-2">Send a Message</h3>
                                <form class="space-y-4">
                                    <input
                                        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        type="text"
                                        placeholder="Your Name"
                                    />
                                    <input
                                        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        type="email"
                                        placeholder="Your Email"
                                    />
                                    <textarea
                                        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        rows="4"
                                        placeholder="Your Message"
                                    ></textarea>
                                    <button
                                        class="bg-white hover:bg-blue-400 text-black hover:text-white py-2 px-4 rounded"
                                        type="submit"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home