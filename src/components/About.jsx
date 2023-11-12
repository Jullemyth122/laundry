import React from 'react';

const About = () => {
    return (
        <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-28">
            <div className="container mx-auto text-center mb-8">
                <h1 className="text-3xl font-semibold">About Us</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-0">
                <div className="relative group">
                    <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg mb-4 relative shadow-lg">
                        <img
                            src="./img/laundry.jpg"
                            alt="About Us Image"
                            className="object-cover w-full h-full transition-transform transform scale-100 group-hover:scale-105 duration-500"
                        />
                    </div>
                    <div className="text-xl font-semibold absolute bottom-0 left-0 bg-white p-2 rounded-tl-lg">
                        Image 1
                    </div>
                </div>
                <div className="relative group">
                    <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg mb-4 relative shadow-lg">
                        <img
                            src="./img/laundry2.jpg"
                            alt="About Us Image"
                            className="object-cover w-full h-full transition-transform transform scale-100 group-hover:scale-105 duration-500"
                        />
                    </div>
                    <div className="text-xl font-semibold absolute bottom-0 left-0 bg-white p-2 rounded-tl-lg">
                        Image 2
                    </div>
                </div>
                <div className="relative group">
                    <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg mb-4 relative shadow-lg">
                        <img
                            src="./img/laundry3.jpg"
                            alt="About Us Image"
                            className="object-cover w-full h-full transition-transform transform scale-100 group-hover:scale-105 duration-500"
                        />
                    </div>
                    <div className="text-xl font-semibold absolute bottom-0 left-0 bg-white p-2 rounded-tl-lg">
                        Image 3
                    </div>
                </div>
            </div>
            <div className="container mx-auto text-center mt-8 px-4 md:px-0">
                <p className="text-xl">
                    Laundry day is a necessity for every household, but it can be such a huge time-sink.
                </p>
                <p className="text-xl">
                    We pick up your dirty clothing from the location of your choice and get it washed at a professional laundromat or dry cleaner near you.
                </p>
            </div>
        </section>
    );
};

export default About;
