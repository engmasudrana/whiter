import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

const HappyClient = () => {
    return (
        <div className="container mt-36 border-t">
            <div className="grid xs:grid-cols-1 md:grid-cols-2 mt-20">
                <div className="">
                    <h1 className="xs:text-4xl sm:text-5xl text-black font-bold mb-8">Trusted by 25,000+ happy customers.</h1>
                    <p className="text-black">With lots of unique blocks, you can easily build<br /> a page without coding. Build your next<br /> website within few minutes.</p>
                </div>

                <div className="">
                    <div className="xs:block sm:flex gap-16 xs:ml-16 sm:float-right mt-5">
                        <div className="bg-primary w-48 p-5 rounded-2xl">
                            <h1 className="text-6xl font-medium text-white mb-6">15k</h1>
                            <p className="text-white text-sm">Active users visiting us every month!</p>
                        </div>

                        <div className="bg-black w-48 p-5 rounded-2xl xs:mt-5 sm:mt-0">
                            <h1 className="text-6xl font-medium text-white mb-6">4.9</h1>
                            <div className="text-orange">
                                <FontAwesomeIcon className="" icon={faStar} />
                                <FontAwesomeIcon className="" icon={faStar} />
                                <FontAwesomeIcon className="" icon={faStar} />
                                <FontAwesomeIcon className="" icon={faStar} />
                                <FontAwesomeIcon className="" icon={faStar} />
                            </div>
                            <p className="text-white text-sm mt-2">1,938 Rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyClient;