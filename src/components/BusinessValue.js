import React from 'react';
import BImg from '../images/business.png'

const BusinessValue = () => {
    return (
        <div className="container mt-28 xs:px-5 sm:px-16">
            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-40">
                <div className="">
                    <h1 className="w-96 mb-10 xs:text-4xl sm:text-5xl text-black font-semibold">We create value to your business</h1>
                    <p className="text-black w-80 mb-20">With lots of unique blocks, you can easily build a page without coding. Build your next website within few minutes.</p>

                    <div className="flex">
                        <div className="bg-primary w-12 h-12 mt-2 text-center p-2 rounded-lg">
                            <h3 className="text-2xl text-white font-semibold">1</h3>
                        </div>
                        <div className="xs:ml-5 sm:ml-10">
                            <h1 className="text-2xl text-black font-semibold mb-4">User centered design</h1>
                            <p className="text-black w-80">With lots of unique blocks, you can easily build a page without coding. </p>
                        </div>
                    </div>

                    <div className="flex mt-10">
                        <div className="bg-orange w-12 h-12 mt-2 text-center p-2 rounded-lg">
                            <h3 className="text-2xl text-white font-semibold">2</h3>
                        </div>
                        <div className="xs:ml-5 sm:ml-10">
                            <h1 className="text-2xl text-black font-semibold mb-4">Get latest updates</h1>
                            <p className="text-black w-80">With lots of unique blocks, you can easily build a page without coding.</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <img className="w-96" src={BImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BusinessValue;