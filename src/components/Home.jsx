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


    const [bookingInfo, setBookingInfo] = useState({
        name: '',
        address: '',
        bookingTime: '',
        selectedService: '',
    });

    const handleInputChange = (e) => {
        setBookingInfo({
            ...bookingInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handleServiceSelection = (service) => {
        setBookingInfo({
            ...bookingInfo,
            selectedService: service,
        });
    };

    const handleBooking = () => {
        // Implement your booking logic here
        console.log('Booking:', bookingInfo);
        // Reset the form after booking
        setBookingInfo({
            name: '',
            address: '',
            bookingTime: '',
            selectedService: '',
        });
    };

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
                <div className="book-section flex flex-col md:flex-row">
                    {/* Service Selection */}
                    <div className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Select a Service</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div
                                className={`p-4 border cursor-pointer relative service-select ${
                                bookingInfo.selectedService === 'Drying' ? 'border-blue-500 ' : ''
                                }`}
                                onClick={() => handleServiceSelection('Drying')}
                            >
                                <img src="./img/s3.jpg" alt="" />
                                Drying Service {/* Add your Drying icon here */}
                            </div>
                            <div
                                className={`p-4 border cursor-pointer relative service-select ${
                                bookingInfo.selectedService === 'Cleaning' ? 'border-blue-500 ' : ''
                                }`}
                                onClick={() => handleServiceSelection('Cleaning')}
                            >
                                <img src="./img/s3.jpg" alt="" />
                                Cleaning Service {/* Add your Cleaning icon here */}
                            </div>
                            <div
                                className={`p-4 border cursor-pointer relative service-select ${
                                bookingInfo.selectedService === 'Ironing' ? 'border-blue-500 ' : ''
                                }`}
                                onClick={() => handleServiceSelection('Ironing')}
                            >
                                <img src="./img/s3.jpg" alt="" />
                                Ironing Service {/* Add your Ironing icon here */}
                            </div>
                            <div
                                className={`p-4 border cursor-pointer relative service-select ${
                                bookingInfo.selectedService === 'Wash' ? 'border-blue-500 ' : ''
                                }`}
                                onClick={() => handleServiceSelection('Wash')}
                            >
                                <img src="./img/s3.jpg" alt="" />
                                Wash Service {/* Add your Wash icon here */}
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-600">Name</label>
                                <input
                                type="text"
                                name="name"
                                value={bookingInfo.name}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-600">Address</label>
                                <input
                                type="text"
                                name="address"
                                value={bookingInfo.address}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-600">Booking Time</label>
                                <input
                                type="text"
                                name="bookingTime"
                                value={bookingInfo.bookingTime}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleBooking}
                                className="bg-blue-500 text-white py-2 px-4 rounded"
                            >
                                Book Now
                            </button>
                        </form>
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