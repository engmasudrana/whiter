import React from 'react';
import Target from '../images/Target.png'
import Money from '../images/Money.png'
import Bitmap from '../images/Bitmap.png'

const serviceData = [
    {
        icon: Target,
        title: 'User centered design',
        des: 'With lots of unique blocks, you can easily build a page without coding. Build your next website within few minutes.'
    },
    {
        icon: Money,
        title: 'Earn extra money',
        des: 'With lots of unique blocks, you can easily build a page without coding. Build your next website within few minutes.'
    },
    {
        icon: Bitmap,
        title: 'Launch your service',
        des: 'With lots of unique blocks, you can easily build a page without coding. Build your next website within few minutes.'
    }
]

const Service = () => {
    return (
        <div className="container xs:mt-20 md:mt-36">
            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    serviceData.map(data =>
                        <div className="">
                            <img className="h-20" src={data.icon} alt="service icon" />
                            <h3 className="text-2xl text-black font-medium mb-6 mt-10">{data.title}</h3>
                            <p className="text-gray-400 w-80">{data.des}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Service;