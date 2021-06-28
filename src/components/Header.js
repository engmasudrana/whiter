import React, { useState } from 'react';

const Header = () => {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <nav className="fixed left-0 right-0">
            <div className={navbar ? 'navBackground' : ''}>
                <div className="container flex items-center py-5 justify-between">
                    <h1 className="text-3xl font-bold px-5">Whiter</h1>
                    <ul className="xs:hidden sm:flex items-center font-medium gap-10 cursor-pointer">
                        <li className="hover:text-orange"><a href=""></a>About us</li>
                        <li className="hover:text-orange"><a href=""></a>Services</li>
                        <li className="hover:text-orange"><a href=""></a>Pricing</li>
                        <li className="hover:text-orange"><a href=""></a>Contact</li>
                        <li className="hover:text-orange"><a href=""></a>Login</li>
                        <button className="btn">Get started</button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;