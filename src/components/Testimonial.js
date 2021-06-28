import React from 'react';
import client1 from '../images/client1.png'
import client2 from '../images/client2.png'
import client3 from '../images/client3.png'

const testimonialData = [
    {
        image: client1,
        text: '“You made it so simple. My new site is so much faster and easier to work with than my old site.”',
        name: 'Alan Farmer',
        des: 'Digital Marketer'
    },
    {
        image: client2,
        text: '“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”',
        name: 'Christina Olson',
        des: 'Project Manager'
    },
    {
        image: client3,
        text: '“Must have service for all, who want to be successful Product Designer or Interaction Designer.”',
        name: 'Lewis Ingram',
        des: 'Product Designer'
    }
]

const Testimonial = () => {
    return (
        <div className="bg-info">
            <div className="container text-center mt-20 p-20">
                <h1 className="xs:text-4xl sm:text-5xl text-black font-semibold mb-8">Customers are loving it</h1>
                <p className="text-black mb-28">With lots of unique blocks, you can easily build a page<br /> without coding. Build your next website fast.</p>

                <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
                    {
                        testimonialData.map(data =>
                            <div className="text-black">
                                <img className="rounded-full m-auto" src={data.image} alt="" />
                                <h3 className="w-52 mt-6">{data.text}</h3>
                                <h3 className="text-xl mt-6 font-medium">{data.name}</h3>
                                <p className="text-sm text-gray-500">{data.des}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;