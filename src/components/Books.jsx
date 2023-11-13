import React, { useState } from 'react'

const Books = () => {

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
        <section className='books md:pt-0 pt-20'>
            <div className="book-section h-screen flex flex-col md:flex-row">
            {/* Service Selection */}
            <div className="md:w-1/2 p-4 container-book">
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
            <div className="md:w-1/2 p-4 container-book">
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
    )
}

export default Books