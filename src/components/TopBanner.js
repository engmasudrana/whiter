import React from 'react';
import Women from '../images/woman.png'

const TopBanner = () => {
    return (
        <div className="bg-info ">
            <div className="container">
                <div className="grid xs:grid-cols-1 md:grid-cols-2 py-20">
                    <div className="px-5">
                        <div className="mt-28">
                            <h1 className="xs:text-4xl sm:text-6xl text-black font-bold mb-10">Get started <br /> your business.</h1>
                            <p className="mb-10 text-gray-500">With lots of unique blocks, you can easily build a page <br /> without coding. Build your next website fast.</p>
                            <button className="topBtn mb-4">Create a free account</button> <br />
                            <small className="text-gray-400">No Credit Card Necessary</small>
                        </div>
                    </div>

                    <div className="">
                        <img className="w-96 m-auto mt-20" src={Women} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;