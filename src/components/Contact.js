import React from 'react';

const Contact = () => {
    return (
        <div className="bg-black py-16">
            <div className="container">
                <h1 className="xs:text-3xl sm:text-5xl text-white font-semibold mb-8 text-center">Get a demo</h1>
                <p className="mb-16 text-gray-400 text-center">With lots of unique blocks, you can easily build a page<br /> without coding. Build your next website fast.</p>

                <div className="grid grid-cols-1">
                    <div className="mx-auto">
                        <form action="">
                            <label className="text-white">Your Name</label><br />
                            <input className="xs:w-80 sm:w-96 h-12 rounded-lg p-5 mt-3 mb-3" type="text" placeholder="Type your name" /> <br />

                            <label className="text-white">Email Address</label><br />
                            <input className="xs:w-80 sm:w-96 h-12 rounded-lg p-5 mt-3 mb-3" type="text" placeholder="Enter your email" /><br />

                            <label className="text-white">Company Size</label> <br />
                            <select className="xs:w-80 sm:w-96 h-12 rounded-lg mt-3 mb-3" id="" name="">
                                <option value="Select an option">Select an option</option>
                                <option value="canada">1</option>
                                <option value="usa">2</option>
                            </select>
                            <br />

                            <label className="text-white">Approx. Budget</label><br />
                            <select className="xs:w-80 sm:w-96 h-12 rounded-lg mt-3" id="" name="">
                                <option value="Select an option">Select an option</option>
                                <option value="canada">1</option>
                                <option value="usa">2</option>
                            </select>
                            <br />
                            <button className="mt-5 contact-btn">Get a free demo</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;