import React from 'react';

const Footer = () => {
    return (
        <div className="container p-10 py-16 mt-10">
            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="">
                    <h3 className="text-gray-400 mb-8">Company</h3>
                    <ul className="footer-item">
                        <li className="hover:text-orange"><a href=""></a>About us</li>
                        <li className="hover:text-orange"><a href=""></a>Contact us</li>
                        <li className="hover:text-orange"><a href=""></a>Careers</li>
                        <li className="hover:text-orange"><a href=""></a>Press</li>
                    </ul>
                </div>

                <div className="">
                    <h3 className="text-gray-400 mb-8">Product</h3>
                    <ul className="footer-item">
                        <li className="hover:text-orange"><a href=""></a>Features</li>
                        <li className="hover:text-orange"><a href=""></a>Pricing</li>
                        <li className="hover:text-orange"><a href=""></a>News</li>
                        <li className="hover:text-orange"><a href=""></a>Help desk</li>
                        <li className="hover:text-orange"><a href=""></a>Support</li>
                    </ul>
                </div>

                <div className="">
                    <h3 className="text-gray-400 mb-8">Services</h3>
                    <ul className="footer-item">
                        <li className="hover:text-orange"><a href=""></a> Digital Marketing</li>
                        <li className="hover:text-orange"><a href=""></a>Content Writing</li>
                        <li className="hover:text-orange"><a href=""></a>SEO for Business</li>
                        <li className="hover:text-orange"><a href=""></a>UI Design</li>
                    </ul>
                </div>

                <div className="">
                    <h3 className="text-gray-400 mb-8">Newsletter</h3>
                    <div className="w-80 bg-info shadow-sm p-4 rounded-lg">
                        <h3 className="text-black font-semibold mb-5">Get monthly updates on your inbox</h3>
                        <input className="w-72  rounded-lg p-3" type="text" placeholder="Enter your email" />
                        <button className="footer-btn float-right -mt-11 mr-2 relative">Subscribe</button>
                        <p className="text-gray-400 text-sm font-medium mt-4">We won’t spam you at all!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;