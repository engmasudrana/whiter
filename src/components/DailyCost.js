import React from 'react';
import Man from '../images/man.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const DailyCost = () => {
    return (
        <div className="mt-36 bg-primary">
            <div className="container">
                <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-10 py-16">
                    <div className="">
                        <img className="w-96" src={Man} alt="" />
                    </div>

                    <div className="">
                        <div className=" shadow-2xl bg-white p-10 rounded-3xl mt-10">
                            <h1 className="xs:text-4xl sm:text-5xl font-semibold text-black mb-8">Get access to<br /> your daily cost.</h1>
                            <p className="xs:w-66 sm:w-80 mb-8">With lots of unique blocks, you can easily build a page without coding. Build your next website within few minutes.</p>
                            <button className="topBtn">Get started now <FontAwesomeIcon className="ml-5" icon={faArrowRight} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyCost;